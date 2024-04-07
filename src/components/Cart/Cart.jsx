import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import FilterDrop from "../Filter/FilterDrop";
import heart from "/image/heart.png"

function Cart({ showFilterDrop }) {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.c}>
      <div className={styles.cartContainer}>
        <div className={styles.filterDropContainer}>
          {showFilterDrop && <FilterDrop />}
        </div>
        <div className={styles.productContainer}>
          <div className={styles.container}>
            {imageData.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.imageContainer}>
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.subtitle}>
                    <span
                      style={{
                        color: "#888792",
                        font: "Simplon Norm",
                        weight: "400",
                        size: "12px",
                        lineHeight: "16.8px",
                        textDecoration: "underline",
                      }}
                    >
                      Sign in
                    </span>
                    <span
                      style={{
                        color: "#888792",
                        font: "Simplon Norm",
                        weight: "400",
                        size: "12px",
                        lineHeight: "16.8px",
                      }}
                    >
                      {" "}
                      or Create an account to see pricing
                    </span>
                    <img
                      src={heart}
                      alt="Additional Image"
                      className={styles.img2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
