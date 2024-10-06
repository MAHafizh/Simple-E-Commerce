"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Navbar, Footer, Products } from "./components";

import banner from "./assets/Frame 560.png";

import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow w-[1200px] h-[450px] mx-auto">
          <aside className="w-1/4">
            <div className="w-1/2 mt-8">
              <ul>
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
          <aside className="w-3/4 relative flex-grow h-96 mt-4">
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
                  src={banner}
                  alt="Banner Image"
                  className="object-cover rounded-xl"
                  width={900}
                  height={400}
                />
              </div>
            </Carousel>
          </aside>
        </div>
        <main className="flex w-[1200px] mx-auto">
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
