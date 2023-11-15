import React, { useState } from "react";
import bgi from "/Users/tashwinsj/Desktop/Semester 5/DBMS/dbmsproj/jim/src/assets/jim.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate()

    const [msg , setmsg] = useState("")
    const [log , setlog ] = useState({
        "name" : "" ,
        "password" :""
    })

    const handlechange = (e) =>{
        setlog((prev) =>({...prev , [e.target.name] :e.target.value}))
    }


    const logger = async (e) =>{
        e.preventDefault() ;
        try{
           const respo = await axios.post("http://localhost:5004/loguser" , log) ;
           if (respo.data.success) { navigate("/dashboard")}
           else {setmsg("User not found in the database !")}

        }
        catch(err) {
            console.log(err) ;
        }

    }




    return(
        <div className="">
            <img className="w-screen h-screen" src={bgi}></img>
            <div className="header h-screen w-screen absolute top-0" >
            <Link to ="/"><button className="font-semibold text-[30px] m-12 w-[200px] mt-8 text-white cursor:pointer">Namma Gym</button></Link>
                <div className="flex  gap-8  justify-end mr-12 mt-[-80px] text-white ">
                    <div >Membership</div>
                    <div>Book Class</div>
                    <div>Equipments</div>
                    <div>Pricing</div>
                    <div>Analytics</div>
                    <Link to="/register"><button className="border-2 border-white rounded-full mt-[-10px] w-28 h-12 font-semibold hover:bg-[#3ddd50] hover:border-[#3ddd50] hover:text-black">Sign up</button></Link>
                    <Link to ="/login"><button className="border-2 border-white bg-white text-black font-semibold rounded-full mt-[-10px] w-28 h-12 ml-[-15px] hover:border-[#3ddd50] hover:bg-[#3ddd50] hover:text-black">Login</button></Link>
                </div>
            
            </div>
            <div className="absolute top-56 left-[480px] h-[500px] w-[600px] bg-white rounded-2xl p-12 ">
                <div className="ml-44 font-semibold text-[30px] [#3ddd50]  mb-12">User Login</div>
                <form>
                    <label>Username</label>
                    <br/>
                    <input type="text" name="name" onChange={handlechange} className="w-56   border-black  rounded border-b-2  border-l-1"></input> 
                    <br/>
                    <br/>
                    
                    <label className="mt-12">Password</label>
                    <br/>
                    <input type="password" name="password" onChange={handlechange} className="w-56   border-black  rounded border-b-2  border-l-1"></input> 
                    <br/>
                    <button className="mt-12 ml-44 font-semibold bg-[#3ddd50] w-36 rounded-xl h-12" onClick={logger}>Login</button>
                    
                </form>
                <div className="text-center mt-8 font-semibold text-red-500">{msg}</div>

            </div> 
            
        </div>
        
    )
}