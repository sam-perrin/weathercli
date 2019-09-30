require('dotenv').config();
const fetch = require("node-fetch");
const API_KEY = process.env.APIKEY

const fetchNow = async (city) => {
    // const response = await fetch(`https://api.apixu.com/v1/current.json?key=${APIXU_KEY}&q=${city}`);
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);

    const data = await response.json();

    const now = {
        location: data.location.name,
        country: data.location.country,
        longitude: data.location.lon,
        latitude: data.location.lat,
        temparature: data.current.temperature,
        condition: data.current.weather_descriptions.toString()
    }
    console.log(now)
};

const weatherForecast = async (city) => {

    //const response = await fetch(`https://api.apixu.com/v1/forecast.json?key=${APIXU_KEY}&q=${city}`);
    const response = await fetch(`http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${city}`)
    const data = await response.json();
    console.log(data.forecast)
};

module.exports = {
    fetchNow,
    weatherForecast
  };