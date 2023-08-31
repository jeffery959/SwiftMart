import {memo} from "react"
import "./Hero_banner.css"
const Hero_banner = () => {
 
  return (
    <div className='  
    '>

    <section className= 'child banner    '>  
      <img src="Images\Headphone-blue.png" alt=""  />
    
      
    <div className=' text  w-full flex flex-col items-center  justify-center h-screen'>
       <p className='Banner-text text-center text-white'>Shop with Swift Mart and benefit from our best offers now</p>
       <button className='banner_btn'>Shop Now</button>
      </div>    

    </section>

    </div>
  


  )
}

export default memo(Hero_banner)
