'use client';

import Image from 'next/image';

const regions = [
  {
    name: 'North America',
    offices: 25,
    image: '/hero-1.jpg',
    description: 'Our largest market with comprehensive coverage solutions',
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

export default function GlobalPresenceVariation1() {
  return (
    <section className="bg-gradient-to-br from-corporate-blue-50 via-white to-tertiary-blue-50 w-full py-24 px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-3 bg-corporate-blue-100 text-corporate-blue-700 px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-corporate-blue-500 rounded-full"></div>
          <span className="text-sm font-medium">Global Network</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-corporate-grey-900 mb-6 leading-tight">
          Worldwide Presence,
          <span className="text-corporate-blue-500"> Local Expertise</span>
        </h1>
        <p className="text-xl text-corporate-grey-600 max-w-3xl mx-auto leading-relaxed">
          With over 60 offices across 4 continents, we deliver insurance solutions that understand
          your local market while leveraging global expertise and resources.
        </p>
      </div>

      {/* Regional Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <div
              key={region.name}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{region.name}</h3>
                  <p className="text-sm opacity-90">{region.offices} Offices</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-corporate-grey-600 text-sm mb-4 leading-relaxed">
                  {region.description}
                </p>

                <div className="space-y-2 mb-4">
                  {region.specialties.map(specialty => (
                    <span
                      key={specialty}
                      className="inline-block bg-corporate-blue-50 text-corporate-blue-700 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-corporate-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-corporate-blue-600 transition-colors duration-300 group-hover:bg-corporate-blue-600">
                  Explore {region.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Stats */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-corporate-grey-100">
          <h2 className="text-3xl font-bold text-corporate-grey-900 text-center mb-12">
            Global Impact by the Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-corporate-blue-500 mb-2">60+</div>
              <div className="text-corporate-grey-600 font-medium">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-corporate-blue-500 mb-2">2,300+</div>
              <div className="text-corporate-grey-600 font-medium">Insurance Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-corporate-blue-500 mb-2">$3.6B+</div>
              <div className="text-corporate-grey-600 font-medium">Group Premium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-corporate-blue-500 mb-2">50+</div>
              <div className="text-corporate-grey-600 font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
