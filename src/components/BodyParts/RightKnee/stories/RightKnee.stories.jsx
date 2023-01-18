import RightKnee from "../RightKnee";
export default{
    title:"BodyParts/RightKnee",
    component:RightKnee
}
const aspect = [
    {
      value: "Anterior",name: "aspect",classname: "scar",
    },
    {
      value: "Posterior",name: "aspect",classname: "scar",
    },
    {
      value: "Medial",name: "aspect",classname: "scar",
    },
    {
      value: "Lateral",name: "aspect",classname: "scar",
    },
  ];
  // const InputArray=[{"value":"No"},{"value":"Yes"}]
  
  const Scar = [
    { value: "No", name: "csscar", classname: "scar" },
    { value: "Yes", name: "csscar", classname: "scar" },
  ];
  const Appearance = [
    { value: "Scar", name: "appearance", classname: "scar" },
    { value: "Surgical scar", name: "appearance", classname: "exam" },
    { value: "Incision", name: "appearance", classname: "scar" },
    { value: "Portal", name: "appearance", classname: "scar" },
    { value: "Arthroscopic scar", name: "appearance", classname: "exam1" },
    { value: "Laceration", name: "appearance", classname: "scar" },
  ];
  const Status = [
    { value: "Well-healed", name: "status", classname: "exam" },
    { value: "Healed", name: "status", classname: "scar" },
    { value: "Unhealed", name: "status", classname: "scar" },
    { value: "Not-related", name: "status", classname: "scar" },
  ];
  
  const level = [
    { value: "C1" },
    { value: "C2" },
    { value: "C3" },
    { value: "C4" },
    { value: "C5" },
    { value: "C6" },
    { value: "C7" },
  ];
  const AppearanceOther = [{ name: "appearance", classname: "scar" }];
  const StatusOther = [{ name: "status", classname: "scar" }];
  const aspectOther = [{ name: "aspect", classname: "scar" }];
  const Scarreset = [{ name: "csscar" }];
  const Appearancereset = [{ name: "appearance" }];
  const Statusreset = [{ name: "status" }];
  
  const aspectreset = [{ name: "aspect" }];
  const Exam = [{ value: "Performed", name: "exam", classname: "scar" }];
const Nexam = [
  { value: "Normal", name: "nexam", classname: "scar" },
  { value: "Abnormal", name: "nexam", classname: "scar" },
];
const other3 = [{ classname: "examreason" }];
const Reason1 = [
  { value: "surgery", name: "examreason", classname: "scar" },
  { value: "Complaint of pain", name: "examreason", classname: "exam1" },
  { value: "Non-cooperation", name: "examreason", classname: "exam1" },
  { value: "Not wish to perform", name: "examreason", classname: "exam1" },
  { value: "Brace", name: "examreason", classname: "scar" },
];
const Notperform1 = [
  { value: "Not-Performed", name: "exam", classname: "exam" },
];
const examreset1 = [{ name: "examreason" }];
const exam1reset1 = [{ name: "exam" }];
const Nexamreset = [{ name: "nexam" }];
const Fyes = [{ name: "Findyes" }];
const Fno = [{ name: "Findno" }];
const Swelling = [{ name: "finding" }];
const Erythema = [{ name: "Erythema" }];
const Effusion = [{ name: "Effusion" }];
const Redness = [{ name: "Redness" }];
const Edema = [{ name: "Edema" }];
const Deformity = [{ name: "Deformity" }];
const Ecchymosis = [{ name: "Ecchymosis" }];
const FNoother = [{ name: "FindNother", classname: "scar" }];

