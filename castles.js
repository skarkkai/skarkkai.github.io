//const model = "https://skarkkai.github.io/vega3000.glb";
const model = "2CylinderEngine.glb";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new THREE.GLTFLoader();
console.log("about to load", model)
let obj;
loader.load(model, function ( gltf ) {
  obj = gltf.scene.children[0];
  scene.add(obj);
  console.log("added", obj)
}, undefined, function ( error ) {
  console.error("failed loading", model, error);
} );

camera.position.z = 1;

/*
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};
animate();
*/

renderer.render( scene, camera );
