'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const regions = [
  {
    name: 'North America',
    offices: 25,
    image: '/hero-1.jpg',
    description: 'Our largest market with comprehensive coverage solutions',
    specialties: ['Property', 'Casualty', 'Professional Lines'],
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    name: 'Europe',
    offices: 18,
    image: '/hero-2.jpg',
    description: 'Specialized expertise in continental risk management',
    specialties: ['Marine', 'Aviation', 'Energy'],
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    name: 'Middle East',
    offices: 8,
    image: '/hero-3.jpg',
    description: 'Growing presence in emerging insurance markets',
    specialties: ['Construction', 'Infrastructure', 'Trade Credit'],
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
  {
    name: 'Asia Pacific',
    offices: 12,
    image: '/hero-1.jpg',
    description: 'Strategic partnerships across diverse markets',
    specialties: ['Cyber', 'Technology', 'Manufacturing'],
    coordinates: { lat: 1.3521, lng: 103.8198 },
  },
];

const stats = [
  { number: '60+', label: 'Global Offices', icon: '🏢' },
  { number: '2,300+', label: 'Insurance Professionals', icon: '👥' },
  { number: '$3.6B+', label: 'Group Premium', icon: '💰' },
  { number: '50+', label: 'Years of Excellence', icon: '⭐' },
];

export default function GlobalPresenceVariation3() {
  const [activeRegion, setActiveRegion] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
    transform: `translateY(${scrollY * 0.5}px)`,
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
          <Image src="/hero-1.jpg" alt="Global Presence" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/90 via-corporate-blue-800/70 to-transparent"></div>
        </div>

        {/* Floating Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Global Network</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-corporate-blue-200">
                Global
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
                Presence
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Delivering insurance solutions with local expertise and global reach across 4
              continents
            </p>
          </div>

          {/* Interactive Region Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {regions.map((region, index) => (
              <button
                key={region.name}
                onClick={() => setActiveRegion(index)}
                className={`px-6 py-3 rounded-full transition-all duration-500 ${
                  activeRegion === index
                    ? 'bg-corporate-blue-500 text-white shadow-lg scale-110'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          {/* Active Region Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">{regions[activeRegion].name}</h3>
            <p className="text-white/90 mb-3">{regions[activeRegion].description}</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="text-corporate-blue-200">
                {regions[activeRegion].offices} Offices
              </span>
              <span className="text-white/60">•</span>
              <span className="text-corporate-blue-200">
                {regions[activeRegion].coordinates.lat.toFixed(2)}°N,{' '}
                {regions[activeRegion].coordinates.lng.toFixed(2)}°E
              </span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-corporate-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-corporate-blue-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Interactive Regions Grid */}
      <div className="py-24 px-8 bg-gradient-to-br from-corporate-blue-50 via-white to-tertiary-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-corporate-grey-900 mb-6">
              Explore Our <span className="text-corporate-blue-500">Global Network</span>
            </h2>
            <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto">
              Click on any region to discover our local expertise and global capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-4 ${
                  activeRegion === index ? 'ring-4 ring-corporate-blue-500 scale-105' : ''
                }`}
                onClick={() => setActiveRegion(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 bg-corporate-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {region.offices}
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{region.name}</h3>
                    <p className="text-sm opacity-90">Click to explore</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-corporate-grey-600 text-sm mb-4 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {region.specialties.map(specialty => (
                      <span
                        key={specialty}
                        className="inline-block bg-corporate-blue-50 text-corporate-blue-700 text-xs px-3 py-1 rounded-full mr-2 mb-2 hover:bg-corporate-blue-100 transition-colors"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-corporate-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-corporate-blue-600 transition-all duration-300 group-hover:bg-corporate-blue-600">
                    Explore {region.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div ref={statsRef} className="py-24 px-8 bg-corporate-blue-900 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Global Impact <span className="text-corporate-blue-200">by the Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Interactive CTA Section */}
      <div className="py-24 px-8 bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to <span className="text-corporate-blue-200">Connect</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Our global team is ready to provide you with the insurance solutions you need, wherever
            you are in the world.
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
