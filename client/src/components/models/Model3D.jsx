import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';


const Model3D = ({ modelPath, initialScale, cameraPosition }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const container = containerRef.current;

    renderer.setSize(container.clientWidth, container.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.set(...cameraPosition);
    

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
      gltf.scene.scale.set(initialScale, initialScale, initialScale);
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
    // const handleResize = () => {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(container.clientWidth, container.clientHeight);
    // }
    // window.addEventListener('resize', handleResize);

    // Cleaned up resources
    return () => {
      renderer.domElement.remove();
      renderer.dispose();
      cancelAnimationFrame(animate);
      // window.removeEventListener('resize', handleResize);
    };
  }, [modelPath, initialScale, cameraPosition]);

  return (
    <div>
      <div className='flex'>
        <div ref={containerRef} className='container w-[1000px] h-[1000px]'></div>
      </div>
      <div></div>
    </div>
  );
};

Model3D.propTypes = {
  modelPath: PropTypes.string.isRequired,
  initialScale: PropTypes.number.isRequired,
  cameraPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Model3D;







