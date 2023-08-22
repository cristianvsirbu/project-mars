import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';


const Model = ({ modelPath }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.set(0, 0, 8);

    // Added lights to the scene
    const createDirectionalLight = (color, intensity, position) => {
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(...position);
      return light;
    };
    const lights = [
      createDirectionalLight(0xffffff, 4, [-10, 10, 10]),
      createDirectionalLight(0xffffff, 4, [10, 10, 10]),
      createDirectionalLight(0xffffff, 4, [0, 0, -10]),
      createDirectionalLight(0xffffff, 4, [0, -10, 10]),
    ];
    scene.add(...lights);

    // Loaded the 3D model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      scene.add(gltf.scene);
      window.innerWidth < 600 ? gltf.scene.scale.set(0.75, 0.75, 0.75) : gltf.scene.scale.set(1, 1, 1);
    }, undefined, (error) => {
      console.log(error);
    });

    // Added orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.4;

    // Added animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      scene.rotation.y += 0.001;
    }
    animate();

    // Handled window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    // Cleaned up resources
    return () => {
      renderer.domElement.remove();
      renderer.dispose();
      cancelAnimationFrame(animate);
      window.removeEventListener('resize', handleResize);
    };
  }, [modelPath]);

  return (
    <div>
      <div className=''>
        <div ref={containerRef} className=''></div>
      </div>
      <div></div>
    </div>
  );
};

Model.propTypes = {
  modelPath: PropTypes.string.isRequired
};

export default Model;







