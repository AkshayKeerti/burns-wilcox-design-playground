import Image from 'next/image';

export default function RegionalPresence() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Middle East Presence
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Regional Presence & Growth
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Serving the Middle East with local expertise and global standards
        </p>
      </div>

      {/* Main Content with Image */}
      <div className="w-full max-w-6xl mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <h3 className="text-[33px] leading-[40px] font-medium text-corporate-grey-900">
                Our Regional Footprint
              </h3>
              <p className="text-[18px] leading-[27px] text-corporate-grey-700 mb-4">
                Burns & Wilcox has established a strong presence across the Middle East, serving clients in six key countries with specialized insurance solutions tailored to local market needs.
              </p>
              <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-4">
                From our regional headquarters in Dubai to our growing presence in Saudi Arabia, Qatar, Kuwait, Egypt, and Oman, we bring global expertise with deep local market knowledge.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">Qatar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">Kuwait</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">Egypt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">Oman</span>
                </div>
              </div>
              <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors self-start">
                Learn More About Our Regional Services
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-[500px]">
              <Image
                src="/hero-1.jpg"
                alt="Middle East Regional Presence"
                fill
                className="object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Simple Statistics */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center">
        <h3 className="text-[33px] leading-[40px] font-medium mb-8">
          Middle East by the Numbers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-4xl font-bold mb-2">6</div>
            <div>Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div>Cities</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">20+</div>
            <div>Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div>Local Professionals</div>
          </div>
        </div>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          Our deep regional knowledge combined with global expertise enables us to deliver insurance solutions that understand the unique challenges and opportunities of the Middle East.
        </p>
        <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
          Contact Regional Team
        </button>
      </div>
    </section>
  );
}
