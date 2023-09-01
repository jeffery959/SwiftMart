import React,{useEffect,useState,useContext,useCallback,memo} from 'react'
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import { App_Context } from '../App';
import { ToggleCart } from '../app/features/productSlice';
import { useSelector,useDispatch } from 'react-redux';
import Cart from './Cart';
const Navbar = () => {
const [navbarBgColor, setNavbarBgColor] = useState('');
const [txtColor, setTxtColor] = useState('text-white');
const [Navbar_switch, setNavbar_switch] = useState('Navigation_Off');
const [isToggled, setIsToggled] = useState(true);
const [atHome,setAtHome] = useState(false)
  const location = useLocation();





    
 useEffect(() => {

  
  const isHomePage = location.pathname === '/';
  if (isHomePage) {
    setAtHome(true);
    if (window.scrollY < 100 && atHome) {
      setNavbarBgColor('bg-none text-white');
      setTxtColor('text-white');
    }
  } else {
    setAtHome(false);
    setNavbarBgColor('bg-white text-black');
    setTxtColor('text-black');
  }
},[window.scrollY,location.pathname,atHome,isToggled]);





   const handleToggle = () => {
    
 setIsToggled(!isToggled)
   

    
    if(isToggled){

      setNavbar_switch("Navigation_ON")

    }
    else{
      setNavbar_switch("Navigation_Off")

    }
  };
  const Transition_notify =()=>{
    setIsToggled(!isToggled)
    setNavbar_switch("Navigation_Off")
  }
  
  const dispatch =useDispatch()
  return (
    <div className={`Navbar ${navbarBgColor} `}>
      
<img src="/Logo/SwiftMart.svg" alt="" className='logo ' />


<div className={`flex justify-between  widget  `}>
     <Modal/>

  
   <Cart/> 
    
<div className={`flex justify-between Navigation ${Navbar_switch}`}>

<NavLink to={"/"}  className={(state) =>state.isActive? "Hme":""}><p >Home </p> </NavLink>
<NavLink to={"/products"} className={(state) =>state.isActive? "Hme":""}>

<p>  Products</p></NavLink>
<NavLink to={"/OrdersPage"} className={(state) =>state.isActive? "Hme":""} > 
<p>
 Orders
</p> 

</NavLink>
<NavLink to={"/AboutUsPage"}className={(state) =>state.isActive? "Hme":""}>
<p>AboutUs</p></NavLink>



</div>
<div className='Navigation-img '>
  <div className='Navigation-img-search flex justify-center  rounded-lg items-center p-2  '>
  <img src="/Logo/Search.svg" alt="" />

 <input type="text" placeholder='Search' className='px-3'/>
  </div>

<img src={`/Logo/${atHome?"Cart.svg":"Cart-black.svg"}`} onClick={()=>dispatch(ToggleCart())} />

<img src={`/Logo/${atHome?"User.svg":"User-black.svg"}`}/>
</div>
</div>
{false ?<div></div>:<div className={`Menu hidden  `}>
<div className='Navigation-img-mobile '>
  <div className='Navigation-img-search flex justify-center  rounded-lg items-center p-2  '>
  <img src="/Logo/Search.svg" alt="" />

 <input type="text" placeholder='Search' className='px-3'/>
  </div>
<IconButton  onClick={()=>dispatch(ToggleCart())}>

<img src={`/Logo/${atHome?"Cart.svg":"Cart-black.svg"}`} />
</IconButton>
<IconButton>

<img src={`/Logo/${atHome?"User.svg":"User-black.svg"}`}/>
</IconButton>

</div>
<IconButton onClick={()=>handleToggle()} className='z-50'>
{
  isToggled?
  
  <MenuIcon className={`${txtColor}  z-50`} />:<CloseIcon className={`text-white z-50` } />
}


</IconButton>
</div>}

</div>
  )
}

export default React.memo(Navbar)
