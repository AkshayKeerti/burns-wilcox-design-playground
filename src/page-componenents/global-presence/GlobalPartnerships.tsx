import Image from 'next/image';

const partnerships = [
  {
    name: 'Strategic Alliances',
    description: 'Long-term partnerships with leading global insurers and reinsurers',
    benefits: [
      'Enhanced capacity and coverage options',
      'Streamlined claims processing',
      'Access to specialized expertise',
      'Competitive pricing structures',
    ],
    image: '/hero-1.jpg',
  },
  {
    name: 'Local Market Partners',
    description: 'Regional partnerships that provide deep market knowledge and regulatory expertise',
    benefits: [
      'Local market intelligence',
      'Regulatory compliance support',
      'Cultural market understanding',
      'Regional network access',
    ],
    image: '/hero-2.jpg',
  },
  {
    name: 'Technology Partners',
    description: 'Innovation partnerships driving digital transformation in insurance',
    benefits: [
      'Advanced risk assessment tools',
      'Digital platform integration',
      'Data analytics capabilities',
      'Automated processes',
    ],
    image: '/hero-3.jpg',
  },
];

export default function GlobalPartnerships() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Collaborative Excellence
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Global Partnerships & Alliances
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Strategic collaborations that enhance our global capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
        {partnerships.map((partnership, idx) => (
          <div
            key={partnership.name}
            className="bg-tertiary-blue-50 border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-48 mb-6">
              <Image
                src={partnership.image}
                alt={partnership.name}
                fill
                className="object-cover rounded-none"
              />
            </div>
            <h3 className="text-[23px] leading-[28px] font-medium text-corporate-grey-900 mb-3">
              {partnership.name}
            </h3>
            <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-4">
              {partnership.description}
            </p>
            <ul className="space-y-2 mb-4">
              {partnership.benefits.map((benefit, benefitIdx) => (
                <li key={benefitIdx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[14px] leading-[20px] text-corporate-grey-600">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <button className="text-corporate-blue-500 font-medium hover:underline text-sm">
              Learn More →
            </button>
          </div>
        ))}
      </div>

      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">
          Building Stronger Together
        </h3>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          Our global partnerships enable us to deliver comprehensive insurance solutions that combine international expertise with local market knowledge, ensuring our clients receive the best possible coverage and service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
            Partner With Us
          </button>
          <button className="bg-transparent text-white border border-white px-8 py-4 font-medium hover:bg-white hover:text-corporate-blue-500 transition-colors">
            View Partnership Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
