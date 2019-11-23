import React, { Component } from "react";
import PropTypes from "prop-types";

// import * as THREE from "three";
// import dracoloader

class Hand extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // );
    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    // document.body.appendChild(renderer.domElement);
    // var geometry = new THREE.BoxGeometry(1, 1, 1);
    // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // var cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // camera.position.z = 5;
    // var animate = function() {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(scene, camera);
    // };
    // animate();
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

  render() {
    return (
      <>
        <p>{this.props.letter}</p>
      </>
    );
  }
}

Hand.propTypes = {
  letter: PropTypes.string.isRequired
};

export default Hand;
