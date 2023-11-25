import React, { useState } from "react";
import axios from "axios";

export default function Equipment(){
    const [eq ,seteq ] = useState([])
    const [odd , setodd] = useState(false)
    const [odd1 , setodd1 ] = useState(false) 
    const [odd2 , setodd2 ] = useState(false) 

    const [org , setorg] = useState("Leg")
    const [loc , setloc] = useState("Floor") 
    const [item , setitem] = useState("Bench")

    const organchange = event =>{ 
        const val = event.target.value
        setorg(val) 
         
     } 
    const floorchanger = event =>{
        const val = event.target.value 
        setloc(val) 
        
    }
    const itemchange = event =>{
        const val = event.target.value 
        setitem(val) 
         
    }
    getter()

    function getter(){ 
        const orggg = {organ : org , location :loc , item : item }
        const eqs = axios.post("http://localhost:5004/equipments" , orggg)
        .then(response => {
        // Handle successful response

        seteq(response.data)

        
         })
          .catch(error => {
            // Handle error
           console.error('Error:', error.message);
      }); ; 

    }



    return(
        <div className="flex flex-col items-center">
            <div className="text-center font-bold text-[30px] mt-12 ">Arena Equipment Inventory 📜:</div>
            <Topbar/>
             
            <div className="h-16 w-[1100px] my-4  bg-indigo-200 rounded-2xl flex">
            <div className="h-12 w-[120px] font-semibold text-center pt-2 justify-center bg-indigo-300 m-2 rounded-2xl">Organ  
            { odd && <div className="h-44 w-32 text-left pl-4 pt-4 bg-gray-200 border-2 border-gray-400 absolute z-10 rounded-2xl mt-8 ml-6">
                    <form onChange={ event => organchange(event)}>
                    <input type="radio" value="Chest" name="organ"></input>
                    <label className="m-2">Chest</label>
                    <br/>
                    <input type="radio" value="Leg"  name="organ"></input>
                    <label className="m-2">Leg</label>
                    <br/>
                    <input type="radio" value="Tricep"  name="organ"></input>
                    <label className="m-2">Tricep</label>
                    <br/>
                    <input type="radio" value="Bicep"  name="organ"></input>
                    <label className="m-2">Bicep</label>
                    <br/>
                    <input type="radio" value="Back"  name="organ"></input>
                    <label className="m-2">Back</label>
                    <br/>
                    <input type="radio" value="Shoulder"  name="organ"></input>
                    <label className="m-2">Shoulder</label>
                    </form>
                </div>}
            </div>
            <button className="h-12 w-8 bg-violet-300 m-2 mx-0 rounded-lg" onClick={()=>{setodd(!odd)}}> ↓ </button>
            <div className="h-12 w-[100px] font-semibold text-center pt-2 justify-center bg-indigo-300 m-2 rounded-2xl">
                Location 
                { odd1 && <div className="h-44 w-32 text-left pl-4 pt-4 bg-gray-200 border-2 border-gray-400 absolute z-10 rounded-2xl mt-8 ml-2">
                    <form onChange={event=> floorchanger(event)}>
                    <input type="radio" value="Floor 1" name="Floor"></input>
                    <label className="m-2" >1st Floor</label>
                    <br/>
                    <input type="radio" value="Floor 2" name="Floor"></input>
                    <label className="m-2">2nd Floor</label>
                    <br/>
                    <input type="radio" value="Floor 3" name="Floor"></input>
                    <label className="m-2">3rd Floor</label>
                    <br/>
                    <input type="radio" value="Cardio" name="Floor"></input>
                    <label className="m-2">Cardio</label>
                    <br/>
                    <input type="radio" value="Zumba" name="Floor"></input>
                    <label className="m-2">Zumba</label>
                    <br/>
                    <input type="radio" value="Cross Fit" name="Floor"></input>
                    <label className="m-2">Cross Fit</label>
                    </form>
                </div>}
            </div>
            <button className="h-12 w-8 bg-violet-300 m-2 mx-0 rounded-lg" onClick={()=>{setodd1(!odd1)}}> ↓ </button>
            <div  className="h-12 w-[100px] font-semibold text-center pt-2 justify-center bg-indigo-300 m-2 rounded-2xl">Items
            { odd2 && <div className="h-40 w-32 text-left pl-4 pt-4 bg-gray-200 border-2 border-gray-400 absolute z-10 rounded-2xl mt-8 ml-2">
                    <form onChange={event =>{itemchange(event)}}>
                    <input type="radio" value="Bench" name="itme"></input>
                    <label className="m-2">Benches</label>
                    <br/>
                    <input type="radio" value="Barbell" name="itme"></input>
                    <label className="m-2">Barbells</label>
                    <br/>
                    <input type="radio" value="Dumbell" name="itme"></input>
                    <label className="m-2">Dumbells</label>
                    <br/>
                    <input type="radio" value="Cable" name="itme"></input>
                    <label className="m-2">Cables</label>
                    <br/>
                    <input type="radio" value="Stretcher" name="itme"></input>
                    <label className="m-2">Stretcher</label>
                    <br/>
                  
                    </form>
                </div>}

            </div>
            <button className="h-12 w-8 bg-violet-300 m-2 mx-0 rounded-lg" onClick={()=>{setodd2(!odd2)}}> ↓ </button>
        </div>








            {eq.map(o =>{return(<Bar no={o.enumber} name={o.ename} id = {o.eid} organ= {o.organ} location={o.location}/>)})}
        </div>
    )
} 

function Topbar(){
    return(
        <div className="h-16 w-[1100px] mt-12 bg-slate-200 rounded-2xl flex ">
                <div className="h-12 w-[100px] font-semibold  text-center pt-2 justify-center bg-slate-300 m-2 rounded-2xl">SL.No</div>
                <div className="h-12 w-[500px] font-semibold text-center pt-2  bg-slate-300 m-2 rounded-2xl">Equipment Name</div>
                <div className="h-12 w-[100px] font-semibold text-center pt-2  bg-slate-300 m-2 rounded-2xl">Items.No</div>
                <div className="h-12 w-[200px] font-semibold text-center pt-2  bg-slate-300 m-2 rounded-2xl">Organ</div>
                <div className="h-12 w-[200px] font-semibold text-center pt-2  bg-slate-300 m-2 rounded-2xl">Location</div>
            </div>
    )
}

function Bar(props){
    return(
        <div className="h-16 w-[1100px]  bg-slate-100 rounded-2xl flex ">
                <div className="h-12 w-[100px] font-semibold text-center pt-2 justify-center bg-slate-200 m-2 rounded-2xl">{props.id}</div>
                <div className="h-12 w-[500px] font-semibold text-center pt-2  bg-slate-200 m-2 rounded-2xl">{props.name}</div>
                <div className="h-12 w-[100px] font-semibold text-center pt-2  bg-slate-200 m-2 rounded-2xl">{props.no}</div>
                <div className="h-12 w-[200px] font-semibold text-center pt-2  bg-slate-200 m-2 rounded-2xl">{props.organ}</div>
                <div className="h-12 w-[200px] font-semibold text-center pt-2  bg-slate-200 m-2 rounded-2xl">{props.location}</div>
            </div>
    )
} 

