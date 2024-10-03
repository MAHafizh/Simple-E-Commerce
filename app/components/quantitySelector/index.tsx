import React from "react";

const QuantitySelector = () => {
  return (
    <>
      <div className="flex border rounded-md overflow-hidden w-36 my-4 h-10">
        <button className="w-1/4 border-r border-gray-300 hover:bg-gray-400 flex justify-center items-center text-xl font-bold">
          -
        </button>
        <input
          type="number"
          className="w-2/4 text-center text-lg font-medium border-none outline-none"
          min="1"
        />
        <button className="w-1/4 bg-red-500 hover:bg-red-600 text-white flex justify-center items-center text-xl font-bold">
          +
        </button>
      </div>
    </>
  );
};

export default QuantitySelector;
