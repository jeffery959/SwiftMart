import {useContext,useEffect} from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import "./Cart.css"
import { useSelector ,useDispatch} from 'react-redux';
import {Remove,  Subtract,Add,EmptyCart} from '../app/features/productSlice';
import { ToggleCart } from '../app/features/productSlice';
import { Link } from 'react-router-dom';

const Cart = ({toggleCart}) => {
  
  
  

  const CartDisplay = useSelector(state=>state.product.CartDisplay)
  const CartList= useSelector(state=>state.product.CartList)
  
   const dispatch =useDispatch()
  return (
    <div className={`z-50  w-full md:w-Cart duration-500  border-2 h-full overflow-hidden fixed scrollbar-hide py-2 bg-white top-0  ${CartDisplay?"right-0":"position-Cart-display"}`}>
    <div className='w-full flex justify-end border-b mb-2 float-right'>

<div className='w-2/3 flex justify-between  items-center float-right  pb-3 h-14 '>

  <h3 className='text-lg font-semibold'>
    Your Cart ({CartList.length})
  </h3>
  <IconButton onClick={()=>dispatch(ToggleCart())}>

  <img src="\Icons\Close.svg" alt=""  className='w-8 '/>
  </IconButton>
</div>
    </div>
<div className='h-5/6 border-b overflow-auto w-full'>
{
    CartList.map((item)=>{
      return <Single_Cart item={item} key={item.name}/>
    })
  }
   

   </div>
</div>
  )

}


const Single_Cart = ({item})=>{
  const {price,qty,name,img}=item
  
  const dispatch =useDispatch()
    return (

        <div className='w-full px-2 mt-4 flex justify-around items-center border-b pb-2 '>
        <img src={img} alt="" className='w-20 h-28 object-contain md:w-28 rounded-sm bg-slate-300' />
        <div className=' h-16 md:h-20 flex flex-col justify-between '>
        
        <h3 className='text-base break-words w-28 md:w-32 md:text-lg font-base text-gray-800'>{name}</h3>
        <p className='text-xs md:text-sm font-medium text-gray-500'>${price}</p>
        <div className='w-20  flex justify-between items-center'>
        
        <button className='bg-primary md:w-4 w-3 h-3 text-xs text-white md:h-4 flex justify-center items-center' onClick={()=>dispatch(Subtract(item))}>-</button>
        <button className='border-b w-8 text-xs md:text-sm'>{qty}</button>
        <button className='bg-primary md:w-4 w-4 h-3 text-xs text-white md:h-4 flex justify-center items-center' onClick={()=>dispatch(Add(item))}>+</button>
        </div>
        </div>
            <button className='text-xs font-light bg-primary  text-white p-1 md:p-2 flex justify-center items-center duration-500 hover:bg-primary-hover' onClick={()=>dispatch(Remove(item))} >Remove</button>
            </div>


    )
}
export default Cart
