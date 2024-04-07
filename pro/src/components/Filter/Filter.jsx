import React from "react";
import styles from "./Filter.module.css";
import arrow from "/image/arrow-left.png";

function Filter({ toggleFilterDrop }) {
  return (
    <div className={styles.div}>
      <div className={styles.div9} />
      <div className={styles.div2}>
        <div className={styles.div3}>
          <div className={styles.div4}>3425 Items</div>
          <div className={styles.div5}>
            <img src={arrow} className={styles.img} />
            <div className={styles.div6} onClick={toggleFilterDrop}>
              SHOW FILTER
            </div>
          </div>
        </div>
        <div className={styles.div7}>
          <div className={styles.div8}>RECOMMENDED</div>
          <img src={arrow} className={styles.img} />
        </div>
      </div>
      <div className={styles.div9} />
    </div>
  );
}

export default Filter;
