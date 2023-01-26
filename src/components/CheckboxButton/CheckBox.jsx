import React from "react"
import "./CheckBox.css"
function CheckBox({inputarray1}){
    return(
        <>
            {inputarray1.map((value,key)=>(
        <span key={key} className={value.classname}>
        <label>
    <input type="checkbox" name={value.name} id="aspect"/> 
   <span>{value.value}</span></label>
    </span>))}
    </>
    
    )
}
export default CheckBox