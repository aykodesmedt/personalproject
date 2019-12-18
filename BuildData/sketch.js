const letters = [
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
  d1X,
  d1Y,
  d1Z,
  w1X,
  w1Y,
  w1Z,
  m1X,
  m1Y,
  m1Z,
  r1X,
  r1Y,
  r1Z,
  p1X,
  p1Y,
  p1Z,
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
  p3Z,
  d4X,
  d4Y,
  d4Z,
  w4X,
  w4Y,
  w4Z,
  m4X,
  m4Y,
  m4Z,
  r4X,
  r4Y,
  r4Z,
  p4X,
  p4Y,
  p4Z,
  dDir1,
  dDir2,
  wDir1,
  wDir2,
  mDir1,
  mDir2,
  rDir1,
  rDir2,
  pDir1,
  pDir2,
  arm0X,
  arm0Z,
  arm1X,
  arm1Z,
  arm2X,
  arm2Z,
  handDir1,
  handDir2,
  palmPosX,
  palmPosY,
  palmPosZ,
  sphereX,
  sphereY,
  sphereZ;

let database = { letterData: [] };
let label;
let interval;

function setup() {
  const controller = new Leap.Controller({
    enableGestures: true,
    frameEventName: `animationFrame`
  });

  controller.on("frame", function(frame) {
    const interactionBox = frame.interactionBox;

    if (frame.hands.length > 0) {
      // console.log("leap running");

      const sphereCenter = interactionBox.normalizePoint(
        frame.hands[0].sphereCenter,
        true
      );
      sphereX = sphereCenter[0];
      sphereY = sphereCenter[1];
      sphereZ = sphereCenter[2];

      const palmPosition = interactionBox.normalizePoint(
        frame.hands[0].palmPosition,
        true
      );
      palmPosX = palmPosition[0];
      palmPosY = palmPosition[1];
      palmPosZ = palmPosition[2];

      const handDirection = interactionBox.normalizePoint(
        frame.hands[0].direction,
        true
      );
      handDir1 = handDirection[0];
      handDir2 = handDirection[2];

      const armBasis0 = interactionBox.normalizePoint(
        frame.hands[0].arm.basis[0],
        true
      );
      arm0X = armBasis0[0];
      arm0Z = armBasis0[2];
      const armBasis1 = interactionBox.normalizePoint(
        frame.hands[0].arm.basis[1],
        true
      );
      arm1X = armBasis1[0];
      arm1Z = armBasis1[2];
      const armBasis2 = interactionBox.normalizePoint(
        frame.hands[0].arm.basis[2],
        true
      );
      arm2X = armBasis2[0];
      arm2Z = armBasis2[2];

      for (i = 0; i < 5; i++) {
        switch (frame.fingers[i].type) {
          case 0:
            const dDir = interactionBox.normalizePoint(
              frame.fingers[i].direction,
              true
            );
            dDir1 = dDir[0];
            dDir2 = dDir[2];
            const d = interactionBox.normalizePoint(
              frame.fingers[i].positions[0],
              true
            );
            dX = d[0];
            dY = d[1];
            dZ = d[2];
            const d1 = interactionBox.normalizePoint(
              frame.fingers[i].positions[1],
              true
            );
            d1X = d1[0];
            d1Y = d1[1];
            d1Z = d1[2];
            const d2 = interactionBox.normalizePoint(
              frame.fingers[i].positions[2],
              true
            );
            d2X = d2[0];
            d2Y = d2[1];
            d2Z = d2[2];
            const d3 = interactionBox.normalizePoint(
              frame.fingers[i].positions[3],
              true
            );
            d3X = d3[0];
            d3Y = d3[1];
            d3Z = d3[2];
            const d4 = interactionBox.normalizePoint(
              frame.fingers[i].positions[4],
              true
            );
            d4X = d4[0];
            d4Y = d4[1];
            d4Z = d4[2];
            break;
          case 1:
            const wDir = interactionBox.normalizePoint(
              frame.fingers[i].direction,
              true
            );
            wDir1 = wDir[0];
            wDir2 = wDir[2];
            const w = interactionBox.normalizePoint(
              frame.fingers[i].positions[0],
              true
            );
            wX = w[0];
            wY = w[1];
            wZ = w[2];
            const w1 = interactionBox.normalizePoint(
              frame.fingers[i].positions[1],
              true
            );
            w1X = w1[0];
            w1Y = w1[1];
            w1Z = w1[2];
            const w2 = interactionBox.normalizePoint(
              frame.fingers[i].positions[2],
              true
            );
            w2X = w2[0];
            w2Y = w2[1];
            w2Z = w2[2];
            const w3 = interactionBox.normalizePoint(
              frame.fingers[i].positions[3],
              true
            );
            w3X = w3[0];
            w3Y = w3[1];
            w3Z = w3[2];
            const w4 = interactionBox.normalizePoint(
              frame.fingers[i].positions[4],
              true
            );
            w4X = w4[0];
            w4Y = w4[1];
            w4Z = w4[2];
            break;
          case 2:
            const mDir = interactionBox.normalizePoint(
              frame.fingers[i].direction,
              true
            );
            mDir1 = mDir[0];
            mDir2 = mDir[2];
            const m = interactionBox.normalizePoint(
              frame.fingers[i].positions[0],
              true
            );
            mX = m[0];
            mY = m[1];
            mZ = m[2];
            const m1 = interactionBox.normalizePoint(
              frame.fingers[i].positions[1],
              true
            );
            m1X = m1[0];
            m1Y = m1[1];
            m1Z = m1[2];
            const m2 = interactionBox.normalizePoint(
              frame.fingers[i].positions[2],
              true
            );
            m2X = m2[0];
            m2Y = m2[1];
            m2Z = m2[2];
            const m3 = interactionBox.normalizePoint(
              frame.fingers[i].positions[3],
              true
            );
            m3X = m3[0];
            m3Y = m3[1];
            m3Z = m3[2];
            const m4 = interactionBox.normalizePoint(
              frame.fingers[i].positions[4],
              true
            );
            m4X = m4[0];
            m4Y = m4[1];
            m4Z = m4[2];
            break;
          case 3:
            const rDir = interactionBox.normalizePoint(
              frame.fingers[i].direction,
              true
            );
            rDir1 = rDir[0];
            rDir2 = rDir[2];
            const r = interactionBox.normalizePoint(
              frame.fingers[i].positions[0],
              true
            );
            rX = r[0];
            rY = r[1];
            rZ = r[2];
            const r1 = interactionBox.normalizePoint(
              frame.fingers[i].positions[1],
              true
            );
            r1X = r1[0];
            r1Y = r1[1];
            r1Z = r1[2];
            const r2 = interactionBox.normalizePoint(
              frame.fingers[i].positions[2],
              true
            );
            r2X = r2[0];
            r2Y = r2[1];
            r2Z = r2[2];
            const r3 = interactionBox.normalizePoint(
              frame.fingers[i].positions[3],
              true
            );
            r3X = r3[0];
            r3Y = r3[1];
            r3Z = r3[2];
            const r4 = interactionBox.normalizePoint(
              frame.fingers[i].positions[4],
              true
            );
            r4X = r4[0];
            r4Y = r4[1];
            r4Z = r4[2];
            break;
          case 4:
            const pDir = interactionBox.normalizePoint(
              frame.fingers[i].direction,
              true
            );
            pDir1 = pDir[0];
            pDir2 = pDir[2];
            const p = interactionBox.normalizePoint(
              frame.fingers[i].positions[0],
              true
            );
            pX = p[0];
            pY = p[1];
            pZ = p[2];
            const p1 = interactionBox.normalizePoint(
              frame.fingers[i].positions[1],
              true
            );
            p1X = p1[0];
            p1Y = p1[1];
            p1Z = p1[2];
            const p2 = interactionBox.normalizePoint(
              frame.fingers[i].positions[2],
              true
            );
            p2X = p2[0];
            p2Y = p2[1];
            p2Z = p2[2];
            const p3 = interactionBox.normalizePoint(
              frame.fingers[i].positions[3],
              true
            );
            p3X = p3[0];
            p3Y = p3[1];
            p3Z = p3[2];
            const p4 = interactionBox.normalizePoint(
              frame.fingers[i].positions[4],
              true
            );
            p4X = p4[0];
            p4Y = p4[1];
            p4Z = p4[2];
            break;
        }
      }
    }
  });

  controller.connect();

  let buttons = [];
  letters.forEach(letter => {
    buttons.push(createButton(letter));
  });

  const stopButton = createButton("stop");
  stopButton.mousePressed(stopInterval);

  buttons.forEach(button => {
    button.mousePressed(looping);
  });

  createButton("Download json").mousePressed(downloadData);
}

function stopInterval() {
  clearInterval(interval);
}

function looping() {
  interval = setInterval(() => {
    label = this.html();
    sendData();
  }, 1);
}

function sendData() {
  // console.log(this);
  var letterDatabase = database.letterData;
  var data = {
    dX: dX,
    dY: dY,
    dZ: dZ,
    wX: wX,
    wY: wY,
    wZ: wZ,
    mX: mX,
    mY: mY,
    mZ: mZ,
    rX: rX,
    rY: rY,
    rZ: rZ,
    pX: pX,
    pY: pY,
    pZ: pZ,
    d1X: d1X,
    d1Y: d1Y,
    d1Z: d1Z,
    w1X: w1X,
    w1Y: w1Y,
    w1Z: w1Z,
    m1X: m1X,
    m1Y: m1Y,
    m1Z: m1Z,
    r1X: r1X,
    r1Y: r1Y,
    r1Z: r1Z,
    p1X: p1X,
    p1Y: p1Y,
    p1Z: p1Z,
    d2X: d2X,
    d2Y: d2Y,
    d2Z: d2Z,
    w2X: w2X,
    w2Y: w2Y,
    w2Z: w2Z,
    m2X: m2X,
    m2Y: m2Y,
    m2Z: m2Z,
    r2X: r2X,
    r2Y: r2Y,
    r2Z: r2Z,
    p2X: p2X,
    p2Y: p2Y,
    p2Z: p2Z,
    d3X: d3X,
    d3Y: d3Y,
    d3Z: d3Z,
    w3X: w3X,
    w3Y: w3Y,
    w3Z: w3Z,
    m3X: m3X,
    m3Y: m3Y,
    m3Z: m3Z,
    r3X: r3X,
    r3Y: r3Y,
    r3Z: r3Z,
    p3X: p3X,
    p3Y: p3Y,
    p3Z: p3Z,
    d4X: d4X,
    d4Y: d4Y,
    d4Z: d4Z,
    w4X: w4X,
    w4Y: w4Y,
    w4Z: w4Z,
    m4X: m4X,
    m4Y: m4Y,
    m4Z: m4Z,
    r4X: r4X,
    r4Y: r4Y,
    r4Z: r4Z,
    p4X: p4X,
    p4Y: p4Y,
    p4Z: p4Z,
    dDir1: dDir1,
    dDir2: dDir2,
    wDir1: wDir1,
    wDir2: wDir2,
    mDir1: mDir1,
    mDir2: mDir2,
    rDir1: rDir1,
    rDir2: rDir2,
    pDir1: pDir1,
    pDir2: pDir2,
    arm0X: arm0X,
    arm0Z: arm0Z,
    arm1X: arm1X,
    arm1Z: arm1Z,
    arm2X: arm2X,
    arm2Z: arm2Z,
    handDir1: handDir1,
    handDir2: handDir2,
    palmPosX: palmPosX,
    palmPosY: palmPosY,
    palmPosZ: palmPosZ,
    sphereX: sphereX,
    sphereY: sphereY,
    sphereZ: sphereZ,
    label: label
  };

  letterDatabase.push(data);
  console.log(letterDatabase.length);
  return letterDatabase;
}

function downloadData() {
  console.log(database);
  saveJSON(database, "letterData.json");
}
