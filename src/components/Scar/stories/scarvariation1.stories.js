import React from "react"
import ScarVariation1 from "../ScarVariation1.jsx"
// import Button from "./other.jsx"
// import Individual from "./individualdermatome.jsx"
// import CsTlevel from "./cstlevel.jsx"


export default{
    title:"Scar/ScarVariation1",
    component:ScarVariation1,
  
}
const other=[{"classname":"csalllevel"}]
const aspect=[{
    "value":"Anterior",
    "name":"aspect"
        },
                {
        "value":"Posterior"
        ,"name":"aspect"
    },
    {
        "value":"Medial",
        "name":"aspect"
    },
    {
        "value":"Lateral",
    "name":"aspect"
    },
   
    ]
    // const InputArray=[{"value":"No"},{"value":"Yes"}]
  
    const Scar=[{"value":"No","name":"csscar","classname":"scar"},{"value":"Yes","name":"csscar","classname":"scar"}]
const Appearance=[{"value":"Scar","name":"appearance","classname":"scar"},{"value":"Surgical scar","name":"appearance","classname":"exam"},{"value":"Incision","name":"appearance","classname":"scar"},{"value":"Portal","name":"appearance","classname":"scar"},{"value":"Laceration","name":"appearance","classname":"scar"}]
const Status=[{"value":"Well-healed","name":'status',"classname":"exam"},{"value":"Healed","name":"status","classname":"scar"},{"value":"Unhealed","name":"status","classname":"scar"},{"value":"Not-related","name":"status","classname":"scar"}]
const Side=[{"value":"Right","name":"side","classname":"scar"},{"value":"Left","name":"side","classname":"scar"},{"value":"Bilateral","name":"side","classname":"scar"}]
const level=[{"value":"C1"},{"value":"C2"},{"value":"C3"},{"value":"C4"},{"value":"C5"},{"value":"C6"},{"value":"C7"}]
const AppearanceOther=[{"name":"appearance","classname":"scar"}]
const StatusOther=[{"name":"status","classname":"scar"}]
const aspectOther=[{"name":"aspect","classname":"scar"}]
const Scarreset = [{ name: "csscar" }];
const Appearancereset=[{ name: "appearance" }];
const Statusreset=[{ name: "status" }];
const Sidereset=[{ name: "side" }];
const aspectreset=[{ name: "aspect" }];

export const Scarvariations1 = () => <ScarVariation1 aspect={aspect} other={other} Appearance={Appearance} Status={Status} Side={Side} Scar={Scar} AppearanceOther={AppearanceOther} StatusOther={StatusOther} aspectOther={aspectOther} Scarreset={Scarreset} Appearancereset={Appearancereset} Statusreset={Statusreset} Sidereset={Sidereset} aspectreset={aspectreset}/>

