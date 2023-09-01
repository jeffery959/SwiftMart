
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import "./Modal.css"
const Modal = () => {
  const Modal = useSelector((state)=>state.product.Modal)
  return (
    <div className={`Modal  ${Modal}  `}>
    <div className='bg-secondary flex rounded-full  Icon text-white'><CheckIcon/></div>
      <p className='Txt-icon'>Item added to Cart</p>
    </div>
  )
}

export default Modal;
