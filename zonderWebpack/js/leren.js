import { GLTFLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/loaders/GLTFLoader.js";

let dX,
  dY,
  dZ,
  wX,
  wY,
  wZ,
  mX,
  mY,
  mZ,
  rX,
  rY,
  rZ,
  pX,
  pY,
  pZ,
  d2X,
  d2Y,
  d2Z,
  w2X,
  w2Y,
  w2Z,
  m2X,
  m2Y,
  m2Z,
  r2X,
  r2Y,
  r2Z,
  p2X,
  p2Y,
  p2Z,
  d3X,
  d3Y,
  d3Z,
  w3X,
  w3Y,
  w3Z,
  m3X,
  m3Y,
  m3Z,
  r3X,
  r3Y,
  r3Z,
  p3X,
  p3Y,
  p3Z;

const lettersLijstje = [
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

let activeLetter;

const $lettersList = document.querySelector(".letters");
const $gekozenLetter = document.querySelector("#gekozenLetter");
const canvas = document.querySelector("#canvasLeren");

const handleClickLetterButton = e => {
  document.querySelectorAll(".letterButton").forEach(button => {
    button.classList.remove("letterButtonPressed");
  });
  activeLetter = e.currentTarget.innerHTML;
  $gekozenLetter.innerHTML = activeLetter;
  e.currentTarget.classList.add("letterButtonPressed");
  canvas.classList.remove("hidden");
  loadCanvas();
};

lettersLijstje.forEach(letter => {
  const letterButton = document.createElement("button");
  letterButton.innerHTML = letter;
  letterButton.classList.add("letterButton");
  $lettersList.appendChild(letterButton);
  letterButton.addEventListener("click", handleClickLetterButton);
});

const loadCanvas = () => {
  let root;
  let objectRotation;

  canvas.width = 500;
  canvas.height = 500;
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 500;
  const aspect = 1; // the canvas default
  const near = 0.2;
  const far = 200;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 5;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#af77f4");

  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  const gltfLoader = new GLTFLoader();
  const url = "./../assets/glb/" + activeLetter + ".glb";
  gltfLoader.load(url, gltf => {
    // console.log(gltf);
    root = gltf.scene;
    // objectRotation = root.children[0].rotateZ(10);
    console.log(objectRotation);
    root.scale.set(1, 1, 1);
    // root.traverse()

    scene.add(root);
    // return objectRotation;
  });
  // console.log(root);

  // await console.log(objectRotation);

  // renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  // controls.addEventListener("change", render);
  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    renderer.render(scene, camera);
  }

  animate();
  // function render() {
  //   objectRotation += 1;
  //   renderer.render(scene, camera);

  //   window.requestAnimationFrame(render);
  // }

  // window.requestAnimationFrame(render);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 50, 0);
  scene.add(hemiLight);
  const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
  scene.add(hemiLightHelper);
  //
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.color.setHSL(0.1, 1, 0.95);
  dirLight.position.set(0.5, -1, 0.5);
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
  // scene.add(dirLightHeper);

  var vertexShader = document.getElementById("vertexShader").textContent;
  var fragmentShader = document.getElementById("fragmentShader").textContent;
  var uniforms = {
    topColor: { value: new THREE.Color(0x0077ff) },
    bottomColor: { value: new THREE.Color(0xffffff) },
    offset: { value: 33 },
    exponent: { value: 0.6 }
  };
  uniforms["topColor"].value.copy(hemiLight.color);
  // scene.fog.color.copy(uniforms["bottomColor"].value);
  var skyGeo = new THREE.SphereBufferGeometry(4000, 32, 15);
  var skyMat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.BackSide
  });
  var sky = new THREE.Mesh(skyGeo, skyMat);
  scene.add(sky);
  // loadCanvas();
};

// TENSORFLOW

// let data;
// let xs, ys;
// let model;
// let labelP;
// let lossP;

// let labelList = [`A`, `B`, `C`];
// const controller = new Leap.Controller({
//   enableGestures: true,
//   frameEventName: `animationFrame`
// });

// const handleData = data => {
//   let letters = [];
//   let labels = [];
//   for (let record of data.letterData) {
//     // normalize inputs
//     let col = [
//       record.dX,
//       record.dY,
//       record.dZ,
//       record.wX,
//       record.wY,
//       record.wZ,
//       record.mX,
//       record.mY,
//       record.mZ,
//       record.rX,
//       record.rY,
//       record.rZ,
//       record.pX,
//       record.pY,
//       record.pZ,
//       record.d3X,
//       record.d3Y,
//       record.d3Z,
//       record.w3X,
//       record.w3Y,
//       record.w3Z,
//       record.m3X,
//       record.m3Y,
//       record.m3Z,
//       record.r3X,
//       record.r3Y,
//       record.r3Z,
//       record.p3X,
//       record.p3Y,
//       record.p3Z
//     ];
//     letters.push(col);
//     labels.push(labelList.indexOf(record.label));
//   }

//   // console.log(letters);
//   xs = tf.tensor2d(letters);
//   // xs.print();
//   // console.log(xs.shape);

//   let labelsTensor = tf.tensor1d(labels, "int32");
//   // labelsTensor.print();

