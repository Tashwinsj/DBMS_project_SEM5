import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import  arean from "../assets/arena.jpeg"  
import dhenu from "../assets/dhenu.jpg"


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

     const  navigate = useNavigate()


    return(
       <div className="  h-screen">
        
        <div className="header h-40 w-screen   absolute  top-0" >
        <Link to ="/"><button className="font-semibold text-[30px] m-12 w-[200px] mt-8   cursor:pointer"> Namma GYM </button></Link>
            <div className="flex  gap-8  justify-end mr-12 mt-[-80px]   ">
                <div className="cursor-pointer">Membership</div>
                <div onClick={()=>{navigate("/bookclass")}} className="cursor-pointer">Book Class</div>
                <div onClick={()=>{navigate("/equipments/XYZ")}}  className="cursor-pointer">Equipments</div>
                <div className="cursor-pointer">Pricing</div>
                <div onClick={()=>{navigate("/analytics")}}   className="cursor-pointer">Analytics</div>
                <div className="h-12 w-12 mt-[-10px] bg-gray-200 flex justify-center font-bold text-[30px] text-gray-400 items-center rounded-full">T</div>
            </div>
        </div>
        <div  className="absolute font-bold text-[40px] top-40 ml-32">Welcome to  Namma GYM !🏈 </div>
        <div className="absolute top-[300px] ml-[100px] ml-[140px]  w-[1200px] overflow-y-auto grid grid-cols-2">

         {gymz.map(o =>{return(<div><Gymcard name= {o.gname} address = {o.location} price= {o.price} img={o.img} /></div>)})}
         </div>
        </div>
         

    )
}


function Gymcard(props){
    const navigate = useNavigate() 
    

     
    const selector =(name)=>{
        const url = "/membership/" + name
        navigate(url)
    }


    return(
        <div className="h-[420px] m-4 ml-12 w-[500px]   bg-gray-200 rounded-xl overflow-hidden">
          <div className="h-[270px] overflow-hidden  bg-red-200"> 
          <img src={props.img} className=" h-72 w-full"></img>
          
          </div>
              <div className="flex flex">
            <div className="w-[300px]  ">
            <div className="font-bold text-[24px] mb-0 m-4">{props.name}</div>
            <div className="mx-4 font-semibold text-gray-600">Price : ₹{props.price}</div>
            <div className="mx-4 w-[400px]">{props.address}</div>
            </div>
            <div className="h-10 w-24 text-center p-1 border-black border-2 font-bold m-12 bg-green-300 rounded-xl cursor-pointer " onClick={()=>selector(props.name)}>SELECT</div>
            </div>
        </div>
    )
}