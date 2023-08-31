import { createSlice } from '@reduxjs/toolkit'


const DataBase=[{
Id:0,
Category:"Featured product",
Unit:[
 
  
  {id:0,price:249.99, qty:1,name:"Suit",img:"/Images/Product-img/Suit-guy.jpg"},
  {id:1,price:55, qty:1,name:"Sweater",img:"/Images/Product-img/Gray-Shirt.jpg"},
  {id:2,price:34.99, qty:1,name:"Pants",img:"/Images/Product-img/Jeans.jpg"},
  {id:3,price:20, qty:1,name:"Hoddy",img:"/Images/Product-img/Hoddy.jpg"},
]
},
{Id:1,
  Category:"Electronics",
  Unit:[
  
    
    {id:0,price:849.99, qty:1,name:"Iphone",img:"/Images/Product-img/Iphone.png"},
    {id:1,price:1055, qty:1,name:"MacBook",img:"/Images/Product-img/MacBook.png"},
    {id:2,price:84.99, qty:1,name:"Airpods",img:"/Images/Product-img/Airpods.jpg"},
    {id:3,price:34.99, qty:1,name:"HeadPhones",img:"/Images/Product-img/Headphones.png"},
  ]
  },
{Id:2,
  Category:"Footwear",
  Unit:[
  
    
    {id:0,price:79.99, qty:1,name:"Nike",img:"/Images/Product-img/Color-Shoe.png"},
    {id:1,price:55, qty:1,name:"Shoe",img:"/Images/Product-img/Sneakers.png"},
    {id:2,price:54.99, qty:1,name:"Crocs",img:"/Images/Product-img/Crocs.png"},
    {id:3,price:44.99, qty:1,name:"Canvas",img:"/Images/Product-img/Canvas.png"},
  ]
  }
]
   
export const productSlice = createSlice({
   name: 'product',
  initialState:{
   
    ItemList: DataBase,
    OrderList:[
      
      {id:0,price:249.99, qty:1,name:"Suit",img:"/Images/Product-img/Suit-guy.jpg"},
      {id:1,price:1055, qty:1,name:"MacBook",img:"/Images/Product-img/MacBook.png"},
    ],
    CartDisplay:"Cart_Off"


    
} ,
  reducers: {
    ToggleCart:(state)=>{
      console.log(state.CartDisplay)
    if(state.CartDisplay==="Cart_Off"){
      state.CartDisplay="Cart_On"
      return
    }
    else{
      state.CartDisplay="Cart_Off"
      return
    }
   


}

  }
})

// Action creators are generated for each case reducer function
export const { ToggleCart } = productSlice.actions

export default productSlice.reducer