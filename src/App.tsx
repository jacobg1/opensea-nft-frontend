import './App.css'
import { useLoadArt } from './redux/hooks'
import Display from './containers/Display'
import Filters from './containers/Filters'

function App() {
  useLoadArt()

  return (
    <div className="App">
      <Filters />
      <Display />
    </div>
  )
}

export default App
