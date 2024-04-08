import { useEffect, useState } from "react";
import { IAirQuality } from "../../types/airQuality";
import moment from "moment";
import {
  degreeToWindDirection,
  fetchAirQuality,
  getDateInfo,
  getWeatherIconUrl,
  pickAirQuality,
} from "../../lib";

type TWeatherModuleCurrent = {
  unit: string;
  setUnit: (value: string) => void;
  location: any;
  data: any;
};

const WeatherModuleCurrent = ({
  unit,
  location,
  data,
  setUnit,
}: TWeatherModuleCurrent) => {
  const [currentAirQuality, setCurrentAirQuality] = useState<IAirQuality>();

  const today = moment().format("DD");

  useEffect(() => {
    const fetchAqi = async () => {
      try {
        if (data) {
          const dataAqi = await fetchAirQuality(location.lat, location.lon);
          setCurrentAirQuality(dataAqi);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchAqi();
  }, [data]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">
        {location?.name}, {location?.country}
      </h2>

      <div className="flex items-center gap-2 mb-4 text-sm text-t666">
        <span>{getDateInfo(data?.dt, "dayAndTime")}</span>
        <div className="w-1 h-1 rounded-full bg-t666"></div>
        <span className="capitalize">{data?.weather[0].description}</span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-4 ">
          <div className="w-16 h-16">
            <img
              src={getWeatherIconUrl(data?.weather[0].icon)}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative">
            <span className="text-[44px] font-bold">
              {data?.temp | data?.temp?.max}°
            </span>
            <div className="absolute -top-[11px] -right-[35px] flex items-center gap-1 text-sm font-bold uppercase">
              <button
                onClick={() => setUnit("imperial")}
                className={`${
                  unit === "imperial"
                    ? "text-t333 border-b-2 border-t09"
                    : "text-t09"
                } `}
              >
                F
              </button>
              <span>/</span>
              <button
                onClick={() => setUnit("metric")}
                className={`${
                  unit === "metric"
                    ? "text-t333 border-b-2 border-t09"
                    : "text-t09"
                } `}
              >
                C
              </button>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <p>Humidity: {data?.humidity}%</p>
          <p>
            Wind: {data?.wind_speed} {unit === "metric" ? "KPH" : "MPH"}{" "}
            {degreeToWindDirection(data?.wind_deg)}
          </p>

          {today === moment.unix(data?.dt).format("DD") ? (
            <p>
              Air Quality:{" "}
              {currentAirQuality &&
                currentAirQuality.list &&
                currentAirQuality.list.length > 0 &&
                pickAirQuality(currentAirQuality.list[0].main.aqi)}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherModuleCurrent;
