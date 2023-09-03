import { useState ,useEffect,useReducer,createContext} from 'react'
import './App.css'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Products from './Pages/Products'
import {InitialStates, Reducer} from "./components/Reducer"
import SinglePage from './Pages/SinglePage'
import Checkout from './Pages/Checkout'
import AboutUs from './Pages/AboutUs'
import Orders from './Pages/Orders'
import { useDispatch } from 'react-redux'

import { useLocation } from 'react-router-dom';
import { ToggleModal,ToggleVisit } from './app/features/productSlice'


export const App_Context = createContext()

function App() {
  const location = useLocation()

  useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },[location.pathname])


const dispatch =useDispatch()
  return (
    
    <div className="App">

          <Routes>
            
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path='/AboutUsPage' element={<AboutUs/>} />
              <Route path='/OrdersPage' element={<Orders/>} />
              <Route path='/SinglePage' element={<SinglePage/>} />
               <Route path="/products/:Id/:itemId" element={<SinglePage/>} />
               <Route path='/Checkout' element={<Checkout/>} />
            </Route>
          </Routes>
    </div>
  )
}

export default App
