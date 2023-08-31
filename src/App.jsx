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

export const App_Context = createContext()

function App() {

  const [count, setCount] = useState(0)
  const [state,dispatch] = useReducer(Reducer,InitialStates)
  
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
   
    setIsLoading(false);
  }, []);
  return (
  <App_Context.Provider value={{state,dispatch}}>
    
    <div className="App">

          <Routes>
            
              <Route path="/" element={<Home />} />
            <Route path="/" element={<Layout />}>
              <Route path="/products" element={<Products />} />
              <Route path='/AboutUsPage' element={<AboutUs/>} />
              <Route path='/OrdersPage' element={<Orders/>} />
              <Route path='/SinglePage' element={<SinglePage/>} />
               <Route path="/products/:Id/:itemId" element={<SinglePage/>} />
               <Route path='/Checkout' element={<Checkout/>} />
            </Route>
          </Routes>

    </div>
  </App_Context.Provider>
  )
}

export default App
