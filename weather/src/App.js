import './App.css';
import TopButton from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
// import getWeatherData from './services/weatherServices';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from 'react';


function App() {
  const [query, setQuery] = useState({ q: 'kathmandu' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  // useEffect: every time  the query(location) or units changes  the API call would be made to fetch new data. !
  useEffect(() => {
    const fetchWeather = async () => {
      // const data = await getFormattedWeatherData({ q: "london" });
      // console.log(data);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log('you are seeing updated weather', weather);
      });
    }
    fetchWeather();
  }, [query, units])


  return (
    <div className="mx-auto bg-red-200 max-w-screen-md mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Inputs />
      {/* && if true then render  */}
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <Forecast title="Hourly forecast" />
          <Forecast title="Daily forecast" />
        </div>
      )}

    </div>
  );
}

export default App;
