import React from "react"
import IndividualDermatome from "../IndividualDermatome"
export default{
    title:"CsindividualDermatome/individualDermatome",
    component:IndividualDermatome
}
const level=[{"value":"C1"},{"value":"C2"},{"value":"C3"},{"value":"C4"},{"value":"C5"},{"value":"C6"},{"value":"C7"}]
export const Individualdermatome = () => <IndividualDermatome level={level}/>