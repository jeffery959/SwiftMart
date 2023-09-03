import React,{useEffect,useState} from 'react'
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import { ToggleCart, ToggleVisit } from '../app/features/productSlice';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from './Cart';
const Navbar = () => {
const [navbarBgColor, setNavbarBgColor] = useState('');
const [txtColor, setTxtColor] = useState('text-white');
const [Navbar_switch, setNavbar_switch] = useState('Navigation_Off');
const [isToggled, setIsToggled] = useState(true);
const [atHome,setAtHome] = useState(false)
  const location = useLocation();





    const ToggleTxt= useSelector(state=>state.product.ToggleTxt)
    const CartList= useSelector(state=>state.product.CartList)
    const Visited= useSelector(state=>state.product.Visited)
 useEffect(() => {

  
  const isHomePage = location.pathname === '/home';
  if (isHomePage) {
    setAtHome(true);
    if (window.scrollY < 1 && atHome) {
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
  
  
  const dispatch =useDispatch()
  return (
    <div className={`Navbar ${navbarBgColor} `}>
      
<Link to={"/home"}>
<img src="/Logo/SwiftMart.svg" alt="" className='logo ' />
</Link>

<div className={`flex justify-between  widget  `}>
     <Modal Txt={ToggleTxt}/>

  
   <Cart/> 
    
<div className={`flex justify-between Navigation ${Navbar_switch}`}>

<NavLink to={"/home"}  className={(state) =>state.isActive? "Hme":""}><p >Home </p> </NavLink>
<NavLink to={"/products"} className={(state) =>state.isActive? "Hme":""}>

<p>  Products</p></NavLink>
<NavLink to={"/OrdersPage"} className={(state) =>state.isActive? "Hme":""} > 
<p>
 Orders
</p> 
 {
Visited&&
   <p className='Order_Notify'>1</p>
 }

</NavLink>
<NavLink to={"/AboutUsPage"}className={(state) =>state.isActive? "Hme":""}>
<p>AboutUs</p></NavLink>



</div>
<div className='Navigation-img '>
  <div className='Navigation-img-search flex justify-center  rounded-lg items-center p-2  '>
  <img src="/Logo/Search.svg" alt="" />

 <input type="text" placeholder='Search' className='px-3'/>
  </div>
<IconButton onClick={()=>dispatch(ToggleCart())}>

<img src={`/Logo/${atHome?"Cart.svg":"Cart-black.svg"}`}  />
{CartList.length>0&&

  <p className='Notify'>{CartList.length}</p>
}
</IconButton>
<IconButton>

<img src={`/Logo/${atHome?"User.svg":"User-black.svg"}`}/>
</IconButton>
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
{CartList.length>0&&

<p className='Notify'>{CartList.length}</p>
}
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
