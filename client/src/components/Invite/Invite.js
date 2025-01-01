import React from "react";
import styles from "./Invite.module.css";
import squad from "../../assets/invite/squad.svg";
import joinBlack from "../../assets/invite/joinBlack.svg";
import joinDefault from "../../assets/invite/joinDefault.svg";
import online from "../../assets/invite/online.svg";
import MaryJane from "../../assets/invite/MaryJane.png";
import offline from "../../assets/invite/offline.svg";
import friend from "../../assets/invite/friend.png";

const Invite = () => {
  return (
    <div className={styles.invite}>
      <div className={styles.inviteLine}></div>

      <div className={styles.inviteSquad}>
        <div className={styles.inviteSquadWrap}>
          <img
            src={squad}
            className={styles.inviteSquadIcon}
            loading="lazy"
            alt="squad"
          />
          <div className={styles.inviteSquadHead}>squad</div>
        </div>
        <div className={styles.inviteJoinWrap}>
          <img
            src={joinBlack}
            className={`${styles.inviteJoinIcon} ${styles.joinIconBlack}`}
            loading="lazy"
            alt="join black"
          />
          <img
            src={joinDefault}
            className={`${styles.inviteJoinIcon} ${styles.joinIconDefault}`}
            loading="lazy"
            alt="join default"
          />
          <div className={styles.inviteJoinHead}>squad join</div>
        </div>
      </div>

      <div className={styles.inviteLine}></div>

      <div className={styles.inviteOnline}>
        <div className={styles.inviteOnlineWrap}>
          <img
            src={online}
            className={styles.inviteOnlineIcon}
            loading="lazy"
            alt="online icon"
          />
          <div className={styles.inviteOnlineHead}>online</div>
        </div>
        <div className={styles.inviteOnlineFriend}>
          <div className={styles.inviteFriendPicWrap}>
            <div className={styles.inviteOnlineBar}></div>
            <img
              src={MaryJane}
              className={styles.inviteFriendPic}
              loading="lazy"
              alt="MaryJane"
            />
          </div>
          <div className={styles.inviteFriendInfo}>
            <div className={styles.inviteFriendName}>MaryJane</div>
            <div className={styles.inviteFriendStatus}>Online</div>
          </div>
        </div>
      </div>

      <div className={styles.inviteLine}></div>

      <div className={styles.inviteOffline}>
        <div className={styles.inviteOfflineWrap}>
          <img
            src={offline}
            className={styles.inviteOfflineIcon}
            loading="lazy"
            alt="offline icon"
          />
          <div className={styles.inviteOfflineHead}>offline</div>
        </div>
        <div className={styles.inviteOfflineFriend}>
          <div className={styles.inviteFriendPicWrap}>
            <div className={styles.inviteOfflineBar}></div>
            <img
              src={friend}
              className={styles.inviteFriendPic}
              loading="lazy"
              alt="420"
            />
          </div>
          <div className={styles.inviteFriendInfo}>
            <div className={styles.inviteFriendName}>420</div>
            <div className={styles.inviteFriendStatus}>offline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;
