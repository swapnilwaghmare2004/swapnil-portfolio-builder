
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    // Fill particles positions randomly
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: new THREE.Color('#1e90ff'),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    // Create mesh of particles
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Gentle rotation based on mouse position
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      if (mouseX && mouseY) {
        particlesMesh.rotation.x += mouseY * 0.0005;
        particlesMesh.rotation.y += mouseX * 0.0005;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(particlesMesh);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default Background3D;
