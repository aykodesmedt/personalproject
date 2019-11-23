import React, { Component } from "react";
import Menu from "../components/Menu.jsx";

// import Webcam from "../components/Webcam.jsx";
import WoordHulp from "../components/WoordHulp.jsx";

import stylesUIControls from "./../styles/uiControls.module.css";

const woorden = [`AAP`, `BOK`, `COL`, `DUN`, `EIK`, `FAN`, `GEN`];

class Woorden extends Component {
  constructor(props) {
    super(props);
    this.state = { woord: `AAP`, letters: [`A`, `A`, `P`], toggleShow: false };
    this.handleClickWoord = this.handleClickWoord.bind(this);
  }

  handleClickWoord(e) {
    // console.log(e.split(``));
    this.setState(state => ({
      woord: e,
      letters: e.split(``)
    }));
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
          {woorden.map(woord => {
            return (
              <button
                onClick={e => this.handleClickWoord(e.currentTarget.innerHTML)}
                key={woord}
              >
                {woord}
              </button>
            );
          })}
          <WoordHulp letters={this.state.letters} />
          <button onClick={() => this.toggleShow()}>Hide</button>
          {/* <Webcam letter={this.state.letter} /> */}
        </>
      );
    } else {
      return (
        <>
          {console.log(this.state.toggleShow)}
          <Menu />
          {woorden.map(woord => {
            return (
              <button
                onClick={e => this.handleClickWoord(e.currentTarget.innerHTML)}
                key={woord}
                className={stylesUIControls.letterButton}
              >
                {woord}
              </button>
            );
          })}
          <button onClick={() => this.toggleShow()}>Show</button>
          {/* <Webcam letter={this.state.letter} /> */}
        </>
      );
    }
  }
}

export default Woorden;
