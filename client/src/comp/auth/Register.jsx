import React, { useState } from "react";
import bgi from "/Users/tashwinsj/Desktop/Semester 5/DBMS/dbmsproj/jim/src/assets/jim.jpg"
import { Link } from "react-router-dom";
import axios from 'axios'


export default function Register(){

    const [msg , setmsg] = useState("")
    const [member , setmember] = useState({
        "name" : "" , 
        "age" : "" , 
        "phone" :"" , 
        "address" :"" ,
        "password" : "" , 
     })
    
    const handlechange = (e) =>{
        setmember((prev) => ({...prev , [e.target.name] :e.target.value }))
    }

    const hclick = async (e) =>{
        e.preventDefault() ;
        try{
            await axios.post("http://localhost:5004/adduser" , member) ;

        }
        catch(err) {
            console.log(err) ;

        }
        setmsg("Regsitered successfully , login to proceed !")
    }
 



    return(
        <div className="">
            <img className="w-screen h-screen" src="https://img.freepik.com/premium-photo/soccer-stadium-midnight-with-ai-generated_144089-841.jpg"></img>
            <div className="header h-screen w-screen absolute top-0" >
            <Link to ="/"><button className="font-semibold text-[30px] m-12 w-[200px] mt-8 text-white cursor:pointer">Namma GYM</button></Link>
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
            <div className="absolute top-32 left-[480px] h-[630px] w-[600px] bg-white rounded-2xl p-12 ">
                <div className="ml-52 font-semibold text-[30px] [#3ddd50]  mb-8">Register</div>
                <form>
                    
                    <label>Name</label>
                    <br/>
                    <input type="text" name="name" onChange={handlechange} className="w-56   border-black  rounded border-b-2  border-l-1"></input> 
                    <br/>
                    <br/>
                    <label>age</label>
                    <br/>
                    <input type="text" name="age" onChange={handlechange} className="w-56   border-black  rounded border-b-2  border-l-1"></input> 
                    <br/>
                    <br/>
                    <label>Address</label>
                    <br/>
                    <input type="text" name="address" onChange={handlechange} className="w-56   border-black  rounded border-b-2  border-l-1"></input> 
                    <br/>
                    <br/>
                    <label>Phone No</label>
                    <br/>
                    <input type="text" name="phone" onChange={handlechange} className="w-56   border-black  rounded border-b-2  border-l-1"></input> 
                    <br/>
                    <br/>
                    <label className="mt-12">Password</label>
                    <br/>
                    <input type="password" name="password" onChange={handlechange} className="w-56   border-black  rounded border-b-2  border-l-1"></input> 
                    <br/>
                    <button className="mt-12 ml-48 font-semibold bg-[#3ddd50] w-36 rounded-xl h-12" onClick={hclick}>Submit</button>
                    <div className="font-semibold text-center mt-4 text-red-500">{msg}</div>
                </form>
                
                
            </div> 

        </div>
        
    )
}