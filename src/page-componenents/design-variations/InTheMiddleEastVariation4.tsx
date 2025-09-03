'use client';

import Image from 'next/image';
import { useState } from 'react';

const regionalStats = [
  { number: '20+', label: 'Years in Region', icon: '📅' },
  { number: '8', label: 'Regional Offices', icon: '🏢' },
  { number: '500+', label: 'Local Partners', icon: '🤝' },
  { number: '15+', label: 'Insurance Lines', icon: '🛡️' },
];

const regionalServices = [
  {
    title: 'Property & Casualty',
    description: 'Comprehensive coverage for businesses and individuals across the region',
    icon: '🏗️',
    color: 'bg-gradient-to-br from-blue-600 to-blue-800',
  },
  {
    title: 'Energy & Construction',
    description: "Specialized solutions for the region's growing infrastructure sector",
    icon: '⚡',
    color: 'bg-gradient-to-br from-green-600 to-green-800',
  },
  {
    title: 'Trade & Logistics',
    description: "Coverage for the region's vital international trade operations",
    icon: '🚢',
    color: 'bg-gradient-to-br from-purple-600 to-purple-800',
  },
  {
    title: 'Cyber & Technology',
    description: "Modern protection for the region's digital transformation",
    icon: '💻',
    color: 'bg-gradient-to-br from-orange-600 to-orange-800',
  },
];

export default function InTheMiddleEastVariation4() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="bg-white w-full">
      {/* Bold Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Bold Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-3.jpg"
            alt="Burns & Wilcox in the Middle East"
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
              <span className="text-lg font-semibold tracking-wide">Regional Focus</span>
            </div>

            {/* Bold Typography */}
            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-corporate-blue-200 to-corporate-blue-400">
                BURNS & WILCOX
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-400 via-corporate-blue-200 to-white">
                IN THE MIDDLE EAST
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
              Deeply rooted in the region with over two decades of experience serving the unique
              insurance needs of Middle Eastern businesses and individuals
            </p>
          </div>

          {/* Bold Service Selector */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {regionalServices.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`px-8 py-4 rounded-full transition-all duration-500 font-bold text-lg ${
                  activeService === index
                    ? 'bg-white text-corporate-blue-900 shadow-2xl scale-110'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Bold Active Service Info */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-4xl font-black mb-4">{regionalServices[activeService].title}</h3>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              {regionalServices[activeService].description}
            </p>
            <div className="text-lg text-corporate-blue-200 font-bold">Active Service</div>
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Crect width='4' height='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-white mb-8">
              Regional Impact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-corporate-blue-400">
                by the Numbers
              </span>
            </h2>
            <div className="w-32 h-1 bg-corporate-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {regionalStats.map((stat) => (
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

      {/* Bold Services Grid */}
      <div className="py-32 px-8 bg-gradient-to-br from-corporate-grey-50 via-white to-corporate-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-corporate-grey-900 mb-8">
              Explore Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-500 to-corporate-blue-700">
                Regional Services
              </span>
            </h2>
            <div className="w-32 h-1 bg-corporate-blue-500 mx-auto"></div>
            <p className="text-2xl text-corporate-grey-600 max-w-4xl mx-auto mt-8">
              Click on any service to discover our specialized solutions for the Middle East
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {regionalServices.map((service, index) => (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform hover:-translate-y-6 transition-all duration-700 ${
                  activeService === index ? 'ring-4 ring-corporate-blue-500 scale-105' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="relative h-96 overflow-hidden">
                  <div className={`absolute inset-0 ${service.color}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl text-white group-hover:scale-125 transition-transform duration-1000">
                      {service.icon}
                    </div>
                  </div>

                  {/* Bold Interactive Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                      <div className="bg-white text-corporate-blue-900 px-8 py-4 rounded-full font-black text-lg shadow-2xl">
                        Click to Explore
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white">
                  <h3 className="text-3xl font-black text-corporate-grey-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-lg text-corporate-grey-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <button
                    className={`w-full ${service.color} text-white py-4 px-6 rounded-xl font-black text-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}
                  >
                    Learn More
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
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-200 to-white">
              Connect
            </span>
            ?
          </h2>
          <p className="text-2xl text-white/90 mb-16 leading-relaxed">
            Our Middle East team is ready to provide you with the insurance solutions you need
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
