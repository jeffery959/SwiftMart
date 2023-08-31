import {useContext,memo, useEffect,useState,useRef} from 'react'
import Items from '../components/Items';
import { App_Context } from '../App';
import "./products.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useSelector } from 'react-redux';

const Products = () => {

  const ItemList =useSelector((state)=>state.product.ItemList)
 

  return (
    <div className=' Products  '>
      
      <Swiper   slidesPerView={1}
       loop={true}
        pagination={{
          clickable: true,
        }} modules={[Pagination]} className="mySwiper " >
        <SwiperSlide><BigProduct/></SwiperSlide>
        <SwiperSlide><BigProduct/></SwiperSlide>
        <SwiperSlide><BigProduct/></SwiperSlide>
      </Swiper>

{
  ItemList.map((Deck)=>{
  
  
  return  <Product_Deck Deck={Deck} key={Deck.Id}/>

 }
  
  
  )
}
    <div className=' Foot-banner mt-20 ' style={{backgroundImage:`url("/Images/Furnitures.jpg")`}}>
      <div className='w-full '>

      <div className='Foot-banner-Limited '>
        Limited offer
      </div>
      </div>
    <div className='Foot-banner-txt'>

<p>Explore Our Furniture's this Season for 40% off</p>
<button><p>Explore Now</p> <img src="Logo\arrow.svg" alt="" className='ml-2' /></button>
</div>
    </div>
   
    </div>
  )
}





const Product_Deck = ({Deck})=>{
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 850);
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 return  <>
  <h3 className='Products-tag '>{Deck.Category}</h3>
  {isSmallScreen ? (
          
          <Swiper
          cssMode={true}
          
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          >
          {
            Deck.Unit.map(item=>{
              
              return <SwiperSlide key={item.id}><Items item={item} Deck={Deck}/></SwiperSlide>
            })
          }
        </Swiper>
        ) : (
          
          <div className='Product-view'>
            
  {
    Deck.Unit.map(item=>{
      
      return <Items item={item} key={item.id} Deck={Deck}/>
    })
  }
  
  </div>
        )}
        </>

}


const BigProduct =()=>{
  
  return(
  <div className=' Big-Product mb-0' style={{backgroundImage:`url("/Images/Big_Banner.png")`}}>
        <div>

        <p>Uprade your style with our Casual wears</p>
        <button><p>Shop Now</p> <img src="Logo\arrow.svg" alt="" className='ml-2' /></button>
        </div>
       
      </div>)
}

export default memo( Products)
