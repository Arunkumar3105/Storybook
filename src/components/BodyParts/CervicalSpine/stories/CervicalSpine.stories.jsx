import React from "react";

import CervicalSpine from "../CervicalSpine";
export default {
  title: "BodyParts/CervicalSpine",
  component: CervicalSpine,
};
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
// const InputArray=[{"value":"No"},{"value":"Yes"}]

const Scar = [
  { value: "No", name: "csscar", classname: "scar" },
  { value: "Yes", name: "csscar", classname: "scar" },
];
const Scarreset = [{ name: "csscar" }];
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
const Side = [
  { value: "Right", name: "side", classname: "scar" },
  { value: "Left", name: "side", classname: "scar" },
  { value: "Bilateral", name: "side", classname: "scar" },
];

const AppearanceOther = [{ name: "appearance", classname: "scar" }];
const StatusOther = [{ name: "status", classname: "scar" }];
const aspectOther = [{ name: "aspect", classname: "scar" }];
const Exam = [{ value: "Performed", name: "exam", classname: "scar" }];
const Nexam = [
  { value: "Normal", name: "nexam", classname: "scar" },
  { value: "Abnormal", name: "nexam", classname: "scar" },
];
const Alignment = [
  { value: "Normal", name: "alignment", classname: "scar" },
  { value: "Abnormal", name: "alignment", classname: "scar" },
];
const Tenderness = [
  { value: "No", name: "tenderness", classname: "scar" },
  { value: "Yes", name: "tenderness", classname: "scar" },
];
const Tstatus = [
  { value: "Diffuse", name: "tstatus", classname: "scar" },
  { value: "Mild", name: "tstatus", classname: "scar" },
  { value: "Moderate", name: "tstatus", classname: "scar" },
  { value: "Severe", name: "tstatus", classname: "scar" },
];
const TstatusOther = [{ name: "tstatus", classname: "scar" }];
const level = [
  { value: "C1" },
  { value: "C2" },
  { value: "C3" },
  { value: "C4" },
  { value: "C5" },
  { value: "C6" },
  { value: "C7" },
];
const other = [{ name: "csalllevel" }];
const Tposition = [
  { value: "Paracervical", name: "tposition", classname: "scar" },
  { value: "Trapezius", name: "tposition", classname: "scar" },
  { value: "Medial", name: "tposition", classname: "scar" },
  { value: "Occipital", name: "tposition", classname: "scar" },
  { value: "Scapular", name: "tposition", classname: "scar" },
];
const TpositionOther = [{ name: "tposition", classname: "scar" }];
const Tside = [
  { value: "Right", name: "tside", classname: "scar" },
  { value: "Left", name: "tside", classname: "scar" },
  { value: "Bilateral", name: "tside", classname: "scar" },
];
const Spasm = [
  { value: "No", name: "spasm", classname: "scar" },
  { value: "Yes", name: "spasm", classname: "scar" },
];
const Sstatus = [
  { value: "Diffuse", name: "sstatus", classname: "scar" },
  { value: "Mild", name: "sstatus", classname: "scar" },
  { value: "Moderate", name: "sstatus", classname: "scar" },
  { value: "Severe", name: "sstatus", classname: "scar" },
];
const SstatusOther = [{ name: "sstatus", classname: "scar" }];
const level1 = [
  { value: "C1" },
  { value: "C2" },
  { value: "C3" },
  { value: "C4" },
  { value: "C5" },
  { value: "C6" },
  { value: "C7" },
];
const other1 = [{ name: "csalllevel" }];
const Sposition = [
  { value: "Paracervical", name: "sposition", classname: "scar" },
  { value: "Trapezius", name: "sposition", classname: "scar" },
  { value: "Medial", name: "sposition", classname: "scar" },
  { value: "Occipital", name: "sposition", classname: "scar" },
  { value: "Scapular", name: "sposition", classname: "scar" },
];
const SpositionOther = [{ name: "sposition", classname: "scar" }];
const Sside = [
  { value: "Right", name: "sside", classname: "scar" },
  { value: "Left", name: "sside", classname: "scar" },
  { value: "Bilateral", name: "sside", classname: "scar" },
];
const Rom = [
  { value: "Normal", name: "rom", classname: "scar" },
  { value: "Abnormal", name: "rom", classname: "scar" },
];
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
const Appearancereset = [{ name: "appearance" }];
const Statusreset = [{ name: "status" }];
const Sidereset = [{ name: "side" }];
const aspectreset = [{ name: "aspect" }];

