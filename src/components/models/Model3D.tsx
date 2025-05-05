import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect, useRef } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface Model3DProps {
  modelPath: string;
  initialScale: number;
  cameraPosition: [number, number, number]; 
}

const Model3D = ({ modelPath, initialScale, cameraPosition }: Model3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const container = containerRef.current;
    
    if (!container) return;
    
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.5,
      1000
    );
    
    camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Added lights to the scene
    const createDirectionalLight = (
      color: THREE.ColorRepresentation, 
      intensity: number, 
      position: [number, number, number]
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

    // Skip if model path is missing
    if (!modelPath) return;

    // Load the 3D model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/assets/draco/");
    loader.setDRACOLoader(dracoLoader);

    loader.load(
        modelPath,
        (gltf: GLTF) => {
            scene.add(gltf.scene);
            gltf.scene.scale.set(initialScale, initialScale, initialScale);
            gltf.scene.position.set(0, -1, 0);
        },
        (progress: any) => {
            // console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(0)}%`);
        },
        (error: unknown) => {
            console.error("Error loading model:", error);
            if (error instanceof ErrorEvent) {
                console.error("Error message:", error.message);
            }
        }
    );

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.5;

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
      scene.rotation.y += 0.001;
    };
    animate();

    // Handle resize
    const resize = () => {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [modelPath, initialScale, cameraPosition]);

  return (
    <div className="flex w-full h-[30vh] md:h-[45vh] lg:h-[55vh] 2xl:w-[70vw] 2xl:h-[80vh]">
      <div ref={containerRef} className="container"></div>
    </div>
  );
};

export default Model3D;