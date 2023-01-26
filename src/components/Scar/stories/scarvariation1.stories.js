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
  
    const scar=[{"value":"No","name":"csscar","classname":"scar"},{"value":"Yes","name":"csscar","classname":"scar"}]
const appearance=[{"value":"Scar","name":"appearance","classname":"scar"},{"value":"Surgical scar","name":"appearance","classname":"exam"},{"value":"Incision","name":"appearance","classname":"scar"},{"value":"Portal","name":"appearance","classname":"scar"},{"value":"Laceration","name":"appearance","classname":"scar"}]
const status=[{"value":"Well-healed","name":'status',"classname":"exam"},{"value":"Healed","name":"status","classname":"scar"},{"value":"Unhealed","name":"status","classname":"scar"},{"value":"Not-related","name":"status","classname":"scar"}]
const side=[{"value":"Right","name":"side","classname":"scar"},{"value":"Left","name":"side","classname":"scar"},{"value":"Bilateral","name":"side","classname":"scar"}]
const level=[{"value":"C1"},{"value":"C2"},{"value":"C3"},{"value":"C4"},{"value":"C5"},{"value":"C6"},{"value":"C7"}]
const appearanceother=[{"name":"appearance","classname":"scar"}]
const statusother=[{"name":"status","classname":"scar"}]
const aspectother=[{"name":"aspect","classname":"scar"}]
const scarreset = [{ name: "csscar" }];
const appearancereset=[{ name: "appearance" }];
const statusreset=[{ name: "status" }];
const sidereset=[{ name: "side" }];
const aspectreset=[{ name: "aspect" }];

export const Scarvariations1 = () => <ScarVariation1 aspect={aspect} other={other} appearance={appearance} status={status} side={side} scar={scar} appearanceother={appearanceother} statusother={statusother} aspectother={aspectother} scarreset={scarreset} appearancereset={appearancereset} statusreset={statusreset} sidereset={sidereset} aspectreset={aspectreset}/>

