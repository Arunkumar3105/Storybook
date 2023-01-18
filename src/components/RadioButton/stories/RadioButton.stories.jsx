import React from "react"
import RadioButton from "../RadioButton"
export default {
    title: "Singleselect />Radio",
    component: RadioButton

}
const InputArray = [{ "value": "No", "name": "csscar", "classname": "scar" }, { "value": "Yes", "name": "csscar", "classname": "scar" }]
export const RadioButtons = () => <RadioButton InputArray={InputArray} />