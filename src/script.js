import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//cursor
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (event) => {
  cursor.x = -(event.clientX / sizes.width - 0.5);
  cursor.y = event.clientY / sizes.height - 0.5;
});

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

scene.add(camera);

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Clock
const clock = new THREE.Clock();

//Animations
const tick = () => {
  // Time
  const elapsedTime = clock.getElapsedTime();

  //Update Objects
  //   mesh.rotation.y = elapsedTime;
  //   mesh.position.x = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);

  // Update Camera
  //   camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  //   camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  //   camera.position.y = cursor.y * 3;
  //   camera.lookAt(mesh.position);

  //Update controls
  controls.update();
  //Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};
tick();
renderer.setSize(sizes.width, sizes.height);
