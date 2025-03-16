import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.137/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load planet textures
const textureLoader = new THREE.TextureLoader();
const planetTexture = textureLoader.load('https://upload.wikimedia.org/wikipedia/commons/8/87/Earth_Eastern_Hemisphere.jpg');

// Create a sphere (planet)
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: planetTexture });
const planet = new THREE.Mesh(geometry, material);
scene.add(planet);

camera.position.z = 20;

function animate() {
    requestAnimationFrame(animate);
    planet.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
