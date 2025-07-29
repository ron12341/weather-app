import "./App.css";
import Input from "./components/Input/Input";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Error from "./components/Error/Error";
import { useFetch } from "./services/Fetch";

function App() {
  const { handleOnSearch, handleChangeUnit, weatherData, forecastData, unit, notFound } = useFetch();

  return (
    <>
      <div id="weather-container" className="container">
        <Input onSearch={handleOnSearch} changeUnit={handleChangeUnit} />
        {weatherData.name !== "" && !notFound && (
          <div className="container">
            <CurrentWeather weather={weatherData} unit={unit} />
          </div>
        )}

        {notFound && (
          <div id="error-container" className="container">
            <Error />
          </div>
        )}
      </div>

      {forecastData.length > 0 && !notFound && (
        <div id="forecast-container" className="container">
          <Forecast forecast={forecastData} unit={unit} />
        </div>
      )}
    </>
  );
}

export default App;
