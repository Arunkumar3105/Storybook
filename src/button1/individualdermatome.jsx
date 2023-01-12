import React from "react"
import { useState } from "react"
import "./Aspect.css"
function Individual({level,dermatome,setdermatome}){
    
    const[cslevel,setcslevel]=useState(false)
    return(
        <div>
        <span  className="scar clevel">
        <label>
    <input type="radio" name="level" id="level" onClick={()=>{setcslevel(true);setdermatome(false)}}/> 
   <span>Individual Dermatome</span></label>
    </span>
   {cslevel? <div>
    {level.map((value,j)=>   
    <span key={j} className="cslevel">
        <label>
    <input type="checkbox" name="level" id="level"/> 
   <span>{value.value}</span></label>
    </span>
    )}
    </div>:null}
    
    </div>
    )
}
export default Individual