import React, { Component } from "react";
import WoordHulp from "../components/WoordHulp";

import Menu from "../components/Menu.jsx.js.js";

import stylesLayout from "../styles/layout.module.css";
import styles from "./EigenWoord.module.css";
import TensorFlowTest from "../components/TensorFlowTest.jsx.js.js";

class EigenWoord extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ``, letters: [] };
  }

  handleChange(e) {
    this.setState({ value: e, letters: e.toUpperCase().split(``) });
  }

  handleSubmit(e) {
    // console.log(`input:` + this.state.value);
    // e.preventDefault();
  }

  render() {
    const autoFocus = true;
    console.log(this.state.letters);
    return (
      <>
        <Menu />
        {/* <h2>Spel hier je eigen naam!</h2> */}
        <div className={stylesLayout.centerWidth}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <label htmlFor="gekozenWoord" className={styles.label}>
              Je naam
            </label>
            <input
              id="gekozenWoord"
              type="text"
              value={this.state.value}
              onChange={e => this.handleChange(e.currentTarget.value)}
              className={styles.input}
              autoFocus={autoFocus}
              // maxLength="10"
            />

            {/* <input type="submit" value="Submit" /> */}
          </form>
          <div className={stylesLayout.rowGrid}>
            <WoordHulp letters={this.state.letters} />
          </div>
        </div>
        <TensorFlowTest />
      </>
    );
  }
}

export default EigenWoord;
