import React from "react";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <>
      <div className={styles.sideMenu}>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv"
          className={`${styles.sideMenuGame} ${styles.bfv}`}
        >
          <div className={styles.sideMenuPopup}>
            <div className={styles.sideMenuText}>Battlefield v</div>
          </div>
        </a>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bf1"
          className={`${styles.sideMenuGame} ${styles.bf1}`}
        >
          <div className={styles.sideMenuPopup}>
            <div className={styles.sideMenuText}>Battlefield 1</div>
          </div>
        </a>
        <a
          //   href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bf4"
          href="/"
          className={`${styles.sideMenuGame} ${styles.bf4} ${styles.current}`}
        >
          <div className={styles.sideMenuPopup}>
            <div className={styles.sideMenuText}>Battlefield 4</div>
          </div>
        </a>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfh"
          className={`${styles.sideMenuGame} ${styles.bfh}`}
        >
          <div className={styles.sideMenuPopup}>
            <div className={styles.sideMenuText}>Battlefield Hardline</div>
          </div>
        </a>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-career"
          className={styles.sideMenuCareer}
        >
          <div className={styles.sideMenuPopup}>
            <div className={styles.sideMenuText}>career</div>
          </div>
        </a>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-watch"
          className={styles.sideMenuWatch}
        >
          <div className={styles.sideMenuPopup}>
            <div className={styles.sideMenuText}>watch</div>
          </div>
        </a>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-news"
          className={styles.sideMenuNews}
        >
          <div className={styles.sideMenuPopup}>
            <div className={styles.sideMenuText}>news</div>
          </div>
        </a>
        <a
          href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-help"
          className={styles.sideMenuHelp}
        >
          <div className={styles.sideMenuPopup}>
            <div className={styles.sideMenuText}>help</div>
          </div>
        </a>
      </div>
      <div className={styles.sideMenuQuit}>
        <div className={styles.sideMenuQuitPopup}>
          <div className={styles.sideMenuText}>quit</div>
        </div>
      </div>
      <div className={styles.sideMenuBar}></div>
    </>
  );
};

export default SideMenu;
