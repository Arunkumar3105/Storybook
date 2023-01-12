import React from "react"
import "./Aspect.css"
import Individual from "./individualdermatome.jsx"
import Button from "./other.jsx"
import { useState } from "react"
function CsTlevel({level}){
    const[dermatome,setdermatome]=useState(true) 
    return(
        <div style={{display:"flex"}}>
       {dermatome? <span  className="scar">
        <label>
    <input type="radio" name="csalllevel"/> 
   <span>C1-C7</span></label>
    </span>:null}
    <div>
        <Individual level={level} dermatome={dermatome} setdermatome={setdermatome}/>
    </div>
    <div>
       {dermatome? <Button/>:null}
    </div>
    </div>
    )
}
export default CsTlevel