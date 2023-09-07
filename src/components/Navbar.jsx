import React,{useEffect,useState} from 'react'
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { ToggleCart } from '../app/features/productSlice';
import Cart from "./Cart"
const Navbar = () => {
  
  const [toggleMenu,setToggleMenu]=useState(false)
  const  [toggleCart,setToggleCart]=useState(false)
  const location = useLocation();



   const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
    console.log(toggleMenu)

  };
  const dispatch =useDispatch()
  
  const CartList= useSelector(state=>state.product.CartList)
  return (
    <div className='flex justify-center w-full  border fixed top-0 z-30  bg-white'>

    <Cart toggleCart={toggleCart} setToggleCart={setToggleCart}/> 
<nav className='flex py-5  lg:py-0   justify-between   px-5 sm:px-20 lg:w-3/4 lg:max-w-Navbar  w-full'>
  <div className={`lg:w-full lg:justify-between lg:flex-row lg:items-center lg:h-24 flex flex-col  justify-start  lg:duration-0 duration-700 ${toggleMenu?"h-80":"h-12 "} overflow-hidden lg:overflow-visible `}>

<h3 className='text-xl font-medium my-3 lg:text-2xl '>SwiftMart</h3>

<div className={`lg:flex-row flex lg:min-h-0 lg:h-auto my-5 text-slate-700 min-h-custom text-base flex-col  w-6/12 max-w-xl justify-between duration-700 font-semibold`}>
 <NavLink to={"/"} className={(state) =>state.isActive? "text-primary border-primary ":""}><p className=' hover:text-primary border-primary duration-500'>Home</p></NavLink>
<p className=' hover:text-primary border-primary duration-500'>Category</p>
 <NavLink to={"/products"}  className={(state) =>state.isActive? "text-primary border-primary ":""}><p className=' hover:text-primary border-primary duration-500'> Shop</p></NavLink>
 <NavLink to={"/OrdersPage"}  className={(state) =>state.isActive? "text-primary border-primary ":""}><p className=' hover:text-primary border-primary duration-500'> Orders</p></NavLink>
 <NavLink to={"/AboutUsPage"}  className={(state) =>state.isActive? "text-primary border-primary ":""}><p className=' hover:text-primary border-primary duration-500 '> About</p></NavLink>
</div>

<div className={`flex  justify-between items-center gap-2 min-h-custom_2  `}>
 <IconButton>
 <img src="\Icons\Search.svg" alt="" className='w-5 ' />

 </IconButton>
 <IconButton>
 <img src="\Icons\User.svg" alt="" className='w-5'/>
 </IconButton>
 <IconButton onClick={()=>dispatch(ToggleCart())}>
 <img src="\Icons\Cart.svg" alt="" className='w-5'/>
 </IconButton>{
CartList.length>0&&
   <p className=' relative right-7 text-xs bottom-2 bg-primary w-4 h-4 text-white flex justify-center items-center rounded-full'>{CartList.length}</p>
  }
 </div>     


 
  </div>
 <div className='lg:hidden mt-3 lg:mt-0 '>
 <IconButton  onClick={handleToggleMenu}>
<img src="/Icons/Menu.svg" alt=""  />
 </IconButton>
 </div>
</nav>
  </div>

  )
}

export default React.memo(Navbar)
