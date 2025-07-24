'use client';
import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

const imgPlaceholderImage = '/personal-finance.jpg';

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
    <path
      d="M5.24994 35.4585C4.55994 35.4585 3.96169 35.176 3.45519 34.611C2.94844 34.0463 2.69507 33.3792 2.69507 32.6097V13.4347C2.69507 13.0341 2.81844 12.6974 3.06519 12.4247C3.31194 12.1519 3.61657 12.0155 3.97907 12.0155C4.34157 12.0155 4.64394 12.1519 4.88619 12.4247C5.12869 12.6974 5.24994 13.0341 5.24994 13.4347V32.6097H27.2036C27.5643 32.6097 27.8674 32.7468 28.1129 33.021C28.3584 33.2952 28.4812 33.6353 28.4812 34.0414C28.4812 34.4475 28.3584 34.7852 28.1129 35.0543C27.8674 35.3238 27.5643 35.4585 27.2036 35.4585H5.24994ZM11.9013 27.9847C11.2088 27.9847 10.6084 27.7032 10.1002 27.1401C9.59169 26.5774 9.33744 25.9126 9.33744 25.146V6.19046C9.33744 5.78963 9.46019 5.45282 9.70569 5.18004C9.95119 4.90726 10.2543 4.77087 10.6151 4.77087H33.5276C33.8873 4.77087 34.1916 4.90726 34.4403 5.18004C34.6893 5.45282 34.8138 5.78963 34.8138 6.19046V25.146C34.8138 25.9126 34.5596 26.5774 34.0511 27.1401C33.5428 27.7032 32.9424 27.9847 32.2499 27.9847H11.9013ZM11.9013 25.146H32.2499V7.60964H11.9013V25.146ZM16.1437 19.9168H20.0861C20.4048 19.9168 20.6721 19.7969 20.8878 19.5572C21.1033 19.3177 21.2111 19.0209 21.2111 18.6668V12.2084C21.2111 11.8542 21.1033 11.5573 20.8878 11.3176C20.6721 11.0781 20.4048 10.9584 20.0861 10.9584H16.1437C15.8249 10.9584 15.5578 11.0781 15.3423 11.3176C15.1266 11.5573 15.0187 11.8542 15.0187 12.2084V18.6668C15.0187 19.0209 15.1266 19.3177 15.3423 19.5572C15.5578 19.7969 15.8249 19.9168 16.1437 19.9168ZM24.4736 19.9168H27.4736C27.9236 19.9168 28.3111 19.7362 28.6361 19.3751C28.9611 19.014 29.1236 18.5834 29.1236 18.0834C29.1236 17.5834 28.9611 17.1529 28.6361 16.7918C28.3111 16.4306 27.9236 16.2501 27.4736 16.2501H24.4736C24.0236 16.2501 23.6361 16.4306 23.3111 16.7918C22.9861 17.1529 22.8236 17.5834 22.8236 18.0834C22.8236 18.5834 22.9861 19.014 23.3111 19.3751C23.6361 19.7362 24.0236 19.9168 24.4736 19.9168ZM24.4736 14.6251H27.4736C27.9236 14.6251 28.3111 14.4445 28.6361 14.0834C28.9611 13.7223 29.1236 13.2917 29.1236 12.7917C29.1236 12.2917 28.9611 11.8612 28.6361 11.5001C28.3111 11.139 27.9236 10.9584 27.4736 10.9584H24.4736C24.0236 10.9584 23.6361 11.139 23.3111 11.5001C22.9861 11.8612 22.8236 12.2917 22.8236 12.7917C22.8236 13.2917 22.9861 13.7223 23.3111 14.0834C23.6361 14.4445 24.0236 14.6251 24.4736 14.6251Z"
      fill="#332E2A"
    />
  </svg>
);

const products = [
  {
    icon: icon,
    title: 'Corporate Risk',
    description: 'Strategic risk management and solutions for every business need',
    image: imgPlaceholderImage,
  },
  {
    icon: icon,
    title: 'Employee Benefits',
    description:
      'We take time to understand the needs and requirements to design a plan that prioritizes your people with tailored care and coverage',
    image: imgPlaceholderImage,
  },
  {
    icon: icon,
    title: 'Personal Insurance',
    description:
      'Your dreams, our protection — from home, health, cars, yachts, travel, and beyond',
    image: imgPlaceholderImage,
  },
];

export default function OurProducts() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-12 px-4 md:px-16">
      <div className="flex flex-col items-center gap-4 max-w-2xl w-full text-center mb-20">
        <span className="text-[18px] leading-[21.6px] font-normal text-corporate-grey-900">
          Tailored
        </span>
        <h2 className="text-[48px] leading-[56px] font-medium tracking-tight text-corporate-grey-900">
          Our Products & Solutions
        </h2>
        <p className="text-[19px] leading-[23px] font-medium text-corporate-grey-900">
          Expert solutions to drive your growth
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full max-w-7xl">
        <div className="flex flex-row gap-8 w-full">
          {products.map((product, idx) => (
            <ProductCard
              key={product.title}
              {...product}
              expanded={openIdx === idx}
              onMouseEnter={() => setOpenIdx(idx)}
              onMouseLeave={() => setOpenIdx(null)}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center w-full mt-4">
          <button className="flex flex-row items-center gap-2 px-6 py-3 bg-corporate-blue-500 text-white text-[16px] font-normal border border-corporate-blue-500 hover:bg-corporate-blue-600 transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
