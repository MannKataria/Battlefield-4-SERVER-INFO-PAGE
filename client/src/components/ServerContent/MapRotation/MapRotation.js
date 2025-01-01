import React from "react";
import dawnbreaker from "../../../assets/maps/dawnbreaker.png";
import propaganda from "../../../assets/maps/propaganda.png";
import golmud from "../../../assets/maps/golmudRailway.png";
import lancang from "../../../assets/maps/lancangDam.png";
import locker from "../../../assets/maps/operationLocker.png";
import shanghai from "../../../assets/maps/shanghai.png";
import styles from "./MapRotation.module.css";

const MapRotation = () => {
  const maps = [
    {
      src: dawnbreaker,
      mode: "conquest large",
      name: "dawnbreaker",
    },
    {
      src: propaganda,
      mode: "conquest large",
      name: "propaganda",
    },
    {
      src: locker,
      mode: "conquest large",
      name: "operation locker",
    },
    {
      src: lancang,
      mode: "conquest large",
      name: "lancang dam",
    },
    {
      src: shanghai,
      mode: "conquest large",
      name: "siege of shanghai",
    },
    {
      src: golmud,
      mode: "conquest large",
      name: "golmud railway",
    },
    {
      src: propaganda,
      mode: "conquest large",
      name: "propaganda",
    },
    {
      src: shanghai,
      mode: "conquest large",
      name: "siege of shanghai",
    },
    {
      src: dawnbreaker,
      mode: "conquest large",
      name: "dawnbreaker",
    },
    {
      src: propaganda,
      mode: "conquest large",
      name: "propaganda",
    },
    {
      src: locker,
      mode: "conquest large",
      name: "operation locker",
    },
    {
      src: lancang,
      mode: "conquest large",
      name: "lancang dam",
    },
    {
      src: shanghai,
      mode: "conquest large",
      name: "siege of shanghai",
    },
    {
      src: golmud,
      mode: "conquest large",
      name: "golmud railway",
    },
    {
      src: propaganda,
      mode: "conquest large",
      name: "propaganda",
    },
    {
      src: shanghai,
      mode: "conquest large",
      name: "siege of shanghai",
    },
  ];
  return (
    <div className={styles.serverNextWrap}>
      <div className={styles.serverNextHead}>map rotation</div>
      <div className={styles.serverMapsWrap}>
        {maps.map((map) => {
          return (
            <div className={styles.serverMap}>
              <div className={styles.serverMapImgWrap}>
                <div className={styles.serverMapImgOverlay}></div>
                <img
                  src={map.src}
                  className={styles.serverMapImg}
                  loading="eager"
                  alt={map.name}
                />
              </div>
              <div className={styles.serverMapMode}>{map.mode}</div>
              <div className={styles.serverMapName}>{map.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapRotation;
