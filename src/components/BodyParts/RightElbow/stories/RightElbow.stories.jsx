import RightElbow from "../RightElbow";

export default {
  title: "BodyParts/RightElbow",
  component: RightElbow,
};
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
  { value: "Epicondyle joint", name: "tposition", classname: "exam1" },
  { value: "Olecranon", name: "tposition", classname: "scar" },
  { value: "Radial Head", name: "tposition", classname: "exam1" },
  { value: "Biceps", name: "tposition", classname: "scar" },
  { value: "Triceps", name: "tposition", classname: "scar" },
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
  { value: "Right-Rotation", name: "rompain", classname: "exam" },
  { value: "Left-Rotation", name: "rompain", classname: "exam" },
  { value: "Right-Bending", name: "rompain", classname: "exam" },
  { value: "Left-Bending", name: "rompain", classname: "exam" },
];
const Romselfreset = [{ name: "romself" }];
const Rompainreset = [{ name: "rompain" }];
const Suboptimal = [{ value: "No", name: "valgus", classname: "scar" }];
const Suboptimal1 = [{ value: "Yes", name: "valgus", classname: "scar" }];
const Suboptimalreset = [{ name: "valgus" }];
const PainRE=[{ value: "No", name: "resistedextension", classname: "scar" },
{ value: "Yes", name: "resistedextension", classname: "scar" }]
const PainREreset=[{name:"resistedextension"}]
const PainRF=[{ value: "No", name: "resistedflexion", classname: "scar" },
{ value: "Yes", name: "resistedflexion", classname: "scar" }]
const PainRFreset=[{name:"resistedflexion"}]
const Suboptimal01 = [{ value: "No", name: "varus", classname: "scar" }];
const Suboptimal11 = [{ value: "Yes", name: "varus", classname: "scar" }];
const Suboptimalreset1 = [{ name: "suboptimal" }];
const Symptom = [{ value: "No", name: "varus", classname: "scar" }];
const Symptom1 = [{ value: "Yes", name: "varus", classname: "scar" }];
const Symptomreset = [{ name: "suboptimal" }];
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
const Negativepositive01 = [
  { value: "Negative", name: "ulnarnerve", classname: "scar" },
  { value: "Positive", name: "ulnarnerve", classname: "scar" },
];
//not performed for ulnar nerve
const other5 = [{ classname: "ulnarnerve" }];
const Reason3 = [
  { value: "surgery", name: "ulnarnervereason", classname: "scar" },
  { value: "Complaint of pain", name: "ulnarnervereason", classname: "exam1" },
  { value: "Non-cooperation", name: "ulnarnervereason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "ulnarnervereason",
    classname: "exam1",
  },
  { value: "Brace", name: "ulnarnervereason", classname: "scar" },
];
const Notperform3 = [
  { value: "Not-Performed", name: "ulnarnerve", classname: "exam" },
];
const examreset3 = [{ name: "ulnarnervereason" }];
const exam1reset3 = [{ name: "ulnarnerve" }];
const DecreasedButton = [
  { value: "5/5", name: "decreased", classname: "scar" },
  { value: "Decreased", name: "decreased", classname: "scar" },
];
const strength = [
  { value: "Biceps", classname: "scar" },
  { value: "Triceps", classname: "scar" },
 
];
const Sidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const Sidereset = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const Sidesv = [{ name: "Side" }];
const other9 = [{ classname: "csalllevel" }];
const Decreasedreset = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const other11 = [{ classname: "neuroreason" }];
const Reason7 = [
  { value: "surgery", name: "neuroreason", classname: "scar" },
  { value: "Complaint of pain", name: "neuroreason", classname: "exam1" },
  { value: "Non-cooperation", name: "neuroreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "neuroreason",
    classname: "exam1",
  },
  { value: "Brace", name: "neuroreason", classname: "scar" },
];
const Notperform7 = [
  { value: "Not-Performed", name: "neuroexam", classname: "exam" },
];
const examreset7 = [{ name: "neuroreason" }];
const exam1reset7 = [{ name: "neuroexam" }];
const Adddetails = [
  { value: "No", classname: "scar", name: "adddetails" },
  { value: "Yes", classname: "scar", name: "adddetails" },
];
const resetadd = [{ name: "adddetails" }];

export const Rightelbow = () => (
  <RightElbow
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
    PainRE={PainRE}
    PainREreset={PainREreset}
    PainRFreset={PainRFreset}
    PainRF={PainRF}
    Suboptimal01={Suboptimal01}
    Suboptimal11={Suboptimal11}
    Suboptimalreset1={Suboptimalreset1}
    Symptom={Symptom}
    Symptom1={Symptom1}
    Symptomreset={Symptomreset}
    exam1reset2={exam1reset2}
    examreset2={examreset2}
    Notperform2={Notperform2}
    Reason2={Reason2}
    other4={other4}
    orthopedic={orthopedic}
    
    Negativepositive01={ Negativepositive01}
    exam1reset3={ exam1reset3}
    examreset3={examreset3}
    Notperform3={Notperform3}
    Reason3={Reason3}
    other5={other5}
    exam1reset7={ exam1reset7}
    examreset7={examreset7}
    Notperform7={Notperform7}
    Reason7={Reason7}
    other11={other11}
    Decreasedreset={Decreasedreset}
    other9={other9}
    Sidesv={Sidesv}
    Sidereset={Sidereset}
    DecreasedButton={DecreasedButton}
    strength={strength}
    Sidevalues={Sidevalues}
    Adddetails={Adddetails}
    resetadd={resetadd}
    Exam={Exam}
    Nexam={Nexam}
    examreset1={examreset1}
    other3={other3}
    Reason1={Reason1}
    exam1reset1={exam1reset1}
    Notperform1={Notperform1}
    Nexamreset={Nexamreset}

  />
);
