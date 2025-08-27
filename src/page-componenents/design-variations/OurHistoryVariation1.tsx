'use client';

import Image from 'next/image';
import { useState } from 'react';

const historyStats = [
  { number: '50+', label: 'Years of Excellence', icon: '⭐' },
  { number: '60+', label: 'Global Offices', icon: '🌍' },
  { number: '2,300+', label: 'Insurance Professionals', icon: '👥' },
  { number: '$3.6B+', label: 'Group Premium', icon: '💰' }
];

const historyEras = [
  {
    decade: '1970s',
    title: 'Foundation & Growth',
    description: 'Established as a leading insurance broker with innovative solutions',
    image: '/hero-1.jpg',
    achievements: ['Company Founded', 'First Office', 'Initial Partnerships'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    decade: '1980s',
    title: 'Expansion Era',
    description: 'Rapid growth and establishment of regional presence',
    image: '/hero-2.jpg',
    achievements: ['Regional Expansion', 'Service Diversification', 'Market Leadership'],
    color: 'from-green-500 to-green-600'
  },
  {
    decade: '1990s',
    title: 'Innovation & Technology',
    description: 'Embracing digital transformation and modern insurance solutions',
    image: '/hero-3.jpg',
    achievements: ['Digital Adoption', 'New Product Lines', 'Technology Integration'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    decade: '2000s',
    title: 'Global Reach',
    description: 'Expanding internationally and establishing global partnerships',
    image: '/hero-1.jpg',
    achievements: ['International Expansion', 'Global Partnerships', 'Market Diversification'],
    color: 'from-orange-500 to-orange-600'
  }
];

export default function OurHistoryVariation1() {
  const [activeEra, setActiveEra] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Modern Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-1.jpg"
            alt="Our History"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/90 via-corporate-blue-800/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-corporate-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Legacy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
                History
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Five decades of excellence in insurance, building trust and delivering innovative solutions to clients worldwide
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-corporate-blue-900 font-bold rounded-lg hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-105 shadow-lg">
              Explore Timeline
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-corporate-blue-900 transition-all duration-500 transform hover:scale-105">
              View Milestones
            </button>
          </div>
        </div>
      </div>

      {/* Modern Stats Cards */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {historyStats.map((stat, index) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-corporate-blue-600 mb-2">{stat.number}</div>
                <div className="text-corporate-grey-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern History Eras Grid */}
      <div className="py-20 px-8 bg-corporate-grey-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-corporate-grey-900 mb-6">
              Journey Through <span className="text-corporate-blue-500">Time</span>
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
            <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto mt-6">
              Explore the key milestones and achievements that shaped our company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historyEras.map((era, index) => (
              <div
                key={era.decade}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  activeEra === index ? 'ring-4 ring-corporate-blue-500' : ''
                }`}
                onClick={() => setActiveEra(index)}
              >
                <div className="relative h-48">
                  <Image
                    src={era.image}
                    alt={era.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-block bg-gradient-to-r ${era.color} text-white px-4 py-2 rounded-full text-lg font-bold`}>
                      {era.decade}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-corporate-grey-900 mb-3">
                    {era.title}
                  </h3>
                  <p className="text-corporate-grey-600 mb-4 leading-relaxed">
                    {era.description}
                  </p>
                  
                  <div className="space-y-2">
                    {era.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-corporate-blue-400 rounded-full"></span>
                        <span className="text-sm text-corporate-grey-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern CTA Section */}
      <div className="py-20 px-8 bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Continue Our <span className="text-corporate-blue-200">Legacy</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join us in building the future of insurance with innovative solutions and trusted partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-corporate-blue-600 font-bold rounded-lg hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-105 shadow-lg">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-corporate-blue-600 transition-all duration-500 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
