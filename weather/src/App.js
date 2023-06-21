import './App.css';
import TopButton from './components/TopButtons';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className="mx-auto bg-red-200 max-w-screen-md mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Inputs />
    </div>
  );
}

export default App;
