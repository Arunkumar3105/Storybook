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

const scar = [
  { value: "No", name: "csscar", classname: "scar" },
  { value: "Yes", name: "csscar", classname: "scar" },
];
const scarreset = [{ name: "csscar" }];
const appearance = [
  { value: "Scar", name: "appearance", classname: "scar" },
  { value: "Surgical scar", name: "appearance", classname: "exam" },
  { value: "Incision", name: "appearance", classname: "scar" },
  { value: "Portal", name: "appearance", classname: "scar" },
  { value: "Laceration", name: "appearance", classname: "scar" },
];
const status = [
  { value: "Well-healed", name: "status", classname: "exam" },
  { value: "Healed", name: "status", classname: "scar" },
  { value: "Unhealed", name: "status", classname: "scar" },
  { value: "Not-related", name: "status", classname: "scar" },
];
const side = [
  { value: "Right", name: "side", classname: "scar" },
  { value: "Left", name: "side", classname: "scar" },
  { value: "Bilateral", name: "side", classname: "scar" },
];

const appearanceother = [
  { name: "appearance", classname: "scar", txtname: "Appearancetxt" },
];
const statusother = [
  { name: "status", classname: "scar", txtname: "statustxt" },
];
const aspectother = [
  { name: "aspect", classname: "scar", txtname: "Aspecttxt" },
];
const exam = [{ value: "Performed", name: "exam", classname: "scar" }];
const nexam = [
  { value: "Normal", name: "nexam", classname: "scar" },
  { value: "Abnormal", name: "nexam", classname: "scar" },
];
const nexampainscale = [{ name: "nexam" }];
const alignment = [
  { value: "Normal", name: "alignment", classname: "scar" },
  { value: "Abnormal", name: "alignment", classname: "scar" },
];
const tenderness = [
  { value: "No", name: "tenderness", classname: "scar" },
  { value: "Yes", name: "tenderness", classname: "scar" },
];
const tstatus = [
  { value: "Diffuse", name: "tstatus", classname: "scar" },
  { value: "Mild", name: "tstatus", classname: "scar" },
  { value: "Moderate", name: "tstatus", classname: "scar" },
  { value: "Severe", name: "tstatus", classname: "scar" },
];
const tstatusother = [
  { name: "tstatus", classname: "scar", txtname: "Tstaustxt" },
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
const other = [{ name: "csalllevel", txtname: "CSleveltxt" }];
const values2 = [{ value: "C1-C7", name: "csalllevel" }];
const resetvalue2 = [{ name: "csalllevel" }];
const individualvalue2 = [
  { name: "csalllevel", value: "Individual Dermatome" },
];
const tposition = [
  { value: "Paracervical", name: "tposition", classname: "scar" },
  { value: "Trapezius", name: "tposition", classname: "scar" },
  { value: "Medial", name: "tposition", classname: "scar" },
  { value: "Occipital", name: "tposition", classname: "scar" },
  { value: "Scapular", name: "tposition", classname: "scar" },
];
const tpositionother = [
  { name: "tposition", classname: "scar", txtname: "Tpositiontxt" },
];
const tside = [
  { value: "Right", name: "tside", classname: "scar" },
  { value: "Left", name: "tside", classname: "scar" },
  { value: "Bilateral", name: "tside", classname: "scar" },
];
const spasm = [
  { value: "No", name: "spasm", classname: "scar" },
  { value: "Yes", name: "spasm", classname: "scar" },
];
const sstatus = [
  { value: "Diffuse", name: "sstatus", classname: "scar" },
  { value: "Mild", name: "sstatus", classname: "scar" },
  { value: "Moderate", name: "sstatus", classname: "scar" },
  { value: "Severe", name: "sstatus", classname: "scar" },
];
const sstatusother = [
  { name: "sstatus", classname: "scar", txtname: "Sstaustxt" },
];
const level1 = [
  { value: "C1" },
  { value: "C2" },
  { value: "C3" },
  { value: "C4" },
  { value: "C5" },
  { value: "C6" },
  { value: "C7" },
];
const other1 = [{ name: "csalllevel", txtname: "Csleveltxt" }];
const values1 = [{ value: "C1-C7", name: "csalllevel" }];
const resetvalues1 = [{ name: "csalllevel" }];
const individualvalues = [{ value: "Individual Dermatome" }];
const sposition = [
  { value: "Paracervical", name: "sposition", classname: "scar" },
  { value: "Trapezius", name: "sposition", classname: "scar" },
  { value: "Medial", name: "sposition", classname: "scar" },
  { value: "Occipital", name: "sposition", classname: "scar" },
  { value: "Scapular", name: "sposition", classname: "scar" },
];
const spositionother = [
  { name: "sposition", classname: "scar", txtname: "Spositiontxt" },
];
const sside = [
  { value: "Right", name: "sside", classname: "scar" },
  { value: "Left", name: "sside", classname: "scar" },
  { value: "Bilateral", name: "sside", classname: "scar" },
];
const rom = [
  { value: "Normal", name: "rom", classname: "scar" },
  { value: "Abnormal", name: "rom", classname: "scar" },
];
const romself = [
  { value: "No", name: "romself", classname: "scar" },
  { value: "Yes", name: "romself", classname: "scar" },
];
const rompain = [
  { value: "Flexion", name: "rompain", classname: "scar" },
  { value: "Extension", name: "rompain", classname: "scar" },
  { value: "Right-Rotation", name: "rompain", classname: "exam" },
  { value: "Left-Rotation", name: "rompain", classname: "exam" },
  { value: "Right-Bending", name: "rompain", classname: "exam" },
  { value: "Left-Bending", name: "rompain", classname: "exam" },
];
const appearancereset = [{ name: "appearance" }];
const statusreset = [{ name: "status" }];
const sidereset = [{ name: "side" }];
const aspectreset = [{ name: "aspect" }];

const nexamreset = [{ name: "nexam" }];
const alignmentreset = [{ name: "alignment" }];
const tendernessreset = [{ name: "tenderness" }];
const tstatusreset = [{ name: "tstatus" }];
const tpositionreset = [{ name: "tposition" }];
const tsidereset = [{ name: "tstatus" }];
const spasmreset = [{ name: "spasm" }];
const sstatusreset = [{ name: "sstatus" }];
const spositionreset = [{ name: "sposition" }];
const ssidereset = [{ name: "sside" }];
const romreset = [{ name: "rom" }];
const romselfreset = [{ name: "romself" }];
const rompainreset = [{ name: "rompain" }];
// notperformed for rom
const other2 = [{ classname: "romreason", txtname: "romreasontxt" }];
const reason = [
  { value: "surgery", name: "romreason", classname: "scar" },
  { value: "Complaint of pain", name: "romreason", classname: "exam1" },
  { value: "Non-cooperation", name: "romreason", classname: "exam1" },
  { value: "Not wish to perform", name: "romreason", classname: "exam1" },
  { value: "Brace", name: "examreason", classname: "scar" },
];
const examreset = [{ name: "romreason" }];
const exam1reset = [{ name: "rom" }];
const notperform = [{ value: "Not-Performed", name: "rom", classname: "exam" }];
//suboptimal
const suboptimal = [{ value: "No", name: "suboptimal", classname: "scar" }];
const suboptimal1 = [
  {
    value: "Yes",
    name: "suboptimal",
    classname: "scar",
    txtname: "Soptimaltxt",
  },
];
const suboptimalreset = [{ name: "suboptimal" }];
//Atrophy
const atrophy = [{ value: "No", name: "atrophy", classname: "scar" }];
const atrophy1 = [
  { value: "Yes", name: "atrophy", classname: "scar", txtname: "Atrophytxt" },
];
const atrophyreset = [{ name: "atrophy" }];
//Echymosis Pain Scale
const echymosis = [{ value: "No", name: "echymosispscale", classname: "scar" }];
const echymosis1 = [
  {
    value: "Yes",
    name: "echymosispscale",
    classname: "scar",
    txtname: "echymosispscaletxt",
  },
];
const echymosisreset = [{ name: "echymosispscale" }];
//shoulder compression
const shoulder = [{ value: "No", name: "shoulder", classname: "scar" }];
const shoulder1 = [
  { value: "Yes", name: "shoulder", classname: "scar", txtname: "shouldertxt" },
];
const shoulderreset = [{ name: "shoulder" }];
//symptommagnification
const symptommagnification = [
  { value: "No", name: "symptom", classname: "scar" },
];
const symptommagnification1 = [
  { value: "Yes", name: "symptom", classname: "scar", txtname: "symptomtxt" },
];
const symptomreset = [{ name: "symptom" }];
//
const other3 = [{ classname: "examreason", txtname: "examreasontxt" }];
const reason1 = [
  { value: "surgery", name: "examreason", classname: "scar" },
  { value: "Complaint of pain", name: "examreason", classname: "exam1" },
  { value: "Non-cooperation", name: "examreason", classname: "exam1" },
  { value: "Not wish to perform", name: "examreason", classname: "exam1" },
  { value: "Brace", name: "examreason", classname: "scar" },
];
const notperform1 = [
  { value: "Not-Performed", name: "exam", classname: "exam" },
];
const examreset1 = [{ name: "examreason" }];
const exam1reset1 = [{ name: "exam" }];
const orthopedic = [
  { value: "Performed", name: "orthopedic", classname: "scar" },
];
//
const other4 = [{ classname: "orthopedic", txtname: "orthopedictxt" }];
const reason2 = [
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
const notperform2 = [
  { value: "Not-Performed", name: "orthopedic", classname: "exam" },
];
const examreset2 = [{ name: "orthopedireason" }];
const exam1reset2 = [{ name: "orthopedic" }];
const negativepositive = [
  { value: "Negative", name: "hoffman", classname: "scar" },
];
const negativepositive1 = [
  { value: "Positive", name: "hoffman", classname: "scar" },
];
//hoffman reason for not performed
const other5 = [{ classname: "hoffmanreason", txtname: "hoffmanreasontxt" }];
const reason3 = [
  { value: "surgery", name: "hoffmanreason", classname: "scar" },
  { value: "Complaint of pain", name: "hoffmanreason", classname: "exam1" },
  { value: "Non-cooperation", name: "hoffmanreason", classname: "exam1" },
  { value: "Not wish to perform", name: "hoffmanreason", classname: "exam1" },
  { value: "Brace", name: "hoffmanreason", classname: "scar" },
];
const notperform3 = [
  { value: "Not-Performed", name: "hoffman", classname: "exam" },
];
const examreset3 = [{ name: "hoffmanreason" }];
const exam1reset3 = [{ name: "hoffman" }];
//spurling
const other6 = [{ classname: "spurlingreason", txtname: "spurlingreasontxt" }];
const reason4 = [
  { value: "surgery", name: "spurlingreason", classname: "scar" },
  { value: "Complaint of pain", name: "spurlingreason", classname: "exam1" },
  { value: "Non-cooperation", name: "spurlingreason", classname: "exam1" },
  { value: "Not wish to perform", name: "spurlingreason", classname: "exam1" },
  { value: "Brace", name: "spurlingreason", classname: "scar" },
];
const notperform4 = [
  { value: "Not-Performed", name: "spurling", classname: "exam" },
];
const examreset4 = [{ name: "spurlingreason" }];
const exam1reset4 = [{ name: "spurling" }];
const negativepositive01 = [
  { value: "Negative", name: "spurling", classname: "scar" },
];
const negativepositive11 = [
  { value: "Positive", name: "spurling", classname: "scar" },
];
//compression test
const other7 = [
  { classname: "compressionreason", txtname: "compressionreasontxt" },
];
const reason5 = [
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
const notperform5 = [
  { value: "Not-Performed", name: "compression", classname: "exam" },
];
const examreset5 = [{ name: "compressionreason" }];
const exam1reset5 = [{ name: "compression" }];
const negativepositive02 = [
  { value: "Negative", name: "compression", classname: "scar" },
];
const negativepositive12 = [
  { value: "Positive", name: "compression", classname: "scar" },
];

const neurological = [
  { value: "Performed", name: "neuroexam", classname: "scar" },
];
//not performed for neuroexam
const other8 = [{ classname: "neuroreason", txtname: "neuroreasontxt" }];
const reason6 = [
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
const notperform6 = [
  { value: "Not-Performed", name: "neuroexam", classname: "exam" },
];
const examreset6 = [{ name: "neuroreason" }];
const exam1reset6 = [{ name: "neuroexam" }];
//
const decreasedbutton = [
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
const sidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const sidesreset = [{ value: "Reset", name: "Sidevalue", classname: "scar" }];
const sidesv = [{ name: "Side" }];
const other9 = [{ classname: "Sidevalue", txtname: "Sidevaluetxt" }];
const decreasedreset = [
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
const other11 = [{ classname: "neuroreason", txtname: "neuroreasontxt" }];
const reason7 = [
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
const notperform7 = [
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
const other12 = [
  { classname: "sensationreason", txtname: "sensationreasontxt" },
];
const reason8 = [
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
const notperform8 = [
  { value: "Not-Performed", name: "sensation", classname: "exam" },
];
const examreset8 = [{ name: "sensationreason" }];
const exam1reset8 = [{ name: "sensation" }];
//reflexes
const reflexes = [
  { value: "1+", classname: "scar", name: "reflexes" },
  { value: "2+", classname: "scar", name: "reflexes" },
  { value: "0", classname: "scar", name: "reflexes" },
];
const resetreflex = [{ name: "reflexes" }];
//adddetails
const adddetails = [{ value: "No", name: "Add", classname: "scar" }];
const adddetails1 = [
  { value: "Yes", name: "Add", classname: "scar", txtname: "Adddetailstxt" },
];
const adddetailsreset = [{ name: "Add" }];
const reflexonevalue = [
  { value: "Equal", classname: "scar", name: "Refone" },
  { value: "Symmetrical", classname: "scar", name: "Refone" },
];
const reflex = [
  { value: "1+", classname: "scar", name: "Zero" },
  { value: "2+", classname: "scar", name: "Zero" },
];
const reflex1 = [{ name: "Zero", value: "0" }];
const reflexSvalue = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const reflexSreset = [{ name: "Sidevalue" }];
const reflexside = [{ name: "Side" }];
const zeroreset = [{ name: "Zero" }];
const sidevalues1 = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const sidereset1 = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const sidesv1 = [{ name: "Side" }];
const value1 = [{ value: "C1-C7", name: "csalllevel" }];
const value2 = [{ value: "C1-C7", name: "csalllevel" }];

export const Cervicalspine = () => (
  <CervicalSpine
    scar={scar}
    appearance={appearance}
    status={status}
    side={side}
    aspect={aspect}
    aspectother={aspectother}
    appearanceother={appearanceother}
    statusother={statusother}
    exam={exam}
    nexam={nexam}
    nexampainscale={nexampainscale}
    alignment={alignment}
    tenderness={tenderness}
    tstatus={tstatus}
    tstatusother={tstatusother}
    level={level}
    other={other}
    tposition={tposition}
    tpositionother={tpositionother}
    tside={tside}
    spasm={spasm}
    sstatus={sstatus}
    sstatusother={sstatusother}
    level1={level1}
    other1={other1}
    sposition={sposition}
    spositionother={spositionother}
    sside={sside}
    rom={rom}
    romself={romself}
    rompain={rompain}
    nexamreset={nexamreset}
    alignmentreset={alignmentreset}
    tendernessreset={tendernessreset}
    tstatusreset={tstatusreset}
    tpositionreset={tpositionreset}
    tsidereset={tsidereset}
    spasmreset={spasmreset}
    sstatusreset={sstatusreset}
    spositionreset={spositionreset}
    ssidereset={ssidereset}
    romreset={romreset}
    romselfreset={romselfreset}
    rompainreset={rompainreset}
    scarreset={scarreset}
    appearancereset={appearancereset}
    statusreset={statusreset}
    aspectreset={aspectreset}
    sidereset={sidereset}
    other2={other2}
    reason={reason}
    examreset={examreset}
    exam1reset={exam1reset}
    suboptimal={suboptimal}
    suboptimal1={suboptimal1}
    suboptimalreset={suboptimalreset}
    atrophy={atrophy}
    atrophy1={atrophy1}
    atrophyreset={atrophyreset}
    echymosis={echymosis}
    echymosis1={echymosis1}
    echymosisreset={echymosisreset}
    symptommagnification={symptommagnification}
    symptommagnification1={symptommagnification1}
    symptomreset={symptomreset}
    other3={other3}
    reason1={reason1}
    examreset1={examreset1}
    exam1reset1={exam1reset1}
    notperform={notperform}
    notperform1={notperform1}
    orthopedic={orthopedic}
    other4={other4}
    reason2={reason2}
    examreset2={examreset2}
    exam1reset2={exam1reset2}
    notperform2={notperform2}
    negativepositive={negativepositive}
    negativepositive1={negativepositive1}
    other5={other5}
    reason3={reason3}
    notperform3={notperform3}
    exam1reset3={exam1reset3}
    examreset3={examreset3}
    other6={other6}
    reason4={reason4}
    notperform4={notperform4}
    examreset4={examreset4}
    exam1reset4={exam1reset4}
    negativepositive01={negativepositive01}
    negativepositive11={negativepositive11}
    other7={other7}
    reason5={reason5}
    notperform5={notperform5}
    examreset5={examreset5}
    exam1reset5={exam1reset5}
    negativepositive02={negativepositive02}
    negativepositive12={negativepositive12}
    neurological={neurological}
    other8={other8}
    notperform6={notperform6}
    exam1reset6={exam1reset6}
    examreset6={examreset6}
    reason6={reason6}
    decreasedreset={decreasedreset}
    other9={other9}
    sidesv={sidesv}
    sidesreset={sidesreset}
    sidevalues={sidevalues}
    strength={strength}
    decreasedbutton={decreasedbutton}
    // Decreasedreset1={Decreasedreset1}
    // other10={other10}
    // Sidesv1={Sidesv1}
    // Sidesreset1={Sidesreset1}
    // Sidevalues1={Sidevalues1}
    // strength1={strength1}
    // DecreasedButton1={DecreasedButton1}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    notperform7={notperform7}
    reason7={reason7}
    other11={other11}
    sensation={sensation}
    other12={other12}
    reason8={reason8}
    notperform8={notperform8}
    examreset8={examreset8}
    exam1reset8={exam1reset8}
    reflexes={reflexes}
    resetreflex={resetreflex}
    reflexside={reflexside}
    reflexSreset={reflexSreset}
    reflexSvalue={reflexSvalue}
    reflex1={reflex1}
    reflex={reflex}
    reflexonevalue={reflexonevalue}
    zeroreset={zeroreset}
    sidesv1={sidesv1}
    sidereset1={sidereset1}
    sidevalues1={sidevalues1}
    adddetails={adddetails}
    adddetails1={adddetails1}
    adddetailsreset={adddetailsreset}
    shoulder={shoulder}
    shoulder1={shoulder1}
    shoulderreset={shoulderreset}
    value1={value1}
    value2={value2}
    values1={values1}
    individualvalues={individualvalues}
    resetvalues1={resetvalues1}
    values2={values2}
    individualvalue2={individualvalue2}
    resetvalue2={resetvalue2}
  />
);
