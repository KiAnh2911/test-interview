export const degreeToWindDirection = (degree: number) => {
  const val = Math.floor(degree / 22.5 + 0.5);
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return directions[val % 16];
};
