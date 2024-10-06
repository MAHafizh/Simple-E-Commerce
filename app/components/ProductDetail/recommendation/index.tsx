/* eslint-disable @next/next/no-img-element */
import React from "react";

import CardProduct from "../../cardProduct";

const URL = "https://fakestoreapi.com/products?limit=4";

interface Iproducts {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}

const Products = async () => {
  const response = await fetch(URL, {
    cache: "no-store",
  });
  const items: Iproducts[] = await response.json();
  return (
    <>
      <div className="mt-4 mb-4 flex">
        <div className="gap-4 flex flex-wrap justify-center">
          {items.length > 0 ? (
            items.map((item) => (
              <CardProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating.rate}
              />
            ))
          ) : (
            <p>No Product Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
