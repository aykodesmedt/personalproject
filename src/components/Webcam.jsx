import React, { Component } from "react";

import styles from "./Hand.module.css";

class Webcam extends Component {
  constructor(props) {
    super(props);
    this.state = { videosrc: `` };
  }

  componentDidMount() {
    const $video = document.getElementById(`video`);
    console.log($video);
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then(stream => {
        if (`srcObject` in $video) {
          $video.srcObject = stream;
        } else {
          $video.src = window.URL.createObjectURL(stream);
        }
      })
      .catch(err => alert(`Bummer! ${err.name}.`));
  }

  handleVideo = stream => {
    this.setState({ videosrc: window.URL.createObjectURL(stream) });
  };

  videoError = err => {
    alert(err.name);
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          {/* <p>{this.props.letter}</p> */}
          <video
            id="video"
            src={this.state.videosrc}
            autoPlay={true}
            playsInline
            // className={styles.hidden}
          ></video>
        </div>
      </>
    );
  }
}

export default Webcam;
