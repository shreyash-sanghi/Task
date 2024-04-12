import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import somya from "../../public/somya.jpg"
import shreyash from "../../public/shreyash.jpg"
const Task = ()=>{
  const {partnername,name} = useParams();
    const [initail,final] = useState([{
      id:"",
      Date:"",
      value:"",
      Task1:"",
      Task2:"",
      Task3:"",
      Task4:"",
      Task5:"",
    }
    ])
const getdata = async()=>{
 try {
  const result = await axios.get(`https://task-backend-ecru.vercel.app/getdata/${partnername}`);
  result.data.map((info)=>{
    if(info.somyavalue === undefined){
      final((respon)=>[
        ...respon,{
          id:info._id,
          value:info.shreyashvalue,
          Date:info.Date,
          Task1:info.Task1,
          Task2:info.Task2,
          Task3:info.Task3,
          Task4:info.Task4,
          Task5:info.Task5,
        }
      ])
    }else{
      final((respon)=>[
        ...respon,{
          id:info._id,
          value:info.somyavalue,
          Date:info.Date,
          Task1:info.Task1,
          Task2:info.Task2,
          Task3:info.Task3,
          Task4:info.Task4,
          Task5:info.Task5,
        }
      ])
    }
   
  })
 } catch (error) {
  console.log(error);
 }
}
console.log(initail)
useEffect(()=>{
getdata();
},[])
    return(
        <>
            <div class="flex  h-screen bg-gray-800 ">
    <div>
        <div class="text-white hidden sm:block w-[18vw]">
            <div class="flex p-2  bg-gray-800">
                <div class="flex py-3 px-2 items-center">
                    <p class="text-2xl text-green-500 font-semibold">SJ</p> <p class="ml-2 font-semibold italic">
                    DASHBOARD</p>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="">
                  {(partnername==="Somya")?(<>
                    <img class="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-green-400"
                        src={somya} alt=""/>
                          <p class="font-bold text-base  text-gray-400 pt-2 text-center w-24">Somya</p>
</>):(<>
  <img class="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-green-400"
                        src={shreyash} alt=""/>
  <p class="font-bold text-base  text-gray-400 pt-2 text-center w-24">Shreyash</p>

</>)}
                </div>
            </div>
            <div>
                <ul class="mt-6 leading-10">
                    <li class="relative px-2 py-1 ">
                        <Link to={`/dashboard/${name}`} class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500" 
                            href=" #">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span class="ml-4">My Task</span>
                        </Link>
                    </li>
              
                </ul>
            </div>
        </div>
    </div>



<div class="flex flex-col flex-1 w-full overflow-y-auto">
<header class="z-40 py-4  bg-gray-800  ">
        <div class="flex items-center justify-between h-8 px-6 mx-auto">
               {/* //Top */}
            <ul class=" hidden sm:flex items-center flex-shrink-0 space-x-6">
                <li class="relative">
                    <button
                        class="p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none "
   
                        aria-label="Notifications" aria-haspopup="true">
                        <div class="flex items-cemter">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>

                        <span aria-hidden="true"
                            class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
                    </button>
                    <template x-if="isNotificationsMenuOpen">
                        <ul x-transition:leave="transition ease-in duration-150"
                            x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
                          
                            class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-green-400 border border-green-500 rounded-md shadow-md">
                            <li class="flex">
                                <a class="text-white inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                                    href="#">
                                    <span>Messages</span>
                                    <span
                                        class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                        13
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </template>
                </li>
                <li class="relative">
                    <button
                        class="p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none "
                      aria-label="Account"
                        aria-haspopup="true">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </button>

                </li>
            </ul>
            <ul class="mt-6 flex sm:hidden leading-10">
                    <li class="relative px-2 py-1 ">
                        <Link to={`/dashboard/${name}`}  class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500" 
                            href=" #">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span class="ml-4">My Task</span>
                        </Link>
                    </li>
                    <li class="relative px-2 py-1" x-data="{ Open : false  }">
                        <div class="inline-flex items-center justify-between w-full text-base font-semibold transition-colors duration-150 text-gray-500  hover:text-yellow-400 cursor-pointer"
                            x-on:click="Open = !Open">
                            <span
                                class="inline-flex items-center  text-sm font-semibold text-white hover:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                </svg>
                                {(name==="Shreyash")?(<>
                                <span onClick={()=>navigate(`/partner/Somya/${name}`)} class="ml-4">Somya Task</span>
                                </>):(<>
                                <span onClick={()=>navigate(`/partner/Shreyash/${name}`)} class="ml-4">Shreyash Task</span>
                                </>)}
                            </span>
                        </div>

                        <div >
                 
                        </div>
                    </li>
                </ul>
        </div>
    </header>
    <main class="">
        <div class="grid  pb-10 mx-4 min-h-[90vh] text-black rounded-xl bg-gray-100 border-2 border-green-400">
    <div class="wrapper bg-white rounded-xl shadow w-full ">
      <div class="header flex justify-between border-b p-2">
        <span class="text-lg font-bold">
          2024 April
        </span>
        <div class="buttons">
          <button class="p-1">
              <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle"  xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
              </svg>
          </button>
          <button class="p-1">
              <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle"  xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
              </svg>
          </button>
        </div>
      </div>
      <table class="flex flex-col items-center w-full">

        <tbody>
            <div className='flex sm:ml-9 flex-row w-full flex-wrap'>
            {initail.map((info,index)=>{
          if(!info.id) return null;
                return(<>
 <td class="border-2 rounded-md  transition ml-2 cursor-pointer mt-5 border-black duration-500  ">
 <div class="flex flex-col min-h-40 mx-auto xl:w-52  lg:w-48 md:w-44 sm:w-44 w-[70vw] xs:w-36   ">
   <div class="top flex items-center justify-evenly h-5 w-full">
     
     {(info.value === "1")?(<>
     <div className='w-full flex justify-between'>
     <span class="text-gray-600">{info.Date}</span>
     <div className='flex items-center'> 
     {/* <div  className='bg-green-600 w-4 ml-5 sm:ml-2 rounded-2xl mt-1 h-4'    ></div> */}
     <span className='ml-1 text-green-600 text-sm xl:text-lg  md::block'>Done</span>
     </div>
     </div>
     </>):(<>
      <div className='w-full flex justify-between'>
     <span class="text-gray-600">{info.Date}</span>
     <div className='flex items-center'> 
     {/* <div  className='bg-red-700 w-4 rounded-2xl ml-5 sm:ml-2 mt-1 h-4'   ></div> */}
     <span className='ml-1 text-red-400  text-sm xl:text-lg  md::block'>Not Done</span>
     </div>
     </div>     </>)} 
     {/* <input name="1" value={"off"} onChange={(e)=>console.log(e.target.value)} type='checkbox'></input> */}
   </div>
   <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
     <div
       class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
     >
       <span class="event-name">
         {info.Task1}
       </span>
     </div>
     <div
       class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
     >
       <span class="event-name">
        {info.Task2}
       </span>
     </div>
     <div
       class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
     >
       <span class="event-name">
        {info.Task3}
       </span>
     </div>
     <div
       class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
     >
       <span class="event-name">
        {info.Task4}
       </span>
     </div>

   </div>
 </div>
</td>
</>)
            })}
</div>
     
        </tbody>
      </table>
    </div>

        </div>
    </main>
</div>
</div>
        </>
    )

  }
export default Task;