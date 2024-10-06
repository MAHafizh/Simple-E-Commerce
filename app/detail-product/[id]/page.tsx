/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Navbar, Footer, Recommendation, DetailProduct } from "../../components";
import { useParams } from "next/navigation";

const Detail = () => {

  const params = useParams<{id: string}>()
  const {id} = params;
  console.log(id);
  
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="mt-12 w-[1200px] mx-auto">
          <DetailProduct id={id} />
          <div>
            <div className="flex items-center space-x-4 mt-8">
              <div className="bg-red-600 w-5 h-10 rounded-md"></div>
              <h1 className="text-red-600 text-xl tracking-wider font-bold">
                Recommendation
              </h1>
            </div>
            <div className="flex justify-center">
              <Recommendation />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Detail;
