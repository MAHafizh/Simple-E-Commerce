import React from "react";
import CardProduct from "../../cardProduct";
const URL = process.env.BASE_URL || "https://fakestoreapi.com/products";

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
      <div className="flex items-center space-x-4">
        <div className="bg-red-600 w-5 h-10 rounded-md"></div>
        <h1 className="text-red-600 text-xl tracking-wider font-bold">
          Products
        </h1>
      </div>
      <div className="mt-4 mb-4 flex justify-center">
        <div className="gap-6 flex flex-wrap justify-center items-center">
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
            <p>No Product Available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
