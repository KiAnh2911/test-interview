export const pickAirQuality = (airQuality: number) => {
  switch (airQuality) {
    case 1:
      return "Good";
      break;
    case 2:
      return "Fair";
      break;
    case 3:
      return "Moderate";
      break;
    case 4:
      return "Poor";
      break;

    default:
      return "Very Poor";
  }
};
