import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const Inputs = () => {
  return (
    <div className=" flex flex-row justify-center items-center my-6">
      <div className=" flex w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-xl"
          placeholder="Search Your Location..."
        />
        <BiSearchAlt2
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <HiLocationMarker
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <div className=" flex flex-row w-1/4 items-center justify-center">
          <button name="metric" className="text-xl text-white font-light">
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button name="imperial" className="text-xl text-white font-light">
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
