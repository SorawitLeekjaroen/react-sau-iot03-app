import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeUI from './views/HomeUI'
import AboutUI from './views/AboutUI'
import ContactUI from './views/Contactui'
import ShowiotproductsUI from './views/ShowiotproductsUI'
import IotServiceUI from './views/IotServiceUI'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeUI />} />
      <Route path="/about" element={<AboutUI />} />
      <Route path="/contact" element={<ContactUI />} />
      <Route path="/wow/iotshop" element={<ShowiotproductsUI />} />
      <Route path="/sau/service" element={<IotServiceUI />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App