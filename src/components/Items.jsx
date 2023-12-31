
import { Link } from 'react-router-dom'
import "./Items.css"

import { useDispatch} from 'react-redux';
import { AddCart,ToggleModal,ChangeTxt } from '../app/features/productSlice'
import { SwiperSlide } from 'swiper/react';

const Item = ({item,Deck,Color}) => {
  
  const dispatch = useDispatch()
  const {price,name,img,id}=item
    const AddToCart =()=>{
      dispatch(ChangeTxt("Items Payed"))
    dispatch(AddCart(item))
    dispatch(ToggleModal())
    
    setTimeout(()=>{
    
      dispatch(ToggleModal())
    },3000)
  } 
  return (
    
    <div className='ItemContainer  '>
      
      <Link to={`/products/${Deck.Id}/${id}`}  >
        
      <img src={img} alt="" className={`ImgLink ${Color}`}  />  
             </Link>
      <div className='ItemContainer_Info mt-4'>
        <div>
         <p className='ItemContainer_Info_Title'>{name}</p>
         <p className='ItemContainer_Info_Price'>${price}</p>
        </div>
        <div className='flex justify-center ItemContainer_Info_Icon ' onClick={()=> AddToCart()}>

         <img src="\Logo\Add-Cart.svg" alt="" className='' />
        </div>

      </div>

    </div>
  )
}

export default Item