const Swelling1 = [{ name: "finding" }];
const Erythema1 = [{ name: "Erythema" }];
const Effusion1 = [{ name: "Effusion" }];
const Redness1 = [{ name: "Redness" }];
const Edema1 = [{ name: "Edema" }];
const Deformity1 = [{ name: "Deformity" }];
const Ecchymosis1 = [{ name: "Ecchymosis" }];
const FyesOther = [{ name: "FindNother", classname: "scar" }];
const Tenderness = [
    { value: "No", name: "tenderness", classname: "scar" },
    { value: "Yes", name: "tenderness", classname: "scar" },
  ];
  const Tendernessreset = [{ name: "tenderness" }];
  const Tstatus = [
    { value: "Diffuse", name: "tstatus", classname: "scar" },
    { value: "Mild", name: "tstatus", classname: "scar" },
    { value: "Moderate", name: "tstatus", classname: "scar" },
    { value: "Severe", name: "tstatus", classname: "scar" },
  ];
  
  const TstatusOther = [{ name: "tstatus", classname: "scar" }];
  const Tstatusreset = [{ name: "tstatus" }];
  const Tposition = [
    { value: "Medial joint Line", name: "tposition", classname: "exam1" },
    { value: "Lateral joint Line", name: "tposition", classname: "exam1" },
    { value: "Pop Fossa", name: "tposition", classname: "scar" },
    { value: "Pop Bursa", name: "tposition", classname: "scar" },
    { value: "Quadriceps", name: "tposition", classname: "scar" },
    { value: "Lateral Cruciate Ligament", name: "tposition", classname: "exam1" },
    { value: "Medial Cruciate Ligament", name: "tposition", classname: "exam1" },
    { value: "Tibia", name: "tposition", classname: "scar" },
    { value: "Tub", name: "tposition", classname: "scar" },
    { value: "patella", name: "tposition", classname: "scar" },
  ];
  const TpositionOther = [{ name: "tposition", classname: "scar" }];
  const Tpositionreset = [{ name: "tstatus" }];
  const Taspect = [
    {
      value: "Anterior",
      name: "taspect",
      classname: "scar",
    },
    {
      value: "Posterior",
      name: "taspect",
      classname: "scar",
    },
    {
      value: "Medial",
      name: "taspect",
      classname: "scar",
    },
    {
      value: "Lateral",
      name: "taspect",
      classname: "scar",
    },
  ];
  const Taspectreset = [{ name: "taspect" }];
  const TaspectOther = [{ name: "taspect", classname: "scar" }];
  const Rom = [
    { value: "Normal", name: "rom", classname: "scar" },
    { value: "Abnormal", name: "rom", classname: "scar" },
  ];
  //
  const other2 = [{ classname: "romreason" }];
  const Reason = [
    { value: "surgery", name: "romreason", classname: "scar" },
    { value: "Complaint of pain", name: "romreason", classname: "exam1" },
    { value: "Non-cooperation", name: "romreason", classname: "exam1" },
    { value: "Not wish to perform", name: "romreason", classname: "exam1" },
    { value: "Brace", name: "examreason", classname: "scar" },
  ];
  const examreset = [{ name: "romreason" }];
  const exam1reset = [{ name: "rom" }];
  const Notperform = [{ value: "Not-Performed", name: "rom", classname: "exam" }];
  const RomSelf = [
    { value: "No", name: "romself", classname: "scar" },
    { value: "Yes", name: "romself", classname: "scar" },
  ];
  const Rompain = [
    { value: "Flexion", name: "rompain", classname: "scar" },
    { value: "Extension", name: "rompain", classname: "scar" },
    
  ];
  const Romselfreset = [{ name: "romself" }];
  const Rompainreset = [{ name: "rompain" }];
  const Alignmentreset=[{name:"alignment"}]
  const Suboptimal = [{ value: "No", name: "instability", classname: "scar" }];
  const Suboptimal1 = [{ value: "Yes", name: "instability", classname: "scar" }];
  const Suboptimalreset = [{ name: "instability" }];
  const Symptom = [{ value: "No", name: "symptom", classname: "scar" }];
  const Symptom1 = [{ value: "Yes", name: "symptom", classname: "scar" }];
  const Symptomreset = [{ name: "symptom" }];
  const orthopedic = [
    { value: "Performed", name: "orthopedic", classname: "scar" },
  ];
  //orthopedic reason
  const other4 = [{ classname: "orthopedic" }];
  const Reason2 = [
    { value: "surgery", name: "orthopedicreason", classname: "scar" },
    { value: "Complaint of pain", name: "orthopedicreason", classname: "exam1" },
    { value: "Non-cooperation", name: "orthopedicreason", classname: "exam1" },
    {
      value: "Not wish to perform",
      name: "orthopedicreason",
      classname: "exam1",
    },
    { value: "Brace", name: "orthopedicreason", classname: "scar" },
  ];
  const Notperform2 = [
    { value: "Not-Performed", name: "orthopedic", classname: "exam" },
  ];
  const examreset2 = [{ name: "orthopedireason" }];
  const exam1reset2 = [{ name: "orthopedic" }];
  //lachman test
  const Negativepositive01 = [
    { value: "Negative", name: "tinel", classname: "scar" },
    { value: "Positive", name: "tinel", classname: "scar" },
  ];
  
  const other5 = [{ classname: "tinelreason" }];
