import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './pages/Home/index.jsx'
import LocateNearbyCentres from './pages/locate nearby centres/index.jsx'
import CreditPoints from './pages/credit points/index.jsx'
import LogIn from './components/login/index.jsx'
import SignUp from './components/signup/index.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='locate' element={<LocateNearbyCentres />} />
      <Route path='credit' element={<CreditPoints />} />
      <Route path='login' element={<LogIn />} />
      <Route path='sign-up' element={<SignUp />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
