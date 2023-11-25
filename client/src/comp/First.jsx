import React from "react";
import bgi from "../assets/jim.jpg"
import { Link } from "react-router-dom";

export default function First(){
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
            <div className="absolute top-56 left-[420px] text-white font-extrabold text-[30px] flex items-center text-center ">GYM Management system :<br/> DBMS project in React.JS , Node.js and MySQL</div> 
            <Link to ="/login"><div className="w-52 bg-white h-12 hover:bg-[#3ddd50] absolute top-[400px] left-[640px] rounded-2xl text-center font-semibold  justify-center items-center pt-3">Login to get Started!</div></Link>
        </div>
        
    )
}