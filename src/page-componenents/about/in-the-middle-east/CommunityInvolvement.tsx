import Image from 'next/image';

export default function CommunityInvolvement() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Regional Commitment
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Community Involvement & Impact
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Making a positive difference in the communities we serve across the Middle East
        </p>
      </div>

      {/* Main Content with Image */}
      <div className="w-full max-w-6xl mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <h3 className="text-[33px] leading-[40px] font-medium text-corporate-grey-900">
                Our Regional Commitment
              </h3>
              <p className="text-[18px] leading-[27px] text-corporate-grey-700 mb-4">
                Beyond providing insurance solutions, we're committed to supporting the growth and development of the Middle East region through various community initiatives and partnerships.
              </p>
              <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-4">
                From education and training programs to economic development support and sustainability initiatives, we work to create lasting positive impact in the communities we serve.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">
                    Education & Training
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">
                    Economic Development
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">
                    Sustainability Initiatives
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] leading-[20px] text-corporate-grey-700">
                    Cultural Preservation
                  </span>
                </div>
              </div>
              <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors self-start">
                Join Our Community Initiatives
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-[500px]">
              <Image
                src="/hero-3.jpg"
                alt="Community Involvement"
                fill
                className="object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Simple Strategic Partnerships */}
      <div className="w-full max-w-6xl mb-20">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-12 text-center">
          Strategic Regional Partnerships
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-corporate-grey-100 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/hero-2.jpg"
                alt="Middle East Insurance Federation"
                fill
                className="object-cover rounded-none"
              />
            </div>
            <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-3">
              Middle East Insurance Federation
            </h4>
            <p className="text-[14px] leading-[20px] text-corporate-grey-700">
              Active member contributing to industry standards and best practices
            </p>
          </div>
          <div className="bg-white border border-corporate-grey-100 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/hero-3.jpg"
                alt="Gulf Cooperation Council"
                fill
                className="object-cover rounded-none"
              />
            </div>
            <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-3">
              Gulf Cooperation Council
            </h4>
            <p className="text-[14px] leading-[20px] text-corporate-grey-700">
              Collaborating on regional insurance regulations and cross-border solutions
            </p>
          </div>
          <div className="bg-white border border-corporate-grey-100 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/hero-1.jpg"
                alt="Local Universities"
                fill
                className="object-cover rounded-none"
              />
            </div>
            <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-3">
              Local Universities
            </h4>
            <p className="text-[14px] leading-[20px] text-corporate-grey-700">
              Partnerships with leading educational institutions for talent development
            </p>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center mb-16">
        <h3 className="text-[33px] leading-[40px] font-medium mb-8">
          Our Regional Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-4xl font-bold mb-2">20+</div>
            <div>Years in Region</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div>Professionals Trained</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">$2B+</div>
            <div>Assets Protected</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div>Community Projects</div>
          </div>
        </div>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          Through our commitment to the Middle East, we've built lasting relationships and contributed to the region's growth and development.
        </p>
        <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
          Join Our Community Initiatives
        </button>
      </div>

      {/* Call to Action */}
      <div className="bg-white border border-corporate-grey-200 p-8 max-w-4xl text-center">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Be Part of Our Regional Journey
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          Whether you're looking for insurance solutions, partnership opportunities, or ways to contribute to regional development, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-corporate-blue-500 text-white px-8 py-4 font-medium hover:bg-corporate-blue-600 transition-colors">
            Partner With Us
          </button>
          <button className="bg-white text-corporate-blue-500 border border-corporate-blue-500 px-8 py-4 font-medium hover:bg-corporate-blue-50 transition-colors">
            Explore Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
