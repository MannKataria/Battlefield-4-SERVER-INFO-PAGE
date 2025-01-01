import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import Navbar from "../Navbar/Navbar";
import ServerContent from "../ServerContent/ServerContent";
import Invite from "../Invite/Invite";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.server}>
        <SideMenu />
        <Navbar />
        <ServerContent />
      </div>
      <Invite />
    </div>
  );
};

export default Main;
