import React from "react"
import RadioButton from "../RadioButton"
export default {
    title: "Singleselect />Radio",
    component: RadioButton

}
const inputarray = [{ "value": "No", "name": "csscar", "classname": "scar" }, { "value": "Yes", "name": "csscar", "classname": "scar" }]
export const RadioButtons = () => <RadioButton inputarray={inputarray} />