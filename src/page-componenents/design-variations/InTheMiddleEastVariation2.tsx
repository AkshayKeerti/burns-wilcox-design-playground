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
    color: 'border-blue-500'
  },
  {
    title: 'Energy & Construction',
    description: 'Specialized solutions for the region\'s growing infrastructure sector',
    icon: '⚡',
    color: 'border-green-500'
  },
  {
    title: 'Trade & Logistics',
    description: 'Coverage for the region\'s vital international trade operations',
    icon: '🚢',
    color: 'border-purple-500'
  },
  {
    title: 'Cyber & Technology',
    description: 'Modern protection for the region\'s digital transformation',
    icon: '💻',
    color: 'border-orange-500'
  }
];

export default function InTheMiddleEastVariation2() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Minimalist Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-3.jpg"
            alt="Burns & Wilcox in the Middle East"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="mb-12">
            <div className="inline-block border-b-2 border-white/30 pb-2 mb-8">
              <span className="text-sm font-light tracking-widest uppercase">Regional Focus</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
              Burns & Wilcox
              <br />
              <span className="font-normal">in the Middle East</span>
            </h1>
            
            <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Deeply rooted in the region with over two decades of experience serving the unique insurance needs of Middle Eastern businesses and individuals
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-3 bg-white text-corporate-blue-900 font-light rounded-none hover:bg-corporate-grey-50 transition-all duration-300 border border-white">
              Explore Our Presence
            </button>
            <button className="px-8 py-3 border border-white text-white font-light rounded-none hover:bg-white hover:text-corporate-blue-900 transition-all duration-300">
              Regional Services
            </button>
          </div>
        </div>
      </div>

      {/* Minimalist Stats Section */}
      <div className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {regionalStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-4 text-corporate-grey-400">{stat.icon}</div>
                <div className="text-3xl font-light text-corporate-grey-900 mb-2">{stat.number}</div>
                <div className="text-sm text-corporate-grey-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimalist Services Section */}
      <div className="py-24 px-8 bg-corporate-grey-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-corporate-grey-900 mb-4">
              Regional <span className="font-normal">Services</span>
            </h2>
            <div className="w-16 h-px bg-corporate-grey-300 mx-auto"></div>
            <p className="text-lg text-corporate-grey-600 max-w-2xl mx-auto mt-6">
              Comprehensive insurance solutions tailored to the Middle East market
            </p>
          </div>
          
          <div className="space-y-8">
            {regionalServices.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white p-8 border-l-4 transition-all duration-500 cursor-pointer hover:shadow-lg ${
                  activeService === index ? 'border-corporate-blue-500' : service.color
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-6">
                  <div className="text-3xl text-corporate-grey-400">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-corporate-grey-900 mb-3">
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

      {/* Minimalist CTA Section */}
      <div className="py-24 px-8 bg-corporate-grey-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to <span className="font-normal">Connect</span>?
          </h2>
          <p className="text-lg text-corporate-grey-300 mb-8 leading-relaxed">
            Our Middle East team is ready to provide you with the insurance solutions you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-corporate-grey-900 font-light rounded-none hover:bg-corporate-grey-100 transition-all duration-300 border border-white">
              Get Started Today
            </button>
            <button className="px-8 py-3 border border-white text-white font-light rounded-none hover:bg-white hover:text-corporate-grey-900 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
