import React from "react";
import ServerInfo from "./ServerInfo/ServerInfo";
import ServerStats from "./ServerStats/ServerStats";
import ServerSettings from "./ServerSettings/ServerSettings";
import MapRotation from "./MapRotation/MapRotation";
import styles from "./ServerContent.module.css";

const ServerContent = () => {
  return (
    <div className={styles.serverContent}>
      <ServerInfo />
      <ServerStats />
      <ServerSettings />
      <MapRotation />
    </div>
  );
};

export default ServerContent;
