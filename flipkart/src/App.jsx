import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SearchPage from './components/Pages/SearchPage'
import Headset from './components/Pages/Headset/Headset'
import Filters from './components/Pages/Headset/Filters/Filters'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='headset' element={<Headset/>}/>
        <Route path='headset/filter' element={<Filters/>}/>
      </Routes>
    </>
  )
}

export default App
