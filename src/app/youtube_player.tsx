'use client'
import React from "react";
import ReactPlayer from 'react-player'

import { AnimItem } from './anim_item';
import { LoadingState } from './loader';
export const ANIM_WIDTH = 280;
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

    return (

        <div style={{ position: "relative", width: ANIM_WIDTH, height: ANIM_HEIGHT }}>
            <div className={styles.playerOverlay}>
                <div className={styles.title}>{props.animItem.title}</div>
                 <div className={styles.author}>{props.animItem.author}</div>
            </div>
            <div className={styles.playerContent} style={{ width: ANIM_WIDTH, height: ANIM_HEIGHT }}>
                {!ready &&
                    <LoadingState fullScreen={false} />
                }
                <AnimPlayer animItem={props.animItem} onReady={onReady} />
            </div>
        </div>
    )

})

AnimPlayerPopUp.displayName = "Anim Player Popup"

const AnimPlayer = React.memo((props: AnimPlayerProps) => {
    return <ReactPlayer src={`https://www.youtube.com/watch?v=${props.animItem.youtubeId}`} width={ANIM_WIDTH} height={ANIM_HEIGHT} />;
})

AnimPlayer.displayName = "Anim Player"

