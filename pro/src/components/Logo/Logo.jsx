import React from "react";
import styles from "./Logo.module.css";
import logo from "/image/Logo.png";
import search from "/image/search-normal.png";
import heart from "/image/heart.png";
import bag from "/image/shopping-bag.png";
import profile from "/image/profile.png";
import arrow from "/image/arrow-left.png";

function Logo() {
  return (
    <div className={styles.div}>
      <div className={styles["div-2"]}>
        <img src={logo} className={styles.img} />
        <div className={styles["div-3"]}>LOGO</div>
        <div className={styles["div-4"]}>
          <img loading="lazy" src={search} className={styles["img-2"]} />
          <img src={heart} className={styles["img-3"]} />
          <img src={bag} className={styles["img-4"]} />
          <img src={profile} className={styles["img-5"]} />
          <div className={styles["div-5"]}>
            <div className={styles["div-6"]}>ENG</div>
            <img src={arrow} className={styles["img-6"]} />
          </div>
        </div>
      </div>
      <div className={styles["div-7"]}>
        <div className={styles["div-8"]}>SHOP</div>
        <div className={styles["div-9"]}>SKILLS</div>
        <div className={styles["div-10"]}>STORIES</div>
        <div className={styles["div-11"]}>ABOUT</div>
        <div className={styles["div-12"]}>CONTACT US</div>
      </div>
    </div>
  );
}

export default Logo;
