import Image from 'next/image';

const expertiseAreas = [
  {
    title: 'MENA Region Specialization',
    description: 'Deep understanding of Middle Eastern markets, regulatory environments, and cultural nuances',
    features: [
      'Islamic finance compliance',
      'Energy sector expertise',
      'Political risk assessment',
      'Local market regulations',
    ],
    image: '/hero-3.jpg',
  },
  {
    title: 'European Market Knowledge',
    description: 'Comprehensive coverage of EU regulations, Brexit implications, and continental business practices',
    features: [
      'EU regulatory compliance',
      'Cross-border solutions',
      'Local partnership networks',
      'Cultural market insights',
    ],
    image: '/hero-2.jpg',
  },
  {
    title: 'North American Expertise',
    description: 'Market-leading position with deep understanding of US and Canadian insurance landscapes',
    features: [
      'State-by-state compliance',
      'Federal regulations',
      'Industry best practices',
      'Claims expertise',
    ],
    image: '/hero-1.jpg',
  },
];

export default function RegionalExpertise() {
  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Local Knowledge
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Regional Expertise & Specialization
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Combining global standards with local market intelligence
        </p>
      </div>

      <div className="w-full max-w-7xl">
        {expertiseAreas.map((area, idx) => (
          <div
            key={area.title}
            className={`flex flex-col ${
              idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center mb-24 last:mb-0`}
          >
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h3 className="text-[33px] leading-[40px] font-medium text-corporate-grey-900">
                  {area.title}
                </h3>
                <p className="text-[18px] leading-[27px] text-corporate-grey-700">
                  {area.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors self-start">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[400px]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover rounded-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-corporate-grey-200 p-8 mt-16 max-w-4xl text-center">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Global Standards, Local Solutions
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          Our regional teams maintain the highest global standards while adapting solutions to meet local market requirements, regulatory environments, and cultural expectations.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors">
            Contact Regional Team
          </button>
          <button className="bg-white text-corporate-blue-500 border border-corporate-blue-500 px-6 py-3 font-medium hover:bg-corporate-blue-50 transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
