import styles from "./page.module.css";
import React from "react";


export const LoadingState = React.memo(({fullScreen} : {fullScreen: boolean}) => {
  return <div className={fullScreen ? styles.loaderFullWidth : styles.loaderSmall}>
    <img className={styles.pulseImage} width={200} height={101} src="/anijam.avif" alt="loading" />
  </div>
})

LoadingState.displayName = "Anim Player Loading state"