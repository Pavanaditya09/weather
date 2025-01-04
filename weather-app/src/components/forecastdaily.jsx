import React from "react";
import Subforecast from "./subforecast";

const ForecastDialy = ({ eachdata }) => {
  const { commondate, forecast } = eachdata;

  return (
    <div className="flex flex-col p-5 text-white ">
      <p className="justify-start mb-2">{commondate}</p>
      <div className="md:flex md:flex-row text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  flex-wrap  ">
        {forecast.map((d, index) => (
          <div
            key={index}
            className="flex flex-col w-auto p-4 rounded-md shadow-inner m-4 shadow-gray-50"
          >
            <p className="">{d.time}</p>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col px-5 ">
                <img src={d.icon} className="w-16" />
                <p className="text-sm text-cyan-300">{d.details}</p>
                <p className="text-xs">{`${d.temp.toFixed()}º`}</p>
              </div>
              <div>
                <Subforecast data={d} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDialy;
