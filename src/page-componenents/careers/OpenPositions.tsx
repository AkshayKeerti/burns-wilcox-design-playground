const positions = [
  {
    id: 1,
    title: 'Senior Insurance Broker',
    department: 'Corporate Risk',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '5-8 years',
    description:
      'Lead complex corporate insurance placements and develop client relationships in the MENA region.',
    requirements: [
      "Bachelor's degree in Business, Finance, or related field",
      'Minimum 5 years of insurance broking experience',
      'Strong knowledge of corporate insurance products',
      'Excellent client relationship management skills',
    ],
    status: 'Active',
  },
  {
    id: 2,
    title: 'Cyber Risk Specialist',
    department: 'Specialty Lines',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '3-5 years',
    description:
      'Develop and manage cyber risk insurance solutions for technology and financial services clients.',
    requirements: [
      'Degree in Information Technology, Cybersecurity, or related field',
      '3+ years of cyber risk assessment experience',
      'Understanding of cyber insurance products and market',
      'Strong analytical and problem-solving skills',
    ],
    status: 'Active',
  },
  {
    id: 3,
    title: 'Employee Benefits Consultant',
    department: 'Human Capital Benefits',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-time',
    experience: '4-6 years',
    description:
      'Design and implement comprehensive employee benefit programs for corporate clients.',
    requirements: [
      "Bachelor's degree in Human Resources, Business, or related field",
      '4+ years of employee benefits consulting experience',
      'Knowledge of regional healthcare and insurance regulations',
      'Strong presentation and communication skills',
    ],
    status: 'Active',
  },
  {
    id: 4,
    title: 'Claims Advocate',
    department: 'Claims Services',
    location: 'Doha, Qatar',
    type: 'Full-time',
    experience: '2-4 years',
    description:
      'Advocate for clients during the claims process and ensure optimal settlement outcomes.',
    requirements: [
      'Degree in Business, Law, or related field',
      '2+ years of claims handling experience',
      'Strong negotiation and communication skills',
      'Knowledge of insurance policy language and coverage',
    ],
    status: 'Active',
  },
  {
    id: 5,
    title: 'Marketing Manager',
    department: 'Marketing & Communications',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '6-8 years',
    description:
      'Develop and execute marketing strategies to enhance brand presence in the MENA region.',
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      '6+ years of B2B marketing experience',
      'Experience in financial services or insurance industry',
      'Strong digital marketing and content creation skills',
    ],
    status: 'Active',
  },
  {
    id: 6,
    title: 'Risk Engineer',
    department: 'Risk Engineering & Consulting',
    location: 'Kuwait City, Kuwait',
    type: 'Full-time',
    experience: '3-5 years',
    description:
      'Conduct risk assessments and provide recommendations for risk mitigation strategies.',
    requirements: [
      'Degree in Engineering, Risk Management, or related field',
      '3+ years of risk assessment experience',
      'Knowledge of industrial safety and risk management',
      'Strong analytical and technical skills',
    ],
    status: 'Active',
  },
];

export default function OpenPositions() {
  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Career Opportunities
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Open Positions
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Join our team and help shape the future of insurance
        </p>
      </div>

      <div className="w-full max-w-7xl mb-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <select className="px-4 py-2 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500">
            <option>All Departments</option>
            <option>Corporate Risk</option>
            <option>Specialty Lines</option>
            <option>Human Capital Benefits</option>
            <option>Claims Services</option>
            <option>Marketing & Communications</option>
            <option>Risk Engineering & Consulting</option>
          </select>
          <select className="px-4 py-2 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500">
            <option>All Locations</option>
            <option>Dubai, UAE</option>
            <option>Abu Dhabi, UAE</option>
            <option>Riyadh, Saudi Arabia</option>
            <option>Doha, Qatar</option>
            <option>Kuwait City, Kuwait</option>
          </select>
          <select className="px-4 py-2 border border-corporate-grey-300 focus:outline-none focus:border-corporate-blue-500">
            <option>All Experience Levels</option>
            <option>Entry Level (0-2 years)</option>
            <option>Mid Level (3-5 years)</option>
            <option>Senior Level (6-8 years)</option>
            <option>Executive (8+ years)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map(position => (
            <div
              key={position.id}
              className="bg-white border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900 mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-corporate-blue-100 text-corporate-blue-800 text-xs px-2 py-1 font-medium">
                      {position.department}
                    </span>
                    <span className="bg-corporate-grey-100 text-corporate-grey-700 text-xs px-2 py-1 font-medium">
                      {position.location}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 font-medium">
                      {position.type}
                    </span>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 font-medium">
                  {position.status}
                </span>
              </div>

              <p className="text-[14px] leading-[20px] text-corporate-grey-700 mb-4">
                {position.description}
              </p>

              <div className="mb-4">
                <span className="text-corporate-grey-600 text-sm font-medium">Experience: </span>
                <span className="text-corporate-grey-700 text-sm">{position.experience}</span>
              </div>

              <div className="mb-4">
                <span className="text-corporate-grey-600 text-sm font-medium">
                  Key Requirements:
                </span>
                <ul className="mt-2 space-y-1">
                  {position.requirements.slice(0, 2).map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-corporate-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[12px] leading-[16px] text-corporate-grey-600">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-corporate-blue-500 text-white px-4 py-2 font-medium hover:bg-corporate-blue-600 transition-colors text-sm">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-corporate-grey-200 p-8 max-w-4xl text-center">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Don't See the Right Fit?
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          We're always looking for talented professionals. Send us your resume and we'll keep you in
          mind for future opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors">
            Submit Resume
          </button>
          <button className="bg-white text-corporate-blue-500 border border-corporate-blue-500 px-6 py-3 font-medium hover:bg-corporate-blue-50 transition-colors">
            Join Talent Network
          </button>
        </div>
      </div>
    </section>
  );
}
