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
    image: '/hero-1.jpg'
  },
  {
    id: 2,
    title: 'Sales & Business Development',
    level: 'Mid Level',
    experience: '3-7 years',
    description: 'Build client relationships and drive business growth',
    skills: ['Relationship Building', 'Negotiation', 'Market Knowledge'],
    growth: 'Account Executive → Sales Manager → VP of Sales',
    image: '/hero-2.jpg'
  },
  {
    id: 3,
    title: 'Claims Management',
    level: 'Senior Level',
    experience: '8+ years',
    description: 'Lead complex claims resolution and team management',
    skills: ['Leadership', 'Problem Solving', 'Industry Expertise'],
    growth: 'Claims Manager → Claims Director → VP of Claims',
    image: '/hero-3.jpg'
  },
  {
    id: 4,
    title: 'Technology & Innovation',
    level: 'All Levels',
    experience: 'Varies',
    description: 'Drive digital transformation and innovative solutions',
    skills: ['Technical Skills', 'Innovation', 'Project Management'],
    growth: 'Developer → Tech Lead → CTO',
    image: '/hero-1.jpg'
  }
];

const benefits = [
  {
    icon: '🏢',
    title: 'Global Opportunities',
    description: 'Work across 60+ offices worldwide'
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description: 'Professional development and certifications'
  },
  {
    icon: '💼',
    title: 'Competitive Benefits',
    description: 'Health, retirement, and wellness programs'
  },
  {
    icon: '🤝',
    title: 'Collaborative Culture',
    description: 'Team-based approach to success'
  }
];

export default function CareersVariation2() {
  const [selectedPath, setSelectedPath] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-3.jpg"
            alt="Careers at Burns & Wilcox"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/80 via-corporate-blue-800/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="inline-block w-1 h-16 bg-corporate-blue-400 mb-6"></div>
            <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
              Build Your
              <br />
              <span className="font-normal">Future</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join a team of 2,300+ insurance professionals across the globe
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 border-2 border-white text-white font-light hover:bg-white hover:text-corporate-blue-900 transition-all duration-500">
              View Open Positions
            </button>
            <button className="px-8 py-4 bg-white text-corporate-blue-900 font-light hover:bg-corporate-grey-50 transition-all duration-500">
              Learn About Culture
            </button>
          </div>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-corporate-grey-900 mb-6">
              Explore Your Career Path
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>
          
          <div className="space-y-16">
            {careerPaths.map((path, index) => (
              <div key={path.id} className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className="flex-1">
                  <div 
                    className={`p-8 border-l-4 transition-all duration-500 cursor-pointer ${
                      selectedPath === index 
                        ? 'border-corporate-blue-500 bg-corporate-blue-50' 
                        : 'border-corporate-grey-200 hover:border-corporate-blue-300'
                    }`}
                    onClick={() => setSelectedPath(index)}
                  >
                    <div className="mb-6">
                      <span className="inline-block bg-corporate-blue-50 text-corporate-blue-600 px-4 py-2 text-sm font-light">
                        {path.level}
                      </span>
                      <span className="ml-4 text-corporate-grey-500 text-sm">
                        {path.experience}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-light text-corporate-grey-900 mb-4">
                      {path.title}
                    </h3>
                    
                    <p className="text-lg text-corporate-grey-600 mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-corporate-grey-800 mb-3">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill) => (
                          <span key={skill} className="text-sm text-corporate-blue-600 border border-corporate-blue-200 px-3 py-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t border-corporate-grey-100 pt-4">
                      <h4 className="font-medium text-corporate-grey-800 mb-2">Career Growth:</h4>
                      <p className="text-sm text-corporate-grey-600">{path.growth}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={path.image}
                      alt={path.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 px-8 bg-corporate-grey-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-corporate-grey-900 mb-6">
              Why Choose Burns & Wilcox?
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-light text-corporate-grey-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-corporate-grey-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-8 bg-corporate-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-corporate-blue-200 mb-8 leading-relaxed">
            Explore our current openings and find the perfect role to advance your career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-corporate-blue-900 font-light hover:bg-corporate-grey-50 transition-all duration-500">
              View Open Positions
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-light hover:bg-white hover:text-corporate-blue-900 transition-all duration-500">
              Contact Recruiting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
