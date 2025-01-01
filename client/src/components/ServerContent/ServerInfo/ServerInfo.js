import React from "react";
import styles from "./ServerInfo.module.css";
import flag from "../../../assets/serverContent/serverFlag.svg";
import favBlack from "../../../assets/serverContent/serverFavBlack.svg";
import favWhite from "../../../assets/serverContent/serverFavWhite.svg";

const ServerInfo = () => {
  return (
    <>
      <div className={styles.serverInfoWrap}>
        <div className={styles.serverName}>! RC3-BASEMAPS</div>
        <div className={styles.serverInfo}>
          <img
            src={flag}
            className={styles.serverFlag}
            loading="lazy"
            alt="server flag"
          />
          <div className={styles.serverMode}>conquest large</div>
          <div className={styles.serverInfoLine}>-</div>
          <div className={styles.serverGame}>Lancang Dam</div>
          <div className={styles.serverInfoLine}>-</div>
          <div className={styles.serverPreset}>Custom</div>
          <div className={styles.serverInfoLine}>-</div>
          <div className={styles.serverNoHz}>60</div>
          <div className={styles.serverHz}>hz</div>
        </div>
        <div className={styles.serverDesc}>
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d
        </div>
      </div>
      <div className={styles.serverBtns}>
        <div className={styles.serverBtn}>
          <div className={styles.serverBtnText}>join</div>
        </div>
        <div className={styles.serverBtn}>
          <div className={styles.serverBtnText}>spectate</div>
        </div>
        <div className={styles.serverBtn}>
          <div className={styles.serverBtnText}>join as commander</div>
        </div>
        <div className={`${styles.serverBtn} ${styles.serverBtnFav}`}>
          <img
            src={favBlack}
            className={`${styles.serverFav} ${styles.serverFavBlack}`}
            loading="lazy"
            alt="favourite black"
          />
          <img
            src={favWhite}
            className={`${styles.serverFav} ${styles.serverFavWhite}`}
            loading="lazy"
            alt="favourite white"
          />
          <div className={styles.serverBtnText}>13672</div>
        </div>
      </div>
    </>
  );
};

export default ServerInfo;
