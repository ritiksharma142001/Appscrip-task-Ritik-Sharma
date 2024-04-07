import React from "react";
import styles from "./FooterDown.module.css";
import insta from "/image/Insta.png";
import a from "/image/a.png";
import gpay from "/image/gpay.png";
import mast from "/image/mast.png";
import pay from "/image/pay.png";
import puple from "/image/puple.png";
import apel from "/image/apel.png";
import amex from "/image/amex.png";

function FooterDown() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.column}>
          <div className={styles.div6}>
            <b>mettā muse</b>
          </div>
          <div className={styles.div7}>About Us</div>
          <div className={styles.div8}>Stories</div>
          <div className={styles.div9}>Artisans</div>
          <div className={styles.div10}>Boutiques</div>
          <div className={styles.div11}>Contact Us</div>
          <div className={styles.div12}>EU Compliances Docs</div>
        </div>
        <div className={styles.column2}>
          <div className={styles.div16}>
            <b>Quick Links</b>
          </div>
          <div className={styles.div17}>Orders & Shipping</div>
          <div className={styles.div18}>Join/Login as a Seller</div>
          <div className={styles.div19}>Payment & Pricing</div>
          <div className={styles.div20}>Return & Refunds</div>
          <div className={styles.div21}>FAQs</div>
          <div className={styles.div22}>Privacy Policy</div>
          <div className={styles.div23}>Terms & Conditions</div>
        </div>
        <div className={styles.column4}>
          <div className={styles.div27}>
            <b>Follow Us</b>
          </div>
          <div className={styles.div28}>
            <img src={insta} className={styles.img} />
            <img src={a} className={styles.img} />
          </div>
          <div className={styles.div29}>
            mettā muse{" "}
            <span style={{ textTransform: "uppercase" }}>Accepts</span>
          </div>
          <div className={styles.div30}>
            <img src={gpay} className={styles.img2} />
            <img src={mast} className={styles.img3} />
            <img src={pay} className={styles.img4} />
            <img loading="lazy" src={amex} className={styles.img5} />
            <img src={apel} className={styles.img6} />
            <img src={puple} className={styles.img7} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterDown;
