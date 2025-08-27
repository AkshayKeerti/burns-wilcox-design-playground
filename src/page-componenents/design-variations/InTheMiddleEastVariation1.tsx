'use client';

import Image from 'next/image';
import { useState } from 'react';

const regionalStats = [
  { number: '20+', label: 'Years in Region', icon: '📅' },
  { number: '8', label: 'Regional Offices', icon: '🏢' },
  { number: '500+', label: 'Local Partners', icon: '🤝' },
  { number: '15+', label: 'Insurance Lines', icon: '🛡️' }
];

const regionalServices = [
  {
    title: 'Property & Casualty',
    description: 'Comprehensive coverage for businesses and individuals across the region',
    icon: '🏗️',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Energy & Construction',
    description: 'Specialized solutions for the region\'s growing infrastructure sector',
    icon: '⚡',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Trade & Logistics',
    description: 'Coverage for the region\'s vital international trade operations',
    icon: '🚢',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Cyber & Technology',
    description: 'Modern protection for the region\'s digital transformation',
    icon: '💻',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function InTheMiddleEastVariation1() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Modern Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-3.jpg"
            alt="Burns & Wilcox in the Middle East"
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
              <span className="text-sm font-medium">Regional Focus</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Burns & Wilcox
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
                in the Middle East
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Deeply rooted in the region with over two decades of experience serving the unique insurance needs of Middle Eastern businesses and individuals
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-corporate-blue-900 font-bold rounded-lg hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-105 shadow-lg">
              Explore Our Presence
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-corporate-blue-900 transition-all duration-500 transform hover:scale-105">
              Regional Services
            </button>
          </div>
        </div>
      </div>

      {/* Modern Stats Cards */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {regionalStats.map((stat, index) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-corporate-blue-600 mb-2">{stat.number}</div>
                <div className="text-corporate-grey-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Services Grid */}
      <div className="py-20 px-8 bg-corporate-grey-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-corporate-grey-900 mb-6">
              Regional <span className="text-corporate-blue-500">Services</span>
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
            <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto mt-6">
              Comprehensive insurance solutions tailored to the Middle East market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalServices.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  activeService === index ? 'ring-4 ring-corporate-blue-500' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-6">
                  <div className={`text-4xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-corporate-grey-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-corporate-grey-600 leading-relaxed">
                      {service.description}
                    </p>
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
            Ready to <span className="text-corporate-blue-200">Connect</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our Middle East team is ready to provide you with the insurance solutions you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-corporate-blue-600 font-bold rounded-lg hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-corporate-blue-600 transition-all duration-500 transform hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
