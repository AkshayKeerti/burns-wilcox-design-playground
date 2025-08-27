'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

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
    color: 'from-blue-500 to-blue-600',
    requirements: ['Bachelor\'s degree', 'Strong analytical skills', 'Attention to detail']
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
    color: 'from-green-500 to-green-600',
    requirements: ['Sales experience', 'Client relationship skills', 'Industry knowledge']
  },
  {
    id: 3,
    title: 'Claims Management',
    level: 'Senior Level',
    experience: '8+ years',
    description: 'Lead complex claims resolution and team management',
    skills: ['Leadership', 'Problem Solving', 'Industry Expertise'],
    growth: 'Claims Manager → Claims Director → VP of Claims',
    image: '/hero-3.jpg',
    color: 'from-purple-500 to-purple-600',
    requirements: ['Claims experience', 'Leadership skills', 'Technical expertise']
  },
  {
    id: 4,
    title: 'Technology & Innovation',
    level: 'All Levels',
    experience: 'Varies',
    description: 'Drive digital transformation and innovative solutions',
    skills: ['Technical Skills', 'Innovation', 'Project Management'],
    growth: 'Developer → Tech Lead → CTO',
    image: '/hero-1.jpg',
    color: 'from-orange-500 to-orange-600',
    requirements: ['Technical background', 'Problem-solving', 'Innovation mindset']
  }
];

const benefits = [
  {
    icon: '🏢',
    title: 'Global Opportunities',
    description: 'Work across 60+ offices worldwide',
    color: 'bg-blue-500'
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description: 'Professional development and certifications',
    color: 'bg-green-500'
  },
  {
    icon: '💼',
    title: 'Competitive Benefits',
    description: 'Health, retirement, and wellness programs',
    color: 'bg-purple-500'
  },
  {
    icon: '🤝',
    title: 'Collaborative Culture',
    description: 'Team-based approach to success',
    color: 'bg-orange-500'
  }
];

export default function CareersVariation3() {
  const [selectedPath, setSelectedPath] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (benefitsRef.current) {
        const rect = benefitsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`
  };

  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Interactive Hero Section */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0" style={parallaxStyle}>
          <Image
            src="/hero-3.jpg"
            alt="Careers at Burns & Wilcox"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/90 via-corporate-blue-800/70 to-transparent"></div>
        </div>
        
        {/* Floating Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-corporate-blue-200">
                Build Your
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
                Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Join a team of 2,300+ insurance professionals across the globe
            </p>
          </div>
          
          {/* Interactive Career Path Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {careerPaths.map((path, index) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(index)}
                className={`px-6 py-3 rounded-full transition-all duration-500 ${
                  selectedPath === index
                    ? 'bg-corporate-blue-500 text-white shadow-lg scale-110'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                {path.title}
              </button>
            ))}
          </div>
          
          {/* Active Career Path Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">{careerPaths[selectedPath].title}</h3>
            <p className="text-white/90 mb-3">{careerPaths[selectedPath].description}</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="text-corporate-blue-200">{careerPaths[selectedPath].level}</span>
              <span className="text-white/60">•</span>
              <span className="text-corporate-blue-200">{careerPaths[selectedPath].experience}</span>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-corporate-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-corporate-blue-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Interactive Career Paths Section */}
      <div className="py-24 px-8 bg-gradient-to-br from-corporate-blue-50 via-white to-tertiary-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-corporate-grey-900 mb-6">
              Explore Your <span className="text-corporate-blue-500">Career Path</span>
            </h2>
            <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto">
              Click on any career path to discover opportunities and requirements
            </p>
          </div>
          
          <div className="space-y-16">
            {careerPaths.map((path, index) => (
              <div key={path.id} className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className="flex-1">
                  <div 
                    className={`p-8 rounded-2xl border-l-4 transition-all duration-700 cursor-pointer transform hover:scale-105 ${
                      selectedPath === index 
                        ? 'border-corporate-blue-500 bg-corporate-blue-50 shadow-2xl' 
                        : 'border-corporate-grey-200 hover:border-corporate-blue-300 hover:shadow-xl'
                    }`}
                    onClick={() => setSelectedPath(index)}
                  >
                    <div className="mb-6">
                      <span className={`inline-block bg-gradient-to-r ${path.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                        {path.level}
                      </span>
                      <span className="ml-4 text-corporate-grey-500 text-sm">
                        {path.experience}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-corporate-grey-900 mb-4">
                      {path.title}
                    </h3>
                    
                    <p className="text-lg text-corporate-grey-600 mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-corporate-grey-800 mb-3">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill) => (
                          <span key={skill} className="bg-corporate-blue-50 text-corporate-blue-700 text-sm px-3 py-1 rounded-full hover:bg-corporate-blue-100 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-corporate-grey-800 mb-3">Requirements:</h4>
                      <ul className="space-y-1">
                        {path.requirements.map((req) => (
                          <li key={req} className="text-sm text-corporate-grey-600 flex items-center gap-2">
                            <span className="w-2 h-2 bg-corporate-blue-400 rounded-full"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-corporate-grey-100 pt-4">
                      <h4 className="font-semibold text-corporate-grey-800 mb-2">Career Growth:</h4>
                      <p className="text-sm text-corporate-grey-600">{path.growth}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={path.image}
                      alt={path.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Interactive Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="bg-white text-corporate-blue-900 px-6 py-3 rounded-full font-medium">
                          Click to Explore
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Benefits Section */}
      <div ref={benefitsRef} className="py-24 px-8 bg-corporate-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-corporate-blue-200">Burns & Wilcox</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-500 ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-corporate-blue-200 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-corporate-blue-200 leading-relaxed group-hover:text-white transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive CTA Section */}
      <div className="py-24 px-8 bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to Start Your <span className="text-corporate-blue-200">Journey</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Explore our current openings and find the perfect role to advance your career
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-corporate-blue-600 font-bold rounded-lg hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-105 shadow-lg">
              View Open Positions
            </button>
            <button className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-corporate-blue-600 transition-all duration-500 transform hover:scale-105">
              Contact Recruiting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
