import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import gif from "../../public/2.mp4"
const NamePage = ()=>{
    const [ini_name,fin_name] = useState("");
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
	
    const savename = (e)=>{
         e.preventDefault() ;
		 if(ini_name === "bittu"){
			navigate(`/form/${ini_name}`)
		 }else{
			 navigate(`/dashboard/${ini_name}`)
		 }
		 localStorage.setItem("username",ini_name);
    }
    
	useEffect(()=>{
		if(username!==null){
			if(username === "bittu"){
				navigate(`/form/${username}`)
			 }else{
				 navigate(`/dashboard/${username}`)
			 }
		}
	},[])

    return(
        <>
		<div className='flex'>
       <div class="h-screen hidden sm:block w-[70%] ml-10 lg:w-[90%] relative left-0  lg:-ml-44  xl:-ml-52 bg-no-repeat bg-cover bg-center"
	><video autoPlay src={gif} className='lg:w-[110%]  h-screen' muted loop id="myVideo">
  </video>
		</div> 
	<div class="flex w-full sm:w-1/2">
		<div class="bg-black min-h-screen mx-auto  flex justify-center items-center">
				<form className='  sm:w-[35vw] lg:w-[25vw] lg:ml-auto h-[50vh] flex flex-col items-center justify-center'>
					<div className='w-[90%] lg:w-full'>
						<span class="text-lg text-gray-100">Welcome back</span>
						<h1 class="text-3xl  font-bold">Login to your account</h1>
					</div>
					<div class="mt-5 w-[90%] lg:w-full">
						<label class="block text-lg w-full mb-2" for="password">First Name</label>
						<input onChange={(e)=>fin_name(e.target.value)} class="px-4 w-full text-lg border-2 py-1 rounded-md  text-black outline-none" type="text" name="text" placeholder="First Name"/>
                    </div>		
                    <button onClick={savename} className='w-[90%] lg:w-full py-2 font-bold border-2 mt-5 rounded-md'>Save</button>	
		 		</form>
		</div>
	</div>
	</div>
        </>
    )
}

export default NamePage;