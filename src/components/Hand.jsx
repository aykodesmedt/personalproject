import React, { Component } from "react";
import PropTypes from "prop-types";

// import styles from "./Hand.module.css";

import * as THREE from "three";
// import dracoloader

class Hand extends Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
  }

  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var canvas = document.querySelector(`#letter`);
    var renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize((window.innerWidth * 3) / 5, (window.innerHeight * 3) / 5);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;
    renderer.render(scene, camera);
    //
    // === THREE.JS EXAMPLE CODE END ===
    // // VANAF HIER EINGEN 3D INLADEN
    // // Instantiate a loader
    // var loader = new THREE.GLTFLoader();
    // // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    // var dracoLoader = new THREE.DRACOLoader();
    // dracoLoader.setDecoderPath("/examples/js/libs/draco");
    // loader.setDRACOLoader(dracoLoader);
    // // Load a glTF resource
    // loader.load(
    //   // resource URL
    //   "models/gltf/duck/duck.gltf",
    //   // called when the resource is loaded
    //   function(gltf) {
    //     scene.add(gltf.scene);
    //     gltf.animations; // Array<THREE.AnimationClip>
    //     gltf.scene; // THREE.Scene
    //     gltf.scenes; // Array<THREE.Scene>
    //     gltf.cameras; // Array<THREE.Camera>
    //     gltf.asset; // Object
    //   },
    //   // called while loading is progressing
    //   function(xhr) {
    //     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    //   },
    //   // called when loading has errors
    //   function(error) {
    //     console.log("An error happened");
    //   }
    // );
  }

  handleChange = e => {
    // console.log(e.currentTarget.value);
    this.setState({ rotation: e.currentTarget.value });
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var canvas = document.querySelector(`#letter`);
    var renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize((window.innerWidth * 3) / 5, (window.innerHeight * 3) / 5);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var cube = new THREE.Mesh(geometry, material);
    cube.rotation.y = this.state.rotation;
    scene.add(cube);
    camera.position.z = 5;
    // var animate = function() {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(scene, camera);
    // };
    // animate();
    renderer.render(scene, camera);
  };

  render() {
    return (
      <>
        <div>
          <p>{this.props.letter}</p>
          <canvas id="letter"></canvas>
          <div>
            <label htmlFor="slider">{this.state.rotation}</label>
            <input
              type="range"
              id="slider"
              name="slider"
              min="0"
              max="10"
              defaultValue="0"
              step="1"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
  }
}

Hand.propTypes = {
  letter: PropTypes.string.isRequired
};

export default Hand;
