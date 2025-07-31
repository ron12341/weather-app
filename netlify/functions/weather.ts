import { FORECAST_URL, WEATHER_URL } from "../../src/services/url";

export async function handler(event: any) {
  const city = event.queryStringParameters.city;
  const unit = event.queryStringParameters.unit || "metric";

  const API_KEY = process.env.REACT_APP_API_KEY;

  // Make both requests from the server
  const [forecastRes, weatherRes] = await Promise.all([
    fetch(`${FORECAST_URL}${city}&units=${unit}&appid=${API_KEY}`),
    fetch(`${WEATHER_URL}${city}&units=${unit}&appid=${API_KEY}`),
  ]);

  const [forecastData, weatherData] = await Promise.all([forecastRes.json(), weatherRes.json()]);

  return {
    statusCode: 200,
    body: JSON.stringify({ forecastData, weatherData }),
  };
}
