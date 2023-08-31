
import {App_Context} from '../App'
import CheckIcon from '@mui/icons-material/Check';
import { useContext } from 'react';
const Modal = () => {
     const {state,dispatch}=useContext(App_Context);
  return (
    <div className={`bg-white absolute duration-long ${state.Modal} text-black  w-64 h-16  text-xl rounded-full border border-slate-200 opacity-100 items-center flex justify-between px-6  left-1/2 transform -translate-x-1/2 z-50`}>
    <div className='bg-secondary flex rounded-full text-white'><CheckIcon/></div>
      Item added to Cart
    </div>
  )
}

export default Modal;
