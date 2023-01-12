import React from "react"
import RadioButton from "../RadioButton"
export default{
    title:"Singleselect />Radio",
    component:RadioButton
  
}
const InputArray=[{"value":"No","classname":"scar"},{"value":"Yes","classname":"scar"}]
export const RadioButtons = () => <RadioButton InputArray={InputArray}/>