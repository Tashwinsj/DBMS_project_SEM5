import React, { useState } from "react";
import tej from "../assets/tej.jpg"
import arnold from "../assets/arnold.jpeg"
import cbum from "../assets/cbum.jpeg"
import mm from "../assets/mm.jpeg" 
import david from "../assets/david.jpeg"
import { Navigate ,useNavigate } from "react-router-dom";


export default function Bookclass(){

    const [select , setselect] = useState(true)
    const november = [29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] 
    const [window , setwindow] = useState(false) 
    const clicker = ()=>{
        setwindow(!window)
    }


    return( 
        
        <div>  
        {true &&
        <div className="m-24">
          
            <div className="text-bold text-[35px] border-2 border-gray-400 rounded-xl w-fit px-6 mb-12">Personal Trainers :</div>
            <div className="grid grid-cols-3">
            <Trainer name ="Teja_Yadav" img= {tej}  />
            <Trainer name ="C_BUM" img={cbum} />
            <Trainer name ="David_Laid"  img={david}/>
            <Trainer name ="Emma_watson" img={mm}/>
            <Trainer name ="Arnold"  img={arnold} />
            </div>

            <div className="text-bold text-[35px] border-2 border-gray-400 rounded-xl w-fit px-6 mt-24  mb-12">Nutrition Experts :</div>
            <div className="grid grid-cols-3">
            <Trainer name ="Teja Yadav" img= {tej}/>
            <Trainer name ="C BUM" img={cbum} />
            <Trainer name ="David Laid"  img={david}/>
            <Trainer name ="Muscle Mommy" img={mm}/>
            <Trainer name ="Arnold SChwazinigga"  img={arnold} />
            </div>


            <div className="text-bold text-[35px] border-2 border-gray-400 rounded-xl w-fit px-6 mt-24  mb-12">Zumba and Crossfit Trainers :</div>
            <div className="grid grid-cols-3">
            <Trainer name ="Teja Yadav" img= {tej}/>
            <Trainer name ="C BUM" img={cbum} />
            <Trainer name ="David Laid"  img={david}/>
            <Trainer name ="Muscle Mommy" img={mm}/>
            <Trainer name ="Arnold SChwazinigga"  img={arnold} />
            </div>
            </div>  }

            
        </div> 
      
    )
}

function Trainer(props){ 

    const [trainer , settrainer ] = useState("Teja Yadav") 
    const navigate = useNavigate()

    const clickerfun = () =>{
        const a = "/book/" 
        const b = props.name
        navigate(a+b)
    }


    return(
        <div className="h-[210px] w-[400px] m-4 rounded-xl bg-gray-200 p-4"> 
            <div className="flex">
            <div className="h-16 w-16 rounded-full bg-blue-400 overflow-hidden  border-2 border-gray-500">
                <img src={props.img} className="h-16 w-16"></img>
            </div>
            <div className="font-semibold ml-4 mt-3">{props.name}</div>
            </div>
            <div className="flex m-8 mb-1 ml-2 mt-2">
                <ul>
                    <li>* 5+ years of experience</li>
                    <li>* 2 times Mr Olympia</li>
                    <li>* 100+ customers trained </li>
                </ul>
            </div> 
            <button className="bg-violet-400 ml-64 rounded-lg h-8 w-28" onClick={clickerfun}>Book now </button>
        </div>
    )
}