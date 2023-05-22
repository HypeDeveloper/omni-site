// main file to render react doc.
// 5 - 22 - 23

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

// styles
import './styles/main.css'
import './styles/tools.css'
import './styles/pages/landingPage.css'

// utils
import { Button } from './tools/utils'
import { Navbar } from './tools/navbar'
import Home from './pages/landing pages/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutLandingPage/>}>
            <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


function LayoutLandingPage(){
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}