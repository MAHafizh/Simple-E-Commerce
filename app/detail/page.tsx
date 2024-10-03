/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import { Button } from "@material-tailwind/react";

const ukuran = 84;
const source = "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg";

const Detail = () => {
  const rating = 3.5;
  const description =
    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.";
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
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="mt-12">
          <div className="flex mx-96">
            <div className="flex flex-col p-4">
              <img
                src={source}
                alt=""
                width={ukuran}
                height={ukuran}
                className="m-2 shadow-md h-20 w-20 object-cover"
              />
              <img
                src={source}
                alt=""
                width={ukuran}
                height={ukuran}
                className="m-2 shadow-md"
              />
              <img
                src={source}
                alt=""
                width={ukuran}
                height={ukuran}
                className="m-2 shadow-md"
              />
              <img
                src={source}
                alt=""
                width={ukuran}
                height={ukuran}
                className="m-2 shadow-md"
              />
            </div>
            <div className="p-4">
              <div className="h-80 w-80 flex relative justify-center items-center">
                <img
                  src={source}
                  alt=""
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
            <div className="px-12 py-4 border-2 w-10/12">
              <div className="border-b-2 border-gray-200 mb-4">
                <h1 className="font-bold text-xl">
                  KOORUI monitor 27 inch 2k OLED QHD monitor 240hz 0.03ms
                  monitor gaming 27E8QK koorui
                </h1>
                <div className="inline-flex items-center my-2 space-x-2">
                  <div className="flex space-x-1">{renderStars()}</div>
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    {rating.toFixed(1)}
                  </span>
                  <div className="ml-2 text-sm font-semibold text-gray-700">
                    (500 rating)
                  </div>
                </div>
                <h1 className="font-bold text-xl pb-2">$ 89.00</h1>
              </div>
              <div className="border-2">{description}</div>
              <button className="text-white shadow-md rounded-md hover:scale-105 transition-transform duration-300 focus:scale-105 active:scale-100 w-full py-2 bg-red-500 hover:bg-red-600">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="mx-32">
            <Products />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Detail;
