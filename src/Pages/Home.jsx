import { useEffect,useContext } from 'react';
import { App_Context } from '../App';
import Hero_banner from '../components/Hero_banner'
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';



const Home = () => {
    const {state,dispatch}=useContext(App_Context);
  useEffect(()=>{

 
   dispatch({type:"State_load_false"})
    setTimeout(()=> dispatch({type:"State_load"}), 2000);

  },[])
  return (
    <div className='h-screen'>
      <Navbar/>
    

        <Hero_banner/>
      
      
    </div>
  )
}



export default Home
