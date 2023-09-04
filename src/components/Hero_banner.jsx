import {memo} from "react"
import "./Hero_banner.css"
import { Link } from "react-router-dom"
const Hero_banner = () => {
 
  return (

    <div className="hme-Main   ">

    
    <section class="text-gray-400 bg-gray-900 body-font banner ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
      <Link to={"/Products"}  >
      
    
        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Shop now</button>
        </Link>
        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Buy Now</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/Images/Banner.jpg"/>
    </div>
  </div>

    </section>



    <section className="Main-Grid ">
  <div className="New-Grid screen  gap-2">
    {/* Content for the first column */}
    <div className=" w-full flex justify-center items-center rounded-lg" id="Col-1">

      
    <div className='Text-Main   flex flex-col  items-center justify-between
    '>
       <p className=' text-center w-full '>Fashion & Design</p>
        <Link to={"/Products"}  className=' '>
       <button>
        Shop Now
        
        </button>
        </Link>
      </div>  
    </div>

    {/* Content for the second column */}
    <div className="flex justify-center items-center rounded-md" id="Col-2">

    <div className='Text-Main-2  w-full h-full  flex flex-col justify-center items-center   '>
       <p className=''>Gaming</p>
        <Link to={"/Products"}  className=' '>
       <button>
        Shop Now
        
        </button>
        </Link>
      </div> 
    </div>
    <div className="rounded-lg" id="Col-3">
    <div className='Text-Main-3  w-full h-full  flex flex-col justify-center items-center   '>
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

    </div>

  


  )
}

export default memo(Hero_banner)