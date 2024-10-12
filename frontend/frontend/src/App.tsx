import { useState } from 'react'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />}/>
        <Route path='/' element={<Landing />}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
