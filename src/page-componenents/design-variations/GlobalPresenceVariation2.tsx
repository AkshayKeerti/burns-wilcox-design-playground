'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const regions = [
  {
    name: 'North America',
    offices: 25,
    image: '/hero-1.jpg',
    description: 'Comprehensive coverage solutions across all 50 states',
    specialties: ['Property', 'Casualty', 'Professional Lines'],
  },
  {
    name: 'Europe',
    offices: 18,
    image: '/hero-2.jpg',
    description: 'Specialized expertise in continental risk management',
    specialties: ['Marine', 'Aviation', 'Energy'],
  },
  {
    name: 'Middle East',
    offices: 8,
    image: '/hero-3.jpg',
    description: 'Growing presence in emerging insurance markets',
    specialties: ['Construction', 'Infrastructure', 'Trade Credit'],
  },
  {
    name: 'Asia Pacific',
    offices: 12,
    image: '/hero-1.jpg',
    description: 'Strategic partnerships across diverse markets',
    specialties: ['Cyber', 'Technology', 'Manufacturing'],
  },
];

const stats = [
  { number: '60+', label: 'Global Offices' },
  { number: '2,300+', label: 'Insurance Professionals' },
  { number: '$3.6B+', label: 'Group Premium' },
  { number: '50+', label: 'Years of Excellence' },
];

export default function GlobalPresenceVariation2() {
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = stats.map((stat, index) => {
        const target = parseInt(stat.number.replace(/\D/g, ''));
        const increment = target / 50;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timers[index]);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 50);
      });

      return () => timers.forEach(timer => clearInterval(timer));
    }
  }, [isVisible]);

  return (
    <section className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-1.jpg" alt="Global Presence" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/80 via-corporate-blue-800/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="inline-block w-1 h-16 bg-corporate-blue-400 mb-6"></div>
            <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
              Global
              <br />
              <span className="font-normal">Presence</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Delivering insurance solutions with local expertise and global reach
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 border-2 border-white text-white font-light hover:bg-white hover:text-corporate-blue-900 transition-all duration-500">
              Explore Regions
            </button>
            <button className="px-8 py-4 bg-white text-corporate-blue-900 font-light hover:bg-corporate-blue-50 transition-all duration-500">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Regions Section */}
      <div className="py-24 px-8 bg-corporate-grey-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-corporate-grey-900 mb-6">Our Global Network</h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region) => (
              <div
                key={region.name}
                className="group bg-white p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
              >
                <div className="relative h-48 mb-6 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-light text-corporate-grey-900 mb-3">
                    {region.name}
                  </h3>
                  <p className="text-corporate-grey-600 mb-4 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {region.specialties.map(specialty => (
                      <span
                        key={specialty}
                        className="inline-block text-xs text-corporate-blue-600 border border-corporate-blue-200 px-3 py-1 mr-2 mb-2"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="text-3xl font-light text-corporate-blue-500 mb-2">
                    {region.offices}
                  </div>
                  <div className="text-sm text-corporate-grey-500 uppercase tracking-wide">
                    Offices
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="py-24 px-8 bg-corporate-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">By the Numbers</h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-light text-white mb-3">
                  {isVisible ? animatedStats[index] : 0}
                  {stat.number.includes('+') ? '+' : ''}
                  {stat.number.includes('$') ? '$' : ''}
                  {stat.number.includes('B') ? 'B' : ''}
                </div>
                <div className="text-corporate-blue-200 font-light uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-corporate-grey-900 mb-8">Ready to Connect?</h2>
          <p className="text-xl text-corporate-grey-600 mb-12 leading-relaxed">
            Our global team is ready to provide you with the insurance solutions you need, wherever
            you are in the world.
          </p>
          <button className="px-12 py-4 bg-corporate-blue-500 text-white font-light hover:bg-corporate-blue-600 transition-all duration-500">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
