import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/header";
import Inputs from "./components/inputs";
import Timeloaction from "./components/timelocation";
import Tempdetails from "./components/tempdetails";
import getStructuredweatherData from "./services/weatherService";
import Forecast from "./components/forecast";
import ForecastDialy from "./components/forecastdaily";
import ReactLoading from "react-loading";

function App() {
  const { theme } = useContext(ThemeContext);
  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getweatherdata = async () => {
    await getStructuredweatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };
  useEffect(() => {
    getweatherdata();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = weather.units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) {
      return `from-cyan-600 to-blue-700`;
    } else {
      return `from-yellow-600 to-orange-700`;
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${
        theme === "light"
          ? `${formatBackground()}`
          : "from-gray-950 to-slate-800"
      } pb-20`}
    >
      <Header />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather ? (
        <>
          <Timeloaction weather={weather} />
          <Tempdetails weather={weather} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <div className="px-4 flex  flex-col  text-white">
            <p className="font-medium text-2xl uppercase">Dialy forecast</p>
            <hr />
          </div>
          <div className="flex flex-col px-4">
            {weather.forecastForEachday.map((eachday, index) => (
              <div key={index}>
                <ForecastDialy key={index} eachdata={eachday} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mx-auto flex flex-row justify-center items-center max-h-full mt-40 w-full">
          <ReactLoading
            type="bubbles"
             color="#fff"
            height={"8%"}
            width={"8%"}
          />
        </div>
      )}
    </div>
  );
}

export default App;
