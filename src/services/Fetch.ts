import { InputModel, EmptyInputModel } from '../models/InputModel';
import { useState, useEffect } from 'react';
import { API_KEY } from './api';
import { WEATHER_URL, FORECAST_URL } from './url';
import { CurrentWeatherModel, EmptyCurrentWeatherModel } from '../models/CurrentWeatherModel';
import { DailyDetailModel } from '../models/DailyDetailModel';
import { DailyModel } from '../models/DailyModel';

export const useFetch = () => {
  const [input, setInput] = useState<InputModel>(EmptyInputModel);
  const [weatherData, setWeatherData] = useState<CurrentWeatherModel>(EmptyCurrentWeatherModel);
  const [forecastData, setForecastData] = useState<DailyDetailModel[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (input.city === '') return;

    fetch(`${FORECAST_URL}${input.city}&units=${input.unit}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const tempForecast = {
          list: data.list,
        };
        setForecastData(getDayNight(tempForecast));
        setNotFound(false);
      })
      .catch(error => {
        console.log(error);
        setNotFound(true);
      });

    fetch(`${WEATHER_URL}${input.city}&units=${input.unit}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const tempWeatherData = {
          name: data.name,
          main: data.main,
          sys: data.sys,
          wind: data.wind,
          weather: data.weather[0],
        };
        setWeatherData(tempWeatherData);
      })
      .catch(error => {
        console.log(error);
      });
  }, [input]);

  const handleOnSearch = (search: InputModel) => {
    if (search.city === '') return;

    setInput(search);
  };

  const handleChangeUnit = (newUnit: string) => {
    if (newUnit === input.unit) return;

    const newInput = { city: input.city, unit: newUnit };
    setInput(newInput);
  };

  const getDayNight = (forecast: DailyModel) => {
    let tempDaily: DailyDetailModel[] = [];

    for (let i = 0; i < forecast.list.length; i++) {
      let item_dt = forecast.list[i].dt_txt;
      if (item_dt.includes('06:00:00') || item_dt.includes('18:00:00'))
        tempDaily.push(forecast.list[i]);
    }

    return tempDaily.slice(-10); //get day and night of the next 5 days
  };

  const unit = input.unit;
  return { handleOnSearch, handleChangeUnit, weatherData, forecastData, unit, notFound };
};
