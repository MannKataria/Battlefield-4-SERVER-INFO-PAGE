import React from "react";
import ServerInfo from "./ServerInfo/ServerInfo";
import ServerStats from "./ServerStats/ServerStats";
import ServerSettings from "./ServerSettings/ServerSettings";
import styles from "./ServerContent.module.css";

const ServerContent = () => {
  return (
    <div className={styles.serverContent}>
      <ServerInfo />
      <ServerStats />
      <ServerSettings />
      {/* Map Rotation */}
    </div>
  );
};

export default ServerContent;
