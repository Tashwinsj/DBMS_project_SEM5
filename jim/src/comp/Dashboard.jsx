import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dashboard(){
    const [ gymz , setgyms] = useState([])

    const gyms = axios.get("http://localhost:5004/gyms")
    .then(response => {
        // Handle successful response
        setgyms(response.data)
        
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error.message);
      }); ; 



    return(
       <div className="  h-screen">
        
        <div className="header h-40 w-screen   absolute  top-0" >
        <Link to ="/"><button className="font-semibold text-[30px] m-12 w-[200px] mt-8   cursor:pointer">Namma Gym</button></Link>
            <div className="flex  gap-8  justify-end mr-12 mt-[-80px]   ">
                <div >Membership</div>
                <div>Book Class</div>
                <div>Equipments</div>
                <div>Pricing</div>
                <div>Analytics</div>
                <div className="h-12 w-12 mt-[-10px] bg-gray-200 flex justify-center font-bold text-[30px] text-gray-400 items-center rounded-full">T</div>
            </div>
        </div>
        <div  className="absolute font-bold text-[40px] top-40 ml-32">Welcome to Namma GYM !💪 </div>
        <div className="absolute top-[300px] ml-[100px] ml-[140px] h-screen bg-blue-200  w-[1200px] overflow-y-auto grid grid-cols-2">
         {gymz.map(o =>{return(<div><Gymcard name= {o.name} address = {o.location} price= {o.price}/></div>)})}
         </div>
        </div>
         

    )
}


function Gymcard(props){
    return(
        <div className="h-[320px] m-4 ml-12 w-[500px] bg-gray-200 rounded-xl overflow-hidden">
            <div className="h-[170px] p-4 bg-red-200">img here </div>
            <div className="font-bold text-[24px] mb-0 m-4">{props.name}</div>
            <div className="mx-4 font-semibold text-gray-600">Price : ₹{props.price}</div>
            <div className="mx-4 w-[400px]">{props.address}</div>

        </div>
    )
}