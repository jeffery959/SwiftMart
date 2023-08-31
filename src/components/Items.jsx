import {useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Items.css"
import {App_Context} from '../App'
const Item = ({item,Deck}) => {
  const {state,dispatch}=useContext(App_Context);

  const {price,name,img,id}=item
   const modal_Pop=()=>{
    dispatch({type:"Show_modal"});
   setTimeout(()=> dispatch({type:"Hide_modal"}), 3000);
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
        <div className='flex justify-center ItemContainer_Info_Icon '>

         <img src="Logo\Add-Cart.svg" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Item
