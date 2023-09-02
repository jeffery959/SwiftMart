import "./Order.css"
import {  useSelector } from "react-redux/es/hooks/useSelector"
const Orders = () => {
    const OrderList=useSelector((state)=>state.product.OrderList)
   
  return (
    <div className=" w-full  Orders-frame ">
      <div className="flex justify-center">

              <div className="Orders">
                <div className="Orders-img">

                </div>
              <div className="Orders-title ">
                <h3></h3>
                <h3>Item</h3>
                <h3>Price</h3>
                <h3>Order Number</h3>
                <h3>Date</h3>
                <h3>Qty</h3>
              </div>
              {
                OrderList.map((Item,Id)=><OrderItem Item={Item} key={Id}/>)
              }


      </div>
           
              </div>
    </div>
  )
}


const OrderItem=({Item})=>{

const {name,price,img,qty}=Item
  return  (
      <div className="Orders-Item">
                <img src={img} alt="" />
                <p>{name}</p>
                <p>{price}</p>
                <p>#332448</p>
                <p>08/29/23</p>
                <p>00{qty}</p>


              </div>

  )
}
export default Orders
