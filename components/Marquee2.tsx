import React from "react";
import clsx from "clsx";
import styles from "./css/marquee.module.css";

export default function Marquee2() {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.item, styles.item1)}></div>
      <div className={clsx(styles.item, styles.item2)}></div>
      <div className={clsx(styles.item, styles.item3)}></div>
      <div className={clsx(styles.item, styles.item4)}></div>
      <div className={clsx(styles.item, styles.item5)}></div>
      <div className={clsx(styles.item, styles.item6)}></div>
      <div className={clsx(styles.item, styles.item7)}></div>
      <div className={clsx(styles.item, styles.item8)}></div>
    </div>
  );
}
