
import {cloneDeep} from 'lodash';
import * as THREE from "three";

export function _toScreenPosition(_obj, camera, size)
{
  const obj = cloneDeep(_obj)
    var vector = new THREE.Vector3();

    // console.log('viewport', viewport())
    // console.log('size', size)
    // return null

    var widthHalf = 0.5*size.width;
    var heightHalf = 0.5*size.height;

    obj.updateMatrixWorld();
    console.log('obj', obj)
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);
    // console.log('obj', obj)

    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;

    // console.log('X', vector.x)
    // console.log('Y', vector.y)

    return { 
        x: vector.x,
        y: vector.y
    };

};