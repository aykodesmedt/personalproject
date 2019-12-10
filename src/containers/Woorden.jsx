import React, { Component } from "react";
import Menu from "../components/Menu.jsx";

// import Webcam from "../components/Webcam.jsx";
import WoordHulp from "../components/WoordHulp.jsx";

import stylesLeren from "./Leren.module.css";
import stylesUIControls from "./../styles/uiControls.module.css";

const woorden = [`AAP`, `BOK`, `COL`, `DUN`, `EIK`, `FAN`, `GEN`];

class Woorden extends Component {
  constructor(props) {
    super(props);
    this.state = { woord: `AAP`, letters: [`A`, `A`, `P`], toggleShow: false };
  }

  handleClickWoord(e) {
    this.setState({
      woord: e,
      letters: e.split(``)
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
          {console.log(this.state.toggleShow)}
          <Menu />
          <div className={stylesLeren.LeerGrid}>
            <div className={stylesLeren.letters}>
              {woorden.map(woord => {
                return (
                  <button
                    onClick={e =>
                      this.handleClickWoord(e.currentTarget.innerHTML)
                    }
                    key={woord}
                    className={stylesUIControls.letterButton}
                  >
                    {woord}
                  </button>
                );
              })}
            </div>
            <div className={stylesLeren.output}>
              {this.state.letters}
              {/* <Webcam letter={this.state.letter} /> */}
              <button
                onClick={() => this.toggleShow()}
                className={stylesUIControls.hulpButton}
              >
                Sluit hulp
              </button>
              <WoordHulp letters={this.state.letters} />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          {console.log(this.state.toggleShow)}
          <Menu />
          <div className={stylesLeren.LeerGrid}>
            <div className={stylesLeren.letters}>
              {woorden.map(woord => {
                return (
                  <button
                    onClick={e =>
                      this.handleClickWoord(e.currentTarget.innerHTML)
                    }
                    key={woord}
                    className={stylesUIControls.letterButton}
                  >
                    {woord}
                  </button>
                );
              })}
            </div>
            <div className={stylesLeren.output}>
              {this.state.letters}
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

export default Woorden;
