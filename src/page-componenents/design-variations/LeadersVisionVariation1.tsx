'use client';

import Image from 'next/image';
import { useState } from 'react';

const leadershipStats = [
  { number: '25+', label: 'Years Combined Experience', icon: '👨‍💼' },
  { number: '15+', label: 'Leadership Roles', icon: '🎯' },
  { number: '100+', label: 'Team Members Led', icon: '👥' },
  { number: '50+', label: 'Industry Awards', icon: '🏆' }
];

const coreValues = [
  {
    title: 'Integrity',
    description: 'Building trust through honest, transparent relationships with clients and partners',
    icon: '🤝',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Innovation',
    description: 'Continuously evolving our solutions to meet changing market needs',
    icon: '💡',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional service and results in everything we do',
    icon: '⭐',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve the best outcomes for our clients',
    icon: '🤲',
    color: 'from-orange-500 to-orange-600'
  }
];

const visionGoals = [
  {
    year: '2025',
    title: 'Digital Transformation',
    description: 'Complete digital transformation across all business operations',
    icon: '🚀',
    color: 'from-blue-500 to-blue-600'
  },
  {
    year: '2026',
    title: 'Global Expansion',
    description: 'Establish presence in 10 new international markets',
    icon: '🌍',
    color: 'from-green-500 to-green-600'
  },
  {
    year: '2027',
    title: 'Innovation Hub',
    description: 'Launch innovation center for insurance technology solutions',
    icon: '🔬',
    color: 'from-purple-500 to-purple-600'
  },
  {
    year: '2028',
    title: 'Market Leadership',
    description: 'Become the #1 insurance broker in key markets',
    icon: '👑',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function LeadersVisionVariation1() {
  const [activeValue, setActiveValue] = useState(0);
  const [activeGoal, setActiveGoal] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Modern Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-2.jpg"
            alt="Leaders & Vision"
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
              <span className="text-sm font-medium">Leadership</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Leaders & <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
                Vision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Guided by experienced leaders with a clear vision for the future of insurance
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-corporate-blue-900 font-bold rounded-lg hover:bg-corporate-grey-50 transition-all duration-500 transform hover:scale-105 shadow-lg">
              Meet Our Team
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-corporate-blue-900 transition-all duration-500 transform hover:scale-105">
              Our Vision
            </button>
          </div>
        </div>
      </div>

      {/* Modern Stats Cards */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {leadershipStats.map((stat, index) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-corporate-blue-600 mb-2">{stat.number}</div>
                <div className="text-corporate-grey-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Core Values Grid */}
      <div className="py-20 px-8 bg-corporate-grey-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-corporate-grey-900 mb-6">
              Our Core <span className="text-corporate-blue-500">Values</span>
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
            <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto mt-6">
              The principles that guide our decisions and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  activeValue === index ? 'ring-4 ring-corporate-blue-500' : ''
                }`}
                onClick={() => setActiveValue(index)}
              >
                <div className="flex items-start gap-6">
                  <div className={`text-4xl bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-corporate-grey-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-corporate-grey-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Vision Goals Grid */}
      <div className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-corporate-grey-900 mb-6">
              Our Vision for the <span className="text-corporate-blue-500">Future</span>
            </h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
            <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto mt-6">
              Strategic goals that will shape the future of our company and industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionGoals.map((goal, index) => (
              <div
                key={goal.year}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  activeGoal === index ? 'ring-4 ring-corporate-blue-500' : ''
                }`}
                onClick={() => setActiveGoal(index)}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-4">
                    <div className={`text-4xl bg-gradient-to-r ${goal.color} bg-clip-text text-transparent`}>
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-block bg-gradient-to-r ${goal.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                          {goal.year}
                        </span>
                        <h3 className="text-2xl font-bold text-corporate-grey-900">
                          {goal.title}
                        </h3>
                      </div>
                      <p className="text-corporate-grey-600 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
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
            Join Our <span className="text-corporate-blue-200">Vision</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with us to shape the future of insurance and risk management
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
