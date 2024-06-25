import * as THREE from "three";
import { IObjectProps } from "../types.ts";
import useGltf from "../hooks/useGltf.ts";

const Model1 =(props: IObjectProps) => {
  const { scene} = props;
const modelUrl ='models/FlightHelmet/glTF/FlightHelmet.gltf'
  const scale = new THREE.Vector3(10, 10, 10)
useGltf(modelUrl, scene, scale)
  return null;
};

export default Model1;
