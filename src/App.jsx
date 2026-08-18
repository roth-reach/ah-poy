import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/Mainlayout'
import HomePage from './page/HomePage'
import Shoppage from './page/Shoppage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='shop' element={<Shoppage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
