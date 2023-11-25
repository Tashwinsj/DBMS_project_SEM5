import React from "react";
import { useParams } from "react-router-dom"; 
import { useState } from "react";
import axios from "axios";

export default function Booking(){
    const trainer = useParams().id
    const november = [29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] 
    const [bdate , setdate] = useState("1") 
    const [bslot , setslot] = useState("1") 
    const [msg , setmsg] = useState("")

    const poster  ={"trainer" :  trainer , "date": bdate , "slot": bslot}
     
    function slotbook(){
    const gyms = axios.post("http://localhost:5004/bookslot" ,poster)
    .then(response => {
        // Handle successful response
        console.log(response.data)
        setmsg(response.data)
        
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error.message);
      }); ; 
    }




    return(
        <>  

             <div className=" absolute top-12 left-[300px] flex  h-[600px] w-[900px] bg-slate-200 border-2 border-black rounded-xl p-8">
               
                <div className="h-[530px] w-[600px] bg-gray-100 p-8 rounded-xl">
                <div className="font-bold mb-4 bg-red-200 h-8 flex items-center w-40 rounded-lg pl-4">November 2023</div>
                    <div className="flex gap-8">
                    <div className="h-12 w-12 bg-blue-200 rounded-full font-bold  flex items-center justify-center ">S</div>
                    <div className="h-12 w-12 bg-blue-200 rounded-full font-bold  flex items-center justify-center ">M</div>
                    <div className="h-12 w-12 bg-blue-200 rounded-full font-bold flex items-center justify-center ">T</div>
                    <div className="h-12 w-12 bg-blue-200 rounded-full font-bold flex items-center justify-center ">W</div>
                    <div className="h-12 w-12 bg-blue-200 rounded-full font-bold  flex items-center justify-center">T</div>
                    <div className="h-12 w-12 bg-blue-200 rounded-full font-bold flex items-center justify-center">F</div>
                    <div className="h-12 w-12 bg-blue-200 rounded-full font-bold flex items-center justify-center">S</div>
                    </div>
                    <div className="grid grid-cols-7  gap-6 mt-12 "> 
                        {november.map(o =>{return(<div className="h-12 w-12 bg-gray-200 rounded-full font-bold  flex items-center justify-center hover:bg-blue-400" onClick={()=>setdate(o)}>{o}</div>)})}
                    </div>
                </div>
                <div className="h-[530px] bg-gray-100 p-8 pr-2 w-[230px]  ml-2 rounded-xl">
                    <div className="bg-red-200 w-28 pl-4 rounded font-bold h-8 flex items-center">Time Slot</div>
                    <div className="my-4 bg-white p-2 rounded-lg mt-16 hover:bg-orange-200 border-2 border-gray-300 w-fit" onClick={()=>{setslot("1")}}>5:00 AM - 6:00 AM</div>
                    <div className="my-4 bg-white p-2 rounded-lg border-2 hover:bg-orange-200  border-gray-300 w-fit" onClick={()=>{setslot("2")}}>3:00 PM - 4:00 PM</div>
                    <div className="my-4 bg-white p-2 rounded-lg border-2 hover:bg-orange-200  border-gray-300 w-fit" onClick={()=>{setslot("3")}}>5:00 PM - 6:00 PM</div>
                    <div className="my-4 bg-white p-2 rounded-lg border-2 hover:bg-orange-200  border-gray-300 w-fit" onClick={()=>{setslot("4")}}>6:00 PM - 7:00 PM</div>
                    <div className="my-4 bg-white p-2 rounded-lg border-2 hover:bg-orange-200  border-gray-300 w-fit" onClick={()=>{setslot("5")}}>7:00 PM - 8:00 PM</div> 
                    <div className="">selected date :{bdate} </div> 
                    <div className="">selected slot :{bslot} </div>

                    <div className="bg-green-500 p-4 w-fit h-10 text-white font-bold mt-2 ml-6 rounded flex items-center cursor-pointer" onClick={slotbook}>Book now</div>
                </div>
            </div>  
            <div className="absolute top-[700px] font-bold text-red-500 left-[700px] ">{ msg}</div>

        </>
         
    )
}