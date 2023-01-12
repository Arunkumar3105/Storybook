import React from "react"
import "./Aspect.css"
// import  PropTypes from "prop-types"
function Scar({aspect,Appearance,Status,Side})
{
       

    return(
        <div>
            {/* Size */}

            <h2>Size</h2>
         &nbsp;&nbsp;<input type="text" className="size" placeholder="size"/>

            {/* status */}
             <h2>Status</h2>
       {Status.map((value,key)=>   
    <span key={key} className={value.classname}>
        <label>
    <input type="radio" name="status" id="status"/> 
   <span>{value.value}</span></label>
    </span>
    )}
      <span  className={"reset"}>
        <label>
    <input type="radio" name="status" id="status"/> 
   <span>Reset</span></label>
    </span>

           {/* Appearance */}

            <h2>Appearance</h2>
       {Appearance.map((value,key)=>   
    <span key={key} className={value.classname}>
        <label>
    <input type="radio" name="appearance" id="appearance"/> 
   <span>{value.value}</span></label>
    </span>
    )}
    <span  className={"reset"}>
        <label>
    <input type="radio" name="appearance" id="appearance"/> 
   <span>Reset</span></label>
    </span>

            {/* Aspect */}

            <h2>Aspect</h2>
       {aspect.map((value,key)=>   
    <span key={key} className={value.classname}>
        <label>
    <input type="checkbox" name="aspect" id="aspect"/> 
   <span>{value.value}</span></label>
    </span>
    )}
     <span  className="reset">
        <label>
    <input type="checkbox" name="aspect" id="aspect"/> 
   <span>Reset</span></label>
    </span>

            {/* Side */}

    <h2>Side</h2>
       {Side.map((value,key)=>   
    <span key={key} className={value.classname}>
        <label>
    <input type="checkbox" name="side" id="side"/> 
   <span>{value.value}</span></label>
    </span>
    )}
       <span className="reset">
        <label>
    <input type="radio" name="side" id="side"/> 
   <span>Reset</span></label>
    </span>
    </div>
    )
}
// Stack.propTypes = {
//     spacing:PropTypes.number,
//     wrap:PropTypes.bool,
//     direction:PropTypes.oneOf(["row","column"])
// }
export default Scar