//   ys = tf.oneHot(labelsTensor, 3);
//   labelsTensor.dispose();

//   // xs.print();
//   // ys.print();

//   // Create model architecture
//   model = tf.sequential();

//   // create hiddenLayer, dense
//   let hidden = tf.layers.dense({
//     units: 60,
//     activation: "sigmoid",
//     inputDim: 30
//   });

//   // create outputLayer, dense
//   let output = tf.layers.dense({
//     units: 3,
//     activation: "softmax"
//   });

//   model.add(hidden);
//   model.add(output);

//   // optimizer
//   // lr = learning rate
//   const lr = 0.2;
//   const opt = tf.train.sgd(lr);

//   // compile model
//   model.compile({
//     optimizer: opt,
//     loss: "categoricalCrossentropy"
//   });

//   train().then(results => {
//     console.log(results.history.loss);
//     predictNow();
//   });
// };

// fetch("./../assets/letterDataNew3000.json")
//   .then(response => response.json())
//   .then(json => handleData(json));

// // console.log(data.entries.length);
// labelP = document.createElement("p");
// lossP = document.createElement("p");
// lossP.value = "loss: ";
// // input leapmotion zetten

// async function train() {
//   const options = {
//     epochs: 5,
//     validationSplit: 0.1,
//     shuffle: true,
//     callbacks: {
//       onTrainEnd: results => {
//         // saveModel();
//         console.log(results);
//       },
//       onBachEnd: tf.nextFrame(),
//       onEpochEnd: (num, logs) => {
//         console.log(logs);
//         lossP.innerHTML = "loss:" + logs.val_loss;
//       }
//     }
//   };
//   return await model.fit(xs, ys, options);
// }

// // async function saveModel() {
// //   return await model.save("downloads://myModel");
// // }

// const predictNow = () => {
//   console.log("predict");
//   controller.on("frame", function(frame) {
//     const interactionBox = frame.interactionBox;
//     if (frame.hands.length > 0) {
//       // console.log(frame.hands);
//       // console.log("leap running");
//       for (i = 0; i < 5; i++) {
//         switch (frame.fingers[i].type) {
//           case 0:
//             const d = interactionBox.normalizePoint(
//               frame.fingers[i].positions[0],
//               true
//             );
//             dX = d[0];
//             dY = d[1];
//             dZ = d[2];
//             const d3 = interactionBox.normalizePoint(
//               frame.fingers[i].positions[3],
//               true
//             );
//             d3X = d3[0];
//             d3Y = d3[1];
//             d3Z = d3[2];
//             break;
//           case 1:
//             const w = interactionBox.normalizePoint(
//               frame.fingers[i].positions[0],
//               true
//             );
//             wX = w[0];
//             wY = w[1];
//             wZ = w[2];
//             const w3 = interactionBox.normalizePoint(
//               frame.fingers[i].positions[3],
//               true
//             );
//             w3X = w3[0];
//             w3Y = w3[1];
//             w3Z = w3[2];
//             break;
//           case 2:
//             const m = interactionBox.normalizePoint(
//               frame.fingers[i].positions[0],
//               true
//             );
//             mX = m[0];
//             mY = m[1];
//             mZ = m[2];
//             const m3 = interactionBox.normalizePoint(
//               frame.fingers[i].positions[3],
//               true
//             );
//             m3X = m3[0];
//             m3Y = m3[1];
//             m3Z = m3[2];
//             break;
//           case 3:
//             const r = interactionBox.normalizePoint(
//               frame.fingers[i].positions[0],
//               true
//             );
//             rX = r[0];
//             rY = r[1];
//             rZ = r[2];
//             const r3 = interactionBox.normalizePoint(
//               frame.fingers[i].positions[3],
//               true
//             );
//             r3X = r3[0];
//             r3Y = r3[1];
//             r3Z = r3[2];
//             break;
//           case 4:
//             const p = interactionBox.normalizePoint(
//               frame.fingers[i].positions[0],
//               true
//             );
//             pX = p[0];
//             pY = p[1];
//             pZ = p[2];
//             const p3 = interactionBox.normalizePoint(
//               frame.fingers[i].positions[3],
//               true
//             );
//             p3X = p3[0];
//             p3Y = p3[1];
//             p3Z = p3[2];
//             break;
//         }
//       }

//       // console.log(dX);
//       tf.tidy(() => {
//         const xs = tf.tensor2d([
//           [
//             dX,
//             dY,
//             dZ,
//             wX,
//             wY,
//             wZ,
//             mX,
//             mY,
//             mZ,
//             rX,
//             rY,
//             rZ,
//             pX,
//             pY,
//             pZ,
//             d3X,
//             d3Y,
//             d3Z,
//             w3X,
//             w3Y,
//             w3Z,
//             m3X,
//             m3Y,
//             m3Z,
//             r3X,
//             r3Y,
//             r3Z,
//             p3X,
//             p3Y,
//             p3Z
//           ]
//         ]);
//         // xs.print();
//         let results = model.predict(xs);
//         let index = results.argMax(1).dataSync()[0];
//         // console.log(index);
//         let label = labelList[index];
//         labelP.html(label);
//       });
//     }
//   });
//   controller.connect();
// };
