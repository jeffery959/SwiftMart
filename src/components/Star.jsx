import {useState} from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { Rating } from '@mui/material';
const Star = () => {

     const [value, setValue] = useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='flex items-center mt-1 Star'>
        
    <Rating
      name="simple-controlled"
      value={value}
      max={5}
      precision={1}
      icon={<img src='\Logo\Star.svg' className='Rating-Star'/>}
    />

    <p className='text-black'>
(

    {value} reviews
)
    </p>

    </div>
  )
}

export default Star
