import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import PropTypes from 'prop-types';
import { useEffect} from 'react';


const Model3D = ({ modelPath, initialScale, cameraPosition }) => {

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const container = document.querySelector('.container');
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.5, 1000);
    let renderer = new THREE.WebGLRenderer();

    camera.position.set(...cameraPosition);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);


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
      gltf.scene.position.set(0, -1, 0);
    }, undefined, (error) => {
      console.log(error);
    });

    // Added orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.5;

    // Added animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      scene.rotation.y += 0.001;
    }
    animate();

    // Added resize listener
    function resize() {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize);

    // Checked if the model path is valid/present
    if (!modelPath) {
      // Remove the canvas and clean up resources
      const container = document.querySelector('.container');
      container.innerHTML = ''; // Remove the content of the container
      return; // Exit early
    }

    // Cleaned up resources
    return () => {
      renderer.domElement.remove();
      renderer.dispose();
      cancelAnimationFrame(animate);
      window.removeEventListener('resize', resize);
    };
  }, [modelPath, initialScale, cameraPosition]);


  return (
    <div className='flex justify-center w-full h-[18vh] md:h-[45vh] lg:h-[55vh] 2xl:w-[60vw] 2xl:h-[80vh]'>
        <div className='container'></div>
      </div>
  );
};

Model3D.propTypes = {
  modelPath: PropTypes.string.isRequired,
  initialScale: PropTypes.number.isRequired,
  cameraPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Model3D;







