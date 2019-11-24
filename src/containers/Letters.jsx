import React, { Component } from "react";
import Menu from "../components/Menu.jsx";

import Webcam from "../components/Webcam.jsx";

import stylesLeren from "./Leren.module.css";
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

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = { letter: `A`, toggleShow: false };
  }

  handleClickLetter(e) {
    console.log(e);
    this.setState({
      letter: e
    });
    if (this.state.toggleShow === true) {
      this.setState(state => ({
        toggleShow: !state.toggleShow
      }));
    }
  }

  toggleShow() {
    this.setState(state => ({
      toggleShow: !state.toggleShow
    }));
  }

  render() {
    const toggle = this.state.toggleShow;
    if (toggle) {
      return (
        <>
          <Menu />
          <div className={stylesLeren.LeerGrid}>
            <div className={stylesLeren.letters}>
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
            <div>
              <img
                src={`./assets/img/` + this.state.letter + `.png`}
                alt={this.state.letter}
              />
              <button onClick={() => this.toggleShow()}>Hide</button>
              <Webcam letter={this.state.letter} />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Menu />
          <div className={stylesLeren.LeerGrid}>
            <div className={stylesLeren.letters}>
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
            <div>
              <button onClick={() => this.toggleShow()}>Show</button>
              <Webcam letter={this.state.letter} />
            </div>
          </div>
        </>
      );
    }
  }
}

export default Letters;
