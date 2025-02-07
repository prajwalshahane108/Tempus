'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TechnologySection = () => {
  const technologies = [
    {
      title: 'ONE',
      description: 'AI-enabled assistant for healthcare providers and researchers'
    },
    {
      title: 'NEXT',
      description: 'Identify and close gaps in care'
    },
    {
      title: 'LENS',
      description: 'Find, access, and analyze multimodal real-world data'
    },
    {
      title: 'ALGOS',
      description: 'Algorithmic models connected to our assays to provide additional insight'
    }
  ];

  return (
    <div className="bg-black min-h-screen w-full py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-16">
          Discover our innovative technology
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Technology List */}
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-900 to-gray-800 
                          rounded-lg p-6 hover:from-gray-800 hover:to-gray-700 
                          transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}

            {/* Explore Link */}
            <Link 
              href="/tech"
              className="inline-flex items-center text-white mt-8 border-t border-gray-700 pt-8 group"
            >
              <span className="text-sm font-medium mr-2">EXPLORE OUR TECH & AI</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/section3.jpg" // Replace with your actual image path
                alt="Technology Preview"
                fill
                className="object-cover rounded-lg"
              />
              {/* Arrow icon in bottom right corner */}
              <div className="absolute bottom-4 right-4">
                <svg 
                  className="w-6 h-6 text-white transform rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;