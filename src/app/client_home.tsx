'use client'
import styles from "./page.module.css";
import { useSearchParams } from 'next/navigation'

import React from "react";
import dynamic from "next/dynamic"
import { AnimItem, fetchAnimItems } from "./anim_item";
import { LoadingState } from "./loader";
import { AnimTable } from "./anim_table";
import SearchBar from "./search_bar";
const LazyMap = dynamic(() => import("./map"), {
  ssr: false,
  loading: () => <LoadingState fullScreen={true} />,
});;

export default function ClientHome() {

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0)

  const dimensionsSet = React.useRef(false);

  const searchParams = useSearchParams()
  const showTable = searchParams.get('table') === "true"
  const [mapLoaded, setMapLoaded] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  React.useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    if (!dimensionsSet.current && window.innerWidth > 0) {
      dimensionsSet.current = true;
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }


    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleDarkModeChange);
    window.addEventListener('resize', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleDarkModeChange);
      window.removeEventListener('resize', handleResize);
    };

  }, [])


  const [selectedItem, setSelectedItem] = React.useState<AnimItem | null>(null);
  const animItems = React.useMemo(() => fetchAnimItems(), []);

  return (
    <main className={styles.mainClass}>
      {showTable &&
        <AnimTable animItems={animItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      }


      {dimensionsSet.current === true &&
        <div className={styles.contentContainer}>
          {mapLoaded &&
            <SearchBar isMobile={width < height} items={animItems} setSelectedItem={(item: AnimItem) => { setSelectedItem(item) }} />
          }
          <LazyMap mapReady={() => { setMapLoaded(true) }} setSelectedItem={(item: AnimItem) => { setSelectedItem(item) }} selectedItem={selectedItem} showTable={showTable} animItems={animItems} pageWidth={width} pageHeight={height} isDarkMode={isDarkMode} />
        </div>
      }

    </main>
  );
}

