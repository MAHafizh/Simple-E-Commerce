"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";

import banner from "./assets/Frame 560.png";

import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
          <aside className="w-1/4 border-r-2 mb-16">
            <div className="ml-32 w-1/2 mt-8">
              <ul className="space-y-4">
                <li>
                  <Link href="#">Electronics</Link>
                </li>
                <li>
                  <Link href="#">Electronics</Link>
                </li>
                <li>
                  <Link href="#">Electronics</Link>
                </li>
                <li>
                  <Link href="#">Electronics</Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="w-3/4 relative m-12 flex-grow h-96">
            <Carousel indicators={false}>
              <div className="flex justify-center items-center">
                <Image
                  src={banner}
                  alt="Banner Image"
                  className="object-cover rounded-xl"
                  width={900}
                  height={400} // Maintain aspect ratio
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={banner} // You can use a different image here
                  alt="Banner Image"
                  className="object-cover rounded-xl"
                  width={900}
                  height={400}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={banner} // You can use a different image here
                  alt="Banner Image"
                  className="object-cover rounded-xl"
                  width={900}
                  height={400}
                />
              </div>
            </Carousel>
          </aside>
        </div>
        <main className="mx-32">
          <div>
            <Products />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
