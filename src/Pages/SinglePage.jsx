
import Star from "../components/Star";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePage = () => {
  const {Id,itemId}=useParams();
  const SingleItem = useSelector(state=>state.product.ItemList[Id].Unit[itemId])
  const {price,name,img}=SingleItem
console.log(SingleItem)
  return (
    
    <div className='SinglePage '>
   <div className="SinglePage-View">
    <img src={img} alt="" className="" />
    <div className="SinglePage-View-txt">
      <div>

     
<Star/>
<h3 className="mt-2">{name}</h3>
<h4>Availability (In Stock)</h4>
<h3 className="SinglePage-View-txt_price ">${price}<div className="hidden Mobile"><Star/> </div> </h3>
<h4>Desciription</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan, metus ut gravida euismod, est sapien finibus ligula, eu luctus neque ipsum vitae neque.</p>

      </div>
      <div className="Btn mt-8">
        <div className="Btn-1">
          <p>Qty</p>
          <button>-</button>
          <p>1</p>
          <button>+</button>

        </div>
        <button>Add Cart</button>
      </div>
    </div>
   </div>
    
    </div>
  )
}

export default SinglePage
