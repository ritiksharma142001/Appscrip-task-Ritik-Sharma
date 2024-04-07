import React from "react";
import styles from "../TopNav.module.css";
import lorem from "/image/lorem.png";


const TopNavComponent = () => {
  return (
    <div className={styles["div-3"]}>
      {" "}
      
      <img
        src={lorem}
        className={styles.img}
      />
      <div className={styles["div-4"]}>Lorem ipsum dolor</div>{" "}
     
    </div>
  );
};

export default TopNavComponent;
