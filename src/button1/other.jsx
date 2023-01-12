import React from "react"
import "./Aspect.css"
import { useState } from "react"
function Button(){
    const[othertext,setothertext]=useState(false)
    return(
        <div>
        <span  className="scar">
        <label>
    <input type="radio" name="aspect" id="aspect" onClick={()=>setothertext(true)}/> 
   <span>Other</span></label>
    </span>
   {othertext ? <span >
        <input className="other" type="text"/>
    </span>:null}
    </div>
    )
}
export default Button