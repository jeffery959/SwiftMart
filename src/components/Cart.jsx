import {useContext,useEffect} from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import "./Cart.css"
import { ToggleCart } from '../app/features/productSlice';
import {App_Context} from '../App'
import { useSelector ,useDispatch} from 'react-redux';

const Cart = () => {
  
  
  

  const CartDisplay = useSelector(state=>state.product.CartDisplay)
   const dispatch =useDispatch()
  return (
    <div className={`Cart ${CartDisplay} `}>

     <IconButton  className='z-50 float-right' onClick={(()=>dispatch(ToggleCart()))}>
<CloseIcon className={`text-white z-50` } />


</IconButton>

<div>
  <Single_Cart />
  <Single_Cart />
</div>

    </div>
  )

}


const Single_Cart = ({item})=>{
  
    return (
<div className='flex flex-col  items-center w-full mb-1'>

         <div className='mt-4 w-full flex flex-col items-center text-white '>
     <img src={"/Images/Product-img/Suit-guy.jpg"} alt="" className='Cart-Img' />
     <div className=' mt-2 Cart-Price'>

     <p className=''>${20}</p>
     </div>
     <div className='flex justify-between mt-5'>
        <button  className='hover:bg-sky-800 duration-300  bg-sky-600 rounded-full w-6 h-6 flex justify-center items-center'>-</button>
        <p className='border-b w-10 flex justify-center items-end '>3</p>
        <button className='hover:bg-sky-800 duration-300 bg-sky-600 rounded-full w-6 h-6 flex justify-center items-center'>+</button>
     </div>
</div>
<button className='bg-sky-600  p-1 px-5 flex items-center gap-2 text-white  rounded-xl mb-3 hover:bg-sky-800 duration-300' > Remove</button>
<div className='w-11/12 border-b mx-auto border-gray-950'></div>
        </div>
    )
}
export default Cart
