import {memo} from "react"
import "./Hero_banner.css"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect,useRef } from "react"
import Items from "./Items"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLocation } from "react-router-dom";
import { AddCart,ToggleModal } from "../app/features/productSlice";
import {Product_Deck} from "../Pages/Products"
import { BigProduct } from "../Pages/Products"
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Tune } from "@mui/icons-material"

const Hero_banner = () => {
  const swiperRef = useRef(null);


  const ItemList =useSelector((state)=>state.product.ItemList)

  return (

    

    <div className="   flex flex-col justify-center items-center ">

    
    <section className="text-black body-font w-full  banner  ">
  <div className="container mx-auto   flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed text-gray-800">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
     
        <Link to={"/Products"}  className='Text-Main-banner  '>
       <button>
        Shop Now
        
        </button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    </div>
  </div>

    </section>





    <section className="Main-Grid ">
     <div className="New-Grid screen  gap-2">
    {/* Content for the first column */}
    
    <div className="flex justify-center items-center 
    " id="Col-1">

    <div className='Text-Main  w-full h-full  flex flex-col justify-center items-center text-center   '>
       <p className=''>Fashion & Design</p>
        <Link to={"/Products"}  className=' '>
       <button>
        Shop Now
        
        </button>
        </Link>
      </div> 
    </div>
    <div className="flex justify-center items-center 
    " id="Col-2">

    <div className='Text-Main-2  w-full h-full  flex flex-col justify-center items-center text-center   '>
       <p className=''>Consoles & Gaming</p>
        <Link to={"/Products"}  className=' '>
       <button>
        Shop Now
        
        </button>
        </Link>
      </div> 
    </div>
    <div className="" id="Col-3">
    <div className='Text-Main-3  w-full h-full  flex flex-col justify-center items-center    '>
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

<div className="md:mt-20 flex  justify-center w-full  ">

<Item Deck={ItemList[3]} Category={ItemList[3].Category}/>

</div>
<SinglePage/>
{/* <div className="Bg-Hmebanner md:h-screen  flex flex-col justify-center items-center">

<h1 className=" title-font  Products-tag  text-4xl text-center text-gray-800 ">Casual Collection</h1>
  
<Swiper   slidesPerView={1}
       loop={true}
       pagination={{
          clickable: true,
        }} modules={[Pagination]} className="mySwiper  w-full" ref={swiperRef}>
       <SwiperSlide><BigProduct Img={"/Images/Big_Banner.png"}/></SwiperSlide>
        <SwiperSlide><BigProduct Img={"/Images/Big_Banner_2.jpg"}/></SwiperSlide>
        <SwiperSlide><BigProduct Img={"/Images/Big_Baner_3.jpg"}/></SwiperSlide>
      </Swiper>
          </div> */}




<section className="text-gray-400 body-font md:h-screen bg-slate-200 our-Team">
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
  const minSwipeRef = useRef(null);
  
  const autoScroll = () => {
    const swiper = minSwipeRef.current?.swiper;
    swiper.slideNext()
    
    
  };
  const scrollBack = () => {
    const swiper = minSwipeRef.current?.swiper;
    swiper.slidePrev()
    
    
  };

  
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
  return  <div className='w-full flex bg-slate-100 h-screen  justify-between items-center'>
   <img src="\Logo\Forward.svg" className="hidden md:block w-12" alt=""  
     onClick={()=>{scrollBack() }}/>
  <div className="w-11/12">

  <h3 className='Products-tag title-font   Products-tag  text-4xl  text-center text-gray-800 '>{Category}</h3>
 {isSmallScreen ? (
          
          <Swiper
          slidesPerView={1.5}
          loop={true}
          pagination={{
             clickable: true,
           }} modules={[Pagination]} 
     ref={minSwipeRef}
     className="mySwiper  "
     >
     {
         Deck.Unit.map(item=>{
          if(item?.id==null){
            return
          }
         return <SwiperSlide key={item.id}><Items Color={"bg-gray-500"} item={item} Deck={Deck}/></SwiperSlide>
         
       })
     }
   </Swiper>
        ) : (
          
          <Swiper
          slidesPerView={2.55}
          loop={true}
          pagination={{
             clickable: true,
           }} modules={[Pagination]} 
     ref={minSwipeRef}
     className="mySwiper  "
     >
     {
       Deck.Unit.map(item=>{
        if(item?.id==null){
          return
        }
       
         return <SwiperSlide key={item.id} ><Items Color={"bg-gray-200"}  item={item} Deck={Deck}/></SwiperSlide>
         
       })
     }
   </Swiper>
)} 


         
  
        </div>
        <img src="\Logo\Back.svg" alt=""  
          onClick={()=>{autoScroll() }} className="hidden md:block w-12"/>
        </div>
}




 const SinglePage = ({color}) => {
  const location =useLocation()
  const SingleItem = useSelector(state=>state.product.ItemList[0].Unit[1])
  const {price,name,img,Color}=SingleItem
  const [image,setImage]=useState(img)
  
  const dispatch =useDispatch()
useEffect(()=>{
  setImage(img)

},[location.pathname])


const addedItem=()=>{
  dispatch(AddCart(SingleItem))
  console.log(SingleItem)
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
    <div className="Single-Main flex justify-center items-center  ">
      
      <h1 className=" title-font  mb-20 Products-tag  text-4xl   text-gray-800  text-center w-3/4 md:w-full ">Item Of The Week</h1>

<section className="Item-Single-hme body-font bg-slate-100 overflow-hidden ">
  <div className="container px-5 my-0  mx-auto ">
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


</div>


    </div>
  )

  
} 




export default memo(Hero_banner)