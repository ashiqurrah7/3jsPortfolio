import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import spaceImg from './space.jpg'
import moonImg from './moon.jpg'
import normalImg from './normal.jpg'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene,camera);

const geometry = new THREE.SphereGeometry(10, 32, 32);
const material = new THREE.MeshStandardMaterial({color: 0xffde3b});
const sun = new THREE.Mesh(geometry, material);

scene.add(sun);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0,0,0);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.10,24,24);
  const material = new THREE.MeshStandardMaterial({color:0xffffff});
  const star = new THREE.Mesh(geometry, material);

  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);
}

Array(400).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load(spaceImg);
scene.background = spaceTexture;

const moonTexture = new THREE.TextureLoader().load(moonImg);
const normalTexture = new THREE.TextureLoader().load(normalImg);

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map : moonTexture,
    normalMap: normalTexture,
  })
);

const moon2 = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map : moonTexture,
    normalMap: normalTexture,
  })
);

const moon3 = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map : moonTexture,
    normalMap: normalTexture,
  })
);

const moon4 = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map : moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon, moon2);

moon.position.z = 35;
moon.position.x = -15;

moon2.position.z = -30;
moon2.position.x = -30;
moon2.position.y = 1;


function moveCamera(){
  // const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05; 
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  // camera.position.z = t * -0.01;
  // camera.position.x = t * -0.0002;
  // camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

var t=0;
function animate(){
  requestAnimationFrame(animate);

  t+=0.01;
  sun.rotation.y += 0.005;
  moon.rotation.y += 0.03;
  moon.position.x = 20*Math.cos(t);
  moon.position.z = 20*Math.sin(t);
  moon2.rotation.y += 0.03;
  moon2.position.x = 45*Math.cos(t*0.5);
  moon2.position.z = 45*Math.sin(t*0.5);
  controls.update();
  

  renderer.render(scene, camera);
}

animate();