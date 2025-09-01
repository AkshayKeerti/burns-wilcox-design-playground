import Image from 'next/image';

const events = [
  {
    id: 1,
    title: 'MENA Insurance Summit 2025',
    date: 'January 20-22, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Dubai World Trade Centre',
    type: 'Conference',
    description:
      'Join industry leaders for three days of insights, networking, and discussions on the future of insurance in the MENA region.',
    status: 'Upcoming',
    image: '/hero-1.jpg',
  },
  {
    id: 2,
    title: 'Cyber Risk Management Webinar',
    date: 'January 15, 2025',
    time: '2:00 PM - 3:30 PM',
    location: 'Virtual Event',
    type: 'Webinar',
    description:
      'Expert insights on emerging cyber threats and effective risk management strategies for MENA businesses.',
    status: 'Upcoming',
    image: '/hero-2.jpg',
  },
  {
    id: 3,
    title: 'Employee Benefits Workshop',
    date: 'January 10, 2025',
    time: '10:00 AM - 12:00 PM',
    location: 'Abu Dhabi Business Center',
    type: 'Workshop',
    description:
      'Interactive session on designing competitive employee benefit packages that attract and retain top talent.',
    status: 'Upcoming',
    image: '/hero-3.jpg',
  },
  {
    id: 4,
    title: 'Regulatory Compliance Seminar',
    date: 'December 28, 2024',
    time: '1:00 PM - 4:00 PM',
    location: 'Riyadh Financial District',
    type: 'Seminar',
    description:
      'Comprehensive overview of recent regulatory changes and their impact on insurance operations.',
    status: 'Past',
    image: '/hero-1.jpg',
  },
  {
    id: 5,
    title: 'Client Networking Event',
    date: 'December 20, 2024',
    time: '6:00 PM - 9:00 PM',
    location: 'Doha Marriott Hotel',
    type: 'Networking',
    description:
      'Annual client appreciation event featuring industry presentations and networking opportunities.',
    status: 'Past',
    image: '/hero-2.jpg',
  },
];

export default function EventsCalendar() {
  const upcomingEvents = events.filter(event => event.status === 'Upcoming');
  const pastEvents = events.filter(event => event.status === 'Past');

  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Join Us
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Upcoming Events & Webinars
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Connect with industry experts and expand your knowledge
        </p>
      </div>

      {/* Upcoming Events */}
      <div className="w-full max-w-7xl mb-16">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-8">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map(event => (
            <div
              key={event.id}
              className="bg-white border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0 w-full lg:w-48 h-48 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-none"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-corporate-blue-500 text-white text-xs px-2 py-1 font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 font-medium">
                      {event.status}
                    </span>
                  </div>
                  <h4 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900">
                    {event.title}
                  </h4>
                  <div className="space-y-2 text-sm text-corporate-grey-600">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">🕒</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-[14px] leading-[20px] text-corporate-grey-700">
                    {event.description}
                  </p>
                  <button className="bg-corporate-blue-500 text-white px-4 py-2 font-medium hover:bg-corporate-blue-600 transition-colors self-start text-sm">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="w-full max-w-7xl">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-8">
          Past Events
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map(event => (
            <div
              key={event.id}
              className="bg-white border border-corporate-grey-100 p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-none"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-corporate-grey-500 text-white text-xs px-2 py-1 font-medium">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-[16px] leading-[20px] font-medium text-corporate-grey-900 line-clamp-2">
                  {event.title}
                </h4>
                <div className="text-xs text-corporate-grey-500 space-y-1">
                  <div>{event.date}</div>
                  <div>{event.location}</div>
                </div>
                <button className="text-corporate-blue-500 font-medium hover:underline text-xs">
                  View Summary →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
        <button className="bg-corporate-blue-500 text-white px-8 py-4 font-medium hover:bg-corporate-blue-600 transition-colors">
          Subscribe to Events
        </button>
        <button className="bg-white text-corporate-blue-500 border border-corporate-blue-500 px-8 py-4 font-medium hover:bg-corporate-blue-50 transition-colors">
          Host an Event
        </button>
      </div>
    </section>
  );
}
