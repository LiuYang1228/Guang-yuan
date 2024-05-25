import *as THREE from 'three';

const geometry=new THREE.PlaneGeometry(5000,5000);
const material = new THREE.MeshLambertMaterial({
        color:0xfffff0,
    });
const mesh=new THREE.Mesh(geometry,material);
mesh.rotateX(-Math.PI/2)
mesh.position.set(0,-40,0)

mesh.receiveShadow = true;
export default mesh;