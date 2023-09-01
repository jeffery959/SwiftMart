import {useContext,useEffect} from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import "./Cart.css"
import { useSelector ,useDispatch} from 'react-redux';
import {Remove, ToggleCart, Subtract,Add,EmptyCart} from '../app/features/productSlice';

const Cart = () => {
  
  
  

  const CartDisplay = useSelector(state=>state.product.CartDisplay)
  const CartList= useSelector(state=>state.product.CartList)
  
   const dispatch =useDispatch()
  return (
    <div className={`Cart ${CartDisplay} `}>

     <IconButton  className='z-50 float-right' onClick={(()=>dispatch(ToggleCart()))}>
<CloseIcon className={`text-white z-50` } />


</IconButton>

<div className='flex flex-col'>
  {
    CartList.map((item)=>{
      return <Single_Cart item={item} key={item.name}/>
    })
  }
  {CartList.length&&<>

    <button className='bg-sky-600  p-2 px-5 flex justify-center items-center gap-2 text-white  rounded-xl mb-3 hover:bg-sky-800 duration-300 mt-24' >CheckOut</button>
  <button className='bg-sky-600  p-2 px-5 flex justify-center items-center gap-2 text-white  rounded-xl mb-3 hover:bg-sky-800 duration-300 mt-8' onClick={()=>dispatch(EmptyCart())}>Clear Cart</button>
  </>
  }
</div>

    </div>
  )

}


const Single_Cart = ({item})=>{
  const {price,qty,name,img}=item
  
  const dispatch =useDispatch()
    return (
<div className='flex flex-col  items-center w-full mb-1 mt-6'>

         <div className='mt-4 w-full flex flex-col items-center text-white '>
     <img src={img} alt="" className='Cart-Img' />
     <div className=' mt-2 Cart-Price'>

     <p >{name}</p>
     <p className=''>${price}</p>
     </div>
     <div className='flex justify-between mt-5'>
        <button  className='hover:bg-sky-800 duration-300  bg-sky-600 rounded-full w-6 h-6 flex justify-center items-center' onClick={()=>dispatch(Subtract(item))}>-</button>
        <p className='border-b w-10 flex justify-center items-end '>{qty}</p>
        <button className='hover:bg-sky-800 duration-300 bg-sky-600 rounded-full w-6 h-6 flex justify-center items-center '  onClick={()=>dispatch(Add(item))}>+</button>
     </div>
</div>
<button className='bg-sky-600  p-1 px-5 flex items-center gap-2 text-white  rounded-xl mb-3 hover:bg-sky-800 duration-300 mt-3'onClick={()=>dispatch(Remove(item))} > Remove</button>
<div className='w-11/12 border-b mx-auto border-white'></div>
        </div>
    )
}
export default Cart
