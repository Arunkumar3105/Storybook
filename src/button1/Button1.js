import React from "react"
import './button1.css'
function Button(Props){
    const{variant="Prime",children,...rest}=Props
    return(
        <button className={`Button1 ${variant}`}{...rest}>{children}</button>
    )
}
export default Button