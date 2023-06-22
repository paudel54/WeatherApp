const API_KEY = "3fc62ef15fdfb1a7f994d04c0b18b63b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
// const BASE_URL =
//   "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
//infotype weather searchParams obj { q: "london" }
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // href:"https://api.openweathermap.org/data/2.5/weather?q=london&appid=3fc62ef15fdfb1a7f994d04c0b18b63b"
  //   console.log("This is final url for request", url);
  //   console.log(" this is url search", url.search);
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    details,
    icon,
    country,
    sunrise,
    sunset,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

// export default getWeatherData;
export default getFormattedWeatherData;