const Reason3 = [
  { value: "surgery", name: "tinelreason", classname: "scar" },
  { value: "Complaint of pain", name: "tinelreason", classname: "exam1" },
  { value: "Non-cooperation", name: "tinelreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "tinelreason",
    classname: "exam1",
  },
  { value: "Brace", name: "tinelreason", classname: "scar" },
];
const Notperform3 = [
  { value: "Not-Performed", name: "tinel", classname: "exam" },
];
const examreset3 = [{ name: "tinelreason" }];
const exam1reset3 = [{ name: "tinel" }];
//anterior drawer test
const Negativepositive02 = [
  { value: "Negative", name: "phalen", classname: "scar" },
  { value: "Positive", name: "phalen", classname: "scar" },
];
const other6= [{ classname: "phalenreason" }];
const Reason4 = [
  { value: "surgery", name: "phalenreason", classname: "scar" },
  { value: "Complaint of pain", name: "phalenreason", classname: "exam1" },
  { value: "Non-cooperation", name: "phalenreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "phalenreason",
    classname: "exam1",
  },
  { value: "Brace", name: "phalenreason", classname: "scar" },
];
const Notperform4 = [
  { value: "Not-Performed", name: "phalen", classname: "exam" },
];
const examreset4 = [{ name: "phalenreason" }];
const exam1reset4 = [{ name: "phalen" }];
//opening to valgus /varus
const Negativepositive03 = [
  { value: "Negative", name: "finkelstein", classname: "scar" },
  { value: "Positive", name: "finkelstein", classname: "scar" },
];
const other7= [{ classname: "finkelsteinreason" }];
const Reason5 = [
  { value: "surgery", name: "finkelsteinreason", classname: "scar" },
  { value: "Complaint of pain", name: "finkelsteinreason", classname: "exam1" },
  { value: "Non-cooperation", name: "finkelsteinreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "finkelsteinreason",
    classname: "exam1",
  },
  { value: "Brace", name: "finkelsteinreason", classname: "scar" },
];
const Notperform5 = [
  { value: "Not-Performed", name: "finkelstein", classname: "exam" },
];
const examreset5 = [{ name: "finkelsteinreason" }];
const exam1reset5 = [{ name: "finkelstein" }];
//patellar apprehension test
const Negativepositive04 = [
  { value: "Negative", name: "watson", classname: "scar" },
  { value: "Positive", name: "watson", classname: "scar" },
];
const other8= [{ classname: "watsonreason" }];
const Reason6 = [
  { value: "surgery", name: "watsonreason", classname: "scar" },
  { value: "Complaint of pain", name: "watsonreason", classname: "exam1" },
  { value: "Non-cooperation", name: "watsonreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "watsonreason",
    classname: "exam1",
  },
  { value: "Brace", name: "watsonreason", classname: "scar" },
];
const Notperform6 = [
  { value: "Not-Performed", name: "watson", classname: "exam" },
];
const examreset6 = [{ name: "watsonreason" }];
const exam1reset6 = [{ name: "watson" }];
//patellar grind test
const Negativepositive05 = [
  { value: "Negative", name: "watson", classname: "scar" },
  { value: "Positive", name: "watson", classname: "scar" },
];
const other9= [{ classname: "watsonreason" }];
const Reason7 = [
  { value: "surgery", name: "watsonreason", classname: "scar" },
  { value: "Complaint of pain", name: "watsonreason", classname: "exam1" },
  { value: "Non-cooperation", name: "watsonreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "watsonreason",
    classname: "exam1",
  },
  { value: "Brace", name: "watsonreason", classname: "scar" },
];
const Notperform7 = [
  { value: "Not-Performed", name: "watson", classname: "exam" },
];
const examreset7 = [{ name: "watsonreason" }];
const exam1reset7 = [{ name: "watson" }];
//J sign test
const Negativepositive06 = [
    { value: "Negative", name: "watson", classname: "scar" },
    { value: "Positive", name: "watson", classname: "scar" },
  ];
  const other14= [{ classname: "watsonreason" }];
  const Reason10 = [
    { value: "surgery", name: "watsonreason", classname: "scar" },
    { value: "Complaint of pain", name: "watsonreason", classname: "exam1" },
    { value: "Non-cooperation", name: "watsonreason", classname: "exam1" },
    {
      value: "Not wish to perform",
      name: "watsonreason",
      classname: "exam1",
    },
    { value: "Brace", name: "watsonreason", classname: "scar" },
  ];
  const Notperform10 = [
    { value: "Not-Performed", name: "watson", classname: "exam" },
  ];
  const examreset10 = [{ name: "watsonreason" }];
  const exam1reset10 = [{ name: "watson" }];
  //mcmurry test
  const Negativepositive07 = [
    { value: "Negative", name: "watson", classname: "scar" },
    { value: "Positive", name: "watson", classname: "scar" },
  ];
  const other15= [{ classname: "watsonreason" }];
  const Reason11 = [
    { value: "surgery", name: "watsonreason", classname: "scar" },
    { value: "Complaint of pain", name: "watsonreason", classname: "exam1" },
    { value: "Non-cooperation", name: "watsonreason", classname: "exam1" },
    {
      value: "Not wish to perform",
      name: "watsonreason",
      classname: "exam1",
    },
    { value: "Brace", name: "watsonreason", classname: "scar" },
  ];
  const Notperform11 = [
    { value: "Not-Performed", name: "watson", classname: "exam" },
  ];
  const examreset11 = [{ name: "watsonreason" }];
  const exam1reset11 = [{ name: "watson" }];
  
  const Strengtht = [{ value: "No", name: "strength", classname: "scar" }];
