import { useState } from "react";
import moment from "moment";
import { getDateInfo, getWeatherIconUrl } from "../../lib";
import { IWeather } from "../../types/weather";

type TWeatherModuleSelectDay = {
  data?: IWeather;
  onDateSelect: (value: number) => void;
};

const WeatherModuleSelectDay = ({
  data,
  onDateSelect,
}: TWeatherModuleSelectDay) => {
  const today = moment().format("DD");
  const [selectedDate, setSelectedDate] = useState<number>(moment().unix());

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className="grid grid-flow-col grid-rows-1">
      {data?.daily?.map((day) => {
        return (
          <div
            key={day.dt}
            onClick={() => handleDateClick(day?.dt)}
            className={`
                  border flex flex-col items-center cursor-pointer p-[20px_10px_15px] text-t000 ${
                    moment.unix(selectedDate).format("DD") ===
                    moment.unix(day?.dt).format("DD")
                      ? "bg-tf7f7f7"
                      : ""
                  }`}
          >
            <h3 className="text-sm font-bold">
              {getDateInfo(day?.dt, "dayOfWeek")}
            </h3>
            <div className="w-12 h-12">
              <img
                src={getWeatherIconUrl(day?.weather[0].icon)}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold">{day?.temp?.max.toFixed()}°</h3>
            <h4 className="text-sm">{day?.temp?.min.toFixed()}°</h4>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherModuleSelectDay;
