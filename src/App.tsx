import "./App.css";
import { useLoadArt } from "./redux/hooks";
import Display from "./components/Display";
import Filters from "./components/Filters";

function App() {
  useLoadArt();

  return (
    <div className="App">
      <Filters />
      <Display />
    </div>
  );
}

export default App;
