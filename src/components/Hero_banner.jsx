import {memo} from "react"
import "./Hero_banner.css"
import { Link } from "react-router-dom"
const Hero_banner = () => {
 
  return (

    <div className="hme-Main h-screen">

    <section className= 'child banner flex items-center  '>  
    
      
    <div className=' text flex flex-col  items-center justify-between
    '>
       <p className='Banner-text  text-center w-full'>Shop with Swift Mart and benefit from our best offers now</p>
        <Link to={"/Products"}  className='banner_btn '>
       <button>
        Shop Now
        
        </button>
        </Link>
      </div>    

    </section>
    </div>

  


  )
}

export default memo(Hero_banner)