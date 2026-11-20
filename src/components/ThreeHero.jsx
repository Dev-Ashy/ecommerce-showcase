import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function ThreeHero() {
  const mountRef = useRef(null);
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const animationIdRef = useRef();

  useEffect(() => {
    const width = mountRef.current?.clientWidth || 800;
    const height = mountRef.current?.clientHeight || 600;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(10, 20, 15);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00aaff, 1, 10);
    pointLight.position.set(-10, 5, -10);
    scene.add(pointLight);

    // Create floating product boxes
    const productBoxes = [];
    const colors = [0x3b82f6, 0x8b5cf6, 0xef4444, 0x10b981, 0xf59e0b];

    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      const material = new THREE.MeshPhysicalMaterial({
        color: colors[i],
        roughness: 0.1,
        metalness: 0.8,
        envMapIntensity: 1,
        clearcoat: 1,
        clearcoatRoughness: 0.2
      });

      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (i - 2) * 2.5,
        (i % 3 - 1) * 1.5,
        Math.sin(i) * 2
      );
      cube.castShadow = true;
      cube.receiveShadow = true;
      scene.add(cube);
      productBoxes.push(cube);
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Slowly rotate cubes
      productBoxes.forEach((cube, i) => {
        cube.rotation.x += 0.01 + (i * 0.002);
        cube.rotation.y += 0.008 + (i * 0.001);

        // Gentle floating motion
        cube.position.y = Math.sin(Date.now() * 0.001 + i) * 0.5 + (i % 3 - 1) * 1.5;

        // Pulsing scale
        const pulse = 1 + Math.sin(Date.now() * 0.002 + i) * 0.05;
        cube.scale.setScalar(pulse);
      });

      // Camera subtle movement
      camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5;
      camera.position.z = 10 + Math.sin(Date.now() * 0.0003) * 0.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      productBoxes.forEach(box => {
        box.geometry.dispose();
        box.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="three-hero-canvas" />;
}