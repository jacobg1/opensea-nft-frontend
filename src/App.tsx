import Filters from "./components/Filters";
import logo from "./logo.svg";
import "./App.css";
import { setFilter } from "./redux/state/filterSlice";
import { useDispatch } from "react-redux";
import { fetchArt } from "./redux/state/artSlice";
import {
  useAppDispatch,
  useAppSelector,
  useFilterPayload,
} from "./redux/hooks";
import Display from "./components/Display";

function App() {
  const dispatch = useAppDispatch();

  const getFilters = useFilterPayload();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 onClick={() => dispatch(fetchArt(getFilters))}>TEST</h1>
      </header>
      <Filters />
      <Display />
    </div>
  );
}

export default App;
