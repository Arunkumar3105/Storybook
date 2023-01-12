import React from "react"
import "./CsLevel.css"
import IndividualDermatome from "../CsIndividualDermatome/IndividualDermatome"
// import Others from "../Others/Others"

import { useState } from "react"
function CsLevel({level,other}){
    const[dermatome,setdermatome]=useState(true) 
    return(
        <div style={{display:"flex"}}>
       {dermatome? <span  className="scar">
        <label>
    <input type="radio" name="csalllevel"/> 
   <span>C1-C7</span></label>
    </span>:null}
    <div>
        <IndividualDermatome level={level} other={other}  dermatome={dermatome} setdermatome={setdermatome}/>
    </div>
    {/* <div>
       {dermatome? <Others other={other}/>:null}
    </div> */}

    </div>
    )
}
export default CsLevel