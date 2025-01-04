import React from "react";

const Forecast = ({ title, data }) => {
  return (
    <div>
      <div className="px-5 flex  flex-col mx-auto md:w-3/5 text-white">
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase">{title}</p>
        </div>
        <hr className="my-1" />

        <div className="flex items-center justify-between">
          {data.map((d, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center">
                <p className="font-light  text-[10px] md:text-base">
                  {d.title}
                </p>
                <img src={d.icon} alt="weather icon" className="w-12 my-1" />
                <p className="font-medium text-[14px] md:text-base">{`${d.temp.toFixed()}°`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
