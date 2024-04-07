import React from "react";
import styles from "./Footer.module.css";
import FooterDown from "./FooterDown";
import us from "/image/us.png";
import star from "/image/Star.png";

function Footer() {
  return (
    <div className={styles.div}>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <div className={`${styles.column} ${styles.div5}`}>
            <div className={styles.div6}>Be the first to know</div>
            <div className={styles.div7}>
              Sign up for updates from mettā muse.
            </div>
            <div className={styles.div8}>
              <div className={styles.div9}>Enter your e-mail...</div>
              <div className={styles.div10}>Subscribe</div>
            </div>
          </div>
          <div className={`${styles.column2} ${styles.div11}`}>
            <div className={styles.div12}>CONTACT US</div>
            <div className={styles.div13}>+44 221 133 5360</div>
            <div className={styles.div14}>customercare@mettamuse.com</div>
            <div className={styles.div15}>Currency</div>
            <div className={styles.div16}>
              <img src={us} className={styles.img} />
              <img src={star} className={styles.img2} />
              <div className={styles.div17}>USD</div>
            </div>
            <div className={styles.div18}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </div>
          </div>
        </div>
        <div className={styles.div19} />
        <FooterDown />
        <div className={styles.div20}>
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
