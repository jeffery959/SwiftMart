
import { Link } from 'react-router-dom'
import "./Items.css"

import { useSelector ,useDispatch} from 'react-redux';
import { AddCart,ToggleModal } from '../app/features/productSlice'

const Item = ({item,Deck}) => {
  
  const dispatch = useDispatch()
  const {price,name,img,id}=item
    const AddToCart =()=>{
    dispatch(AddCart(item))
    dispatch(ToggleModal())
    setTimeout(()=>{
    
      dispatch(ToggleModal())
    },3000)
  } 
  return (
    <div className='ItemContainer '>
      <Link to={`/products/${Deck.Id}/${id}`}  >
        
      <img src={img} alt="" className="ImgLink" />  
             </Link>
      <div className='ItemContainer_Info mt-4'>
        <div>
         <p className='ItemContainer_Info_Title'>{name}</p>
         <p className='ItemContainer_Info_Price'>${price}</p>
        </div>
        <div className='flex justify-center ItemContainer_Info_Icon ' onClick={()=> AddToCart()}>

         <img src="Logo\Add-Cart.svg" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Item
