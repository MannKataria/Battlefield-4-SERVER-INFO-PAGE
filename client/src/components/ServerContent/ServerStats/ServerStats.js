import React, { useState, useEffect } from "react";
import styles from "./ServerStats.module.css";

const ServerStats = () => {
  const [serverStats, setServerStats] = useState([]);

  useEffect(() => {
    fetch("https://battlefield-4-backend.vercel.app/server/stats")
      .then((response) => response.json())
      .then((data) => setServerStats(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.serverStats}>
      <div className={styles.serverStat}>
        <div className={styles.serverStatHead}>players</div>
        <div className={styles.serverStatVal}>
          <div className={styles.serverStatInt}>
            {serverStats.playersOnline}
          </div>
          <div className={styles.serverStatLine}>/</div>
          <div className={styles.serverStatInt}>{serverStats.playersTotal}</div>
        </div>
      </div>
      <div className={styles.serverStat}>
        <div className={styles.serverStatHead}>ping</div>
        <div className={styles.serverStatVal}>
          <div className={styles.serverStatInt}>{serverStats.ping}</div>
          <div className={styles.serverPing}>ms</div>
        </div>
      </div>
      <div className={styles.serverStat}>
        <div className={styles.serverStatHead}>tickrate</div>
        <div className={styles.serverStatVal}>
          <div className={styles.serverStatInt}>{serverStats.tickrate}</div>
          <div className={styles.serverHz}>Hz</div>
        </div>
      </div>
    </div>
  );
};

export default ServerStats;
