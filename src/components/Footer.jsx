import React from "react";
import styles from "./footer.module.css";
import whitelogo from "../assets/logowhite.png";

function Footer() {
  return (
    <div className={styles.footerbg}>
      <div className={`${styles.container} ${styles.footer}`}>
        <div>
          <img src={whitelogo} alt="white logo" />
          <p className={styles.fotterdesc}>
            Trafalgar provides progressive, and affordable <br /> healthcare,
            accessible on mobile and online <br /> for everyone
          </p>
          <p className={styles.footercopy}>©eBike 2021. All rights reserved</p>
        </div>

        <div className={styles.footerlink}>
          <div>
            <p className={styles.footercom}>Company</p>

            <div className={styles.footercompl}>
              <p>Product</p>
              <p>Bike Type</p>
              <p>About us</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <p className={styles.footercom}>Help</p>

            <div className={styles.footercompl}>
              <p>Help center</p>
              <p>Contact Support</p>
              <p>Instructions</p>
              <p>How it works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
