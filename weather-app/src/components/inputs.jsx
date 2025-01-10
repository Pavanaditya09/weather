import React, { useState} from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchbar = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
    setCity("");
  };


    const getCurrenLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setQuery({ lat: latitude, lon: longitude });
          console.log(latitude,longitude)
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    }
  };

  return (
    <div className="flex flex-row justify-center my-3  w-full ">
      <div className="flex flex-row  w-4/5 md:w-2/4  items-center justify-center space-x-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearchbar();
          }}
          placeholder="Search by city..."
          className="text-gray-500 font-light p-3 py-4 w-3/5  lg:max-w-74 xl:max-w-80 rounded sm:placeholder:text-sm  md:placeholder:text-lg  shadow-xl h-8  md:h-10  capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch
          size={20}
          className="cursor-pointer text-white transition ease-out hover:scale-125"
          onClick={handleSearchbar}
        />
        <BiCurrentLocation
          size={20}
          className="cursor-pointer text-white transition ease-out hover:scale-125"
          onClick={getCurrenLocation}
        />

        <div className="flex flex-row w-1/4  text-white items-center justify-center">
          <button
            className="text-xl font-medium transition ease-out hover:scale-125"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>
          <p className="text-xl font-medium mx-1">|</p>
          <button
            className="text-xl font-medium transition ease-out hover:scale-125"
            onClick={() => setUnits("imperial")}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
