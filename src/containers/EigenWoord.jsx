import React, { Component } from "react";
import WoordHulp from "../components/WoordHulp";

import Menu from "../components/Menu.jsx";

import stylesLayout from "../styles/layout.module.css";

class EigenWoord extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ``, letters: [] };
  }

  handleChange(e) {
    this.setState({ value: e, letters: e.split(``) });
  }

  handleSubmit(e) {
    // console.log(`input:` + this.state.value);
    // e.preventDefault();
  }

  render() {
    return (
      <>
        <Menu />
        <div className={stylesLayout.centerWidth}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="gekozenWoord">
              Woord:
              <input
                type="text"
                value={this.state.value}
                onChange={e => this.handleChange(e.currentTarget.value)}
              />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
          <WoordHulp letters={this.state.letters} />
        </div>
      </>
    );
  }
}

export default EigenWoord;
