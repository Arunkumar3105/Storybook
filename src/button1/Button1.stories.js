import React from "react"
import Button from "./Button1"
export default {
    title:"Button1",
    component:Button
}
export const Prime = () => <Button variant="Prime">Primary</Button>
// const Template = (args) => <Button variant="Prime" { ...args}/>
// export const Prime = Template.bind({})
// Prime.args={
    
//     size:"lg",
//     label:"Primary",
//     backgroundColor:"red",
//     padding:"15px 32px",
//     height:"40px"
// }