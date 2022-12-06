import React from "react";
import { landing } from "../../utils/data";
import Image from "next/image";
import styles from "../../styles/slider.module.css";

const LogoScroll = () => {
  const { logos } = landing;
  return (
    <section className={styles.slider_area}>
      <div className={`items-center ${styles.wrapper}`}>
        {logos.map((logo) => (
          <div key={logo.id} className={styles.item}>
            <img src={logo.image} alt={logo.alt} className="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoScroll;
