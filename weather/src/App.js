import './App.css';
import TopButton from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
// import getWeatherData from './services/weatherServices';
import getFormattedWeatherData from './services/weatherServices';

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  }
  fetchWeather();
  return (
    <div className="mx-auto bg-red-200 max-w-screen-md mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Inputs />

      <TimeAndLocation />
      <TemperatureDetails />
      <Forecast title="Hourly forecast" />
      <Forecast title="Daily forecast" />
    </div>
  );
}

export default App;
