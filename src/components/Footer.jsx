
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="sticky left-0 right-0 w-full  h-40 border flex justify-between Footer items-center  opacity-100 ">
      <p className="text-white tracking-wider ">&copy;Copyright</p>
      <p className="text-white tracking-wider w-1/3 text-center">App is just a Demostration CreditCard is not integrated just click pay</p>
      <div className="flex justify-between footer-icons  items-center text-white">
       <InstagramIcon/>
        <FacebookIcon/>
        <TwitterIcon/>
      </div>  
    </footer>
  )
}

export default Footer
