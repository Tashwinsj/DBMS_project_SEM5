import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Memship(props){
    let {id} = useParams()
    const basic= ["* 2hr/day Gym access 🏋️" ,
    "* AC gyms, Sauna, Locker 🧖‍♂️" ,
    "* Reserved Parking lot 🅿️"]
    const Pro= ["* 5hr/day Gym access 🏋️ " ,
    "* AC gyms, Sauna, Locker 🧖‍♂️" ,
    "* Reserved Parking lot  🅿️" ,
    "* Guidance Trainer 👨‍🏫"]
    const Premium= ["* 24/7 Gym access 🏋️" ,
    "* AC gyms, Sauna, Locker 🧖‍♂️" ,
    "* Reserved Parking lot 🅿️" ,
    "* Personal Trainer 🧚" ,
    "* Personal Diet Plan 🌮"]
     
    return(
        <div className="">
        <div className="text-center font-bold text-[30px] mt-24">Welcome to {id} gym ! </div> 
        <div className="flex items-center justify-center ">
           <Paycard name= "Basic" price= "900" lis = {basic}/>
           <Paycard name= "Pro" price= "1400" lis = {Pro}/>
           <Paycard name= "Premium" price= "3000" lis = {Premium}/>
        </div> 
         
        </div>
    )
}

function Paycard(props){
    let {id} = useParams() 

    const [msg , setmsg] = useState("")
     
    const memship = {
        mid : 11 , 
        gname : id ,
        plan :props.price
    }

    const buyer = async (e) =>{
        e.preventDefault() 
        try{
            await axios.post("http://localhost:5004/addmemship" , memship)
        }
        catch(err){
            console.log(err) ;
        }
        setmsg("Purchase successfull !!!")
    }


    return(
    <div className="h-[440px] w-[300px] border-2 border-blue-600 m-12 rounded-2xl flex flex-col items-center  text-center">
        <div className="font-bold text-[20px] my-4">{props.name}</div>
        <div className="w-full h-1 bg-gray-300"></div> 
        <div className="font-bold text-[25px] my-4 bg-green-200 text-center w-36  rounded-2xl">₹{props.price}</div> 
        <ol className="mt-8 h-40">
           {props.lis.map((o)=>{return(<li className="text-left text-[17px] m-2">{o}</li>)})}
        </ol>
        <button className="w-24 h-8 bg-purple-500 rounded-xl cursor-pointer text-white text-bold text-[20px] mt-6" onClick={buyer}>BUY</button>
            <div className="font-bold text-red-600 m-2">{msg}</div>
    </div>
    )
}