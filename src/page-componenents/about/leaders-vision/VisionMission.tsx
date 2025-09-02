// Image import removed as it's not being used

const visionElements = [
  {
    title: 'Market Leadership',
    description:
      'To become the most trusted and innovative insurance partner in the Middle East, recognized for our expertise, integrity, and client-centric approach.',
    icon: '🏆',
    goals: [
      'Regional market leader by 2030',
      'Most trusted insurance brand',
      'Innovation hub for insurance solutions',
      'Preferred employer in the industry',
    ],
  },
  {
    title: 'Client Excellence',
    description:
      'To deliver exceptional value to our clients through innovative solutions, expert advice, and unwavering commitment to their success.',
    icon: '⭐',
    goals: [
      '95% client satisfaction rate',
      'Innovative digital solutions',
      'Personalized service delivery',
      'Long-term client partnerships',
    ],
  },
  {
    title: 'Regional Growth',
    description:
      'To expand our presence across the Middle East, serving more markets and communities with our comprehensive insurance solutions.',
    icon: '🌍',
    goals: [
      'Presence in 10+ countries',
      'Regional headquarters status',
      'Local market expertise',
      'Cultural market understanding',
    ],
  },
];

const missionStatement = {
  title: 'Our Mission',
  statement:
    'To protect and empower businesses and individuals across the Middle East by providing innovative insurance solutions that understand local needs while leveraging global expertise.',
  pillars: [
    {
      pillar: 'Protection',
      description: 'Comprehensive coverage that safeguards what matters most',
    },
    {
      pillar: 'Empowerment',
      description: 'Enabling growth and success through risk management',
    },
    {
      pillar: 'Innovation',
      description: 'Leading-edge solutions that adapt to changing needs',
    },
    {
      pillar: 'Local Expertise',
      description: 'Deep understanding of regional markets and cultures',
    },
  ],
};

export default function VisionMission() {
  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Strategic Direction
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Vision & Mission
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          The strategic framework that guides our growth and success
        </p>
      </div>

      {/* Mission Statement */}
      <div className="w-full max-w-6xl mb-20">
        <div className="bg-white border border-corporate-grey-200 p-12 text-center">
          <h3 className="text-[33px] leading-[40px] font-medium text-corporate-grey-900 mb-6">
            {missionStatement.title}
          </h3>
          <p className="text-[20px] leading-[28px] text-corporate-grey-700 mb-8 max-w-4xl mx-auto">
            {missionStatement.statement}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionStatement.pillars.map(pillar => (
              <div key={pillar.pillar} className="text-center">
                <h4 className="text-[18px] leading-[22px] font-medium text-corporate-blue-500 mb-2">
                  {pillar.pillar}
                </h4>
                <p className="text-[14px] leading-[20px] text-corporate-grey-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Elements */}
      <div className="w-full max-w-7xl mb-20">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-12 text-center">
          Our Vision for the Future
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {visionElements.map(element => (
            <div
              key={element.title}
              className="bg-white border border-corporate-grey-100 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{element.icon}</div>
                <h4 className="text-[23px] leading-[28px] font-medium text-corporate-grey-900 mb-3">
                  {element.title}
                </h4>
                <p className="text-[16px] leading-[24px] text-corporate-grey-700">
                  {element.description}
                </p>
              </div>

              <div>
                <h5 className="text-[16px] leading-[20px] font-medium text-corporate-grey-900 mb-3">
                  Key Goals
                </h5>
                <ul className="space-y-2">
                  {element.goals.map((goal, goalIdx) => (
                    <li key={goalIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[14px] leading-[20px] text-corporate-grey-700">
                        {goal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Priorities */}
      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center mb-16">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">
          Strategic Priorities 2024-2030
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Digital Transformation</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Accelerating our digital capabilities to enhance client experience and operational
              efficiency
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Market Expansion</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Strategic expansion into new markets while strengthening our presence in existing ones
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Talent Development</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Investing in our people to build the next generation of insurance leaders
            </p>
          </div>
          <div>
            <h4 className="text-[20px] leading-[24px] font-medium mb-3">Innovation Leadership</h4>
            <p className="text-[14px] leading-[20px] text-white/90">
              Pioneering new insurance solutions and technologies for the Middle East market
            </p>
          </div>
        </div>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          These priorities reflect our commitment to sustainable growth, client success, and
          regional leadership in the insurance industry.
        </p>
        <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
          Download Strategic Plan
        </button>
      </div>

      {/* Call to Action */}
      <div className="bg-white border border-corporate-grey-200 p-8 max-w-4xl text-center">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Join Us in Shaping the Future
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          Whether you're a client, partner, or team member, you're part of our vision for the future
          of insurance in the Middle East.
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
