import Image from 'next/image';

const offices = [
  {
    city: 'Dubai',
    country: 'UAE',
    address: 'Sheikh Zayed Road, Downtown Dubai',
    phone: '+971 4 123 4567',
    email: 'dubai@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    services: ['Corporate Risk', 'Employee Benefits', 'Personal Insurance', 'Specialty Lines'],
    image: '/hero-1.jpg',
    isMain: true,
  },
  {
    city: 'Abu Dhabi',
    country: 'UAE',
    address: 'Corniche Road, Business District',
    phone: '+971 2 123 4567',
    email: 'abudhabi@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    services: ['Corporate Risk', 'Employee Benefits', 'Risk Engineering'],
    image: '/hero-2.jpg',
    isMain: false,
  },
  {
    city: 'Riyadh',
    country: 'Saudi Arabia',
    address: 'King Fahd Road, Financial District',
    phone: '+966 11 123 4567',
    email: 'riyadh@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    services: ['Corporate Risk', 'Employee Benefits', 'Claims Services'],
    image: '/hero-3.jpg',
    isMain: false,
  },
  {
    city: 'Doha',
    country: 'Qatar',
    address: 'West Bay, Business District',
    phone: '+974 4 123 4567',
    email: 'doha@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    services: ['Corporate Risk', 'Employee Benefits', 'Specialty Lines'],
    image: '/hero-1.jpg',
    isMain: false,
  },
  {
    city: 'Kuwait City',
    country: 'Kuwait',
    address: 'Salmiya, Business District',
    phone: '+965 2 123 4567',
    email: 'kuwait@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    services: ['Corporate Risk', 'Employee Benefits'],
    image: '/hero-2.jpg',
    isMain: false,
  },
  {
    city: 'Cairo',
    country: 'Egypt',
    address: 'Maadi, Business District',
    phone: '+20 2 123 4567',
    email: 'cairo@burnsandwilcoxmena.com',
    hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    services: ['Corporate Risk', 'Employee Benefits', 'Claims Services'],
    image: '/hero-3.jpg',
    isMain: false,
  },
];

export default function OfficeLocations() {
  const mainOffice = offices.find(office => office.isMain);
  const otherOffices = offices.filter(office => !office.isMain);

  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-24 px-16">
      <div className="flex flex-col items-center gap-4 w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Find Us
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Office Locations
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Visit us at any of our regional offices across the MENA region
        </p>
      </div>

      {/* Main Office */}
      {mainOffice && (
        <div className="w-full max-w-7xl mb-20">
          <div className="bg-white border border-corporate-grey-100 p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-corporate-blue-500 text-white text-sm px-3 py-1 font-medium">
                    Main Office
                  </span>
                  <span className="text-corporate-grey-600 text-sm">
                    {mainOffice.city}, {mainOffice.country}
                  </span>
                </div>
                <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
                  {mainOffice.city} Office
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-corporate-grey-500 mt-1">📍</span>
                    <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                      {mainOffice.address}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-corporate-grey-500 mt-1">📞</span>
                    <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                      {mainOffice.phone}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-corporate-grey-500 mt-1">📧</span>
                    <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                      {mainOffice.email}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-corporate-grey-500 mt-1">🕒</span>
                    <span className="text-[16px] leading-[24px] text-corporate-grey-700">
                      {mainOffice.hours}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-[18px] leading-[22px] font-medium text-corporate-grey-900 mb-3">
                    Services Offered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mainOffice.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="bg-corporate-blue-100 text-corporate-blue-800 text-sm px-3 py-1 font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="bg-corporate-blue-500 text-white px-6 py-3 font-medium hover:bg-corporate-blue-600 transition-colors">
                  Get Directions
                </button>
              </div>
              <div className="flex-1">
                <div className="relative w-full h-[400px]">
                  <Image
                    src={mainOffice.image}
                    alt={`${mainOffice.city} Office`}
                    fill
                    className="object-cover rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Offices Grid */}
      <div className="w-full max-w-7xl">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-8 text-center">
          Regional Offices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherOffices.map(office => (
            <div
              key={office.city}
              className="bg-white border border-corporate-grey-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={office.image}
                  alt={`${office.city} Office`}
                  fill
                  className="object-cover rounded-none"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-[20px] leading-[24px] font-medium text-corporate-grey-900">
                  {office.city}, {office.country}
                </h4>
                <div className="text-[14px] leading-[20px] text-corporate-grey-600 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-corporate-grey-500">📍</span>
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-corporate-grey-500">📞</span>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-corporate-grey-500">📧</span>
                    <span>{office.email}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h5 className="text-[14px] leading-[18px] font-medium text-corporate-grey-900 mb-2">
                    Services
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {office.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="bg-corporate-grey-100 text-corporate-grey-700 text-xs px-2 py-1"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="text-corporate-blue-500 font-medium hover:underline text-sm mt-3">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map CTA */}
      <div className="bg-white border border-corporate-grey-200 p-8 max-w-4xl text-center mt-16">
        <h3 className="text-[28px] leading-[34px] font-medium text-corporate-grey-900 mb-4">
          Need to Find a Specific Office?
        </h3>
        <p className="text-[16px] leading-[24px] text-corporate-grey-700 mb-6">
          Use our interactive map to find the nearest Burns & Wilcox office and get detailed
          directions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-corporate-blue-500 text-white px-8 py-4 font-medium hover:bg-corporate-blue-600 transition-colors">
            View Interactive Map
          </button>
          <button className="bg-white text-corporate-blue-500 border border-corporate-blue-500 px-8 py-4 font-medium hover:bg-corporate-blue-50 transition-colors">
            Download Office Directory
          </button>
        </div>
      </div>
    </section>
  );
}
