'use client';

import Image from 'next/image';
import { useState } from 'react';

const careerPaths = [
  {
    id: 1,
    title: 'Underwriting',
    level: 'Entry Level',
    experience: '0-2 years',
    description: 'Learn the fundamentals of risk assessment and policy development',
    skills: ['Analytical Thinking', 'Risk Assessment', 'Communication'],
    growth: 'Senior Underwriter → Underwriting Manager → Director',
    image: '/hero-1.jpg',
    color: 'from-blue-600 to-blue-800',
    requirements: ['Bachelor\'s degree', 'Strong analytical skills', 'Attention to detail'],
    salary: '$65K - $85K'
  },
  {
    id: 2,
    title: 'Sales & Business Development',
    level: 'Mid Level',
    experience: '3-7 years',
    description: 'Build client relationships and drive business growth',
    skills: ['Relationship Building', 'Negotiation', 'Market Knowledge'],
    growth: 'Account Executive → Sales Manager → VP of Sales',
    image: '/hero-2.jpg',
    color: 'from-green-600 to-green-800',
    requirements: ['Sales experience', 'Client relationship skills', 'Industry knowledge'],
    salary: '$85K - $120K'
  }
];

export default function CareersVariation4() {
  const [selectedPath, setSelectedPath] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Bold Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-3.jpg"
            alt="Careers at Burns & Wilcox"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue-900 via-corporate-blue-800 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full mb-12 border border-white/30">
              <div className="w-3 h-3 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold tracking-wide">Join Our Team</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-corporate-blue-200 to-corporate-blue-400">
                BUILD YOUR
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-400 via-corporate-blue-200 to-white">
                FUTURE
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
              Join a team of 2,300+ insurance professionals across the globe
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {careerPaths.map((path, index) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(index)}
                className={`px-8 py-4 rounded-full transition-all duration-500 font-bold text-lg ${
                  selectedPath === index
                    ? 'bg-white text-corporate-blue-900 shadow-2xl scale-110'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {path.title}
              </button>
            ))}
          </div>
          
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-4xl font-black mb-4">{careerPaths[selectedPath].title}</h3>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">{careerPaths[selectedPath].description}</p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <span className="text-corporate-blue-200 font-bold">{careerPaths[selectedPath].level}</span>
              <span className="text-white/40 text-2xl">•</span>
              <span className="text-corporate-blue-200 font-bold">{careerPaths[selectedPath].experience}</span>
            </div>
          </div>
        </div>
        
        <div className="absolute top-32 left-32 w-40 h-40 bg-corporate-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-corporate-blue-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Bold CTA Section */}
      <div className="py-32 px-8 bg-gradient-to-r from-corporate-blue-600 via-corporate-blue-700 to-corporate-blue-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-7xl font-black text-white mb-12">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">Journey</span>?
          </h2>
          <p className="text-2xl text-white/90 mb-16 leading-relaxed">
            Explore our current openings and find the perfect role to advance your career
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="px-12 py-6 bg-white text-corporate-blue-600 font-black text-xl rounded-xl hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-110 shadow-2xl">
              View Open Positions
            </button>
            <button className="px-12 py-6 border-4 border-white text-white font-black text-xl rounded-xl hover:bg-white hover:text-corporate-blue-600 transition-all duration-500 transform hover:scale-110">
              Contact Recruiting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
