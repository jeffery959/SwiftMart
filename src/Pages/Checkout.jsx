
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { App_Context } from '../App';
import "./Checkout.css"

const Checkout = () => {
  function calculateTotalCost() {
  let totalCost = 0;
  for (let i = 0; i < state.CartList.length; i++) {
    const item = state.CartList[i];
    const cost = item.Price * item.count;
    totalCost += cost;
  }
  console.log(Math.round(100*totalCost)/100)
  return Math. round(100*totalCost)/100
}
  return (
    <div className=' flex flex-col h-screen   items-center  pt-5 Checkout mt-40'>
        <h1 className='text-5xl  mb-20'>CheckOut</h1>
         <div className=' full_Card flex justify-between '>

<div className="modal w-3/5 h-full  outline  outline-gray-100 ">
<form className="flex flex-col gap-5 p-5 ">
  <div className="payment--options">
    <button name="paypal" type="button" className='flex items-center justify-center'>
      <img src="Logo\Paypal.svg" alt="" />
    </button>

    <button name="apple-pay" type="button" className='flex items-center justify-center'>
   <img src="Logo\ApplePay.svg" alt=""  />
    </button>
    <button name="google-pay" type="button" className='flex items-center justify-center'>
  <img src="Logo\GPay.svg" alt="" />
    </button>
  </div>
  <div className="separator">
    <hr className="line"/>
    <p className='RespTxt'>or pay using credit card</p>
    <hr className="line"/>
  </div>
  <div className="credit-card-info--form">
    <div className="input_container">
      <label htmlFor="password_field" className="input_label">Card holder full name</label>
      <input id="password_field" className="input_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name"/>
    </div>
    <div className="input_container">
      <label htmlFor="password_field" className="input_label">Card Number</label>
      <input id="password_field" className="input_field" type="number" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000"/>
    </div>
    <div className="input_container">
      <label htmlFor="password_field" className="input_label">Expiry Date / CVV</label>
      <div className="split">
      <input id="password_field" className="input_field" type="date" name="input-name" title="Expiry Date" placeholder="01/23"/>
      <input id="password_field" className="input_field" type="number" name="cvv" title="CVV" placeholder="CVV"/>
    </div>
    </div>
  </div>
    <button className="purchase--btn bg-primary " onClick={(e)=>e.preventDefault()}>Pay <span className='font-Fantasy font-normal'>$</span>20</button>
</form>
</div>


  <div className='justify-between w-3/5 outline outline-gray-200 YrOrds outline-1 flex items-center  flex-col'>
<p className='font-bold my-4'>Your Orders</p>
<div className=' overflow-scroll  flex flex-col items-center  w-full'>
{/* {state.CartList.map((item)=>{
  
  return(

    <Slit item={item} key={item.Id}/>
 
  )
})} */}
</div>

  </div>

        </div>
      
    </div>
  )
}

const Slit =(item)=>{


  let html=[]
const handleOpt =()=>{
  for(let i=1;i<21;i++){
    
    
     html.push(i)
    
  } 
  return html;
  
  
}
handleOpt()


  return(
   
<div className=' w-4/5 flex p-1 rounded-3xl  items-center text-black justify-around mb-9 mt-2' key={item.item.Id} >
    <img src={item.item.Img} alt="" className='w-2/5  object-contain ml-1 rounded-3xl ' />
    <div className=''>

    <p className='tms-1'>{item.item.Title}</p>
    <p className='tms-1'>Color: <span className='font-semibold'>####</span></p>
    <div className='flex items-center '>
    <p className='font-Fantasy tms-1'>${item.item.Price} </p><span className='font-thin ml-1 tms-1'> X0{item.item.count}</span>
    </div>
  
    </div>

</div>
  )
}

export default Checkout
