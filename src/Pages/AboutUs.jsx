import { useState } from "react";
const AboutUs = () => {
  const [inputValues, setInputValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the input values
    console.log('Submitted values:', inputValues);

    // Clear all input values
    setInputValues({});
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  return (
    <div className=' flex flex-col justify-center  mt-32 mb-16'>
          <div className='flex items-center flex-col'>
      <h1 className='flex justify-center text-2xl font-bold text-slate-700'>AboutUs</h1>
      <div className='w-10  border-b-2 rounded-lg  border-primary '></div>
      </div>
      <div className='flex justify-center p-12 text-center font-medium text-gray-500'>

      <p>Our unwavering objective is to exceed expectations at every stage of our product journey, an extraordinary odyssey that has taken us an astounding 1000 miles since 2023. Our commitment to absolute satisfaction propels us to go beyond conventional limits, leaving no stone unturned in our pursuit of excellence. We strive to create an experience that transcends boundaries and revolutionizes the way you interact with our products.</p>
      </div>
      <div className='flex items-center flex-col mb-5'>
      <h1 className='flex justify-center text-2xl font-bold text-slate-700'>ContactUs</h1>
      <div className='w-10  border-b-2 rounded-lg  border-primary '></div>
      </div>
      <form className='flex flex-col items-center' >
  <input type="text" className='bg-gray-200 w-2/5 px-3 mb-5 outline-none' name="input1"
        value={inputValues.input1 || ''}
        onChange={handleChange} placeholder='Name'/>
  <input type="email" className='bg-gray-200 w-2/5 px-3 outline-none' name="input2"
        value={inputValues.input2 || ''}
        onChange={handleChange} placeholder='Email'/>
  <textarea className='bg-gray-200 w-2/5 px-3 mt-5 outline-none' 
        value={inputValues.postContent || ''}
        onChange={handleChange}name="postContent" placeholder='Make a report of a problem,solution or an Idea' rows={4} cols={40} />
 
<button className="bg-sky-500 hover:bg-sky-400 duration-500 font-bold w-2/5 py-3 mt-4 text-white" onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>

    </div>
  )
}

export default AboutUs