const Nexamreset = [{ name: "nexam" }];
const Alignmentreset = [{ name: "alignment" }];
const Tendernessreset = [{ name: "tenderness" }];
const Tstatusreset = [{ name: "tstatus" }];
const Tpositionreset = [{ name: "tposition" }];
const Tsidereset = [{ name: "tstatus" }];
const Spasmreset = [{ name: "spasm" }];
const Sstatusreset = [{ name: "sstatus" }];
const Spositionreset = [{ name: "sposition" }];
const Ssidereset = [{ name: "sside" }];
const Romreset = [{ name: "rom" }];
const Romselfreset = [{ name: "romself" }];
const Rompainreset = [{ name: "rompain" }];
// notperformed for rom
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
//suboptimal
const Suboptimal = [{ value: "No", name: "suboptimal", classname: "scar" }];
const Suboptimal1 = [{ value: "Yes", name: "suboptimal", classname: "scar" }];
const Suboptimalreset = [{ name: "suboptimal" }];
//Atrophy
const Atrophy = [{ value: "No", name: "atrophy", classname: "scar" }];
const Atrophy1 = [{ value: "Yes", name: "atrophy", classname: "scar" }];
const Atrophyreset = [{ name: "atrophy" }];
//symptommagnification
const Symptommagnification = [
  { value: "No", name: "symptom", classname: "scar" },
];
const Symptommagnification1 = [
  { value: "Yes", name: "symptom", classname: "scar" },
];
const Symptomreset = [{ name: "symptom" }];
//
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
const orthopedic = [
  { value: "Performed", name: "orthopedic", classname: "scar" },
];
//
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
const Negativepositive = [
  { value: "Negative", name: "hoffman", classname: "scar" },
];
const Negativepositive1 = [
  { value: "Positive", name: "hoffman", classname: "scar" },
];
//hoffman reason for not performed
const other5 = [{ classname: "hoffmanreason" }];
const Reason3 = [
  { value: "surgery", name: "hoffmanreason", classname: "scar" },
  { value: "Complaint of pain", name: "hoffmanreason", classname: "exam1" },
  { value: "Non-cooperation", name: "hoffmanreason", classname: "exam1" },
  { value: "Not wish to perform", name: "hoffmanreason", classname: "exam1" },
  { value: "Brace", name: "hoffmanreason", classname: "scar" },
];
const Notperform3 = [
  { value: "Not-Performed", name: "hoffman", classname: "exam" },
];
const examreset3 = [{ name: "hoffmanreason" }];
const exam1reset3 = [{ name: "hoffman" }];
//spurling
const other6 = [{ classname: "spurlingreason" }];
const Reason4 = [
  { value: "surgery", name: "spurlingreason", classname: "scar" },
  { value: "Complaint of pain", name: "spurlingreason", classname: "exam1" },
  { value: "Non-cooperation", name: "spurlingreason", classname: "exam1" },
  { value: "Not wish to perform", name: "spurlingreason", classname: "exam1" },
  { value: "Brace", name: "spurlingreason", classname: "scar" },
];
const Notperform4 = [
  { value: "Not-Performed", name: "spurling", classname: "exam" },
];
const examreset4 = [{ name: "spurlingreason" }];
const exam1reset4 = [{ name: "spurling" }];
const Negativepositive01 = [
  { value: "Negative", name: "spurling", classname: "scar" },
];
const Negativepositive11 = [
  { value: "Positive", name: "spurling", classname: "scar" },
];
//compression test
const other7 = [{ classname: "compressionreason" }];
const Reason5 = [
  { value: "surgery", name: "compressionreason", classname: "scar" },
  { value: "Complaint of pain", name: "compressionreason", classname: "exam1" },
  { value: "Non-cooperation", name: "compressionreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "compressionreasonn",
    classname: "exam1",
  },
  { value: "Brace", name: "compressionreason", classname: "scar" },
];
const Notperform5 = [
  { value: "Not-Performed", name: "compression", classname: "exam" },
];
const examreset5 = [{ name: "compressionreason" }];
const exam1reset5 = [{ name: "compression" }];
const Negativepositive02 = [
  { value: "Negative", name: "compression", classname: "scar" },
];
const Negativepositive12 = [
  { value: "Positive", name: "compression", classname: "scar" },
];

