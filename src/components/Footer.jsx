
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="sticky left-0 right-0 w-full mt-32 h-40 border flex justify-center flex-col items-center bg-primary  opacity-100 ">
      <p className="text-white text-xl tracking-wider">&copy;Copyright 2023 | Alright reserved</p>
      <div className="mt-6 flex justify-between w-24  text-white">
       <InstagramIcon/>
        <FacebookIcon/>
        <TwitterIcon/>
      </div>  
    </footer>
  )
}

export default Footer
