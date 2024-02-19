import { DailyDetailModel } from '../../models/DailyDetailModel';
import { ICON_URL } from '../../services/url';
import { useState } from 'react';
import DailyDetail from '../DailyDetail/DailyDetail';
import './DailyStyle.css';

interface DailyProps {
  dayDetail: DailyDetailModel[];
  tempUnit: string;
  target: string;
  date: string;
}

const Daily = ({ dayDetail, target, date, tempUnit }: DailyProps) => {
  const [toggle1, setToggle1] = useState<boolean>(false);

  return (
    <>
      <nav
        className="navbar justify-content-end p-0"
        role="button"
        aria-controls="collapseExample"
        aria-expanded="false"
        onClick={() => {
          setToggle1(!toggle1);
        }}
      >
        {!toggle1 && (
          <>
            <p id="date" className="col">{date}</p>
            <p id="temp" className="col">
              <span id="day-temp" className="fw-bold">
                {Math.round(dayDetail[0].main.temp)}°
              </span>{' '}
              / {Math.round(dayDetail[1].main.temp)}°
            </p>
            <p className="col">
              <img alt={'jsx-a11y/img-redundant-alt'} src={`${ICON_URL}${dayDetail[0].weather[0].icon}@2x.png`} />
            </p>
            <p className="col-1 arrow">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                </g>
              </svg>
            </p>
          </>
        )}
        {toggle1 && (
          <>
            <p className="col-1 arrow mt-4 mb-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"></path>
                </g>
              </svg>
            </p>
            <div className="navbar-collapse" id={`${target}`}>
              <DailyDetail timeDetail={dayDetail[0]} time="Day" date={date} tempUnit={tempUnit} />
              <DailyDetail timeDetail={dayDetail[1]} time="Night" date={date} tempUnit={tempUnit} />
            </div>
          </>
        )}
      </nav>
    
    </>
  );
};

export default Daily;
