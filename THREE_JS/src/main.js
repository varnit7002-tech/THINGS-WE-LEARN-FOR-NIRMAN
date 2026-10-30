import './style.css'
import * as THREE from 'three'

// scene

const scene = new THREE.Scene();

//3d object - mesh

//geometry

const geometry = new THREE.BoxGeometry(1,1,1)

//material

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const cube = new THREE.Mesh(geometry,material);

scene.add(cube);

//camera

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

// renderer

const canvas = document.querySelector('#webgl');

const renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(window.innerWidth,window.innerHeight)

renderer.render(scene,camera);