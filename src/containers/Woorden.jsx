import React, { Component } from "react";
import Menu from "../components/Menu.jsx";

// import Webcam from "../components/Webcam.jsx";
import WoordHulp from "../components/WoordHulp.jsx";

const woorden = [`AAP`, `BOK`, `COL`, `DUN`, `EIK`, `FAN`, `GEN`];

class Woorden extends Component {
  constructor(props) {
    super(props);
    this.state = { woord: `AAP`, letters: [`A`, `A`, `P`], show: false };
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
    //
  }

  render() {
    return (
      <>
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
        <button onClick={() => this.toggleShow()}></button>
        {/* <Webcam letter={this.state.letter} /> */}
      </>
    );
  }
}

export default Woorden;
