

const InitialStates={
    Modal:"-top-20",
    Cart: false,
    back: false,
    CartList: [],
    ItemList: [{Price:15.99,Title:"Hoka Shoes",InCart:false,Id:0,count:0,Img:"/Images/black shoe.webp",Descrip:"Get your Drip with these pair of black Hoka shoes. "}],
    Loading:false,


    
} 

const Reducer=(state,action)=>{
  switch(action.type){
  case "Show_modal":
    return {...state,Modal:"top-16 shadow-lg"}
  
  case "Hide_modal":
    return {...state,Modal:"-top-20 shadow-none"}
  case "Toggle_Cart":
    return {...state,Cart:!state.Cart}
  case "Back_Cart":
    return {...state,back:!state.back,Cart:!state.Cart}
  case "Add_Cart":
  const newItemList = state.ItemList.map((Item) => {
    if (Item.Id === action.Id) {
      return { ...Item, InCart: true, count: Item.count + 1 };
    } else {
      return Item;
    }
  });
 let newCartList = newItemList.filter((item) => item.InCart === true);

  // Add the new item to the beginning of the CartList
  state.CartList.unshift(newCartList.find((item) => item.Id === action.Id));

  // Remove any duplicate items from the CartList
  const cartSet = new Set(state.CartList.map((item) => item.Id));
   newCartList = [...cartSet].map((id) =>
    state.CartList.find((item) => item.Id === id)
  );

  return { ...state, ItemList: newItemList, CartList:  newCartList };


  /*  */
  case "More":
const newItemList2 = state.ItemList.map((Item )=>{
  if(Item.Id===action.Id){
    
    return {...Item,count:Item.count+1}
  }else{
    return Item;
  }
})
const newCartList2 =  state.CartList.map((Item )=>{
  if(Item.Id===action.Id){
    
    return {...Item,count:Item.count+1}
  }else{
    return Item;
  }
})

return {...state,ItemList:newItemList2,CartList:newCartList2}
/*  */

    case "Less":
      const newItemList3 = state.ItemList.map((Item )=>{
       
        if(Item.count===1){
            return Item
          }   
  if(Item.Id===action.Id){ 
    return {...Item,count:Item.count-1}
  }else{
    return Item;
  }
})
const newCartList3 =  state.CartList.map((Item )=>{
  if(Item.count===1){
            return Item
          }   
  if(Item.Id===action.Id){
    
    return {...Item,count:Item.count-1}
  }else{
    return Item;
  }
})

    return {...state,ItemList:newItemList3,CartList:newCartList3}

  case "Delete_Cart":
    const newItemList4 =state.ItemList.map((Item )=>{
       if(Item.Id===action.Id){
              return {...Item,InCart:false,count:0}
      }else{
        return Item;
      }
    })
    const newCartList4 = newItemList4.filter((item)=>item.InCart===true)
    return  {...state,ItemList:newItemList4,CartList:newCartList4}
    case "Clear_Cart":
      const newItemList5 =state.ItemList.map((Item )=>{return {...Item,InCart:false,count:0}})
      
      const newCartList5 = newItemList5.filter((item)=>item.InCart===true)
       return  {...state,ItemList:newItemList5,CartList:newCartList5}
    case "State_load":
        return {...state,Loading:true}
    case "State_load_false":
        return {...state,Loading:false}
        
      
  }


}

export {Reducer,InitialStates}