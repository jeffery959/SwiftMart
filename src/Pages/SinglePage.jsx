
import Star from "../components/Star";
import "./SinglePage.css";
import { useLocation, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import Items from "../components/Items";
import {Product_Deck} from "./Products"
import { AddCart,Subtract,Add,ToggleModal } from "../app/features/productSlice";


const SinglePage = ({color}) => {
  const location =useLocation()
  const {Id,itemId}=useParams();
  const SingleItem = useSelector(state=>state.product.ItemList[Id].Unit[itemId])
  const {price,name,img,Color}=SingleItem
  const [image,setImage]=useState(img)
  const dispatch =useDispatch()
useEffect(()=>{
  setImage(img)

},[location.pathname])


const addedItem=()=>{
  dispatch(AddCart(SingleItem))
  dispatch(ToggleModal())
  setTimeout(()=>{
    
    dispatch(ToggleModal())
  },3000)
}
const Select=(itm)=>{
  
  setImage(itm.img)
}
const ItemList =useSelector((state)=>state.product.ItemList)
  return (
    <div className="Single-Main  bg-slate-100">
      


<section className="Item-Single body-font overflow-hidden ">
  <div className="container px-5 py-5 mx-auto ">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto Image-product h-96 object-contain object-center rounded" src={image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-gray-600">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">SWIFT MART</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className=" mr-3">Color</span>

            {
              Color?.map((itm,)=>{

               return   <button key={itm.color} className={`border-2  ml-1 ${itm.color} rounded-full w-6 h-6 focus:outline-none` }onClick={()=>Select(itm)}></button>
              })
            }
          
          
          </div>
          <div className="flex ml-6 items-center ">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-2  sm:px-6 focus:outline-none hover:bg-blue-600 rounded text-sm sm:text-lg" onClick={()=>addedItem()}>Add to Cart </button>
          
        </div>
      </div>
    
    </div>
  </div>
</section>
<div className=" Related w-full bg-white">

<div className="w-full  mt-16 mb-20">


{
ItemList.map((Deck)=>{

if(parseInt(Id)===Deck.Id){

return  <Product_Deck Deck={Deck} itemId={itemId} key={Deck.Id} Category={"Related Items"}/>
}else{
return
}

}


)
}
</div>
</div>


    </div>
  )

  
}



export default SinglePage
