// import React from 'react';
// import Image from 'next/image';

// const SearchComponent = () => {
//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center"
//          style={{
//            backgroundImage: "url('/gradient-full-light-home.jpeg')",
//            backgroundSize: 'cover',
//            backgroundPosition: 'center'
//          }}>
      
//       {/* Main Content Container */}
//       <div className="max-w-4xl w-full px-4 flex flex-col items-center gap-8">
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 font-light text-center leading-tight">
//           AI-enabled
//           <br />
//           precision medicine
//         </h1>
        
//         {/* Search Container */}
//         <div className="relative w-full max-w-xl">
//           <div className="w-full h-12 bg-white bg-opacity-90 rounded-full backdrop-blur-sm shadow-lg flex items-center px-6">
//             <input
//               type="text"
//               placeholder="How can I help you?"
//               className="w-full h-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
//             />
//             <button className="ml-4">
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors"
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M9 5l7 7-7 7" 
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Blue Sphere Background */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="w-96 h-96 rounded-full bg-blue-200 bg-opacity-30 backdrop-blur-3xl"></div>
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;

"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SearchComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(450, 450);

    // Create a more glassy orb
    const geometry = new THREE.SphereGeometry(1, 128, 128); // Increased segments for smoother appearance
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.9, // Makes it more glassy
      thickness: 0.5,    // Adds depth to the glass effect
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Softer lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x7790ff, 1);
    pointLight1.position.set(5, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-5, -3, -5);
    scene.add(pointLight2);

    camera.position.z = 2.5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.002; // Slower rotation
      sphere.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://www.tempus.com/wp-content/uploads/2025/01/gradient-full-light-home.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Title */}
      <div className="relative z-20 mb-24">
        <h1 className="text-7xl md:text-8xl lg:text-9xl text-[#2d3648] font-extralight text-center leading-tight tracking-wide">
          AI-enabled
          <br />
          <span className="font-extralight">precision medicine</span>
        </h1>
      </div>

      {/* Orb Container */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[min(100vmin,800px)] h-[min(100vmin,800px)] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full">
              <canvas
                ref={canvasRef}
                data-engine="three.js r166"
                className="block w-full h-full"
                style={{
                  filter: 'blur(1px)',
                  transform: 'scale(1.02)'
                }}
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Search Input - Overlaying the Orb */}
      <div className="relative z-20 mt-8">
        <div className="bg-white bg-opacity-90 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
          <div className="flex items-center px-8 h-14 w-[500px]">
            <input
              type="text"
              placeholder="How can I help you?"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-lg font-light"
            />
            <button className="ml-4">
              <svg 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5"
              >
                <g>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path 
                    className="inner-path" 
                    fill="#d7dfee" 
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;