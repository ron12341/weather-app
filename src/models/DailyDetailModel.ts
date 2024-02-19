export interface DailyDetailModel {
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
        pressure: number;
    };
    weather: [{
        description: string;
        icon: string;
    }];
    wind: {
        speed: number;
    }
    dt_txt: string;
}

export const EmptyDailyDetailModel = {
    main: {
        temp: -1,
        humidity: -1,
        feels_like: -1
    },
    weather: {
        description: "",
        icon: ""
    },
    wind: {
        speed: -1
    },
    dt_txt: ""
}
