import { createSlice } from '@reduxjs/toolkit'


const DataBase=[
  
  {
Id:0,
Category:"Featured Product",
Unit:[
 
  
  {UnitId:0,id:0,price:249.99, qty:1,name:"Suit",img:"/Images/Product-img/Suit/Color/Suit-Green.png",Color:[
    {
      color:"bg-green-900",
      img:"/Images/Product-img/Suit/Color/Suit-Green.png"
  
    },
    {
      color:"bg-red-800",
      img:"/Images/Product-img/Suit/Color/Suit-Red.png"
  
    },
    {
      color:"bg-blue-800",
      img:"/Images/Product-img/Suit/Color/Suit-Blue.png"
  
    }
  ]},
  {UnitId:0,id:1,price:55, qty:1,name:"Sweater",img:"/Images/Product-img/Sweater/Color/Sweater-Black.png",Color:[
    {
      color:"bg-gray-900",
      img:"/Images/Product-img/Sweater/Color/Sweater-Black.png"
  
    },
    {
      color:"bg-red-700",
      img:"/Images/Product-img/Sweater/Color/Sweater-Red.png"
  
    },
    {
      color:"bg-white",
      img:"/Images/Product-img/Sweater/Color/Sweater-White.png"
  
    }
  ]},
  {UnitId:0,id:2,price:34.99, qty:1,name:"Pants",img:"/Images/Product-img/Pants/Color/pants-Black.png",Color:[
    {
      color:"bg-gray-900",
      img:"/Images/Product-img/Pants/Color/pants-Black.png"
  
    },
    {
      color:"bg-green-600",
      img:"/Images/Product-img/Pants/Color/pants-Green.png"
  
    },
    {
      color:"bg-blue-800",
      img:"/Images/Product-img/Pants/Color/pants-Blue.png"
  
    }
  ]},
  {UnitId:0,id:3,price:20, qty:1,name:"Hoddy",img:"/Images/Product-img/Hoddy/Color/Hoddy-Black.png",Color:[
    {
      color:"bg-gray-900",
      img:"/Images/Product-img/Hoddy/Color/Hoddy-Black.png"
  
    },
    {
      color:"bg-green-900",
      img:"/Images/Product-img/Hoddy/Color/Hoddy-Green.png"
  
    },
    {
      color:"bg-yellow-400",
      img:"/Images/Product-img/Hoddy/Color/Hoddy-Yellow.png"
  
    }
  ]},
]
},
{Id:1,
  Category:"Electronics",
  Unit:[
  
    
    {UnitId:1,id:0,price:849.99, qty:1,name:"Iphone",img:"/Images/Product-img/Iphone/Color/Iphone-12-Blue.png",Color:[
      {
        color:"bg-blue-700",
        img:"/Images/Product-img/Iphone/Color/Iphone-12-Blue.png"
    
      }
      ,
      {
        color:"bg-red-700",
        img:"/Images/Product-img/Iphone/Color/Iphone-12-Red.png"
    
      },
      {
        color:"bg-gray-700",
        img:"/Images/Product-img/Iphone/Color/Iphone-12-Gray.png"
    
      }
    ]},
    {UnitId:1,id:1,price:999.99, qty:1,name:"Gaming Desktop",img:"/Images/Product-img/Desktop.png",Color:[
      {
        color:"bg-white",
        img:"/Images/Product-img/Desktop.png"
    
      }
    ]},
    {UnitId:1,id:2,price:84.99, qty:1,name:"Airpods",img:"/Images/Product-img/Airpod.png",Color:[
      {
        color:"bg-white",
        img:"/Images/Product-img/Airpod.png"
    
      }
    ]},
    {UnitId:1,id:3,price:34.99, qty:1,name:"HeadPhones",img:"/Images/Product-img/Heaphone/Color/Headphone-Blue.png",Color:[
      
      
      {
        color:"bg-blue-600",
        img:"/Images/Product-img/Heaphone/Color/Headphone-Blue.png"
    
      }
      ,
      {
        color:"bg-teal-300",
        img:"/Images/Product-img/Heaphone/Color/Headphone-Lime.png"
    
      }
      ,
      {
        color:"bg-rose-200 ",
        img:"/Images/Product-img/Heaphone/Color/Headphone-Pink.png"
    
      }
    ]},
  ]
  },
{Id:2,
  Category:"Footwear",
  Unit:[
  
    
    {UnitId:2,id:0,price:79.99, qty:1,name:"Sneakers",img:"/Images/Product-img/Shoe.png"},
    {UnitId:2,id:1,price:55.00, qty:1,name:"Nike-Sneakers",img:"/Images/Product-img/Nike.png"},
    {UnitId:2,id:2,price:54.99, qty:1,name:"Crocs",img:"/Images/Product-img/Crocs.png"},
    {UnitId:2,id:3,price:44.99, qty:1,name:"Canvas",img:"/Images/Product-img/Canvas.png"},
  ]
  },
  
  {Id:3,
    Category:"On Sale",
    Unit:[
    
      
      {UnitId:3,id:0,price:249.99, qty:1,name:"SmartTv",img:"/Images/Product-img/Tv.png"},
      {UnitId:3,id:1,price:99.99, qty:1,name:"Camera",img:"/Images/Product-img/Camera.png"},
      {UnitId:3,id:2,price:54.99, qty:1,name:"Fan",img:"/Images/Product-img/Fan.png"},
      {UnitId:3,id:3,price:44.99, qty:1,name:"Speakers",img:"/Images/Product-img/Speaker.png"},
    ]
    },
 
]

