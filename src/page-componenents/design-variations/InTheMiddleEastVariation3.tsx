'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const regionalStats = [
  { number: '20+', label: 'Years in Region', icon: '📅' },
  { number: '8', label: 'Regional Offices', icon: '🏢' },
  { number: '500+', label: 'Local Partners', icon: '🤝' },
  { number: '15+', label: 'Insurance Lines', icon: '🛡️' },
];

const regionalServices = [
  {
    title: 'Property & Casualty',
    description: 'Comprehensive coverage for businesses and individuals across the region',
    icon: '🏗️',
    color: 'from-blue-500 to-blue-600',
    features: ['Business Property', 'General Liability', 'Workers Compensation'],
  },
  {
    title: 'Energy & Construction',
    description: "Specialized solutions for the region's growing infrastructure sector",
    icon: '⚡',
    color: 'from-green-500 to-green-600',
    features: ['Project Insurance', 'Equipment Coverage', 'Environmental Liability'],
  },
  {
    title: 'Trade & Logistics',
    description: "Coverage for the region's vital international trade operations",
    icon: '🚢',
    color: 'from-purple-500 to-purple-600',
    features: ['Cargo Insurance', 'Marine Coverage', 'Trade Credit'],
  },
  {
    title: 'Cyber & Technology',
    description: "Modern protection for the region's digital transformation",
    icon: '💻',
    color: 'from-orange-500 to-orange-600',
    features: ['Cyber Liability', 'Data Breach', 'Technology Errors'],
  },
];

export default function InTheMiddleEastVariation3() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
  };

  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Interactive Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with Parallax */}
        <div className="absolute inset-0" style={parallaxStyle}>
          <Image
            src="/hero-3.jpg"
            alt="Burns & Wilcox in the Middle East"
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
              <span className="text-sm font-medium">Regional Focus</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-corporate-blue-200">
                Burns & Wilcox
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
                in the Middle East
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Deeply rooted in the region with over two decades of experience serving the unique
              insurance needs of Middle Eastern businesses and individuals
            </p>
          </div>

          {/* Interactive Service Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {regionalServices.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full transition-all duration-500 ${
                  activeService === index
                    ? 'bg-corporate-blue-500 text-white shadow-lg scale-110'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">{regionalServices[activeService].title}</h3>
            <p className="text-white/90 mb-3">{regionalServices[activeService].description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {regionalServices[activeService].features.map(feature => (
                <span
                  key={feature}
                  className="text-xs text-corporate-blue-200 bg-white/10 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-corporate-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-corporate-blue-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Interactive Stats Section */}
      <div
        ref={statsRef}
        className="py-24 px-8 bg-gradient-to-br from-corporate-blue-900 via-corporate-blue-800 to-black relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Regional Impact <span className="text-corporate-blue-200">by the Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {regionalStats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-corporate-blue-200 transition-colors">
                  {isVisible ? stat.number : '0'}
                </div>
                <div className="text-corporate-blue-200 font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Services Grid */}
      <div className="py-24 px-8 bg-gradient-to-br from-corporate-blue-50 via-white to-tertiary-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-corporate-grey-900 mb-6">
              Explore Our <span className="text-corporate-blue-500">Regional Services</span>
            </h2>
            <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto">
              Click on any service to discover our specialized solutions for the Middle East
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalServices.map((service, index) => (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-4 ${
                  activeService === index ? 'ring-4 ring-corporate-blue-500 scale-105' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-white group-hover:scale-125 transition-transform duration-700">
                      {service.icon}
                    </div>
                  </div>

                  {/* Interactive Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white text-corporate-blue-900 px-6 py-3 rounded-full text-sm font-medium">
                        Click to Explore
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-corporate-grey-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-corporate-grey-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-corporate-blue-400 rounded-full"></span>
                        <span className="text-sm text-corporate-grey-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive CTA Section */}
      <div className="py-24 px-8 bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to <span className="text-corporate-blue-200">Connect</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Our Middle East team is ready to provide you with the insurance solutions you need
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-corporate-blue-600 font-bold rounded-lg hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-corporate-blue-600 transition-all duration-500 transform hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
