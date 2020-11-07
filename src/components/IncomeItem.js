import React from "react";
import { FaTimes } from "react-icons/fa";


export default function IncomeItem({ id, preis, desc, datum, itemDelete }) {
  const format = (number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };
  return (
    <div className="grid grid-cols-8 items-center my-2 ">
      <h1 className="pl-1 md:pl-2 rounded-l-lg bg-red-200 md:text-xl h-8 md:h-12 col-span-1 flex items-center">
        {preis}
      </h1>
      <h1 className="capitalize pl-1 md:pl-2 bg-red-200 md:text-xl h-8 md:h-12 col-span-3 flex items-center">
        {desc}
      </h1>
      <h1 className="pl-1 md:pl-2  bg-red-200 md:text-xl h-8 md:h-12 col-span-3 flex items-center">
        {`${format(new Date(datum).getUTCDate())}.${format(
          new Date(datum).getUTCMonth() + 1
        )}.${new Date(datum).getUTCFullYear()}`}
      </h1>
      <button
        onClick={() => {
          itemDelete(id);
        }}
        type="button"
        className=" bg-red-400 text-red-700 h-8 md:h-12 flex justify-center rounded-r-lg text-lg md:text-xl hover:bg-red-200 hover:text-red-500 transition transition-all duration-300 ease-in-out"
      >
        <FaTimes />
      </button>
    </div>
  );
}
