'use client'
import styles from "./page.module.css";
import { useSearchParams } from 'next/navigation'

import React from "react";
import dynamic from "next/dynamic"
import { fetchAnimItems } from "./anim_item";
import { LoadingState } from "./loader";
import { AnimTable } from "./anim_table";
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


    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])


  const [selectedId, setSelectedId] = React.useState("");
  const animItems = React.useMemo(() => fetchAnimItems(), []);

  return (
    <main className={styles.mainClass}>
      {showTable &&
        <AnimTable animItems={animItems} selectedId={selectedId} setSelectedId={setSelectedId} />
      }


      {dimensionsSet.current === true &&

          <LazyMap selectedId={selectedId} showTable={showTable} animItems={animItems} pageWidth={width} pageHeight={height} />

      }

    </main>
  );
}

