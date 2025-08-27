'use client';

import Image from 'next/image';
import { useState } from 'react';

const historyStats = [
  { number: '50+', label: 'Years of Excellence', icon: '⭐' },
  { number: '60+', label: 'Global Offices', icon: '🌍' },
  { number: '2,300+', label: 'Insurance Professionals', icon: '👥' },
  { number: '$3.6B+', label: 'Group Premium', icon: '💰' }
];

export default function OurHistoryVariation2() {
  const [activeEra, setActiveEra] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Minimalist Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-1.jpg"
            alt="Our History"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="mb-12">
            <div className="inline-block border-b-2 border-white/30 pb-2 mb-8">
              <span className="text-sm font-light tracking-widest uppercase">Legacy</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
              Our <span className="font-normal">History</span>
            </h1>
            
            <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Five decades of excellence in insurance, building trust and delivering innovative solutions to clients worldwide
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-3 bg-white text-corporate-blue-900 font-light rounded-none hover:bg-corporate-grey-50 transition-all duration-300 border border-white">
              Explore Timeline
            </button>
            <button className="px-8 py-3 border border-white text-white font-light rounded-none hover:bg-white hover:text-corporate-blue-900 transition-all duration-300">
              View Milestones
            </button>
          </div>
        </div>
      </div>

      {/* Minimalist Stats Section */}
      <div className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {historyStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-4 text-corporate-grey-400">{stat.icon}</div>
                <div className="text-3xl font-light text-corporate-grey-900 mb-2">{stat.number}</div>
                <div className="text-sm text-corporate-grey-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimalist CTA Section */}
      <div className="py-24 px-8 bg-corporate-grey-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Continue Our <span className="font-normal">Legacy</span>
          </h2>
          <p className="text-lg text-corporate-grey-300 mb-8 leading-relaxed">
            Join us in building the future of insurance with innovative solutions and trusted partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-corporate-grey-900 font-light rounded-none hover:bg-corporate-grey-100 transition-all duration-300 border border-white">
              Partner With Us
            </button>
            <button className="px-8 py-3 border border-white text-white font-light rounded-none hover:bg-white hover:text-corporate-grey-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
