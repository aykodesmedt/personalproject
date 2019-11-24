import React, { Component } from "react";

import Menu from "../components/Menu.jsx";
import Hand from "../components/Hand.jsx";

import styles from "./Leren.module.css";
import stylesUIControls from "./../styles/uiControls.module.css";

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
    this.handleClickLetter = this.handleClickLetter.bind(this);
  }

  handleClickLetter(e) {
    console.log(e);
    this.setState({
      letter: e
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
                  onClick={e =>
                    this.handleClickLetter(e.currentTarget.innerHTML)
                  }
                  key={letter}
                  className={stylesUIControls.letterButton}
                >
                  {letter}
                </button>
              );
            })}
          </div>
          <Hand letter={this.state.letter} />
        </div>
      </>
    );
  }
}

export default Leren;
