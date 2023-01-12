import React from "react"
import "./CheckBox.css"
function CheckBox({InputArray1}){
    return(
        <>
            {InputArray1.map((value,key)=>(
        <span key={key} className={value.classname}>
        <label>
    <input type="checkbox" name={value.name} id="aspect"/> 
   <span>{value.value}</span></label>
    </span>))}
    </>
    
    )
}
export default CheckBox