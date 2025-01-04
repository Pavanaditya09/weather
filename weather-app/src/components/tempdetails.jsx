import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Tempdetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    humidity,
    feels_like,
    speed,
    sunrise,
    sunset,
  },
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}º`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} km/h`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
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
    <div className="text-white ">
      <div className="flex items-center justify-center py-6  text-base md:text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="md:w-3/5 mx-auto flex flex-row items-center justify-around py-4 p-2 md:pl-18">
        <img src={icon} alt="weather icon" className="w-30 md:w-40" />
        <p className="text-3xl md:text-5xl">{`${temp.toFixed()}º`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon className="text-base md:text-3xl mr-1" />
              <p className="text-xs">
                {`${title}:`} <span className="font-medium ml-1">{value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-4/5  lg:w-3/6 mx-auto flex flex-row items-center justify-around py-4 p-2 md:pl-18">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div
            key={id}
            className="flex font-light text-xs md:text-sm items-center justify-center p-2"
          >
            <Icon className="mr-1 text-lg md:text-3xl" />
            <p className=" text-[8px] md:text-base lg:text-lg">
              {`${title}:`}{" "}
              <span className="font-medium text-[7px] md:text-base lg:text-lg ml-1">
                {value}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tempdetails;
