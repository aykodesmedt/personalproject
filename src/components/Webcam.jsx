import React from "react";

import styles from "./Hand.module.css";

const Webcam = ({ letter }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <p>{letter}</p>
      </div>
    </>
  );
};

export default Webcam;
