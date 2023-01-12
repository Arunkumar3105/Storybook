import React from "react"
import CsLevel from "../CsLevel"
export default{
    title:"Cslevel/CsLevel",
    component:CsLevel
}
const level=[{"value":"C1"},{"value":"C2"},{"value":"C3"},{"value":"C4"},{"value":"C5"},{"value":"C6"},{"value":"C7"}]
const other=[{"classname":"csalllevel"}]
export const CsLevels = () => <CsLevel level={level} other={other}/>