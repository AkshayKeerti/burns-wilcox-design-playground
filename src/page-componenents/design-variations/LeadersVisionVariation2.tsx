'use client';

import Image from 'next/image';
import { useState } from 'react';

const leadershipStats = [
  { number: '25+', label: 'Years Combined Experience', icon: '👨‍💼' },
  { number: '15+', label: 'Leadership Roles', icon: '🎯' },
  { number: '100+', label: 'Team Members Led', icon: '👥' },
  { number: '50+', label: 'Industry Awards', icon: '🏆' },
];

const coreValues = [
  {
    title: 'Integrity',
    description:
      'Building trust through honest, transparent relationships with clients and partners',
    icon: '🤝',
    color: 'border-blue-500',
  },
  {
    title: 'Innovation',
    description: 'Continuously evolving our solutions to meet changing market needs',
    icon: '💡',
    color: 'border-green-500',
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional service and results in everything we do',
    icon: '⭐',
    color: 'border-purple-500',
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve the best outcomes for our clients',
    icon: '🤲',
    color: 'border-orange-500',
  },
];

export default function LeadersVisionVariation2() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Minimalist Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-2.jpg" alt="Leaders & Vision" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="mb-12">
            <div className="inline-block border-b-2 border-white/30 pb-2 mb-8">
              <span className="text-sm font-light tracking-widest uppercase">Leadership</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
              Leaders & <span className="font-normal">Vision</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Guided by experienced leaders with a clear vision for the future of insurance
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-3 bg-white text-corporate-blue-900 font-light rounded-none hover:bg-corporate-grey-50 transition-all duration-300 border border-white">
              Meet Our Team
            </button>
            <button className="px-8 py-3 border border-white text-white font-light rounded-none hover:bg-white hover:text-corporate-blue-900 transition-all duration-300">
              Our Vision
            </button>
          </div>
        </div>
      </div>

      {/* Minimalist Stats Section */}
      <div className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {leadershipStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-4 text-corporate-grey-400">{stat.icon}</div>
                <div className="text-3xl font-light text-corporate-grey-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-corporate-grey-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimalist Core Values Section */}
      <div className="py-24 px-8 bg-corporate-grey-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-corporate-grey-900 mb-4">
              Our Core <span className="font-normal">Values</span>
            </h2>
            <div className="w-16 h-px bg-corporate-grey-300 mx-auto"></div>
            <p className="text-lg text-corporate-grey-600 max-w-2xl mx-auto mt-6">
              The principles that guide our decisions and shape our culture
            </p>
          </div>

          <div className="space-y-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white p-8 border-l-4 transition-all duration-500 cursor-pointer hover:shadow-lg ${
                  activeValue === index ? 'border-corporate-blue-500' : value.color
                }`}
                onClick={() => setActiveValue(index)}
              >
                <div className="flex items-start gap-6">
                  <div className="text-3xl text-corporate-grey-400">{value.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-corporate-grey-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-corporate-grey-600 leading-relaxed">{value.description}</p>
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
            Join Our <span className="font-normal">Vision</span>
          </h2>
          <p className="text-lg text-corporate-grey-300 mb-8 leading-relaxed">
            Partner with us to shape the future of insurance and risk management
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
