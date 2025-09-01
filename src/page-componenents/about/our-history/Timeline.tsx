import Image from 'next/image';

const timelineEvents = [
  {
    year: '1969',
    title: 'Company Founded',
    description:
      'Burns & Wilcox was established in Detroit, Michigan, by H. William Kaufman, beginning with a vision to provide exceptional insurance brokerage services.',
    location: 'Detroit, Michigan',
    significance: 'Foundation',
    image: '/hero-1.jpg',
  },
  {
    year: '1975',
    title: 'First Expansion',
    description:
      'Expanded operations beyond Michigan, establishing presence in neighboring states and building regional expertise.',
    location: 'Midwest Region',
    significance: 'Growth',
    image: '/hero-2.jpg',
  },
  {
    year: '1985',
    title: 'National Presence',
    description:
      'Achieved nationwide coverage with offices across the United States, becoming a recognized national insurance broker.',
    location: 'United States',
    significance: 'Expansion',
    image: '/hero-3.jpg',
  },
  {
    year: '1995',
    title: 'International Expansion',
    description:
      'Entered international markets, beginning with Canada and establishing global insurance capabilities.',
    location: 'North America',
    significance: 'Global',
    image: '/hero-1.jpg',
  },
  {
    year: '2003',
    title: 'Middle East Entry',
    description:
      'Established first presence in the Middle East with office in Dubai, marking the beginning of regional operations.',
    location: 'Dubai, UAE',
    significance: 'Regional',
    image: '/hero-2.jpg',
  },
  {
    year: '2010',
    title: 'European Expansion',
    description:
      'Expanded into European markets, establishing offices in key financial centers and building continental expertise.',
    location: 'Europe',
    significance: 'Continental',
    image: '/hero-3.jpg',
  },
  {
    year: '2015',
    title: 'Digital Transformation',
    description:
      'Launched comprehensive digital platforms and technology solutions, revolutionizing how we serve clients.',
    location: 'Global',
    significance: 'Innovation',
    image: '/hero-1.jpg',
  },
  {
    year: '2020',
    title: 'Global Leadership',
    description:
      "Achieved position as one of the world's leading insurance brokers with presence in over 25 countries.",
    location: 'Worldwide',
    significance: 'Leadership',
    image: '/hero-2.jpg',
  },
  {
    year: '2024',
    title: 'Future Forward',
    description:
      'Continuing to innovate and expand, embracing new technologies and markets while maintaining our core values.',
    location: 'Global',
    significance: 'Innovation',
    image: '/hero-3.jpg',
  },
];

export default function Timeline() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Our Journey
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Company Timeline
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Over five decades of growth, innovation, and commitment to excellence
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-corporate-blue-200 h-full hidden lg:block"></div>

          {timelineEvents.map((event, idx) => (
            <div
              key={event.year}
              className={`flex flex-col lg:flex-row gap-8 items-center mb-16 last:mb-0 ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block relative z-10">
                <div className="w-6 h-6 bg-corporate-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Content */}
              <div className="flex-1 max-w-lg">
                <div className="bg-tertiary-blue-50 border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-corporate-blue-500 text-white text-sm px-3 py-1 font-medium">
                      {event.year}
                    </span>
                    <span className="bg-corporate-grey-100 text-corporate-grey-700 text-xs px-2 py-1 font-medium">
                      {event.significance}
                    </span>
                  </div>
                  <h3 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-[14px] leading-[20px] text-corporate-grey-700 mb-3">
                    {event.description}
                  </p>
                  <div className="text-[12px] leading-[16px] text-corporate-grey-500">
                    📍 {event.location}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 max-w-lg">
                <div className="relative w-full h-48 lg:h-64">
                  <Image
                    src={event.image}
                    alt={`${event.year} - ${event.title}`}
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-corporate-blue-500 text-white p-12 max-w-6xl text-center mt-16">
        <h3 className="text-[33px] leading-[40px] font-medium mb-6">A Legacy of Excellence</h3>
        <p className="text-[18px] leading-[27px] mb-8 max-w-4xl mx-auto">
          From our founding in 1969 to today, Burns & Wilcox has remained committed to the same
          principles: integrity, excellence, and unwavering dedication to our clients' success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-corporate-blue-500 px-8 py-4 font-medium hover:bg-gray-100 transition-colors">
            Download Company History
          </button>
          <button className="bg-transparent text-white border border-white px-8 py-4 font-medium hover:bg-white hover:text-corporate-blue-500 transition-colors">
            View Historical Photos
          </button>
        </div>
      </div>
    </section>
  );
}
