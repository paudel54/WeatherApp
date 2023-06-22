import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FaTemperatureLow } from "react-icons/fa";
import { WiCloudyWindy, WiHumidity } from "react-icons/wi";
import { BsSun } from "react-icons/bs";
import { FiSunset } from "react-icons/fi";

const TemperatureDetails = () => {
  return (
    <div className="mx-auto w-3/4">
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Light Showers.. </p>
      </div>

      <div className="flex items-center justify-between text-white py-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3721/3721881.png"
          alt="Weather Icons"
          className="w-20 h-20"
        />
        <p className="text-5xl">29°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureLow size={18} className="mr-1" />
            Real Feel
            <span className="font-medium ml-1">32° </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={30} className="mr-1" />
            Humidity
            <span className="font-medium ml-1"> 72% </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiCloudyWindy size={18} className="mr-1" />
            Wind
            <span className="font-medium ml-1">3.5km/h </span>
          </div>
        </div>
      </div>
      {/* next Paragraph */}
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BsSun />
        <p>
          Rise: <span className="font-medium ml-1">5:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <FiSunset />
        <p>
          Set: <span className="font-medium ml-1">7:12 PM</span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowUp />
        <p>
          High: <span className="font-medium ml-1">39° </span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowDown />
        <p>
          Low: <span className="font-medium ml-1">23°</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
};

export default TemperatureDetails;
