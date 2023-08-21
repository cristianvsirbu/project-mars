import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';


const Model = ({ modelPath }) => {

  const containerRef = useRef(null);
  const scene = useRef(new THREE.Scene()).current;
  const camera = useRef(new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)).current;
  const renderer = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true })).current;
  const object = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      function (gltf) {
          object.current = gltf.scene;
          object.current.position.set(0, 0, -10);
        scene.add(object.current);
      },
      function (xhr) {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      function (error) {
        console.error('An error happened');
        console.error(error);
      }
    );

    const topLights = new THREE.DirectionalLight(0xffffff, 15);
    topLights.position.set(0, 30, 20);
    scene.add(topLights);

    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    containerRef.current.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      if (object.current) {
        object.current.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
    };

    animate();
  }, []);


  return (
    <div ref={containerRef} className=''></div>
  );
};

Model.propTypes = {
  modelPath: PropTypes.string.isRequired
};

export default Model;







