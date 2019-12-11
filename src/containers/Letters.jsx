import React, { Component } from "react";
import Menu from "../components/Menu.jsx.js.js";

// import Webcam from "../components/Webcam.jsx";

// import styles from "./Letters.module.css";
import stylesLeren from "./Leren.module.css";
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

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: ``,
      toggleShow: false,
      classname: `uiControls_letterButton__3IvMv`
    };
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
    letters.forEach(letter => {
      if (letter === e) {
        this.setState(state => ({
          classname: `uiControls_letterButtonPressed__3eToO`
        }));
      } else {
        this.setState(state => ({
          classname: `uiControls_letterButton__3IvMv`
        }));
      }
    });
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
            <div className={stylesLeren.output}>
              <p>{this.state.letter}</p>
              {/* <Webcam letter={this.state.letter} /> */}
              <button
                onClick={() => this.toggleShow()}
                className={stylesUIControls.hulpButton}
              >
                Sluit hulp
              </button>
              <img
                src={`./assets/img/` + this.state.letter + `.png`}
                alt={this.state.letter}
              />
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
                    // className={stylesUIControls.letterButtonActive}
                    className={this.state.classname}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
            <div className={stylesLeren.output}>
              <p>{this.state.letter}</p>
              {/* <Webcam letter={this.state.letter} /> */}
              <button
                onClick={() => this.toggleShow()}
                className={stylesUIControls.hulpButton}
              >
                Open hulp
              </button>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Letters;
