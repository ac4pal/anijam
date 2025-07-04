'use client'
import React from "react";
import dynamic from "next/dynamic"
import { animItems } from "./anim_item";
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
    if (!dimensionsSet.current && window.innerWidth > 0) {
      console.log("Set width")
      dimensionsSet.current = true;
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, [])



  console.log("render page")

  return (
    <main>
      {dimensionsSet.current === true &&
        <LazyMap animItems={animItems} pageWidth={width} pageHeight={height} />
      }
    </main>
  );
}

