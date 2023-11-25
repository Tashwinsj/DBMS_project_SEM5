import React, { useState } from "react";
import run from "../assets/run.svg" 
import cycle from "../assets/cycle.svg"
import yoga from "../assets/yoga.svg"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto"; 
import axios from "axios";
import Aggregates from "./Aggregates";


export default function Analytics(){ 
    const [month , setmon] = useState([])   
    const [month2 , setmon2] = useState([])   
    const [month3 , setmon3] = useState([])   
    
    let janm = []
    for (let i =0 ; i< month.length ; i++){
        janm.push(month[i].quantity)
    } 
    let febm = []
    for (let i =0 ; i< month2.length ; i++){
        febm.push(month2[i].quantity)
    } 
    let marm = []
    for (let i =0 ; i< month3.length ; i++){
        marm.push(month3[i].quantity)
    } 


            const eqs = axios.post("http://localhost:5004/at" , {"month" : 1})
            .then(response => {
            // Handle successful response
    
            setmon(response.data)
    
            
             })
              .catch(error => {
                // Handle error
               console.error('Error:', error.message);
          });  

          const vari = axios.post("http://localhost:5004/at" ,{"month" : 2})
            .then(response => {
            // Handle successful response
    
            setmon2(response.data)
    
            
             })
              .catch(error => {
                // Handle error
               console.error('Error:', error.message);
          }); 
          const varia = axios.post("http://localhost:5004/at" ,{"month" : 3})
            .then(response => {
            // Handle successful response
    
            setmon3(response.data)
    
            
             })
              .catch(error => {
                // Handle error
               console.error('Error:', error.message);
          });  
        







    return(
        <div className="p-28 pt-12 pr-4 ">
            <div className="font-bold text-[35px]  mb-16">Hello, Tashwin </div> 
            <div className="flex gap-8">
                <Card img={run} name={"Running"} num={600} units={"steps"} />
                <Card img={cycle} name={"Cycling"} num={12} units ={"Km"}/>
                <Card img={yoga} name={"Yoga"} num={30} units ={"min"}/>
        
                <BCI/>
                
            </div>
            <div className="flex">
                <Weight/>
                <Diet/>
            </div> 


            <div className="bg-gray-200 w-[1300px] h-[200px] flex  mr-44 rounded-xl overflow-hidden " >
                <div className="grid grid-rows-4 grid-flow-col  p-4" >
                     {janm.map(o=>{return( o == 1 ? <div className="bg-green-400 m-1 h-8 w-8 "></div> : <div className="bg-red-400 m-1 h-8 w-8"></div>)})} 
                </div>
                <div className="grid grid-rows-4 grid-flow-col  p-4" >
                     {febm.map(o=>{return( o == 1 ? <div className="bg-green-400 m-1 h-8 w-8 "></div> : <div className="bg-red-400 m-1 h-8 w-8"></div>)})} 
                </div>
                <div className="grid grid-rows-4 grid-flow-col  p-4" >
                     {marm.map(o=>{return( o == 1 ? <div className="bg-green-400 m-1 h-8 w-8 "></div> : <div className="bg-red-400 m-1 h-8 w-8"></div>)})} 
                </div>
            </div> 

            <Aggregates/>

            
            
        </div>
    )
}


function Box(props){
    return(
        <>
        return(<div>
        {true && <div className="bg-red-400 m-1 h-8 w-8"></div>} 
        </div>)
        </>
    )
}




function Diet(){
    return(
        <>
        <div className="bg-gray-200 h-[260px] w-[300px] m-16 rounded-xl p-4  text-center mt-[-140px]">
        <div  className="font-bold text-[20px] bg-slate-100 h-6    pt-0  rounded-lg"> Diet Plan  </div> 
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " > Protein :  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;70 g</div>
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " >Carbs :  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;300 g</div>
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " >Mulitvitamins :  &nbsp; &nbsp;  &nbsp;  3 tablets</div>
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " >Fat/sugar  :  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; 20g </div>
        </div>
        </>
    )
}




function Card(props){
    return(
    <div className="w-[300px] h-[160px] p-4 bg-gray-200 flex rounded-xl ">
            <img src={props.img} className="h-20 w-20 p-2 opacity-50 mt-6 ml-4  border-black  "></img>
            <div className="flex flex-col">
                <div className="font-bold text-[30px] text-black/70 p-4 pb-1">{props.name}</div>
                <div className="font-bold text-[40px]  flex p-4 pt-1">{props.num} <div className="text-[15px] mt-6 m-2">{props.units}</div> </div>
            </div> 
    </div> )
}

 



function BCI(props){
    return(
    <div className="w-[300px] h-[360px]  p-4 bg-gray-200 justify-center rounded-xl   "> 
        <div  className="font-bold text-[20px] bg-slate-100 h-8  p-4  pt-0  rounded-lg">Body Composition Test</div> 
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " >Body Weight :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 57 kg</div>
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " >BMI :  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;22</div>
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " >Fat Percentage :  &nbsp; &nbsp;  &nbsp; 5.7%</div>
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " >SMM  :  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; 10.6%</div>
        <div className="font-bold text-[15px] w-64 rounded bg-blue-200 m-4 ml-2 p-2 " >BIA  : &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; 19.5</div>
    </div> )
}
function Weight(props){
    return(
    <div className="w-[600px] h-[260px] p-4 bg-gray-200 mt-[-140px] flex rounded-xl ">
          <Line
            datasetIdKey='id'
          data={{
          labels: ['jan' ,'feb' ,'mar' ,'apr' ,'may' ,'jun' ,'jul' ,'aug' , 'sep', 'oct', 'nov' ,'dec'],
            datasets: [
                {
                 id: 1,
                 label: 'Weight Training',
                   data: [44,43,45,45.6,46,46,44,47,47,48,47,],
                   },
                  
                 
                ],
            }}
            />

 
    </div> )
}