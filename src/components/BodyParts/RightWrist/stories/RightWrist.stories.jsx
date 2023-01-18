import React from "react"
import RightWrist from "../RightWrist";

export default {
  title: "BodyParts/RightWrist",
  component: RightWrist,
}

const aspect = [
  {
    value: "Anterior",
    name: "aspect",
    classname: "scar",
  },
  {
    value: "Posterior",
    name: "aspect",
    classname: "scar",
  },
  {
    value: "Medial",
    name: "aspect",
    classname: "scar",
  },
  {
    value: "Lateral",
    name: "aspect",
    classname: "scar",
  },
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
  { value: "First Ext Compartment", name: "tposition", classname: "exam1" },
  { value: "Distal Radius Joint", name: "tposition", classname: "exam1" },
  { value: "Distal Radius", name: "tposition", classname: "exam1" },
  { value: "Ulnar side", name: "tposition", classname: "scar" },
  { value: "DRUJ", name: "tposition", classname: "scar" },
  { value: "Transverse Carpal Ligament", name: "tposition", classname: "exam1" },
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
//rom reason
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
  { value: "Dorsiflexion", name: "rompain", classname: "scar" },
  { value: "Volar Flexion", name: "rompain", classname: "scar" },
  { value: "Ulnar Deviation", name: "rompain", classname: "exam" },
  { value: "Radial Deviation", name: "rompain", classname: "exam" },
  { value: "Pronation", name: "rompain", classname: "exam" },
  { value: "Supination", name: "rompain", classname: "exam" },
];
const Romselfreset = [{ name: "romself" }];
const Rompainreset = [{ name: "rompain" }];
const Suboptimal = [{ value: "No", name: "instability", classname: "scar" }];
const Suboptimal1 = [{ value: "Yes", name: "instability", classname: "scar" }];
const Suboptimalreset = [{ name: "instability" }];
const Suboptimal01 = [{ value: "No", name: "pooreffort", classname: "scar" }];
const Suboptimal11 = [{ value: "Yes", name: "pooreffort", classname: "scar" }];
const Suboptimalreset1 = [{ name: "pooreffort" }];
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
const Negativepositive01 = [
  { value: "Negative", name: "tinel", classname: "scar" },
  { value: "Positive", name: "tinel", classname: "scar" },
];
//not performed for ulnar nerve
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
//phalen
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
//Finkelstein test
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
//watson test
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
//Shuck test
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
//strength
const DecreasedButton = [
  { value: "5/5", name: "strength", classname: "scar" },
  { value: "Decreased", name: "strength", classname: "scar" },
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
const other10 = [{ classname: "csalllevel" }];
const Decreasedreset = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
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
//sensation
const DecreasedButton1 = [
  { value: "Intact", name: "sensation", classname: "scar" },
  { value: "Decreased", name: "sensation", classname: "scar" },
];
const strength1 = [
  { value: "Median nerve", classname: "exam1" },
  { value: "Ulnar nerve", classname: "exam1" },
  { value: "Radial nerve", classname: "exam1" },
 
];
const Sidevalues1 = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const Sidereset1 = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const Sidesv1 = [{ name: "Side" }];
const other12 = [{ classname: "csalllevel" }];
const Decreasedreset1 = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const other13 = [{ classname: "sensationreason" }];
const Reason9 = [
  { value: "surgery", name: "sensationreason", classname: "scar" },
  { value: "Complaint of pain", name: "sensationreason", classname: "exam1" },
  { value: "Non-cooperation", name: "sensationreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "sensationreason",
    classname: "exam1",
  },
  { value: "Brace", name: "sensationreason", classname: "scar" },
];
const Notperform9 = [
  { value: "Not-Performed", name: "sensation", classname: "exam" },
];
const examreset9 = [{ name: "sensationreason" }];
const exam1reset9 = [{ name: "sensation" }];
//Add details
const Adddetails = [
  { value: "No", classname: "scar", name: "adddetails" },
  { value: "Yes", classname: "scar", name: "adddetails" },
];
const resetadd = [{ name: "adddetails" }];
export const Rightwrist = () => <RightWrist aspect={aspect} Scar={Scar} Appearance={Appearance} Status={Status} AppearanceOther={AppearanceOther} Appearancereset={Appearancereset} StatusOther={StatusOther} Statusreset={Statusreset} Scarreset={Scarreset} aspectOther={aspectOther} aspectreset={aspectreset} Exam={Exam} Nexam={Nexam} other3={other3} Reason1={Reason1} Notperform1={Notperform1} examreset1={examreset1} exam1reset1={exam1reset1} Nexamreset={Nexamreset} FyesOther={FyesOther}
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
Tposition={Tposition}
TpositionOther={TpositionOther}
Tpositionreset={Tpositionreset}
Taspect={Taspect}
TaspectOther={TaspectOther}
Taspectreset={Taspectreset} 
Rom={Rom}
other2={other2}
Reason={Reason}
examreset={examreset}
exam1reset={exam1reset}
Notperform={Notperform}
RomSelf={RomSelf}
Rompain={Rompain}
Rompainreset={Rompainreset}
Romselfreset={Romselfreset}
Suboptimal={Suboptimal}
Suboptimal1={Suboptimal1}
Suboptimalreset={Suboptimalreset}
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
resetadd={resetadd}
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
DecreasedButton={DecreasedButton}
strength={strength}
Sidevalues={Sidevalues}
Sidereset={Sidereset}
Sidesv={Sidesv}
other10={other10}
Decreasedreset={Decreasedreset}
other11={other11}
Reason8={Reason8}
Notperform8={Notperform8}
examreset8={examreset8}
exam1reset8={exam1reset8}
DecreasedButton1={DecreasedButton1}
strength1={strength1}
Sidevalues1={Sidevalues1}
Sidereset1={Sidereset1}
Sidesv1={Sidesv1}
other12={other12}
Decreasedreset1={Decreasedreset1}
other13={other13}
Reason9={Reason9}
Notperform9={Notperform9}
examreset9={examreset9}
exam1reset9={exam1reset9}/>