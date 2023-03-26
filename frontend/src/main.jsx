import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import { Loading } from './components/loading'
import { Home } from './pages'

// Styles
import './styles/main.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout(){
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      }, 2000)
    }, [])

    return(
        <>
          {loading ? <Loading/> : <></>}
          <Outlet/>
        </>
    )
}