import {memo} from "react"
import "./Hero_banner.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState,useEffect,useRef } from "react"
import Items from "./Items"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { BigProduct } from "../Pages/Products"
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Hero_banner = () => {
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
  const ItemList =useSelector((state)=>state.product.ItemList)
  console.log(ItemList[2].Unit)
  return (

    

    <div className="hme-Main w-full  flex flex-col justify-center items-center ">

    
    <section className="text-gray-400 bg-gray-900 body-font w-full banner ">
  <div className="container mx-auto   flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
     
        <Link to={"/Products"}  className='Text-Main-banner  '>
       <button>
        Shop Now
        
        </button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/Images/Banner.jpg"/>
    </div>
  </div>

    </section>


<div className=" Company ">
<img src="\Images\Nike.jpg" alt="" className="w-1/5 hover:scale-105 duration-500 h-3/6 object-contain" />
<img src="\Images\Old_Navy-Logo.wine.svg" alt="" className="w-1/5 hover:scale-105 duration-500 h-4/5 object-contain" />
<img src="\Images\puma.png" alt="" className="w-1/5 hover:scale-105 duration-500 h-4/5 object-contain" />
<img src="\Images\PlayStation-Logo.wine.svg" alt="" className="w-1/5 hover:scale-105 duration-500 h-4/5 object-contain" />
<img src="\Images\Addidas.webp" alt="" className="w-1/5 hover:scale-105 duration-500 h-full object-contain" />
</div>

    <section className="Main-Grid ">
    <h1 className="  Products-tag mb-20 mt-10 text-4xl text-center text-gray-800 ">Our Collections</h1>
  <div className="New-Grid screen  gap-2">
    {/* Content for the first column */}
    <div className=" w-full flex justify-center items-center 
    " id="Col-1">

      
    <div className='Text-Main   flex flex-col  items-center justify-between
    '>
       <p className=' text-center'>Fashion & Design</p>
        <Link to={"/Products"}  className=' '>
       <button>
        Shop Now
        
        </button>
        </Link>
      </div>  
    </div>

    {/* Content for the second column */}
    <div className="flex justify-center items-center 
    " id="Col-2">

    <div className='Text-Main-2  w-full h-full  flex flex-col justify-center items-center   '>
       <p className=''>Consoles & Gaming</p>
        <Link to={"/Products"}  className=' '>
       <button>
        Shop Now
        
        </button>
        </Link>
      </div> 
    </div>
    <div className="" id="Col-3">
    <div className='Text-Main-3  w-full h-full  flex flex-col justify-center items-center   '>
       <p className=''>Electronics</p>
        <Link to={"/Products"}  >
       <button >
        Shop Now
        
        </button>
        </Link>
      </div> 
    </div>
    <div className="" id="Col-4">
    <div className='Text-Main-4  w-full h-full  flex flex-col justify-center items-center   '>
       <p className=''>Electronics</p>
        <Link to={"/Products"}  >
       <button >
        Shop Now
        
        </button>
        </Link>
      </div> 
    </div>
  </div>


</section>
<div className="md:mt-20 mb-40  w-full ">

<Item Deck={ItemList[3]} Category={ItemList[3].Category}/>
</div>
<div className="Bg-Hmebanner">

<h1 className=" title-font  mb-20 Products-tag  text-4xl  text-center text-gray-800 ">Casual Collection</h1>
  
<Swiper   slidesPerView={1}
       loop={true}
       pagination={{
          clickable: true,
        }} modules={[Pagination]} className="mySwiper  w-full" ref={swiperRef}>
       <SwiperSlide><BigProduct Img={"/Images/Big_Banner.png"}/></SwiperSlide>
        <SwiperSlide><BigProduct Img={"/Images/Big_Banner_2.jpg"}/></SwiperSlide>
        <SwiperSlide><BigProduct Img={"/Images/Big_Baner_3.jpg"}/></SwiperSlide>
      </Swiper>
          </div>
<section className="text-gray-400 body-font our-Team">
  <div className="container  py-24 mx-auto">
    <h1 className=" title-font  mb-20 Products-tag  text-4xl  text-center text-gray-800 ">Our Team</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-800  p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="\Logo\Swiftmart-logos_black.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-white">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-800 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="\Logo\Swiftmart-logos_black.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-white">Jeniffer Grity</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-800  p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="\Logo\Swiftmart-logos_black.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-white">John Doe</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-800 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="\Logo\Swiftmart-logos_black.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-white">Alper Kamu</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>

  


  )
}


const Item =({Deck,Category})=>{
   
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
 return  <div className='Product-Hme'>
  <h3 className='Products-tag title-font  mb-20 Products-tag  text-4xl  text-center text-gray-800 '>{Category}</h3>
  {isSmallScreen ? (
          
          <Swiper
          cssMode={true}
          
          spaceBetween={20}
          slidesPerView={2}
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


         
  

        </div>
}

export default memo(Hero_banner)