import React from "react";

const Timeloaction = ({ weather: { formatLocalTime, name, country } }) => {
  return (
    <div className="text-white">
      <div className="flex items-center justify-center my-6">
        <p className="text-base md:text-xl font-extralight">
          {formatLocalTime}
        </p>
      </div>

      <div className="flex item justify-center my-3 ">
        <p className="text-xl md:text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default Timeloaction;
