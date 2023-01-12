import React from "react"
import Scar from "./scarvariation1.jsx"
import Button from "./other.jsx"
import Individual from "./individualdermatome.jsx"
import CsTlevel from "./cstlevel.jsx"


export default{
    title:"Exam",
    component:Scar,
  
}

const aspect=[{
    "value":"Anterior",
    "classname":"scar"
        },
                {
        "value":"Posterior"
        ,"classname":"scar"
    },
    {
        "value":"Medial",
        "classname":"scar"
    },
    {
        "value":"Lateral",
    "classname":"scar"
    },
   
    ]
const Appearance=[{"value":"Scar","classname":"scar"},{"value":"Surgical scar","classname":"scar"},{"value":"Incision","classname":"scar"},{"value":"Portal","classname":"scar"},{"value":"Laceration","classname":"scar"}]
const Status=[{"value":"Well-healed","classname":'scar'},{"value":"Healed","classname":"scar"},{"value":"Unhealed","classname":"scar"},{"value":"Not-related","classname":"scar"}]
const Side=[{"value":"Right","classname":"scar"},{"value":"Left","classname":"scar"},{"value":"Bilateral","classname":"scar"}]
const level=[{"value":"C1"},{"value":"C2"},{"value":"C3"},{"value":"C4"},{"value":"C5"},{"value":"C6"},{"value":"C7"}]
// const Template=()=>(
//     <div>
       
        
//          {/* [...Array(numberofchildren).keys()].map(n => ( */}
//             <Scar aspect={aspect} Appearance={Appearance} Status={Status} Side={Side}/>
            
    
//     </div>
// )
// export const Scarvariations1 = Template.bind()
export const Scarvariation1 = () => <Scar aspect={aspect} Appearance={Appearance} Status={Status} Side={Side} />
export const Other = () => <Button/>
export const Cslevel = () => <Individual level={level}/>
export const Cstlevel = () => <CsTlevel level={level}/>
