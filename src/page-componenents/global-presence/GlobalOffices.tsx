import Image from 'next/image';

const regions = [
  {
    name: 'North America',
    offices: 25,
    description: 'Our largest market with comprehensive coverage across all insurance lines',
    image: '/hero-1.jpg',
    countries: ['United States', 'Canada'],
  },
  {
    name: 'Europe',
    offices: 18,
    description: 'Strategic presence in key European markets with specialized expertise',
    image: '/hero-2.jpg',
    countries: ['United Kingdom', 'Germany', 'France', 'Italy', 'Spain'],
  },
  {
    name: 'Middle East & Africa',
    offices: 12,
    description: 'Growing regional hub with deep understanding of local markets',
    image: '/hero-3.jpg',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Egypt', 'South Africa'],
  },
  {
    name: 'Asia Pacific',
    offices: 8,
    description: 'Emerging markets with innovative insurance solutions',
    image: '/hero-1.jpg',
    countries: ['Singapore', 'Hong Kong', 'Australia', 'Japan', 'India'],
  },
];

export default function GlobalOffices() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Worldwide Network
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Global Offices & Presence
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Serving clients across 60+ locations worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl">
        {regions.map((region, idx) => (
          <div
            key={region.name}
            className="bg-tertiary-blue-50 border border-corporate-grey-100 p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-shrink-0 w-full lg:w-48 h-48 relative">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover rounded-none"
                />
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900">
                    {region.name}
                  </h3>
                  <span className="bg-corporate-blue-500 text-white text-sm px-3 py-1 font-medium">
                    {region.offices} Offices
                  </span>
                </div>
                <p className="text-[16px] leading-[24px] text-corporate-grey-700">
                  {region.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map(country => (
                    <span
                      key={country}
                      className="bg-white text-corporate-grey-600 text-sm px-3 py-1 border border-corporate-grey-200"
                    >
                      {country}
                    </span>
                  ))}
                </div>
                <button className="text-corporate-blue-500 font-medium hover:underline self-start mt-2">
                  View Offices →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 mt-16 text-center">
        <div className="bg-corporate-blue-500 text-white px-8 py-4 rounded-none">
          <h3 className="text-[24px] leading-[29px] font-medium mb-2">
            Global Statistics
          </h3>
          <div className="flex gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold">60+</div>
              <div>Offices</div>
            </div>
            <div>
              <div className="text-2xl font-bold">25+</div>
              <div>Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold">2,300+</div>
              <div>Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
