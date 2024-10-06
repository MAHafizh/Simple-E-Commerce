/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Rating from "../Rating/rating";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProductsProps {
  id: number;
  title: string;
  image: string;
  price: number;
  rating?: number;
}

const CardProduct = ({ id, title, price, image, rating = 0 }: ProductsProps) => {
  const total = 5;
  const percentage = (rating / total) * 100;

  const router = useRouter();
  const handleClick = () => {
    router.push(`/detail-product/${id}`);
  };
  return (
    <>
      <div
        className="card card-compact bg-base-100 w-64 shadow-md cursor-pointer"
        onClick={handleClick}
      >
        <figure className="">
          <img src={image} alt={title} className="w-auto h-40 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm font-semibold text-ellipsis overflow-hidden line-clamp-2">
            {title}
          </h2>
          <div className="mt-auto">
            <div className="text-base font-bold my-2 mt-[-10px]">${price}</div>
            <div className="card-actions inline-flex items-center mt-[-15px]">
              <Rating
                ratingInPercent={percentage}
                iconSize="s"
                showOutOf={true}
                enableUserInteraction={false}
              />
              <div className="font-normal text-sm">{rating}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