const States=JSON.parse(localStorage.getItem("State"))

   
export const productSlice = createSlice({
   name: 'product',
  initialState:States!==null?{
   
    ItemList: States.ItemList,
      OrderList:States.OrderList,
      CartDisplay:"Cart_Off",
      CartList:States.CartList,
      Modal:"-top-20",
      ToggleTxt:"Item added to Cart",
      Visited:false
      
      
    } :{
      
      ItemList: DataBase,
      OrderList:[
        
        
      ],
      CartDisplay:"Cart_Off",
      CartList:[
        
      ],
      Modal:"-top-20",
      ToggleTxt:"Item added to Cart",
      Visited:false
    

    
} ,
  reducers: {

    ToggleModal:(state)=>{

if(state.Modal==="-top-20"){
  state.Modal="top-20"
}else{
  state.Modal="-top-20"
}
    },
    ToggleCart:(state)=>{
    if(state.CartDisplay==="Cart_Off"){
      state.CartDisplay="Cart_On"
    }
    else{
      state.CartDisplay="Cart_Off"
      
    }
    
    localStorage.setItem("State",JSON.stringify(state))
    return
  },
   AddCart:(state,action)=>{

     const isIncluded = state.CartList.some(obj=>JSON.stringify(obj)===JSON.stringify(action.payload))
  
     if(isIncluded){
       let newList=  state.ItemList.filter(itm=>itm.Id===action.payload.UnitId)
    
    const SingleItem= newList[0].Unit.map((item)=>{
        if(item.id===action.payload.id){
          return {...item,qty:item.qty+1}
        }
        else{
          return item
        }
       }) 
      const newCart= state.CartList.map((itm)=>{
        if(itm.id===action.payload.id&&itm.UnitId===action.payload.UnitId){
          return {...itm,qty:itm.qty+1}
        }
        else{
          return itm
        }
       })
       
        
          let ItemList =state.ItemList.map((Itm)=>{
        if(Itm.Id===action.payload.UnitId){
          return {...Itm,Unit:SingleItem}
        }
        else{
          return Itm

        }
       }) 
       
       localStorage.setItem("State",JSON.stringify({...state,ItemList:ItemList,CartList:newCart}))
       return {...state,ItemList:ItemList,CartList:newCart}
       
      }else{
        state.CartList.push(action.payload) 
        localStorage.setItem("State",JSON.stringify(state))
        
        
      }
      
   },
   Subtract:(state,action)=>{
    let newList=  state.ItemList.filter(itm=>itm.Id===action.payload.UnitId)
    
    const SingleItem=  newList[0].Unit.map((item)=>{
        if(item.id===action.payload.id&&item.qty>1){
          return {...item,qty:item.qty-1}
        }
        else{
          return item
        }
       })  
      const newCart= state.CartList.map((itm)=>{
        if(itm.id===action.payload.id&&itm.UnitId===action.payload.UnitId&&itm.qty>1){
          return {...itm,qty:itm.qty-1}
        }
        else{
          return itm
        }
       })
       
      let ItemList =state.ItemList.map((Itm)=>{
        if(Itm.Id===action.payload.UnitId){
          return {...Itm,Unit:SingleItem}
        }
        else{
          return Itm

        }
       })  
       
       localStorage.setItem("State",JSON.stringify({...state,ItemList,CartList:newCart}))
       return {...state,ItemList,CartList:newCart}
   },
   Add:(state,action)=>

    {
      let newList=  state.ItemList.filter(itm=>itm.Id===action.payload.UnitId)
      
      const SingleItem=  newList[0].Unit.map((item)=>{
          if(item.id===action.payload.id){
            return {...item,qty:item.qty+1}
          }
          else{
            return item
          }
         })  
        const newCart= state.CartList.map((itm)=>{
          if(itm.id===action.payload.id&&itm.UnitId===action.payload.UnitId){
            return {...itm,qty:itm.qty+1}
          }
          else{
            return itm
          }
         })
         
        let ItemList =state.ItemList.map((Itm)=>{
          if(Itm.Id===action.payload.UnitId){
            return {...Itm,Unit:SingleItem}
          }
          else{
            return Itm
  
          }
         })  
         
        localStorage.setItem("State",JSON.stringify({...state,ItemList,CartList:newCart}))
         return {...state,ItemList,CartList:newCart}
     

   },
   Remove:(state,action)=>{
    let newList=  state.ItemList.filter(itm=>itm.Id===action.payload.UnitId)
      
    const SingleItem=  newList[0].Unit.map((item)=>{
        if(item.id===action.payload.id){
          return {...item,qty:1}
        }
        else{
          return item
        }
       })  
       
      let ItemList =state.ItemList.map((Itm)=>{
        if(Itm.Id===action.payload.UnitId){
          return {...Itm,Unit:SingleItem}
        }
        else{
          return Itm

        }
       })  



    const newCart= state.CartList.filter((itm)=>{
      if(itm.id!==action.payload.id){
        return itm
      }
      else{
        if(itm.UnitId===action.payload.UnitId){
          
          return
        }
        return itm
      }
    })
    
     localStorage.setItem("State",JSON.stringify({...state,CartList:newCart,ItemList}))
     return {...state,CartList:newCart,ItemList}
   }
,
   EmptyCart:(state)=>{
    localStorage.setItem("State",JSON.stringify({...state,CartList:[]}))
     return {...state,CartList:[]}
   }
   ,
   Payment:(state)=>{
    state.ToggleTxt="Items Payed"
    localStorage.setItem("State",JSON.stringify( {...state,CartList:[],OrderList:[...state.OrderList,...state.CartList],CartDisplay:"Cart_Off"}))
    return {...state,CartList:[],OrderList:[...state.OrderList,...state.CartList],CartDisplay:"Cart_Off"}

   }
   ,  ChangeTxt:(state,action)=>{
    if(action.payload==="Items Payed"){

      state.ToggleTxt="Item added to Cart"
    }
    else{
      state.ToggleTxt="Items Payed"

    }
   },
   ToggleVisit:(state,action)=>{
    
 if(action.payload==="Default"){
   state.Visited=false

 }else{
      state.Visited=true

    }
   }
  }
  
})

// Action creators are generated for each case reducer function
export const { ToggleVisit,ChangeTxt,Payment,ToggleCart ,AddCart,Subtract,Add,Remove,ToggleModal,EmptyCart} = productSlice.actions

export default productSlice.reducer