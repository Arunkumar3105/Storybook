import RightHip from "../RightHip";
export default{
    title:"BodyParts/RightHip",
    component:RightHip
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
    { value: "ASIS", name: "tposition", classname: "scar" },
    { value: "Anterior Groin", name: "tposition", classname: "exam1" },
    { value: "Greater trochanteric joint", name: "tposition", classname: "exam1" },
    { value: "Flexors", name: "tposition", classname: "scar" },
    { value: "Gluteal", name: "tposition", classname: "scar" },
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
    { value: "Abduction", name: "rompain", classname: "scar" },
    { value: "Adduction", name: "rompain", classname: "scar" },
    { value: "External Rotation", name: "rompain", classname: "exam1" },
    { value: "Internal Rotation", name: "rompain", classname: "exam1" },
  ];
  const Romselfreset = [{ name: "romself" }];
  const Rompainreset = [{ name: "rompain" }];
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
  //Faber
  const Negativepositive01 = [
    { value: "Negative", name: "Faber", classname: "scar" },
    { value: "Positive", name: "Faber", classname: "scar" },
  ];
  //not performed for faber
  const other5 = [{ classname: "Faberreason" }];
  const Reason3 = [
    { value: "surgery", name: "Faberreason", classname: "scar" },
    { value: "Complaint of pain", name: "Faberreason", classname: "exam1" },
    { value: "Non-cooperation", name: "Faberreason", classname: "exam1" },
    {
      value: "Not wish to perform",
      name: "Faberreason",
      classname: "exam1",
    },
    { value: "Brace", name: "Faberreason", classname: "scar" },
  ];
  const Notperform3 = [
    { value: "Not-Performed", name: "Faber", classname: "exam" },
  ];
  const examreset3 = [{ name: "Faberreason" }];
  const exam1reset3 = [{ name: "Faber" }];
  //trendelenburg
  const Negativepositive02 = [
    { value: "Negative", name: "trendelenburg", classname: "scar" },
    { value: "Positive", name: "trendelenburg", classname: "scar" },
  ];
  const other6= [{ classname: "trendelenburgreason" }];
  const Reason4 = [
    { value: "surgery", name: "trendelenburgreason", classname: "scar" },
    { value: "Complaint of pain", name: "trendelenburgreason", classname: "exam1" },
    { value: "Non-cooperation", name: "trendelenburgreason", classname: "exam1" },
    {
      value: "Not wish to perform",
      name: "trendelenburgreason",
      classname: "exam1",
    },
    { value: "Brace", name: "trendelenburgreason", classname: "scar" },
  ];
  const Notperform4 = [
    { value: "Not-Performed", name: "trendelenburg", classname: "exam" },
  ];
  const examreset4 = [{ name: "trendelenburgreason" }];
  const exam1reset4 = [{ name: "trendelenburg" }];

  const Adddetails = [{ value: "No", name: "Add", classname: "scar" }];
const Adddetails1 = [{ value: "Yes", name: "Add", classname: "scar" }];
const Adddetailsreset = [{ name: "Add" }];
export const Righthip = () =><RightHip
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
Adddetails={Adddetails}
Adddetails1={Adddetails1}
Adddetailsreset={Adddetailsreset}/>