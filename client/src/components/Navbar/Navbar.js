import React from "react";
import styles from "./Navbar.module.css";
import back from "../../assets/navbar/back.svg";

const Navbar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.currentPath}>
          <a
            href="https://battlefield-4-webflow-rebuild.webflow.io/server-browser"
            className={styles.backWrapper}
          >
            <img src={back} loading="lazy" className={styles.back} alt="back" />
          </a>
          <a
            href="http://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-multiplayer"
            className={styles.multiplayer}
          >
            multiplayer
          </a>
          <div className={styles.bar}>/</div>
          <a
            href="https://battlefield-4-webflow-rebuild.webflow.io/server-browser"
            className={styles.serverBrowser}
          >
            server Browser
          </a>
          <div className={styles.bar}>/</div>
        </div>
        <div className={styles.currentTab}>server info</div>
      </div>
      <div className={styles.nextOverlay}></div>
    </>
  );
};

export default Navbar;
