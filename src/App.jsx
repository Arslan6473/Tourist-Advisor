import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Weather, List } from "./components";

function App() {
  const [city, setCity] = useState("bahawalpur");
  const [locdata, setLocdata] = useState({});
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLodingWeather, setIsLoadingWeather] = useState(false);

  const [type, setType] = useState("restaurants");

  const getCity = (city) => {
    setCity(city);
  };
  console.log(import.meta.env.VITE_NINJA_API_KEY);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/geocoding?city=${city}`,
          {
            headers: {
              "X-Api-Key": import.meta.env.VITE_NINJA_API_KEY,
              "Content-Type": "application/json",
            },
          }
        );
        setLocdata(response.data[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    })();

    (async () => {
      try {
        setIsLoadingWeather(true);
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/weather?city=${city}`,
          {
            headers: {
              "X-Api-Key": import.meta.env.VITE_NINJA_API_KEY,
              "Content-Type": "application/json",
            },
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoadingWeather(false);
      }
    })();
  }, [city]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const {
          data: { data },
        } = await axios.get(
          `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
          {
            params: {
              latitude: locdata.latitude,
              longitude: locdata.longitude,
            },
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
              "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
          }
        );

        setPlaces(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (locdata.latitude && locdata.longitude) {
      fetchData();
    }
  }, [locdata, setLocdata, type, setType]);
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Header getCity={getCity} />
        </div>

        <div className=" w-[100%] grid md:grid-cols-[60%,40%] grid-cols-1">
          <div>
            <List
              places={places}
              isLoading={isLoading}
              type={type}
              setType={setType}
            />
          </div>
          <div>
            <Weather
              weatherData={weatherData}
              isLodingWeather={isLodingWeather}
              city={city}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
