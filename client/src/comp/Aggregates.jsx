import React, { useState } from "react";
import axios from "axios";

export default function Aggregates(){
    const [dataa, setdata] = useState({}) 


    const datas = axios.get("http://localhost:5004/diet"  )
            .then(response => {
            // Handle successful response
                
            setdata(response.data[0])

    
            
             })
              .catch(error => {
                // Handle error
               console.error('Error:', error.message);
          });  




     




    return(
        <>   <div className="font-bold mb-12 mt-12 text-[28px]">Month Aggreates</div>
        <div className=" h-[300px] bg-gray-200 w-[1300px] m-8 ml-0 flex  rounded-xl p-8 ">
           
             <div className="h-32 w-72 bg-gray-300 m-4 mt-12 rounded-xl ml-0 ">
                <div className="grid grid-cols-2">
                    <div className="mx-4 my-1 text-[24px] mt-16 font-bold">Attendance:</div>
                    <div className="mx-4 my-1 text-[40px] mt-12 font-bold">{dataa.attendance}/31</div>
                </div>
             </div>


             <div className="h-32 w-72 mt-12  bg-gray-300 m-4 overflow-hidden rounded-xl ml-0 ">
               
                    <div className="mx-4 my-2 text-[24px] font-bold">Protein Intake:</div>
                    <div className="grid grid-cols-2">
                    <div className="mx-4   text-[16px] font-bold">Average :</div>
                    <div className="mx-4   text-[20px]  w-4   oveflow-hidden mt-[-10px] font-bold ">{dataa.pavg}</div>
                    <div className="mx-4   text-[16px] font-bold">Minimum :</div>
                    <div className="mx-4   text-[20px]  mt-[-10px] font-bold text-center">{dataa.pmin} g</div>
                    <div className="mx-4  text-[16px] font-bold">Maximum :</div>
                    <div className="mx-4   text-[20px]  mt-[-10px] font-bold text-center">{dataa.pmax} g</div>
                </div>
             </div>




             <div className="h-32 w-72 mt-12  bg-gray-300 m-4 overflow-hidden rounded-xl ml-0 ">
               
                    <div className="mx-4 my-2 text-[24px] font-bold">Fat and Sugar intake:</div>
                    <div className="grid grid-cols-2">
                    <div className="mx-4   text-[16px] font-bold">Average :</div>
                    <div className="mx-4   text-[20px]  mt-[-10px] font-bold text-center">{dataa.favg}</div>
                    <div className="mx-4   text-[16px] font-bold">Minimum :</div>
                    <div className="mx-4   text-[20px]  mt-[-10px] font-bold text-center">{dataa.fmin} g</div>
                    <div className="mx-4  text-[16px] font-bold">Maximum :</div>
                    <div className="mx-4   text-[20px]  mt-[-10px] font-bold text-center">{dataa.fmax} g</div>
                </div>
             </div>




             <div className="h-32 w-72 bg-gray-300 m-4 mt-12 rounded-xl ml-0 ">
                <div className="grid grid-cols-2">
                    <div className="mx-4 my-1 text-[24px] mt-16 font-bold">Suppliments:</div>
                    <div className="mx-4 my-1 text-[40px] mt-12 font-bold">13/31</div>
                </div>
             </div>

        </div>
        </>
    )
}