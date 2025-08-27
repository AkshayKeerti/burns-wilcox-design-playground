import Image from 'next/image';

const coreValues = [
  {
    value: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical behavior in all our interactions, building trust with clients, partners, and communities.',
    icon: '🤝',
    examples: [
      'Transparent pricing and policies',
      'Ethical business practices',
      'Honest communication',
      'Trust-based relationships',
    ],
    color: 'bg-corporate-blue-500',
  },
  {
    value: 'Excellence',
    description: 'We strive for the highest standards in everything we do, from client service to professional development and operational efficiency.',
    icon: '⭐',
    examples: [
      'Superior client service',
      'Continuous improvement',
      'Professional development',
      'Quality assurance',
    ],
    color: 'bg-secondary-yellow-500',
  },
  {
    value: 'Innovation',
    description: 'We embrace new ideas, technologies, and approaches to continuously improve our services and deliver better solutions for our clients.',
    icon: '🚀',
    examples: [
      'Digital transformation',
      'Creative solutions',
      'Technology adoption',
      'Process innovation',
    ],
    color: 'bg-secondary-blue-500',
  },
  {
    value: 'Client Focus',
    description: 'Our clients\' success is our success. We put their needs first and build long-term relationships based on trust, results, and mutual growth.',
    icon: '🎯',
    examples: [
      'Personalized solutions',
      'Responsive service',
      'Long-term partnerships',
      'Client success focus',
    ],
    color: 'bg-corporate-grey-700',
  },
  {
    value: 'Global Perspective',
    description: 'We leverage worldwide expertise while maintaining deep local market knowledge and cultural sensitivity in every region we serve.',
    icon: '🌍',
    examples: [
      'International expertise',
      'Local market knowledge',
      'Cultural understanding',
      'Global best practices',
    ],
    color: 'bg-tertiary-blue-500',
  },
  {
    value: 'Sustainability',
    description: 'We build a business that creates long-term value for all stakeholders, including our communities, environment, and future generations.',
    icon: '🌱',
    examples: [
      'Environmental responsibility',
      'Social impact',
      'Long-term thinking',
      'Community development',
    ],
    color: 'bg-green-600',
  },
];

const valueInAction = [
  {
    title: 'Integrity in Practice',
    description: 'Our transparent pricing model and clear communication ensure clients always know what they\'re paying for and what coverage they receive.',
    image: '/hero-1.jpg',
  },
  {
    title: 'Excellence in Service',
    description: 'Our 95% client satisfaction rate reflects our commitment to delivering exceptional service and exceeding expectations.',
    image: '/hero-2.jpg',
  },
  {
    title: 'Innovation in Action',
    description: 'Our digital platforms and AI-powered risk assessment tools demonstrate our commitment to leveraging technology for client benefit.',
    image: '/hero-3.jpg',
  },
];

export default function Values() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Our Foundation
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Core Values & Principles
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          The fundamental principles that guide our decisions, actions, and relationships
        </p>
      </div>

      {/* Core Values Grid */}
      <div className="w-full max-w-7xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.value}
              className="bg-tertiary-blue-50 border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{value.icon}</div>
                <div className={`${value.color} text-white text-sm px-3 py-1 font-medium inline-block mb-3`}>
                  {value.value}
                </div>
                <p className="text-[14px] leading-[20px] text-corporate-grey-700">
                  {value.description}
                </p>
              </div>
              
              <div>
                <h5 className="text-[16px] leading-[20px] font-medium text-corporate-grey-900 mb-3">
                  How We Live This Value
                </h5>
                <ul className="space-y-2">
                  {value.examples.map((example, exampleIdx) => (
                    <li key={exampleIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[12px] leading-[16px] text-corporate-grey-700">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values in Action */}
      <div className="w-full max-w-7xl mb-20">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-12 text-center">
          Values in Action
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {valueInAction.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-none"
                />
              </div>
              <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-3">
                {item.title}
              </h4>
              <p className="text-[14px] leading-[20px] text-corporate-grey-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Statement */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center mb-16">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">
          Our Values Define Us
        </h3>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          These values are not just words on a page—they are the principles that guide every decision we make, every action we take, and every relationship we build. They are the foundation of our culture and the promise we make to our clients, partners, and communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Client Promise</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              We promise to always act with integrity, deliver excellence, and put your needs first
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Team Commitment</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              We commit to fostering a culture of innovation, growth, and mutual respect
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Community Impact</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              We strive to make a positive difference in the communities we serve
            </p>
          </div>
        </div>
        <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
          Learn About Our Culture
        </button>
      </div>

      {/* Call to Action */}
      <div className="bg-white border border-corporate-grey-200 p-8 max-w-4xl text-center">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Live Our Values With Us
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          If our values resonate with you, we invite you to join our team, become our client, or partner with us in building a better future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-corporate-blue-500 text-white px-8 py-4 font-medium hover:bg-corporate-blue-600 transition-colors">
            Join Our Team
          </button>
          <button className="bg-white text-corporate-blue-500 border border-corporate-blue-500 px-8 py-4 font-medium hover:bg-corporate-blue-50 transition-colors">
            Become a Client
          </button>
        </div>
      </div>
    </section>
  );
}
