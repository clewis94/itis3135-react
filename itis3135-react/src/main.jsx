import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import Contract from './Contract.jsx'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/introduction.html' element={<Introduction/>}></Route>
          <Route path='/contract.html' element={<Contract/>}></Route>
          <Route path='/home.html' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
