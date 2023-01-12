import React from "react"
import { useState } from "react"
import "./IndividualDermatome.css"
import Reset from "../Reset/Reset"
import Others from "../Others/Others"
function IndividualDermatome({level,dermatome,setdermatome,other}){
    
    const[cslevel,setcslevel]=useState(false)
    return(
        <div style={{display:"flex"}}>
        <span  className="scar clevel">
        <label>
    <input type="radio" name="csalllevel" id="level" onClick={()=>{setcslevel(true);setdermatome(false)}}/> 
   <span>Individual Dermatome</span></label>
    </span>
   {cslevel? <div>
    {level.map((value,j)=>   
    <span key={j} className="cstlevel">
        <label>
    <input type="checkbox" name="level" id="level"/> 
   <span>{value.value}</span></label>
    </span>
    )}
    </div>:null}
     {dermatome?<Others other={other} />:null}
    <Reset cslevel={cslevel} dermatome={dermatome} setdermatome={setdermatome} setcslevel={setcslevel}/>
    
    </div>
    )
}
export default IndividualDermatome