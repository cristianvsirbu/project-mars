import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';



const Model = ({ modelPath }) => {
  const containerRef = useRef(null);


  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.set(0, 0, 10);

    const leftLights = new THREE.DirectionalLight(0xffffff, 4);
    const rightLights = new THREE.DirectionalLight(0xffffff, 4);
    const backLights = new THREE.DirectionalLight(0xffffff, 4);
    const bottomLights = new THREE.DirectionalLight(0xffffff, 4);
    leftLights.position.set(-10, 10, 10);
    rightLights.position.set(10, 10, 10);
    backLights.position.set(0, 0, -10);
    bottomLights.position.set(0, -10, 10);
    scene.add(leftLights);
    scene.add(rightLights);
    scene.add(backLights);
    scene.add(bottomLights);


    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      scene.add(gltf.scene);

    }, undefined, (error) => {
      console.log(error);
    });
    
    const controls = new OrbitControls(camera, renderer.domElement);
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      scene.rotation.y += 0.001;

      
      controls.enableDamping = true;
      controls.rotateSpeed = 0.4;

    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      renderer.domElement.remove();
      renderer.dispose();
      cancelAnimationFrame(animate);
      window.removeEventListener('resize', handleResize);
    };
  }, [modelPath]);


  return <div ref={containerRef}></div>;
};


Model.propTypes = {
  modelPath: PropTypes.string.isRequired
};

export default Model;







