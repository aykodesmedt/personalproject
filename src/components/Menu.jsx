import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <NavLink to="/">Leer Vlaamse Gebarentaal</NavLink>
        <div className={styles.navigatie}>
          <NavLink to="/Leren" activeClassName={styles.active}>
            Leren
          </NavLink>
          <NavLink to="/Letters" activeClassName={styles.active}>
            Letters
          </NavLink>
          <NavLink to="/Woorden" activeClassName={styles.active}>
            Woorden
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
