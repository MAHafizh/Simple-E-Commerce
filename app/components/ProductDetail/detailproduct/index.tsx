/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import QuantitySelector from "../quantitySelector";
import Rating from "../../Rating/rating";

interface Iproducts {
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  description: string;
}

interface IProps {
  id: string;
}

const DetailProduct: React.FC<IProps> = ({ id }) => {
  const [mainImage, setMainImage] = useState<string>("");
  const [product, setProduct] = React.useState<Iproducts | null>(null);
  const [qty, setQty] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data: Iproducts = await response.json();
      setProduct(data);
      setMainImage(data.image);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;
  const total = 5;
  const percentage = (product.rating.rate / total) * 100;

  const totalPrice = qty * product.price;

  const images = [product.image];

  return (
    <>
      <div className="flex">
        <div className="mt-4 ml-4 h-96 w-96 flex flex-col justify-between items-center relative">
          <div className="flex justify-center items-center h-full w-full overflow-hidden">
            <img
              src={mainImage}
              alt="Main Product"
              className="object-contain max-h-full max-w-full"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`object-contain w-16 h-16 cursor-pointer hover:opacity-80 transition-opacity duration-200 ${
                  mainImage === img ? "border-2 border-black-500" : ""
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="px-12 py-4 w-10/12">
          <div className="mb-4">
            <h1 className="font-bold text-xl">{product.title}</h1>
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
                {product.rating.rate.toFixed(1)}
              </span>
              <div className="ml-2 text-sm font-semibold text-gray-700">
                | {product.rating.count} rating
              </div>
            </div>
            <h1 className="font-bold text-xl">$ {product.price}</h1>
          </div>
          <div className="ml-4">{product.description}</div>
          <div className="ml-4 my-4 flex gap-4 items-center">
            <QuantitySelector qty={qty} setQty={setQty} />
            <div>
              <h1 className="font-bold text-xl">$ {totalPrice}</h1>
            </div>
          </div>
          <div className="flex gap-4 ml-4">
            <button className="text-white rounded-md w-36 h-10 py-2 bg-red-500 hover:bg-red-600">
              Buy Now
            </button>
            <button className="text-white rounded-md w-36 h-10 py-2  bg-red-500 hover:bg-red-600">
              Add to Cart
            </button>
          </div>
          <div className="mt-6">
            <div tabIndex={0} className="collapse bg-base-200">
              <div className="collapse-title text-lg font-normal">
                Spesification
              </div>
              <div className="collapse-content">
                <p>
                  tabindex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse bg-base-200">
              <div className="collapse-title text-lg font-normal">
                Shipping Information
              </div>
              <div className="collapse-content">
                <p>
                  tabindex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
