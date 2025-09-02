'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const solutionCategories = [
  {
    name: 'Consumer Lines',
    image: '/personal-insurance.png',
    description: 'Comprehensive insurance solutions for individuals and families',
    products: ['Motor', 'Home', 'Travel', 'High Value Assets'],
    stats: { clients: '2,500+', claims: '99.2%', coverage: '$50M+' },
  },
  {
    name: 'Corporate General Broking',
    image: '/corporate-risk.png',
    description: 'Strategic insurance and risk management for businesses',
    products: ['Property', 'Casualty', 'Engineering', 'Marine'],
    stats: { clients: '1,800+', claims: '98.7%', coverage: '$25M+' },
  },
  {
    name: 'Human Capital Benefits',
    image: '/employee-benefits.png',
    description: 'Employee benefits and group insurance solutions',
    products: ['Group Medical', 'Group Life', 'Wellbeing', 'Personal Accident'],
    stats: { clients: '3,200+', claims: '99.5%', coverage: '$100M+' },
  },
  {
    name: 'Specialty',
    image: '/partner.png',
    description: 'Specialized insurance for unique and complex risks',
    products: ['Cyber Risk', 'D&O Liability', 'Aviation', 'Energy'],
    stats: { clients: '1,500+', claims: '98.9%', coverage: '$75M+' },
  },
];

const stats = [
  { number: '6', label: 'Solution Categories' },
  { number: '50+', label: 'Product Lines' },
  { number: '$500M+', label: 'Total Coverage' },
  { number: '99%', label: 'Client Satisfaction' },
];

export default function SolutionsVariation6() {
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
          <Image src="/hero-1.jpg" alt="Insurance Solutions" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/80 via-corporate-blue-800/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="inline-block w-1 h-16 bg-corporate-blue-400 mb-6"></div>
            <h1 className="text-6xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
              Insurance
              <br />
              <span className="font-normal">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Comprehensive coverage options tailored to protect what matters most
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 border-2 border-white text-white font-light hover:bg-white hover:text-corporate-blue-900 transition-all duration-500">
              Explore Solutions
            </button>
            <button className="px-8 py-4 bg-white text-corporate-blue-900 font-light hover:bg-corporate-blue-50 transition-all duration-500">
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Solution Categories Section */}
      <div className="py-24 px-8 bg-corporate-grey-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-corporate-grey-900 mb-6">Our Solution Categories</h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionCategories.map((category, index) => (
              <div
                key={category.name}
                className="group bg-white p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
              >
                <div className="relative h-48 mb-6 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-light text-corporate-grey-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-corporate-grey-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {category.products.map(product => (
                      <span
                        key={product}
                        className="inline-block text-xs text-corporate-blue-600 border border-corporate-blue-200 px-3 py-1 mr-2 mb-2"
                      >
                        {product}
                      </span>
                    ))}
                  </div>

                  <div className="text-3xl font-light text-corporate-blue-500 mb-2">
                    {category.stats.clients}
                  </div>
                  <div className="text-sm text-corporate-grey-500 uppercase tracking-wide">
                    Clients Served
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
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-light text-white mb-3">
                  {isVisible ? animatedStats[index] : 0}
                  {stat.number.includes('+') ? '+' : ''}
                  {stat.number.includes('$') ? '$' : ''}
                  {stat.number.includes('M') ? 'M' : ''}
                  {stat.number.includes('%') ? '%' : ''}
                </div>
                <div className="text-corporate-blue-200 font-light uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Lines Section */}
      <div className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-corporate-grey-900 mb-6">Comprehensive Product Lines</h2>
            <div className="w-24 h-px bg-corporate-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consumer Lines Products */}
            <div className="bg-corporate-grey-50 p-8 rounded-lg">
              <h3 className="text-2xl font-light text-corporate-grey-900 mb-6">Consumer Lines</h3>
              <div className="space-y-3">
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Motor Insurance
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Home Insurance
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Travel Insurance
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  High Value Asset Protection
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Private Medical
                </div>
              </div>
            </div>

            {/* Corporate Products */}
            <div className="bg-corporate-grey-50 p-8 rounded-lg">
              <h3 className="text-2xl font-light text-corporate-grey-900 mb-6">Corporate Solutions</h3>
              <div className="space-y-3">
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Property All Risks
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  General Liability
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Professional Indemnity
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Construction All Risks
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Marine Cargo
                </div>
              </div>
            </div>

            {/* Specialty Products */}
            <div className="bg-corporate-grey-50 p-8 rounded-lg">
              <h3 className="text-2xl font-light text-corporate-grey-900 mb-6">Specialty Lines</h3>
              <div className="space-y-3">
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Cyber Risk Insurance
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Directors & Officers
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Aviation Insurance
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Energy Insurance
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Trade Credit
                </div>
              </div>
            </div>

            {/* Human Capital */}
            <div className="bg-corporate-grey-50 p-8 rounded-lg">
              <h3 className="text-2xl font-light text-corporate-grey-900 mb-6">Human Capital</h3>
              <div className="space-y-3">
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Group Medical
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Group Life
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Employee Wellbeing
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Personal Accident
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Travel Insurance
                </div>
              </div>
            </div>

            {/* Reinsurance */}
            <div className="bg-corporate-grey-50 p-8 rounded-lg">
              <h3 className="text-2xl font-light text-corporate-grey-900 mb-6">Reinsurance</h3>
              <div className="space-y-3">
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Facultative
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Treaty
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Catastrophe
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Property
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Casualty
                </div>
              </div>
            </div>

            {/* Risk Engineering */}
            <div className="bg-corporate-grey-50 p-8 rounded-lg">
              <h3 className="text-2xl font-light text-corporate-grey-900 mb-6">Risk Engineering</h3>
              <div className="space-y-3">
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Risk Surveys
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Risk Analytics
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Risk Control
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Claim Advocacy
                </div>
                <div className="flex items-center text-corporate-grey-700">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mr-3"></div>
                  Consulting Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-8 bg-corporate-grey-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-corporate-grey-900 mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-corporate-grey-600 mb-12 leading-relaxed">
            Our team of insurance experts is ready to help you find the perfect coverage solution
            for your unique needs and circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-4 bg-corporate-blue-500 text-white font-light hover:bg-corporate-blue-600 transition-all duration-500">
              Get a Quote
            </button>
            <button className="px-12 py-4 border-2 border-corporate-blue-500 text-corporate-blue-500 font-light hover:bg-corporate-blue-500 hover:text-white transition-all duration-500">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