const Strengtht1 = [{ value: "Yes", name: "strength", classname: "scar" }];
const Strengthtreset = [{ name: "strength" }];
const other11 = [{ classname: "strengthreason" }];
const Reason8 = [
  { value: "surgery", name: "strengthreason", classname: "scar" },
  { value: "Complaint of pain", name: "strengthreason", classname: "exam1" },
  { value: "Non-cooperation", name: "strengthreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "neuroreason",
    classname: "exam1",
  },
  { value: "Brace", name: "strengthreason", classname: "scar" },
];
const Notperform8 = [
  { value: "Not-Performed", name: "strength", classname: "exam" },
];
const examreset8 = [{ name: "strengthreason" }];
const exam1reset8 = [{ name: "strength" }];
const Adddetails = [{ value: "No", name: "Add", classname: "scar" }];
const Adddetails1 = [{ value: "Yes", name: "Add", classname: "scar" }];
const Adddetailsreset = [{ name: "Add" }];

export const Rightknee = () => <RightKnee
aspect={aspect}
    Scar={Scar}
    Scarreset={Scarreset}
    Appearance={Appearance}
    Status={Status}
    aspectOther={aspectOther}
    AppearanceOther={AppearanceOther}
    Statusreset={Statusreset}
    Appearancereset={Appearancereset}
    StatusOther={StatusOther}
    aspectreset={aspectreset}
    Exam={Exam}
    Nexam={Nexam}
    examreset1={examreset1}
    other3={other3}
    Reason1={Reason1}
    exam1reset1={exam1reset1}
    Notperform1={Notperform1}
    Nexamreset={Nexamreset}
    FyesOther={FyesOther}
    Ecchymosis1={Ecchymosis1}
    Deformity1={Deformity1}
    Edema1={Edema1}
    Redness1={Redness1}
    Effusion1={Effusion1}
    Erythema1={Erythema1}
    Swelling1={Swelling1}
    FNoother={FNoother}
    Ecchymosis={Ecchymosis}
    Deformity={Deformity}
    Edema={Edema}
    Swelling={Swelling}
    Fno={Fno}
    Fyes={Fyes}
    Redness={Redness}
    Erythema={Erythema}
    Effusion={Effusion}
    Tenderness={Tenderness}
    Tendernessreset={Tendernessreset}
    Tstatus={Tstatus}
    TstatusOther={TstatusOther}
    Tstatusreset={Tstatusreset}
    Tpositionreset={Tpositionreset}
    TpositionOther={TpositionOther}
    Tposition={Tposition}
    Taspect={Taspect}
    Taspectreset={Taspectreset}
    TaspectOther={TaspectOther}
    Rom={Rom}
    Notperform={Notperform}
    exam1reset={exam1reset}
    examreset={examreset}
    Reason={Reason}
    other2={other2}
    RomSelf={RomSelf}
    Rompain={Rompain}
    Romselfreset={Romselfreset}
    Rompainreset={Rompainreset}
    Alignmentreset={Alignmentreset}
    Suboptimalreset={ Suboptimalreset}
    Suboptimal1={Suboptimal1}
    Suboptimal={Suboptimal}
    Symptom={Symptom}
    Symptom1={Symptom1}
    Symptomreset={Symptomreset}
    exam1reset2={exam1reset2}
