import React from "react";
import background from "./weather-bg.jpg";
import { IoCloudSharp } from "react-icons/io5";
import { GiWindsock } from "react-icons/gi";
import { BiSolidDirections } from "react-icons/bi";
import {
  FaCircleChevronDown,
  FaCircleChevronUp,
  FaDroplet,
} from "react-icons/fa6";

function Weather({ weatherData, city, isLodingWeather }) {
  return (
    <>
      <div
        className="flex justify-center items-center flex-col md:gap-6 gap-4 h-[65vh] md:h-[88vh] w-full bg-center  bg-cover"
        style={{ "background-image": `url(${background}) ` }}
      >
        <h1 className="text-[#495664] text-4xl font-semibold">
          {city.toUpperCase()}
        </h1>
        {isLodingWeather ? (
          <>
            <h1 className="text-[#495664] text-3xl font-medium">Loding....</h1>
          </>
        ) : (
          <>
            <h2 className="text-[#495664] text-4xl flex justify-start">
              {weatherData.feels_like} °C
            </h2>
            <div className="text-[#495664] text-2xl grid grid-cols-2 gap-4 md:gap-8 md:gap-x-[5rem] gap-x-6 ">
              <div className="flex justify-center p-5 bg-[#d8e4e9] rounded-md">
                <IoCloudSharp />
                {weatherData.cloud_pct}%
              </div>
              <div className="flex justify-center p-5 bg-[#d8e4e9] rounded-md">
                <FaDroplet /> {weatherData.humidity}%
              </div>
              <div className="flex justify-center p-5 bg-[#d8e4e9] rounded-md">
                {" "}
                <FaCircleChevronDown /> {weatherData.min_temp}°C
              </div>
              <div className="flex justify-center p-5 bg-[#d8e4e9] rounded-md">
                <FaCircleChevronUp />
                {weatherData.max_temp}°C
              </div>
              <div className="flex justify-center p-5 bg-[#d8e4e9] rounded-md">
                <GiWindsock />
                {weatherData.wind_speed}km/h
              </div>
              <div className="flex justify-center p-5 bg-[#d8e4e9] rounded-md">
                <BiSolidDirections />
                {weatherData.cloud_pct}°
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
