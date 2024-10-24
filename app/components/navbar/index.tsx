"use client"; // Keep this if you're using Next.js with the app directory

import React from "react";
import Link from "next/link"; // Import Link for navigation
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray pt-8 px-32 pb-4 sm:">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="font-bold text-xl">Exclusive</p>
        </div>

        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Contact</Link>
          </li>
          <li>
            <Link href="/post">About</Link>
          </li>
          <li>
            <Link href="/login">Log In</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking?"
              className="border rounded-lg bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-2 pr-10 focus:outline-none text-base"
            />
            <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          <div>
            <Link href="/cart" className="px-4 py-2">
              Cart
            </Link>
            <Link href="/account" className="px-4 py-2">
              Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
