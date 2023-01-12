import React from "react"
import "./RadioButton.css"
function RadioButton({InputArray}){
    return(
        <>
        {InputArray.map((value,key) =>   
            <span key={key} className={value.classname}>
                <label>
            <input type="radio" name={value.name} id="status"/> 
           <span>{value.value}</span></label>
            </span>
            )}
            </>
       
    )
}
export default RadioButton