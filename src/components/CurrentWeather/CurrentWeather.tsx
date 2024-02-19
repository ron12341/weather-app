import './CurrentWeatherStyle.css';
import { CurrentWeatherModel } from '../../models/CurrentWeatherModel';
import { getSunTime } from '../../helpers/FormatTime';
import { ICON_URL } from '../../services/url';

interface WeatherProps {
  weather: CurrentWeatherModel;
  unit: string;
}

const CurrentWeather = ({ weather, unit }: WeatherProps) => {
  const tempSymbol = unit === 'metric' ? 'C' : 'F';
  const windSpeedUnit = unit === 'metric' ? 'mph' : 'km/h';
  return (
    <>
      <div id="row-1" className="row">
        <p id="cityName">
          {weather.name}, {weather.sys.country}
        </p>
      </div>

      <div id="row-2" className="row d-flex align-items-center justify-content-between">
        <div id="description" className="col col-md-4 col-12">
          <img alt={'jsx-a11y/alt-text'} src={`${ICON_URL}${weather.weather.icon}@2x.png`} />
          <p>{weather.weather.description}</p>
        </div>
        <div
          id="temperature"
          className="col col-sm-6
        col-md-4 col-12"
        >
          {`${Math.round(weather.main.temp)}°${tempSymbol}`}
        </div>
        <div className="col text-nowrap">
          <p>Feels like: {` ${Math.round(weather.main.feels_like)}°${tempSymbol}`}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>
            Wind: {weather.wind.speed} {windSpeedUnit}
          </p>
        </div>
      </div>

      <div id="row-3" className="row d-flex justify-content-center">
        <p className="d-flex col col-md-6 col-12 justify-content-center text-nowrap">
          Rise: {getSunTime(weather.sys.sunrise)} AM <span className="divider">|</span> Set:{' '}
          {getSunTime(weather.sys.sunset)} PM
        </p>
        <p className="d-flex col justify-content-center text-nowrap">
          High: {` ${Math.ceil(weather.main.temp_max)}°${tempSymbol}`}{' '}
          <span className="divider">|</span> Low:
          {` ${Math.floor(weather.main.temp_min)}°${tempSymbol}`}
        </p>
      </div>
    </>
  );
};

export default CurrentWeather;
