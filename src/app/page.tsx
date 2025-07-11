'use client'
import styles from "./page.module.css";

import React from "react";
import dynamic from "next/dynamic"
import { fetchAnimItems } from "./anim_item";
import { LoadingState } from "./loader";

const LazyMap = dynamic(() => import("./map"), {
  ssr: false,
  loading: () => <LoadingState fullScreen={true} />,
});;

export default function Home() {

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0)

  const dimensionsSet = React.useRef(false);

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


  const animItems = React.useMemo(() => fetchAnimItems(), [/* your dependencies */]);

  return (
    <main className={styles.mainClass}>
      {dimensionsSet.current === true &&
        <LazyMap animItems={animItems} pageWidth={width} pageHeight={height} />
      }
    </main>
  );
}

