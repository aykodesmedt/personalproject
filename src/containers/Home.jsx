import React from "react";
import { Link } from "react-router-dom";

import LettersSVG from "../components/LettersSVG.jsx.js.js";
import LerenSVG from "../components/LerenSVG.jsx.js.js";
import WoordenSVG from "../components/WoordenSVG.jsx.js.js";

import styles from "./Home.module.css";
import stylesLayout from "../styles/layout.module.css";

const Home = () => {
  return (
    <>
      <div className={stylesLayout.center}>
        <h1 className={styles.title}>Vlaamse Gebarentaal Alfabet</h1>
        <ul className={stylesLayout.row}>
          <li className={styles.blueBg}>
            <Link to="/leren">
              <LerenSVG width="100" height="125" color="kleur" />
              <span>Leren</span>
            </Link>
          </li>
          <li className={styles.yellowBg}>
            <Link to="/letters">
              <LettersSVG width="125" height="125" color="kleur" />
              <span>Letters</span>
            </Link>
          </li>
          <li className={styles.purpleBg}>
            <Link to="/woorden">
              <WoordenSVG width="122" height="124" color="kleur" />
              <span>Woorden</span>
            </Link>
          </li>
        </ul>
        <Link to="/eigenWoord" className={styles.generateWordButton}>
          Spel je eigen naam!
        </Link>
      </div>
    </>
  );
};

export default Home;
