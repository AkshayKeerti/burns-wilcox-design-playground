import Link from 'next/link';
import { StackedLogo } from '@/components/logo/Logo';

export default function Navbar() {
  return (
    <nav className="bg-white w-full h-[72px] flex items-center justify-center border-b border-gray-100">
      <div className="flex flex-row items-center justify-between w-full h-[72px] px-16">
        <div className="flex flex-row gap-6 items-center">
          <Link href="/">
            <StackedLogo height={38} width={94} />
          </Link>
          <div className="flex flex-row gap-8 items-center">
            <Link
              href="/about"
              className="font-medium text-[14px] leading-[17px] text-gray-900 hover:text-blue-900 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/global-presence"
              className="font-medium text-[14px] leading-[17px] text-gray-900 hover:text-blue-900 transition-colors"
            >
              Global Presence
            </Link>
            <Link
              href="/solutions"
              className="font-medium text-[14px] leading-[17px] text-gray-900 hover:text-blue-900 transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/news"
              className="font-medium text-[14px] leading-[17px] text-gray-900 hover:text-blue-900 transition-colors"
            >
              News & Events
            </Link>
            <Link
              href="/careers"
              className="font-medium text-[14px] leading-[17px] text-gray-900 hover:text-blue-900 transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="font-medium text-[14px] leading-[17px] text-gray-900 hover:text-blue-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Link
            href="/locations"
            className="font-normal text-[14px] leading-[17px] text-blue-900 border border-blue-900 px-5 py-2 rounded-none hover:bg-blue-50 transition-colors"
          >
            Find a Location
          </Link>
          <Link
            href="/mena"
            className="font-normal text-[14px] leading-[17px] text-white border border-blue-900 bg-blue-900 px-5 py-2 rounded-none hover:bg-blue-800 transition-colors"
          >
            MENA Site
          </Link>
        </div>
      </div>
    </nav>
  );
}
