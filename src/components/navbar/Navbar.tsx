'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { StackedLogo } from '@/components/logo/Logo';

export default function Navbar() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150); // Small delay to prevent immediate closing
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-white w-full h-[72px] flex items-center justify-center border-b border-gray-100 z-10">
      <div className="flex flex-row items-center justify-between w-full h-[72px] px-16">
        <div className="flex flex-row gap-6 items-center">
          <Link href="/">
            <StackedLogo height={38} width={94} />
          </Link>
          <div className="flex flex-row gap-8 items-center">
            {/* About Us Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="font-medium text-[14px] leading-[17px] text-gray-900 hover:text-blue-900 transition-colors flex items-center gap-1"
              >
                About Us
                <svg
                  className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 shadow-lg rounded-none py-2 z-50">
                  <Link
                    href="/about/in-the-middle-east"
                    className="block px-4 py-3 text-[14px] leading-[17px] text-gray-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    In the Middle East
                  </Link>
                  <Link
                    href="/about/our-history"
                    className="block px-4 py-3 text-[14px] leading-[17px] text-gray-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    Our History
                  </Link>
                  <Link
                    href="/about/leaders-vision"
                    className="block px-4 py-3 text-[14px] leading-[17px] text-gray-900 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    Leaders & Vision
                  </Link>
                </div>
              )}
            </div>
            
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
