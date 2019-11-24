import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

import LerenSVG from "./LerenSVG.jsx";
import LettersSVG from "./LettersSVG.jsx";
import WoordenSVG from "./WoordenSVG.jsx";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <NavLink to="/">Leer Vlaamse Gebarentaal</NavLink>
        <div className={styles.navigatie}>
          <NavLink to="/Leren" activeClassName={styles.active}>
            <LerenSVG width="26" height="33" color="wit" />
            <p>Leren</p>
          </NavLink>
          <NavLink to="/Letters" activeClassName={styles.active}>
            <LettersSVG width="33" height="33" color="wit" />
            <p>Letters</p>
          </NavLink>
          <NavLink to="/Woorden" activeClassName={styles.active}>
            <WoordenSVG width="31" height="32" color="wit" />
            <p>Woorden</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
