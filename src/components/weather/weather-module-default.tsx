import { useEffect, useState } from "react";
import moment from "moment";
import { useDebounce } from "../../hooks/useDebounce";
import { fetchLatLon, fetchWeatherData } from "../../lib";
import { ILocation } from "../../types/location";
import { IWeather } from "../../types/weather";
import WeatherModuleNotFound from "./weather-module-not-found";
import { Loading, SearchInput } from "../atoms";
import WeatherModuleCurrent from "./weather-module-current";
import WeatherModuleSelectDay from "./weather-module-select-day";

const WeatherModuleDefault = () => {
  const [country, setCountry] = useState<string>("");
  const city = useDebounce(country, 700, async () => {});
  const [unit, setUnit] = useState<string>("metric");
  const [weatherData, setWeatherData] = useState<IWeather>();
  const [location, setLocation] = useState<ILocation>();
  const [selectedDate, setSelectedDate] = useState<number>();

  const handleDateSelection = (date: number) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        try {
          const direct: ILocation = await fetchLatLon(city);
          const data: IWeather = await fetchWeatherData(
            direct?.lat,
            direct?.lon,
            unit
          );
          setLocation(direct);
          setWeatherData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [city, unit]);

  return (
    <div className="w-[590px] flex flex-col gap-3">
      <SearchInput country={country} setCountry={setCountry} />

      <div className="border rounded">
        {city ? (
          <>
            {weatherData && location ? (
              <>
                <WeatherModuleCurrent
                  unit={unit}
                  setUnit={setUnit}
                  location={location}
                  data={
                    selectedDate
                      ? weatherData.daily?.find(
                          (day) =>
                            moment.unix(day.dt).format("DD/MM/YYYY") ===
                            moment.unix(selectedDate).format("DD/MM/YYYY")
                        )
                      : weatherData.current
                  }
                />
                <WeatherModuleSelectDay
                  data={weatherData}
                  onDateSelect={handleDateSelection}
                />
              </>
            ) : (
              <Loading />
            )}
          </>
        ) : (
          <WeatherModuleNotFound />
        )}
      </div>
    </div>
  );
};

export default WeatherModuleDefault;
