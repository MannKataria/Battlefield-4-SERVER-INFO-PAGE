import React, { useState, useEffect } from "react";
import styles from "./ServerSettings.module.css";

const ServerSettings = () => {
  //   const [serverSettings, setServerSettings] = useState([]);
  const [settings, setSettings] = useState([]);
  const [advanced, setAdvanced] = useState([]);
  const [rules, setRules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/server/settings")
      .then((response) => response.json())
      .then((data) => {
        setSettings(data.settings);
        setAdvanced(data.advanced);
        setRules(data.rules);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.serverSettingsWrap}>
      <div className={styles.serverSettings}>
        <div className={styles.serverSettingsHead}>settings</div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>region</div>
          <div className={styles.serverSettingText}>{settings.region}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>punkbaster</div>
          <div className={styles.serverSettingText}>{settings.punkbaster}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>fairfight</div>
          <div className={styles.serverSettingText}>{settings.fairfight}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>password</div>
          <div className={styles.serverSettingText}>{settings.password}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>preset</div>
          <div className={styles.serverSettingText}>{settings.preset}</div>
        </div>
      </div>
      <div className={styles.serverSettings}>
        <div className={styles.serverSettingsHead}>advanced</div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>minimap</div>
          <div className={styles.serverSettingText}>{advanced.minimap}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>
            only squad leader spawn
          </div>
          <div className={styles.serverSettingText}>
            {advanced.onlySquadLeaderSpawn}
          </div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>vehicles</div>
          <div className={styles.serverSettingText}>{advanced.vehicles}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>team balance</div>
          <div className={styles.serverSettingText}>{advanced.teamBalance}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>minimap spotting</div>
          <div className={styles.serverSettingText}>
            {advanced.minimapSpotting}
          </div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>hud</div>
          <div className={styles.serverSettingText}>{advanced.hud}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>3p vehicle cam</div>
          <div className={styles.serverSettingText}>{advanced.vehicleCam}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>regenerative health</div>
          <div className={styles.serverSettingText}>
            {advanced.regenerativeHealth}
          </div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>kill cam</div>
          <div className={styles.serverSettingText}>{advanced.killCam}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>friendly fire</div>
          <div className={styles.serverSettingText}>
            {advanced.friendlyFire}
          </div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>3d spotting</div>
          <div className={styles.serverSettingText}>{advanced.spotting}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>enemy name tags</div>
          <div className={styles.serverSettingText}>
            {advanced.enemyNameTags}
          </div>
        </div>
      </div>
      <div className={styles.serverSettings}>
        <div className={styles.serverSettingsHead}>rules</div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>tickets</div>
          <div className={`${styles.serverSettingText} ${styles.textYellow}`}>
            {rules.tickets}
          </div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>vehicle spawn delay</div>
          <div className={`${styles.serverSettingText} ${styles.textYellow}`}>
            {rules.vehicleSpawnDelay}
          </div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>bullet damage</div>
          <div className={styles.serverSettingText}>{rules.bulletDamage}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>kick after team kills</div>
          <div className={styles.serverSettingText}>
            {rules.kickAfterTeamKills}
          </div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>player health</div>
          <div className={styles.serverSettingText}>{rules.playerHealth}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>player respawn time</div>
          <div className={styles.serverSettingText}>
            {rules.playerRespawnTime}
          </div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>kick after idle</div>
          <div className={styles.serverSettingText}>{rules.kickAfterIdle}</div>
        </div>
        <div className={styles.serverSetting}>
          <div className={styles.serverSettingText}>ban after kicks</div>
          <div className={styles.serverSettingText}>{rules.banAfterKicks}</div>
        </div>
      </div>
    </div>
  );
};

export default ServerSettings;
