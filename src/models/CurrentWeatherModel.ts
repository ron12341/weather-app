export interface CurrentWeatherModel {
    name: string;
    weather: {
      main: string;
      description: string;
      icon: string;
    };
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
  }
  
  export const EmptyCurrentWeatherModel = {
    name: "",
    weather: {
      main: "",
      description: "",
      icon: ""
    },
    main: {
      temp: -1,
      feels_like: -1,
      temp_min: -1,
      temp_max: -1,
      humidity: -1
    },
    wind: {
      speed: -1
    },
    sys: {
      country: "",
      sunrise: -1,
      sunset: -1
    }
  }