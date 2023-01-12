import React from "react"
function Reset({cslevel,setcslevel,dermatome,setdermatome}){
    return(
        <span  className="reset reset1">
        <label>
    <input type="radio" name="csalllevel" onClick={()=>{setcslevel(false);setdermatome(true)}}/> 
   <span>Reset</span></label>
    </span>
    )
}
export default Reset