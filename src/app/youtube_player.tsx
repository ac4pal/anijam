'use client'
import React from "react";
import ReactPlayer from 'react-player'

import { AnimItem } from './anim_item';
export const ANIM_WIDTH = 300;
export const ANIM_HEIGHT = ANIM_WIDTH * 9 / 16;
import styles from "./page.module.css";

export interface AnimPlayerPopUpProps {
    animItem: AnimItem,
}

interface AnimPlayerProps extends AnimPlayerPopUpProps {
    onReady: () => void
}

export const AnimPlayerPopUp = React.memo((props: AnimPlayerPopUpProps) => {

    const [ready, setReady] = React.useState(false);
    const onReady = () => {
        setReady(true)
    }
    console.log(ready)

    return (

        <div style={{ position: "relative", width: ANIM_WIDTH, height: props.animItem.shorts ?  ANIM_WIDTH * 16/9 : ANIM_HEIGHT}}>
            <div className={styles.playerContent} style={{ width: ANIM_WIDTH, height:  props.animItem.shorts ? ANIM_WIDTH * 16/9 : ANIM_HEIGHT }}>
                {props.animItem.youtubeId.length > 0 &&
                    <AnimPlayer animItem={props.animItem} onReady={onReady} />
                }
            </div>
        </div>
    )

})

AnimPlayerPopUp.displayName = "Anim Player Popup"


const AnimPlayer = React.memo((props: AnimPlayerProps) => {
    return <ReactPlayer src={`https://www.youtube.com/watch?v=${props.animItem.youtubeId}`} width={ANIM_WIDTH} height={props.animItem.shorts ? ANIM_WIDTH * 16/9 : ANIM_HEIGHT} />;
})

AnimPlayer.displayName = "Anim Player"

