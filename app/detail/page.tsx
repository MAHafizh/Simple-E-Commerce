/* eslint-disable @next/next/no-img-element */
import React from "react";
import { QuantitySelector, Navbar, Footer, FlashSale } from "../components";
import Rating from "../components/Rating/rating";

const source =
  "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg";
const Detail = () => {
  const rating = 3.3;
  const total = 5;
  const percentage = (rating / total) * 100;
  const description =
    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="mt-12">
          <div className="flex mx-96 border-2">
            <div className="mt-4 ml-4 h-96 w-96 flex flex-col justify-between items-center relative">
              <div className="flex justify-center items-center h-full w-full">
                <img
                  src={source}
                  alt=""
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <img src={source} alt="" className="object-contain w-16 h-16" />
                <img src={source} alt="" className="object-contain w-16 h-16" />
                <img src={source} alt="" className="object-contain w-16 h-16" />
                <img src={source} alt="" className="object-contain w-16 h-16" />
              </div>
            </div>
            <div className="px-12 py-4 w-10/12">
              <div className="border-b-2 border-gray-200 mb-4">
                <h1 className="font-bold text-xl">
                  KOORUI monitor 27 inch 2k OLED QHD monitor 240hz 0.03ms
                  monitor gaming 27E8QK koorui
                </h1>
                <div className="inline-flex items-center my-2 space-x-2">
                  <div className="flex space-x-1">
                    <Rating
                      ratingInPercent={percentage}
                      iconSize="m"
                      showOutOf={true}
                      enableUserInteraction={false}
                    />
                  </div>
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    {rating.toFixed(1)}
                  </span>
                  <div className="ml-2 text-sm font-semibold text-gray-700">
                    (500 rating)
                  </div>
                </div>
                <h1 className="font-bold text-xl pb-2">$ 89.00</h1>
              </div>
              <div className="ml-4">{description}</div>
              <div className="ml-4">
                <QuantitySelector />
              </div>
              <div className="flex gap-4 ml-4">
                <button className="text-white rounded-md w-36 h-10 py-2 bg-red-500 hover:bg-red-600">
                  Buy Now
                </button>
                <button className="text-white rounded-md w-36 h-10 py-2  bg-red-500 hover:bg-red-600">
                  Add to Cart
                </button>
              </div>
              <div className="">
                <div tabIndex={0} className="collapse bg-base-200">
                  <div className="collapse-title text-lg font-light">
                    Spesification
                  </div>
                  <div className="collapse-content">
                    <p>
                      tabindex={0} attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                </div>
                <div tabIndex={0} className="collapse bg-base-200">
                  <div className="collapse-title text-lg font-light">
                    Shipping Information
                  </div>
                  <div className="collapse-content">
                    <p>
                      tabindex={0} attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-32">
            <FlashSale />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Detail;
