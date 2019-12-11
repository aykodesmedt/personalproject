import React, { Component } from "react";

import Menu from "../components/Menu.jsx.js.js";
import Hand from "../components/Hand.jsx.js.js";

import styles from "./Leren.module.css";
import stylesUIControls from "../styles/uiControls.module.css";

const letters = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`
];

class Leren extends Component {
  constructor(props) {
    super(props);
    this.state = { letter: `A` };
  }

  handleClickLetter(e) {
    console.log(e.currentTarget.className);
    e.currentTarget.className = `uiControls_letterButtonPressed__3eToO`;
    this.setState({
      letter: e.currentTarget.innerHTML
    });
  }

  render() {
    return (
      <>
        <Menu />
        <div className={styles.LeerGrid}>
          <div className={styles.letters}>
            {letters.map(letter => {
              return (
                <button
                  onClick={e => this.handleClickLetter(e)}
                  key={letter}
                  className={stylesUIControls.letterButton}
                >
                  {letter}
                </button>
              );
            })}
          </div>
          <div className={styles.output}>
            <Hand letter={this.state.letter} />
          </div>
        </div>
      </>
    );
  }
}

export default Leren;
