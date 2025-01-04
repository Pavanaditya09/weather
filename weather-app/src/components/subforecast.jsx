import React from "react";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Subforecast = ({ data: { humidity, temp_min, temp_max, speed } }) => {
  const moreDetails = [
    {
      id: 1,
      Icon: BiSolidDropletHalf,
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 2,
      Icon: FiWind,
      value: `${speed.toFixed()} km/h`,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}º`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}º`,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center p-4">
      {moreDetails.map(({ id, Icon, value }) => (
        <div
          key={id}
          className="flex font-light text-sm items-center justify-center"
        >
          <Icon className="text-base mr-1" />
          <p className="text-xs">
            <span className="font-medium ml-1">{value}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Subforecast;
