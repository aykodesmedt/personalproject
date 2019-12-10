import React, { Component } from "react";
import PropTypes from "prop-types";
import GLTFLoader from "three-gltf-loader";

import * as THREE from "three";

let root;

class Hand extends Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
  }

  componentDidMount() {
    var camera = new THREE.PerspectiveCamera(
      500,
      window.innerWidth / window.innerHeight,
      0.5,
      300
    );
    camera.position.z = 5;
    var canvas = document.querySelector(`#letter`);
    var renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize((window.innerWidth * 3) / 5, (window.innerHeight * 3) / 5);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(`black`);
    const gltfLoader = new GLTFLoader();
    const url = `./assets/glb/A.glb`;
    gltfLoader.load(url, gltf => {
      root = gltf.scene;
      root.scale.set(1, 1, 1);
      scene.add(root);
    });

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var cube = new THREE.Mesh(geometry, material);
    // cube.rotation.y = this.state.rotation;
    cube.rotation.y = 0.5;

    scene.add(cube);

    renderer.render(scene, camera);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    // console.log(hemiLight);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);
    const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    scene.add(hemiLightHelper);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(-1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    var d = 50;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = -0.0001;
    const dirLightHeper = new THREE.DirectionalLightHelper(dirLight, 10);
    scene.add(dirLightHeper);
  }

  // handleChange = e => {
  //   // console.log(e.currentTarget.value);
  //   this.setState({ rotation: e.currentTarget.value });
  //   var scene = new THREE.Scene();
  //   var camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   var canvas = document.querySelector(`#letter`);
  //   var renderer = new THREE.WebGLRenderer({ canvas });
  //   renderer.setSize((window.innerWidth * 3) / 5, (window.innerHeight * 3) / 5);
  //   var geometry = new THREE.BoxGeometry(1, 1, 1);
  //   var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  //   var cube = new THREE.Mesh(geometry, material);
  //   cube.rotation.y = this.state.rotation;
  //   scene.add(cube);
  //   camera.position.z = 5;
  //   // var animate = function() {
  //   //   requestAnimationFrame(animate);
  //   //   cube.rotation.x += 0.01;
  //   //   cube.rotation.y += 0.01;
  //   //   renderer.render(scene, camera);
  //   // };
  //   // animate();
  //   renderer.render(scene, camera);
  // };

  render() {
    return (
      <>
        <div>
          <p>{this.props.letter}</p>
          <canvas id="letter"></canvas>
          {/* <div>
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
          </div> */}
        </div>
      </>
    );
  }
}

Hand.propTypes = {
  letter: PropTypes.string.isRequired
};

export default Hand;
