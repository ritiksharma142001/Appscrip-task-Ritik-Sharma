import React from "react";
import TopNavComponent from "./TopNavComponent/TopNavComponent";
import styles from "./TopNav.module.css";

const TopNav = () => {
  return (
    <div className={styles.div}>
      {" "}
      <div className={styles["div-2"]}>
        {" "}
        <TopNavComponent />
        <TopNavComponent />
        <TopNavComponent />
      </div>
    </div>
  );
};

export default TopNav;
