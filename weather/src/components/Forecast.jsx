import React from "react";

const Forecast = ({ title }) => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="flex items-center justify-center my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">5:00 AM</p>
          <img
            src="https://cdn.icon-icons.com/icons2/3609/PNG/512/climate_forecast_weather_morning_sun_sunrise_icon_226611.png"
            alt="icon"
            className="w-12 my-1"
          />
          <p className="font-medium">21°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">5:00 AM</p>
          <img
            src="https://cdn.icon-icons.com/icons2/3609/PNG/512/climate_forecast_weather_morning_sun_sunrise_icon_226611.png"
            alt="icon"
            className="w-12 my-1"
          />
          <p className="font-medium">21°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">5:00 AM</p>
          <img
            src="https://cdn.icon-icons.com/icons2/3609/PNG/512/climate_forecast_weather_morning_sun_sunrise_icon_226611.png"
            alt="icon"
            className="w-12 my-1"
          />
          <p className="font-medium">21°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">5:00 AM</p>
          <img
            src="https://cdn.icon-icons.com/icons2/3609/PNG/512/climate_forecast_weather_morning_sun_sunrise_icon_226611.png"
            alt="icon"
            className="w-12 my-1"
          />
          <p className="font-medium">21°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">5:00 AM</p>
          <img
            src="https://cdn.icon-icons.com/icons2/3609/PNG/512/climate_forecast_weather_morning_sun_sunrise_icon_226611.png"
            alt="icon"
            className="w-12 my-1"
          />
          <p className="font-medium">21°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
