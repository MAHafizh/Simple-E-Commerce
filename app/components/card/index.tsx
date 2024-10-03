/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

interface ProductsProps {
  name: string;
  source: string;
  price: number;
  rating?: number;
  produkLink: string;
}

const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Card = ({
  name,
  price,
  source,
  rating = 0,
  produkLink,
}: ProductsProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;
    const hasHalfStar = decimalPart >= 0.5;
    const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`star-full-${i}`}
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg
          key="star-half"
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15.27L16.18 20 14.54 12.97 20 8.24l-8.19-.73L10 0 8.19 7.51 0 8.24l5.46 4.73L3.82 20z" />
        </svg>
      );
    }

    // Add empty stars
    for (let i = totalStars; i < 5; i++) {
      stars.push(
        <svg
          key={`star-empty-${i}`}
          className="h-5 w-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <Link href={produkLink} className="w-96 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-80">
        {" "}
        <img
          src={source}
          alt="card-image"
          className="h-full w-full object-contain transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex flex-col">
          <div
            className="text-blue-gray font-medium whitespace-nowrap overflow-hidden text-ellipsis"
            title={name}
          >
            {name}
          </div>
          <div className="text-blue-gray font-bold">$ {price}</div>
        </div>
        <div className="flex items-center">
          {renderStars()}
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
