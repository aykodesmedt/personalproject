import React from "react";
import { Route, NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

import LerenSVG from "./LerenSVG.jsx";
import LettersSVG from "./LettersSVG.jsx";
import WoordenSVG from "./WoordenSVG.jsx";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <NavLink to="/" className={styles.title}>
          Leer Vlaamse Gebarentaal
        </NavLink>
        <div className={styles.navigatie}>
          <NavLink to="/Leren" activeClassName={styles.active}>
            <Route
              path="/Leren"
              children={({ match }) => (
                <LerenSVG
                  width="26"
                  height="33"
                  color={match ? `kleur` : `wit`}
                />
              )}
            />
            <p>Leren</p>
          </NavLink>
          <NavLink to="/Letters" activeClassName={styles.active}>
            <Route
              path="/Letters"
              children={({ match }) => (
                <LettersSVG
                  width="33"
                  height="33"
                  color={match ? `kleur` : `wit`}
                />
              )}
            />
            <p>Letters</p>
          </NavLink>
          <NavLink to="/Woorden" activeClassName={styles.active}>
            <Route
              path="/Woorden"
              children={({ match }) => (
                <WoordenSVG
                  width="31"
                  height="32"
                  color={match ? `kleur` : `wit`}
                />
              )}
            />
            <p>Woorden</p>
          </NavLink>
          <NavLink to="/eigenWoord" className={styles.eigenWoordButton}>
            <span>Eigen woord</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
