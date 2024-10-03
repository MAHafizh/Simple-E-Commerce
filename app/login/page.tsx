import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import SideImageLogin from "../assets/SideImageLogin.png";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow my-6 mx-96">
          <div className="m-4 flex justify-around">
            <Image
              src={SideImageLogin}
              alt="App Store"
              height={400}
              className="object-contain"
            />
            <div className="my-16 w-80">
              <h2 className="text-2xl font-bold mb-2">Log in to Exclusive</h2>
              <p className="text-gray-600 mb-8">Enter your details below</p>
              <form>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email or Phone Number"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="mt-4 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
                    Log In
                  </button>
                  <Link
                    href="/forgot-password"
                    className="text-red-500 text-sm hover:underline"
                  >
                    Forget Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Login;