examreset2={examreset2}
Notperform2={Notperform2}
Reason2={Reason2}
orthopedic={orthopedic}
other4={other4}
Negativepositive01={Negativepositive01}
other5={other5}
Notperform3={Notperform3}
exam1reset3={exam1reset3}
examreset3={examreset3}
Reason3={Reason3}
Negativepositive02={Negativepositive02}
other6={other6}
exam1reset4={exam1reset4}
examreset4={examreset4}
Notperform4={Notperform4}
Reason4={Reason4}

other7={other7}
Notperform5={Notperform5}
exam1reset5={exam1reset5}
examreset5={examreset5}
Reason5={Reason5}
Negativepositive03={Negativepositive03}
other8={other8}
Notperform6={Notperform6}
exam1reset6={exam1reset6}
examreset6={examreset6}
Reason6={Reason6}
Negativepositive04={Negativepositive04}
other9={other9}
Notperform7={Notperform7}
exam1reset7={exam1reset7}
examreset7={examreset7}
Reason7={Reason7}
Negativepositive05={Negativepositive05}
other14={other14}
Notperform10={Notperform10}
exam1reset10={exam1reset10}
examreset10={examreset10}
Reason10={Reason10}
Negativepositive06={Negativepositive06}
other15={other15}
Notperform11={Notperform11}
exam1reset11={exam1reset11}
examreset11={examreset11}
Reason11={Reason11}
Negativepositive07={Negativepositive07}
Strengtht={Strengtht}
Strengtht1={Strengtht1}
Strengthtreset={Strengthtreset}
other11={other11}
exam1reset8={exam1reset8}
examreset8={examreset8}
Reason8={Reason8}
Notperform8={Notperform8}
Adddetails={Adddetails}
Adddetails1={Adddetails1}
Adddetailsreset={Adddetailsreset}
/> 