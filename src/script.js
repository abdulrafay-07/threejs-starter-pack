import * as THREE from 'three';

// init scene
const scene = new THREE.Scene();

// add geometry and material for the cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: 'red' });

const cubeMesh = new THREE.Mesh(
   cubeGeometry,
   cubeMaterial,
);

scene.add(cubeMesh);

// init camera
const camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   30
);

// changing position
camera.position.z = 5;

// init renderer
const canvas = document.querySelector("canvas.threejs");

const renderer = new THREE.WebGLRenderer({
   canvas: canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);