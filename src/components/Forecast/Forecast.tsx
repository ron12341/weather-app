import { DailyDetailModel } from '../../models/DailyDetailModel';
import { formatDate } from '../../helpers/FormatDate';
import './ForecastStyle.css';
import Daily from '../Daily/Daily';

interface ForecastProps {
  forecast: DailyDetailModel[];
  unit: string;
}

const Forecast = ({ forecast, unit }: ForecastProps) => {
  return (
    <>
      {forecast.length > 0 && (
        <>
          <div className="container day-container">
            <Daily
              dayDetail={[forecast[0], forecast[1]]}
              target="day1"
              date="Tomorrow"
              tempUnit={unit}
            />
          </div>
          <div className="container day-container">
            <Daily
              dayDetail={[forecast[2], forecast[3]]}
              target="day2"
              date={formatDate(forecast[2].dt_txt)}
              tempUnit={unit}
            />
          </div>
          <div className="container day-container">
            <Daily
              dayDetail={[forecast[4], forecast[5]]}
              target="day3"
              date={formatDate(forecast[4].dt_txt)}
              tempUnit={unit}
            />
          </div>
          <div className="container day-container">
            <Daily
              dayDetail={[forecast[6], forecast[7]]}
              target="day4"
              date={formatDate(forecast[6].dt_txt)}
              tempUnit={unit}
            />
          </div>
          <div className="container day-container">
            <Daily
              dayDetail={[forecast[8], forecast[9]]}
              target="day5"
              date={formatDate(forecast[8].dt_txt)}
              tempUnit={unit}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Forecast;
