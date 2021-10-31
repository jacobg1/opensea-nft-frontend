import './App.css'
import { useLoadArt } from './redux/hooks'
import Display from './containers/Display'
import Filters from './containers/Filters'
import Pagination from './components/Pagination'

function App() {
  useLoadArt()

  return (
    <div className="App">
      <Filters />
      <Display />
      <Pagination />
    </div>
  )
}

export default App
