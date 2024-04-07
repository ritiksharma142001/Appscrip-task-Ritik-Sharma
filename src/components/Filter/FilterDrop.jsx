import React from "react";
import styles from "./FilterDrop.module.css";
import arrow from "/image/arrow-left.png";

function FilterDrop() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.div11} />
          <div className={styles.div12}>CUSTOMIZABLE</div>
        </div>

        <div className={styles.div13} />

        <div className={styles.div2}>
          <div className={styles.div10}>
            <div className={styles.div21}>IDEAL FOR</div>
            <img src={arrow} className={styles.img} />
          </div>
          <div className={styles.div0}>All</div>
        </div>
        <div className={styles.div2128} />

        <div className={styles.div3}>
          <div className={styles.div10}>
            <div className={styles.div31}>OCCASION</div>
            <img src={arrow} className={styles.img} />
          </div>
          <div className={styles.div0}>All</div>
        </div>
        <div className={styles.div33} />

        <div className={styles.div4}>
          <div className={styles.div10}>
            <div className={styles.div31}>WORK</div>
            <img src={arrow} className={styles.img} />
          </div>
          <div className={styles.div0}>All</div>
        </div>

        <div className={styles.div43} />

        <div className={styles.div5}>
          <div className={styles.div10}>
            <div className={styles.div31}>FABRIC</div>
            <img src={arrow} className={styles.img} />
          </div>
          <div className={styles.div0}>All</div>
        </div>
        <div className={styles.div53} />

        <div className={styles.div6}>
          <div className={styles.div10}>
            <div className={styles.div31}>SEGMENT</div>
            <img src={arrow} className={styles.img} />
          </div>
          <div className={styles.div0}>All</div>
        </div>
        <div className={styles.div63} />

        <div className={styles.div7}>
          <div className={styles.div10}>
            <div className={styles.div31}>SUITABLE FOR</div>
            <img src={arrow} className={styles.img} />
          </div>
          <div className={styles.div0}>All</div>
        </div>
        <div className={styles.div73} />

        <div className={styles.div8}>
          <div className={styles.div10}>
            <div className={styles.div31}>RAW MATERIALS</div>
            <img src={arrow} className={styles.img} />
          </div>
          <div className={styles.div0}>All</div>
        </div>

        <div className={styles.div83} />

        <div className={styles.div9}>
          <div className={styles.div10}>
            <div className={styles.div91}>PATTERN</div>

            <img src={arrow} className={styles.img} />
          </div>
          <div className={styles.div0}>All</div>
        </div>
        <div className={styles.div93} />
      </div>
    </>
  );
}

export default FilterDrop;
