const dotenv = require("dotenv");
const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT;

// Your OpenWeatherMap API Key
const API_KEY = process.env.API_KEY;

app.use(cors(
  {
    origin: {"https://weather-climate-xi.vercel.app"},
    methods:{"GET"},
    credentials: true
  }
  ));

app.get("/api/:path", async (req, res) => {
  const { path } = req.params;
  const queryParams = { ...req.query, appid: API_KEY };

  const url = `https://api.openweathermap.org/data/2.5/${path}`;

  console.log("Request URL:", url);
  console.log("Query Params:", queryParams);

  try {
    const response = await axios.get(url, {
      params: queryParams,
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from OpenWeatherMap:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch weather data", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