const Neurological = [
  { value: "Performed", name: "neuroexam", classname: "scar" },
];
//not performed for neuroexam
const other8 = [{ classname: "neuroreason" }];
const Reason6 = [
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
const Notperform6 = [
  { value: "Not-Performed", name: "neuroexam", classname: "exam" },
];
const examreset6 = [{ name: "neuroreason" }];
const exam1reset6 = [{ name: "neuroexam" }];
//
const DecreasedButton = [
  { value: "5/5", name: "decreased", classname: "scar" },
  { value: "Decreased", name: "decreased", classname: "scar" },
];
const strength = [
  { value: "Biceps", classname: "scar" },
  { value: "Triceps", classname: "scar" },
  { value: "WristExtension", classname: "exam" },
  { value: "Grip", classname: "scar" },
  { value: "Interossei", classname: "scar" },
  { value: "Triceps", classname: "scar" },
];
const Sidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const Sidesreset = [{ value: "Reset", name: "Sidevalue", classname: "scar" }];
const Sidesv = [{ name: "Side" }];
const other9 = [{ classname: "Sidevalue" }];
const Decreasedreset = [
  { value: "Reset", name: "Sidevalue", classname: "scar" },
];
//
// const DecreasedButton1 = [
//   { value: "5/5", name: "decreased", classname: "scar" },
// ];
// const strength1 = [
//   { value: "Biceps", classname: "scar" },
//   { value: "Triceps", classname: "scar" },
//   { value: "WristExtension", classname: "exam" },
//   { value: "Grip", classname: "scar" },
//   { value: "Interossei", classname: "scar" },
//   { value: "Triceps", classname: "scar" },
// ];
// const Sidevalues1 = [
//   { value: "Right", classname: "scar", name: "Sidevalue1" },
//   { value: "Left", classname: "scar", name: "Sidevalue1" },
//   { value: "Bilateral", classname: "scar", name: "Sidevalue1" },
// ];
// const Sidesreset1 = [{ value: "Reset", name: "Sidevalue1", classname: "scar" }];
// const Sidesv1 = [{ name: "Side" }];
// const other10 = [{ classname: "Sidevalue1" }];
// const Decreasedreset1 = [
//   { value: "Reset", name: "Sidevalue1", classname: "scar" },
// ];
//not performed for muscle strength
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
//
const sensation = [
  { value: "Intact", classname: "scar", name: "sensation" },
  { value: "Decreased", classname: "scar", name: "sensation" },
];
//notperformed for sensation
const other12 = [{ classname: "sensationreason" }];
const Reason8 = [
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
const Notperform8 = [
  { value: "Not-Performed", name: "sensation", classname: "exam" },
];
const examreset8 = [{ name: "sensationreason" }];
const exam1reset8 = [{ name: "sensation" }];
//reflexes
const Reflexes = [
  { value: "1+", classname: "scar", name: "reflexes" },
  { value: "2+", classname: "scar", name: "reflexes" },
  { value: "0", classname: "scar", name: "reflexes" },
];
const resetreflex = [{ name: "reflexes" }];
//adddetails
const Adddetails = [
  { value: "No", classname: "scar", name: "adddetails" },
  { value: "Yes", classname: "scar", name: "adddetails" },
];
const resetadd = [{ name: "adddetails" }];
const Reflexonevalue = [
  { value: "Equal", classname: "scar", name: "Refone" },
  { value: "Symmetrical", classname: "scar", name: "Refone" },
];
const Reflex = [
  { value: "1+", classname: "scar", name: "Zero" },
  { value: "2+", classname: "scar", name: "Zero" },
];
const Reflex1 = [{ name: "Zero" }];
const reflexSvalue = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const ReflexSreset = [{ name: "Sidevalue" }];
const Reflexside = [{ name: "Side" }];
const Zeroreset = [{ name: "Zero" }];
const Sidevalues1 = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const Sidereset1 = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const Sidesv1 = [{ name: "Side" }];

export const Cervicalspine = () => (
  <CervicalSpine
    Scar={Scar}
    Appearance={Appearance}
    Status={Status}
    Side={Side}
    aspect={aspect}
    aspectOther={aspectOther}
    AppearanceOther={AppearanceOther}
    StatusOther={StatusOther}
    Exam={Exam}
    Nexam={Nexam}
    Alignment={Alignment}
    Tenderness={Tenderness}
    Tstatus={Tstatus}
    TstatusOther={TstatusOther}
    level={level}
    other={other}
    Tposition={Tposition}
    TpositionOther={TpositionOther}
    Tside={Tside}
    Spasm={Spasm}
    Sstatus={Sstatus}
    SstatusOther={SstatusOther}
    level1={level1}
    other1={other1}
    Sposition={Sposition}
    SpositionOther={SpositionOther}
    Sside={Sside}
    Rom={Rom}
    RomSelf={RomSelf}
    Rompain={Rompain}
    Nexamreset={Nexamreset}
    Alignmentreset={Alignmentreset}
    Tendernessreset={Tendernessreset}
    Tstatusreset={Tstatusreset}
    Tpositionreset={Tpositionreset}
    Tsidereset={Tsidereset}
    Spasmreset={Spasmreset}
    Sstatusreset={Sstatusreset}
    Spositionreset={Spositionreset}
    Ssidereset={Ssidereset}
    Romreset={Romreset}
    Romselfreset={Romselfreset}
    Rompainreset={Rompainreset}
    Scarreset={Scarreset}
    Appearancereset={Appearancereset}
    Statusreset={Statusreset}
    aspectreset={aspectreset}
    Sidereset={Sidereset}
    other2={other2}
    Reason={Reason}
    examreset={examreset}
    exam1reset={exam1reset}
    Suboptimal={Suboptimal}
    Suboptimal1={Suboptimal1}
    Suboptimalreset={Suboptimalreset}
    Atrophy={Atrophy}
    Atrophy1={Atrophy1}
    Atrophyreset={Atrophyreset}
    Symptommagnification={Symptommagnification}
    Symptommagnification1={Symptommagnification1}
    Symptomreset={Symptomreset}
    other3={other3}
    Reason1={Reason1}
    examreset1={examreset1}
    exam1reset1={exam1reset1}
    Notperform={Notperform}
    Notperform1={Notperform1}
    orthopedic={orthopedic}
    other4={other4}
    Reason2={Reason2}
    examreset2={examreset2}
    exam1reset2={exam1reset2}
    Notperform2={Notperform2}
    Negativepositive={Negativepositive}
    Negativepositive1={Negativepositive1}
    other5={other5}
    Reason3={Reason3}
    Notperform3={Notperform3}
    exam1reset3={exam1reset3}
    examreset3={examreset3}
    other6={other6}
    Reason4={Reason4}
    Notperform4={Notperform4}
    examreset4={examreset4}
    exam1reset4={exam1reset4}
    Negativepositive01={Negativepositive01}
    Negativepositive11={Negativepositive11}
    other7={other7}
    Reason5={Reason5}
    Notperform5={Notperform5}
    examreset5={examreset5}
    exam1reset5={exam1reset5}
    Negativepositive02={Negativepositive02}
    Negativepositive12={Negativepositive12}
    Neurological={Neurological}
    other8={other8}
    Notperform6={Notperform6}
    exam1reset6={exam1reset6}
    examreset6={examreset6}
    Reason6={Reason6}
    Decreasedreset={Decreasedreset}
    other9={other9}
    Sidesv={Sidesv}
    Sidesreset={Sidesreset}
    Sidevalues={Sidevalues}
    strength={strength}
    DecreasedButton={DecreasedButton}
    // Decreasedreset1={Decreasedreset1}
    // other10={other10}
    // Sidesv1={Sidesv1}
    // Sidesreset1={Sidesreset1}
    // Sidevalues1={Sidevalues1}
    // strength1={strength1}
    // DecreasedButton1={DecreasedButton1}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    Notperform7={Notperform7}
    Reason7={Reason7}
    other11={other11}
    sensation={sensation}
    other12={other12}
    Reason8={Reason8}
    Notperform8={Notperform8}
    examreset8={examreset8}
    exam1reset8={exam1reset8}
    Reflexes={Reflexes}
    resetreflex={resetreflex}
    Adddetails={Adddetails}
    resetadd={resetadd}
    Reflexside={Reflexside}
    ReflexSreset={ReflexSreset}
    reflexSvalue={reflexSvalue}
    Reflex1={Reflex1}
    Reflex={Reflex}
    Reflexonevalue={Reflexonevalue}
    Zeroreset={Zeroreset}
    Sidesv1={Sidesv1}
    Sidereset1={Sidereset1}
    Sidevalues1={Sidevalues1}
  />
);
