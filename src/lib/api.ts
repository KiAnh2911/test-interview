const API_KEY = "1c5da32bd6a0d1c4c017b21b49833c7f";

export const fetchLatLon = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
  const data = await response.json();
  if (data.length > 0) {
    return data[0];
  } else {
    throw new Error("City not found");
  }
};

export const fetchWeatherData = async (
  lat: number,
  lon: number,
  unit: string
) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_KEY}&units=${unit}`
  );
  const data = await response.json();
  return data;
};

// image
export const getWeatherIconUrl = (iconCode: string) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

//  aqi
export const fetchAirQuality = async (lat: number, lon: number) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  const data = await res.json();
  return data;
};
