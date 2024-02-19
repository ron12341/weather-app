import { DailyDetailModel } from '../../models/DailyDetailModel';
import { ICON_URL } from '../../services/url';
import './DailyDetailStyle.css';

interface DailyDetailProps {
  timeDetail: DailyDetailModel;
  tempUnit: string;
  date: string;
  time: string;
}

const DailyDetail = ({ timeDetail, date, time, tempUnit }: DailyDetailProps) => {
  const tempSymbol = tempUnit === 'metric' ? 'C' : 'F';
  const windSpeedUnit = tempUnit === 'metric' ? 'mph' : 'km/h';
  return (
    <>
      <div id="data-container" className="d-flex row row-margin-0">
        <div className="col-sm-5 col-12 d-flex align-items-start flex-column">
          <p className="d-flex m-1 text align-items-end">
            <span className="fs-5 m-1">{date} | </span>
            {time}
          </p>

          <div className="d-flex align-items-center">
            <p className="fs-1" id="temp">
              {' '}
              {Math.round(timeDetail.main.temp)}°{tempSymbol}
            </p>

            <img
              className="col"
              alt={'jsx-a11y/img-redundant-alt'}
              src={`${ICON_URL}${timeDetail.weather[0].icon}@2x.png`}
            />
          </div>
        </div>

        <div id="details" className="d-flex col-sm-7 col-12 p-sm-2 p-1 mt-sm-2 mb-sm-0 mb-2">
          <div className="col d-flex align-items-start flex-column">
            <p className="mb-auto">
              Feels-like: {Math.round(timeDetail.main.feels_like)}°{tempSymbol}
            </p>
            <p>Humidity: {timeDetail.main.humidity}%</p>
          </div>

          <div className="col d-flex align-items-start flex-column">
            <p className="mb-auto">
              Wind: {timeDetail.wind.speed} {windSpeedUnit}
            </p>

            <p>Pressure: {timeDetail.main.pressure} mb</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyDetail;
