import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import gif from "../../public/2.mp4";
const Form = ()=>{
    const [ini_name,fin_name] = useState("");
    const navigate = useNavigate();
     const [initial,final] = useState({
        Date:"",
        Task1:"",
        Task2:"",
        Task3:"",
        Task4:"",
        Link1:"",
        Link2:"",
        Link3:"",
        Link4:"",
     })
 
    const setdata = (e)=>{
  const {name,value} = e.target;
  final((info)=>{
    return{
        ...info,
        [name]:value
    }
  })
    }


    const savedata = async(e)=>{
        e.preventDefault() ;
      let {Date,Task1,Task2,Task3,Task4,Link1,Link2,Link3,Link4} = initial;

      try {
          const response = await axios.post("https://task-backend-ecru.vercel.app/setdata",{ 
            Date,Task1,Task2,Task3,Task4,Link1,Link2,Link3,Link4
          })
          console.log(response)
        alert("Success")
      } catch (error) {
        alert("error");
        console.log(error);
      }
   }
    return(
        <>
        <div className='flex'>
       <div class="h-screen hidden lg:block w-[70%]  lg:w-[90%] relative left-0     bg-no-repeat bg-cover bg-center"
	><video autoPlay src={gif} className=' xl:w-[85%]  h-screen' muted loop id="myVideo">
  </video>
		</div> 
    	<div class="flex w-full lg:w-[80%] justify-end">
      <div class="bg-black min-h-screen mx-auto  flex justify-center items-center">
				<form className=' w-full mx-auto flex flex-col items-center justify-center'>
					<div className='flex justify-evenly items-center'>
						<h1 class="text-2xl  font-bold">Fill data</h1>
                         <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <span onClick={()=>{
                                  localStorage.removeItem("username")
                              navigate(`/`)
                                }
                                  } class="ml-4">Log Out</span>
                          
                            </span>
					</div>
					<div class="mt-5 w-[98%] mx-2">
						<label class="block text-md mb-2" for="password">Date</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="date" name="Date" placeholder="Date"/>
                    </div>		

   
                    <div className='flex sm:flex-row flex-col  justify-evenly items-center'>
					<div class="mt-5 w-[98%] sm:w-auto mx-2">
						<label class="block text-md mb-2" for="password">Task 1</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="Task1" placeholder="text--"/>
                    </div>		
					<div class="mt-5 w-[98%] sm:w-auto mx-2">
						<label class="block text-md mb-2" for="password">Link 1</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="Link1" placeholder="text--"/>
                    </div>	
                    </div>	
                    <div className='flex sm:flex-row flex-col  justify-evenly items-center'>
					<div class="mt-5 w-[98%] sm:w-auto mx-2">
						<label class="block text-md mb-2" for="password">Task 2</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="Task2" placeholder="text--"/>
                    </div>		
					<div class="mt-5 w-[98%] sm:w-auto mx-2">
						<label class="block text-md mb-2" for="password">Link 2</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="Link2" placeholder="text--"/>
                    </div>	
                    </div>	
                    <div className='flex sm:flex-row flex-col  justify-evenly items-center'>
					<div class="mt-5 w-[98%] sm:w-auto mx-2">
						<label class="block text-md mb-2" for="password">Task 3</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="Task3" placeholder="text--"/>
                    </div>		
					<div class="mt-5 w-[98%] sm:w-auto mx-2">
						<label class="block text-md mb-2" for="password">Link 3</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="Link3" placeholder="text--"/>
                    </div>	
                    </div>	
                    <div className='flex sm:flex-row flex-col  justify-evenly items-center'>
					<div class="mt-5 w-[98%] sm:w-auto mx-2">
						<label class="block text-md mb-2" for="password">Task 4</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="Task4" placeholder="text--"/>
                    </div>		
					<div class="mt-5 w-[98%] sm:w-auto mx-2">
						<label class="block text-md mb-2" for="password">Link 4</label>
						<input onChange={setdata} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="Link4" placeholder="text--"/>
                    </div>	
                    </div>	
		

      	
		
                    <button onClick={savedata} className='w-full py-2 font-bold border-2 mt-5 rounded-md'>Save</button>	
		 		</form>

		</div>
	</div>
</div> 
        </>
    )
}

export default Form;