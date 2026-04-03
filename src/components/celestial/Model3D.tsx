import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useEffect, useRef, useState } from 'react';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Model3DProps } from '../../lib/types';
import Loader from '../ui/Loader';

// Global renderer manager
const rendererManager = (() => {
  let sharedRenderer: THREE.WebGLRenderer | null = null;
  let usageCount = 0;

  return {
    getRenderer: () => {
      if (!sharedRenderer) {
        sharedRenderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        });
        sharedRenderer.setPixelRatio(window.devicePixelRatio);
      }
      usageCount++;
      return sharedRenderer;
    },
    releaseRenderer: () => {
      if (usageCount > 0) {
        usageCount--;
        if (usageCount === 0 && sharedRenderer) {
          sharedRenderer.dispose();
          sharedRenderer = null;
        }
      } else {
        console.warn(
          'releaseRenderer called more times than getRenderer. usageCount is already zero.'
        );
      }
    },
  };
})();

const Model3D = ({ modelPath, initialScale, cameraPosition }: Model3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number>(0);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries.length === 0) return;
      setIsVisible(entries[0].isIntersecting);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Set up the scene and camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const container = containerRef.current;
    if (!container) return;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.5,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);

    // Get the shared renderer from the manager
    rendererRef.current = rendererManager.getRenderer();
    const renderer = rendererRef.current;
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    setIsActive(true);

    // Added lights to the scene
    const createDirectionalLight = (
      color: THREE.ColorRepresentation,
      intensity: number,
      position: number[]
    ): THREE.DirectionalLight => {
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(position[0], position[1], position[2]);
      return light;
    };

    const createAmbientLight = (
      color: THREE.ColorRepresentation,
      intensity: number
    ): THREE.AmbientLight => {
      const light = new THREE.AmbientLight(color, intensity);
      return light;
    };

    const lights = [
      createDirectionalLight(0xffffff, 1.5, [-10, 0, 0]),
      createDirectionalLight(0xffffff, 1.5, [0, 10, 0]),
      createDirectionalLight(0xffffff, 1.5, [10, 0, 0]),
      createDirectionalLight(0xffffff, 1.5, [0, -10, 0]),
      createDirectionalLight(0xffffff, 1.5, [0, 0, 10]),
      createAmbientLight(0xffffff, 2),
    ];
    scene.add(...lights);

    if (!modelPath) return;

    // Load the 3D model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/assets/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      modelPath,
      (gltf: GLTF) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(initialScale, initialScale, initialScale);
        gltf.scene.position.set(0, -1, 0);
        setIsLoading(false);
      },
      undefined,
      (error: unknown) => {
        if (error instanceof Error) {
          console.error('Error loading model:', error.message, '\nStack:', error.stack);
          setIsLoading(false);
        } else {
          console.error('Error loading model:', error);
          setIsLoading(false);
        }
      }
    );

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.5;

    const resize = () => {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);

      controls.dispose();

      // Remove DOM element but don't dispose the shared renderer
      const renderer = rendererRef.current;
      if (renderer && container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      rendererManager.releaseRenderer();

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });

      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }

      setIsActive(false);
    };
  }, [modelPath, initialScale, cameraPosition]);

  useEffect(() => {
    if (!isActive || !isVisible || !sceneRef.current || !cameraRef.current) return;

    const scene = sceneRef.current;
    const camera = cameraRef.current;

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      if (scene) scene.rotation.y += 0.001;
      const renderer = rendererRef.current;
      if (renderer) renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameIdRef.current);
    };
  }, [isActive, isVisible]);

  return (
    <div className="flex w-[70%] mx-auto lg:mx-0 h-[30vh] md:w-[50%] md:h-[45vh] lg:w-[45%] lg:h-[55vh] 2xl:h-[80vh]">
      <div ref={containerRef} className="container relative w-full h-full">
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default Model3D;
