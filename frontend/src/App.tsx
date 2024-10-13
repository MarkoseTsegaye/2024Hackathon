import Landing from './components/pages/Landing'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Account from './components/pages/Account'
import Map from './components/pages/Map'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='/' element={<Landing />}/>
        <Route path='map' element={<Map />}/>
        <Route path='/account' element={<Account />}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
