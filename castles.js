//const model = "https://drive.google.com/uc?export=download&id=1oXonjAwDrC8uKwL1UmzgLURN6c24APfI";
//const model = "https://github.com/skarkkai/playground/blob/master/vega3000.glb?raw=true";
const model = "https://skarkkai.github.io/vega3000.glb";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new THREE.GLTFLoader();
console.log("about to load", model)
loader.load(model, function ( gltf ) {
  scene.add( gltf.scene.children[0]);
  console.log("added", gltf.scene)
}, undefined, function ( error ) {
  console.error("failed loading", model, error);
} );

camera.position.z = 50;

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
