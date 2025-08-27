import Image from 'next/image';

export default function LocalExpertise() {
  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Regional Knowledge
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Local Expertise & Market Knowledge
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Specialized solutions designed for Middle Eastern markets and business practices
        </p>
      </div>

      {/* Main Content with Image */}
      <div className="w-full max-w-6xl mb-20">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <h3 className="text-[33px] leading-[40px] font-medium text-corporate-grey-900">
                Understanding Local Markets
              </h3>
              <p className="text-[18px] leading-[27px] text-corporate-grey-700 mb-4">
                Our deep understanding of Middle Eastern business practices, regulatory environments, and cultural nuances enables us to deliver insurance solutions that truly meet local needs.
              </p>
              <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-4">
                From Islamic finance compliance and energy sector specialization to construction projects and regulatory requirements, we bring expertise that understands the unique challenges of the region.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                    Islamic Finance Compliance
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                    Energy Sector Specialization
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                    Construction & Infrastructure
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                    Regulatory Compliance
                  </span>
                </div>
              </div>
              <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors self-start">
                Explore Our Regional Solutions
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-[500px]">
              <Image
                src="/hero-2.jpg"
                alt="Local Market Expertise"
                fill
                className="object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Simple Market Insights */}
      <div className="bg-white border border-corporate-grey-200 p-8 max-w-6xl text-center mb-16">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-6">
          Market Insights & Trends
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="text-center">
            <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-2">
              "The Middle East insurance market is expected to grow at 8.2% annually through 2028"
            </p>
            <span className="text-[12px] leading-[16px] text-corporate-grey-500">
              — Market Research Report 2024
            </span>
          </div>
          <div className="text-center">
            <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-2">
              "Digital transformation is driving 40% of new insurance product development in the region"
            </p>
            <span className="text-[12px] leading-[16px] text-corporate-grey-500">
              — Regional Insurance Survey
            </span>
          </div>
          <div className="text-center">
            <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-2">
              "Saudi Vision 2030 is creating $2.5 trillion in new insurance opportunities"
            </p>
            <span className="text-[12px] leading-[16px] text-corporate-grey-500">
              — Economic Analysis 2024
            </span>
          </div>
        </div>
      </div>

      {/* Regional Advantages */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">
          Why Choose Our Regional Expertise?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Local Knowledge</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Deep understanding of local business practices, cultural nuances, and regulatory environments
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Global Standards</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              International best practices combined with regional market intelligence
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Cultural Sensitivity</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Respect for local customs and business etiquette in all our interactions
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Network Access</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Extensive local partnerships and industry connections across the region
            </p>
          </div>
        </div>
        <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
          Explore Our Regional Solutions
        </button>
      </div>
    </section>
  );
}
