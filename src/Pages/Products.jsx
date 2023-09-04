import {useContext,memo, useEffect,useState,useRef} from 'react'
import Items from '../components/Items';
import { App_Context } from '../App';
import "./products.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useSelector } from 'react-redux';
import Checkout from './Checkout';

const Products = () => {

  const ItemList =useSelector((state)=>state.product.ItemList)
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    const interval =5000; // Set the interval for auto-scroll in milliseconds (e.g., 3 seconds).

    const autoScroll = () => {
      swiper.slideNext(700); 
      
      
    };

   let autoScrollInterval = setInterval(autoScroll, interval);

    // Pause auto-scrolling when the user interacts with the swiper.
    swiper.el.addEventListener('mouseover', () => {
      clearInterval(autoScrollInterval);
    });

    // Resume auto-scrolling when the user stops interacting with the swiper.
    swiper.el.addEventListener('mouseleave', () => {
      clearInterval(autoScrollInterval);
      autoScrollInterval = setInterval(autoScroll, interval);
    });

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, []);
  return (
    <div className=' Products  '>
      
      <Swiper   slidesPerView={1}
       loop={true}
        pagination={{
          clickable: true,
        }} modules={[Pagination]} className="mySwiper " ref={swiperRef}>
        <SwiperSlide><BigProduct Img={"/Images/Big_Banner.png"}/></SwiperSlide>
        <SwiperSlide><BigProduct Img={"/Images/Big_Banner_2.jpg"}/></SwiperSlide>
        <SwiperSlide><BigProduct Img={"/Images/Big_Baner_3.jpg"}/></SwiperSlide>
      </Swiper>

{
  ItemList.map((Deck)=>{
  
  
  return  <Product_Deck Deck={Deck} key={Deck.Id} Category={Deck.Category}/>

 }
  
  
  )
}
    <div className=' Foot-banner mt-20 z-30 ' style={{backgroundImage:`url("/Images/Furnitures.jpg")`}}>
      <div className='w-full '>

      <div className='Foot-banner-Limited '>
        Limited offer
      </div>
      </div>
    <div className='Foot-banner-txt'>

<p>Explore Our Furniture's this Season for 40% off</p>
<button><p>Explore Now</p> </button>
</div>
    </div>
    </div>
  )
}





const Product_Deck = ({Deck,itemId,Category})=>{
  
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
  <h3 className='Products-tag '>{Category}</h3>
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
              if(itemId==item.id){
                
                return
              }
              return <SwiperSlide key={item.id}><Items item={item} Deck={Deck}/></SwiperSlide>
              
            })
          }
        </Swiper>
        ) : (
          
          <div className='Product-view'>
            
  {
    Deck.Unit.map(item=>{
      if(itemId==item.id){

        return
      }
      return <Items item={item} key={item.id} Deck={Deck}/>
    })
  }
  
  </div>
        )}
        </>

}


const BigProduct =({Img})=>{
  
  useEffect(()=>{

  })

  return(
  <div className='Big-Product mb-0 z-30' style={{backgroundImage:`url(${Img})`}}>
        <div>

        <p>Uprade your style with our Casual wears</p>
        <button className='Big_Product_btn'><p>Shop Now</p> </button>
        </div>
       
      </div>)
}

export {Product_Deck}
export default memo( Products)
