import axios from "axios";
import { DateTime } from "luxon";

axios.default.withCredentials= true;

const getweather = async (infotype, params) => {
  const response = await axios.get(`https://weather-ashy-rho.vercel.app/api/${infotype}`, {
    params, // Passing query parameters like city, lat, lon
  });
  return response.data;
};

const iconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) =>
  DateTime.fromSeconds(secs, { zone: "utc" })
    .plus({ seconds: offset })
    .toFormat(format);

const formattedCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    dt,
    name,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formatLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconUrl(icon),
    formatLocalTime,
    lat,
    lon,
    dt,
    timezone,
  };
};

const formatForecastWeather = (secs, offset, data) => {
  let forecastForEachday = [];
  data.forEach((element) => {
    const {
      dt_txt,
      main: { temp, feels_like, temp_min, temp_max, humidity },
      dt,
      weather,
      wind: { speed },
    } = element;
    const { main: details, icon } = weather[0];

    let date = dt_txt.slice(0, 10); 
    const time = formatToLocalTime(dt, offset, "hh:mm a");

    // Check if the forecast for this date already exists
    let dayForecast = forecastForEachday.find(
      (forecast) => forecast.date === date
    );

    if (!dayForecast) {
      // If not found, add a new day entry
      dayForecast = {
        title: formatToLocalTime(dt, offset, "ccc"),
        date: date,
        commondate: formatToLocalTime(dt, offset, "dd LLL yyyy"),
        forecast: [],
      };
      forecastForEachday.push(dayForecast);
    }

    // Push forecast data (max 5 for each day)
    if (dayForecast.forecast.length < 5) {
      dayForecast.forecast.push({
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        time,
        speed,
        icon: iconUrl(icon),
        details,
      });
    }
  });
  forecastForEachday.shift();

  const hourly = data
    .filter((f) => f.dt > secs)
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconUrl(f.weather[0].icon),
      date: f.dt_txt,
    }))
    .slice(0, 5);


  return { hourly, forecastForEachday };
};

const getStructuredweatherData = async (searchparams) => {
  const formattedWeather = await getweather("weather", searchparams).then(
    formattedCurrentWeather
  );

  const { dt, timezone, lat, lon } = formattedWeather;

  const formattedForecastWeather = await getweather("forecast", {
    lat,
    lon,
    units: searchparams.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));

  return {
    ...formattedWeather,
    ...formattedForecastWeather,
    units: searchparams.units,
  };
};

export default getStructuredweatherData;
