import * as THREE from 'three';


const geometry = new THREE.CylinderGeometry( 20, 20, 10,32 );//大小
const material = new THREE.MeshBasicMaterial( {
    color: 0x00ff00 } );// 蓝色
const cylinder = new THREE.Mesh( geometry, material );

// cylinder.rotatey(-Math.PI / 2);
cylinder.position.set(1,1, 1);

cylinder.castShadow = true;
export default cylinder;


