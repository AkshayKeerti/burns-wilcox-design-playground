import Image from 'next/image';

const legacyElements = [
  {
    title: 'Founder\'s Vision',
    description: 'H. William Kaufman\'s original vision of providing exceptional insurance services with integrity and excellence continues to guide our company today.',
    quote: '"We succeed when our clients succeed. Their success is our success."',
    author: 'H. William Kaufman',
    role: 'Founder',
    image: '/hero-1.jpg',
  },
  {
    title: 'Client-Centric Approach',
    description: 'For over 50 years, we\'ve maintained an unwavering focus on understanding and meeting our clients\' unique insurance needs.',
    quote: '"Every client is unique, and every solution should be tailored to their specific requirements."',
    author: 'Company Philosophy',
    role: 'Core Value',
    image: '/hero-2.jpg',
  },
  {
    title: 'Innovation & Adaptation',
    description: 'Throughout our history, we\'ve consistently embraced new technologies and approaches to better serve our clients.',
    quote: '"Innovation isn\'t just about technology—it\'s about finding better ways to protect what matters most."',
    author: 'Leadership Team',
    role: 'Strategic Focus',
    image: '/hero-3.jpg',
  },
];

const values = [
  {
    value: 'Integrity',
    description: 'Operating with honesty, transparency, and ethical behavior in all our interactions',
    icon: '🤝',
  },
  {
    value: 'Excellence',
    description: 'Striving for the highest standards in everything we do, from client service to professional development',
    icon: '⭐',
  },
  {
    value: 'Innovation',
    description: 'Embracing new ideas and technologies to continuously improve our services and solutions',
    icon: '🚀',
  },
  {
    value: 'Client Focus',
    description: 'Putting our clients\' needs first and building long-term relationships based on trust and results',
    icon: '🎯',
  },
  {
    value: 'Global Perspective',
    description: 'Leveraging worldwide expertise while maintaining local market knowledge and cultural sensitivity',
    icon: '🌍',
  },
  {
    value: 'Sustainability',
    description: 'Building a business that creates long-term value for all stakeholders and communities',
    icon: '🌱',
  },
];

export default function Legacy() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Enduring Impact
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Our Legacy & Values
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          The principles and vision that have guided us for over five decades
        </p>
      </div>

      {/* Legacy Elements */}
      <div className="w-full max-w-7xl mb-20">
        {legacyElements.map((element, idx) => (
          <div
            key={element.title}
            className={`flex flex-col ${
              idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center mb-24 last:mb-0`}
          >
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <h3 className="text-[33px] leading-[40px] font-medium text-corporate-grey-900">
                  {element.title}
                </h3>
                <p className="text-[18px] leading-[27px] text-corporate-grey-700">
                  {element.description}
                </p>
                <div className="bg-tertiary-blue-50 border-l-4 border-corporate-blue-500 p-6">
                  <blockquote className="text-[20px] leading-[28px] text-corporate-grey-900 italic mb-3">
                    "{element.quote}"
                  </blockquote>
                  <div className="text-[16px] leading-[20px] text-corporate-grey-700">
                    <span className="font-medium">{element.author}</span>
                    <span className="text-corporate-grey-500"> — {element.role}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[400px]">
                <Image
                  src={element.image}
                  alt={element.title}
                  fill
                  className="object-cover rounded-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Core Values */}
      <div className="w-full max-w-7xl mb-20">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-12 text-center">
          Core Values That Endure
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.value}
              className="bg-tertiary-blue-50 border border-corporate-grey-100 p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900 mb-3">
                {value.value}
              </h4>
              <p className="text-[14px] leading-[20px] text-corporate-grey-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact & Future */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center mb-16">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">
          Our Enduring Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Industry Leadership</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Shaping the future of insurance through innovation and best practices
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Client Success</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Helping thousands of businesses and individuals protect what matters most
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Community Impact</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Contributing to economic growth and development in communities worldwide
            </p>
          </div>
        </div>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          Our legacy is not just about what we\'ve accomplished, but about the foundation we\'ve built for future generations of insurance professionals and the continued success of our clients.
        </p>
        <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
          Join Our Legacy
        </button>
      </div>

      {/* Call to Action */}
      <div className="bg-white border border-corporate-grey-200 p-8 max-w-4xl text-center">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Be Part of Our Continuing Story
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          Whether you\'re a client, partner, or team member, you\'re part of the Burns & Wilcox legacy. Together, we\'re building the future of insurance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-corporate-blue-500 text-white px-8 py-4 font-medium hover:bg-corporate-blue-600 transition-colors">
            Explore Career Opportunities
          </button>
          <button className="bg-white text-corporate-blue-500 border border-corporate-blue-500 px-8 py-4 font-medium hover:bg-corporate-blue-50 transition-colors">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
