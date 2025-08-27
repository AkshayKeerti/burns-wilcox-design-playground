'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const globalStats = [
  { number: '60+', label: 'Global Offices', icon: '🌍' },
  { number: '2,300+', label: 'Insurance Professionals', icon: '👥' },
  { number: '$3.6B+', label: 'Group Premium', icon: '💰' },
  { number: '50+', label: 'Years of Excellence', icon: '⭐' }
];

const regions = [
  {
    name: 'North America',
    offices: 25,
    image: '/hero-1.jpg',
    description: 'Our largest market with comprehensive coverage solutions',
    specialties: ['Property', 'Casualty', 'Professional Lines'],
    color: 'bg-gradient-to-br from-blue-600 to-blue-800'
  },
  {
    name: 'Europe',
    offices: 18,
    image: '/hero-2.jpg',
    description: 'Specialized expertise in continental risk management',
    specialties: ['Marine', 'Aviation', 'Energy'],
    color: 'bg-gradient-to-br from-green-600 to-green-800'
  },
  {
    name: 'Middle East',
    offices: 8,
    image: '/hero-3.jpg',
    description: 'Growing presence in emerging insurance markets',
    specialties: ['Construction', 'Infrastructure', 'Trade Credit'],
    color: 'bg-gradient-to-br from-purple-600 to-purple-800'
  },
  {
    name: 'Asia Pacific',
    offices: 12,
    image: '/hero-1.jpg',
    description: 'Strategic partnerships across diverse markets',
    specialties: ['Cyber', 'Technology', 'Manufacturing'],
    color: 'bg-gradient-to-br from-orange-600 to-orange-800'
  }
];

export default function GlobalPresenceVariation4() {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Bold Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Bold Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-1.jpg"
            alt="Global Presence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue-900 via-corporate-blue-800 to-black"></div>
        </div>
        
        {/* Bold Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-8">
          <div className="mb-16">
            {/* Bold Badge */}
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full mb-12 border border-white/30">
              <div className="w-3 h-3 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold tracking-wide">Global Network</span>
            </div>
            
            {/* Bold Typography */}
            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-corporate-blue-200 to-corporate-blue-400">
                GLOBAL
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-400 via-corporate-blue-200 to-white">
                PRESENCE
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
              Delivering insurance solutions with local expertise and global reach across 4 continents
            </p>
          </div>
          
          {/* Bold Region Selector */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {regions.map((region, index) => (
              <button
                key={region.name}
                onClick={() => setActiveRegion(index)}
                className={`px-8 py-4 rounded-full transition-all duration-500 font-bold text-lg ${
                  activeRegion === index
                    ? 'bg-white text-corporate-blue-900 shadow-2xl scale-110'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
          
          {/* Bold Active Region Info */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-4xl font-black mb-4">{regions[activeRegion].name}</h3>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">{regions[activeRegion].description}</p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <span className="text-corporate-blue-200 font-bold">{regions[activeRegion].offices} Offices</span>
              <span className="text-white/40 text-2xl">•</span>
              <span className="text-corporate-blue-200 font-bold">Active Region</span>
            </div>
          </div>
        </div>
        
        {/* Bold Floating Elements */}
        <div className="absolute top-32 left-32 w-40 h-40 bg-corporate-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-corporate-blue-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-16 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Bold Stats Section */}
      <div className="py-32 px-8 bg-gradient-to-br from-corporate-blue-900 via-corporate-blue-800 to-black relative overflow-hidden">
        {/* Bold Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Crect width='4' height='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-white mb-8">
              Global Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-corporate-blue-400">by the Numbers</span>
            </h2>
            <div className="w-32 h-1 bg-corporate-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {globalStats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-8xl mb-8 group-hover:scale-125 transition-transform duration-700">
                  {stat.icon}
                </div>
                <div className="text-6xl md:text-7xl font-black text-white mb-6 group-hover:text-corporate-blue-200 transition-colors">
                  {stat.number}
                </div>
                <div className="text-corporate-blue-200 font-bold uppercase tracking-widest text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bold Regions Grid */}
      <div className="py-32 px-8 bg-gradient-to-br from-corporate-grey-50 via-white to-corporate-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-corporate-grey-900 mb-8">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-500 to-corporate-blue-700">Global Network</span>
            </h2>
            <div className="w-32 h-1 bg-corporate-blue-500 mx-auto"></div>
            <p className="text-2xl text-corporate-grey-600 max-w-4xl mx-auto mt-8">
              Click on any region to discover our local expertise and global capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform hover:-translate-y-6 transition-all duration-700 ${
                  activeRegion === index ? 'ring-4 ring-corporate-blue-500 scale-105' : ''
                }`}
                onClick={() => setActiveRegion(index)}
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Bold Floating Stats */}
                  <div className={`absolute top-6 right-6 ${region.color} text-white px-4 py-2 rounded-full text-lg font-black shadow-2xl`}>
                    {region.offices}
                  </div>
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-black mb-2">{region.name}</h3>
                    <p className="text-lg opacity-90 font-medium">Click to explore</p>
                  </div>
                </div>
                
                <div className="p-8 bg-white">
                  <p className="text-lg text-corporate-grey-600 mb-6 leading-relaxed">
                    {region.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {region.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block bg-corporate-blue-50 text-corporate-blue-700 text-sm px-4 py-2 rounded-full mr-3 mb-2 hover:bg-corporate-blue-100 transition-colors font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`w-full ${region.color} text-white py-4 px-6 rounded-xl font-black text-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                    Explore {region.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bold CTA Section */}
      <div className="py-32 px-8 bg-gradient-to-r from-corporate-blue-600 via-corporate-blue-700 to-corporate-blue-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-7xl font-black text-white mb-12">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">Connect</span>?
          </h2>
          <p className="text-2xl text-white/90 mb-16 leading-relaxed">
            Our global team is ready to provide you with the insurance solutions you need, wherever you are in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="px-12 py-6 bg-white text-corporate-blue-600 font-black text-xl rounded-xl hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-110 shadow-2xl">
              Get Started Today
            </button>
            <button className="px-12 py-6 border-4 border-white text-white font-black text-xl rounded-xl hover:bg-white hover:text-corporate-blue-600 transition-all duration-500 transform hover:scale-110">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
