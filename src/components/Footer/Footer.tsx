import { StackedLogo } from '@/components/logo/Logo';

const columns = [
  {
    title: 'Consumer Lines',
    links: [
      'Motor',
      'Home',
      'Travel',
      'High Value Asset Owners',
      'Private Medical',
      'Private Jet & Yacht',
      'Individual/Family Cyber Protection',
    ],
  },
  {
    title: 'Corporate General Broking',
    links: ['Property', 'Casualty', 'Engineering', 'Marine'],
  },
  {
    title: 'Human Capital Benefits',
    links: [
      'Group Medical',
      'Group Life',
      'Employee Health & Wellbeing',
      'Personal Accident',
      'Travel',
    ],
  },
  {
    title: 'Specialty',
    links: [
      'Cyber Risk Insurance',
      'Directors & Officers Liability',
      'Errors and Omissions Liability',
      'Trade Credit Insurance',
      'Political Violence & Terrorism',
      'Commercial Crime',
      'Aviation',
      'Jeweller’s Block',
      'Livestock',
      'Kidnap, Ransom, Extortion',
      'Energy',
      'Surety Bonds',
      'Depositor Insurance',
    ],
  },
  {
    title: 'Reinsurance',
    links: ['Facultative'],
  },
  {
    title: 'Risk Engineering & Consulting',
    links: ['Risk assessment, recommendations & improvement', 'Risk Analytics', 'Claims advocacy'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white w-full flex flex-col items-center">
      {/* Top Divider */}
      <div className="h-px w-full max-w-7xl my-0 bg-corporate-grey-900 mt-16 mx-16" />
      {/* Columns */}
      <div className="w-full max-w-7xl px-4 md:px-16 py-16 flex flex-col gap-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-10 w-full">
          {columns.map(col => (
            <div key={col.title} className="flex-1 min-w-[180px] flex flex-col gap-4">
              <h4 className="text-[18px] leading-[21.6px] font-medium text-black font-sans">
                {col.title}
              </h4>
              <ul className="flex flex-col">
                {col.links.map(link => (
                  <li key={link} className="py-2">
                    {/* Replace with real links as needed */}
                    <span className="text-[12px] leading-[14px] font-normal text-black font-sans">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom Divider */}
        <div className="h-px w-full max-w-7xl my-0 bg-corporate-grey-900 mt-16 mx-16" />
        {/* Columns */}
        {/* Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <div className="flex items-center justify-center h-[38px] w-[94px] bg-center bg-cover">
            <StackedLogo height={38} width={94} />
          </div>
          <div className="text-[14px] leading-[21px] font-normal text-black font-roboto whitespace-pre">
            © 2025 Burns & Wilcox. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
