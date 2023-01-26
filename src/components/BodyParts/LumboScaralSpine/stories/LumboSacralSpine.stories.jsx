import LumboSacralSpine from "../LumboSacralSpine";

export default {
  title: "BodyParts/LumboSacralSpine",
  component: LumboSacralSpine,
};
const lspine = [{ label: "Lumbosacral Spine" }];
const statusvalue = [
  { value: "Healed", classname: "scar", name: "status" },
  { value: "Well-healed", classname: "exam", name: "status" },
  { value: "Unhealed", classname: "scar", name: "status" },
];
const statusother = [{ name: "status", otherclassname: "scar" }];
const statusreset = [{ name: "status" }];
const appearancevalue = [
  { value: "Scar", classname: "scar", name: "Appearance" },
  { value: "Surgical Scar", classname: "exam", name: "Appearance" },
  { value: "Incision", classname: "scar", name: "Appearance" },
  { value: "Portal", classname: "scar", name: "Appearance" },
  { value: "Laceration", classname: "scar", name: "Appearance" },
];
const appearanceother = [{ name: "Appearance", otherclassname: "scar" }];
const appearancereset = [{ name: "Appearance" }];
const aspectvalue = [
  { value: "Anterior", classname: "scar", name: "Aspect" },
  { value: "Posterior", classname: "scar", name: "Aspect" },
  { value: "Medial", classname: "scar", name: "Aspect" },
  { value: "Lateral", classname: "scar", name: "Aspect" },
];
const aspectname = [{ name: "Aspect", otherclassname: "scar" }];
const aspectreset = [{ name: "Aspect" }];
const sidevalue = [
  { value: "Right", classname: "scar", name: "Side" },
  { value: "Left", classname: "scar", name: "Side" },
  { value: "Bilateral", classname: "scar", name: "Side" },
];
const scarsidereset = [{ name: "Side" }];
const scarvalue = [
  { value: "No", classname: "scar", name: "scar" },
  { value: "Yes", classname: "scar", name: "scar" },
];
const scarreset = [{ name: "scar" }];
const examvalue = [{ value: "Performed", classname: "scar", name: "Exam" }];
const examnpvalue = [
  { value: "Not-Performed", classname: "exam", name: "Exam" },
];
const examnpreset = [{ name: "Exam" }];
const examnpreason = [
  { value: "Surgery", classname: "scar", name: "ExamNPReason" },
  { value: "Complaint of pain", classname: "exam1", name: "ExamNPReason" },
  { value: "Non-Cooperation", classname: "exam1", name: "ExamNPReason" },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "ExamNPReason",
  },
  { value: "Brace", classname: "scar", name: "ExamNPReason" },
];
const examnpother = [{ name: "ExamNPReason", classname: "scar" }];
const examreasonreset = [{ name: "ExamNPReason" }];

const nexamvalue = [
  { value: "Normal", classname: "scar", name: "Nexam" },
  { value: "Abnormal", classname: "exam", name: "Nexam" },
];
const nexamreset = [{ name: "Nexam" }];
const align = [
  { value: "Normal", classname: "scar", name: "align" },
  { value: "Abnormal", classname: "exam", name: "align" },
];
const alignmetreset = [{ name: "align" }];
const gettable = [
  { value: "Without difficulty", classname: "exam1", name: "gettable" },
  { value: "Difficulty", classname: "exam", name: "gettable" },
];
const tbreset = [{ name: "gettable" }];
const tendernessvalue = [
  { value: "Yes", classname: "scar", name: "Tenderness" },
  { value: "No", classname: "scar", name: "Tenderness" },
];
const treset = [{ name: "Tenderness" }];
const clasifi = [
  { value: "Diffiuse", classname: "scar", name: "Clasifi" },
  { value: "Mild", classname: "scar", name: "Clasifi" },
  { value: "Moderate", classname: "scar", name: "Clasifi" },
  { value: "Severe", classname: "scar", name: "Clasifi" },
];
const clasifiother = [{ name: "Clasifi", otherclassname: "scar" }];
const claisifireset = [{ name: "Tlevel" }];
const tdermotome = [{ name: "Tlevel" }];
const levelvalue = [{ lname: "Tlevel", value: "L1-S1" }];
const individual = [
  { value: "L1" },
  { value: "L2" },
  { value: "L3" },
  { value: "L4" },
  { value: "L5" },
  { value: "S1" },
];
const othername = [{ name: "Tlevel", otherclassname: "scar" }];
const reseti = [{ name: "Tlevel" }];
const positionvalue = [
  { value: "Paralumbar muscles", classname: "exam1", name: "position" },
  { value: "Gluteal muscles", classname: "exam", name: "position" },
  { value: "Midline", classname: "scar", name: "position" },
  { value: "Sciatic notch", classname: "exam", name: "position" },
];
const positionother = [{ name: "position", otherclassname: "scar" }];
const positionreset = [{ name: "position" }];
const tsidevalue = [
  { value: "Right", name: "sides", classname: "scar" },
  { value: "Left", name: "sides", classname: "scar" },
  { value: "Bilateral", name: "sides", classname: "scar" },
];
const sidereset = [{ name: "sides" }];
const spasmvalue = [
  { value: "Yes", classname: "scar", name: "spasm" },
  { value: "No", classname: "scar", name: "spasm" },
];
const spasmreset = [{ name: "spasm" }];
const spasmclasifi = [
  { value: "Diffiuse", classname: "scar", name: "SClasification" },
  { value: "Mild", classname: "scar", name: "SClasification" },
  { value: "Moderate", classname: "scar", name: "SClasification" },
  { value: "Severe", classname: "scar", name: "SClasification" },
];
const spasmclreset = [{ name: "SClasification" }];
const spasmclasifiother = [{ name: "SClasification", otherclassname: "scar" }];
const sdermotome = [{ name: "Slevel" }];
const spslevelvalue = [{ lname: "Slevel", value: "L1-S1" }];
const level = [
  { value: "L1" },
  { value: "L2" },
  { value: "L3" },
  { value: "L4" },
  { value: "L5" },
  { value: "S1" },
];
const spslothername = [{ name: "Slevel", otherclassname: "scar" }];
const spslevel = [{ name: "Slevel" }];
const spspositionvalue = [
  { value: "Paralumbar muscles", classname: "exam1", name: "spposition" },
  { value: "Gluteal muscles", classname: "exam", name: "spposition" },
  { value: "Midline", classname: "exam", name: "spposition" },
  { value: "Sciatic notch", classname: "exam", name: "spposition" },
];
const spspositionother = [{ name: "spposition", otherclassname: "scar" }];
const spasmpreset = [{ name: "spposition" }];
const spasmsidevalue = [
  { value: "Right", name: "Spasmsides", classname: "scar" },
  { value: "Left", name: "Spasmsides", classname: "scar" },
  { value: "Bilateral", name: "Spasmsides", classname: "scar" },
];
const spasmsidereset = [{ name: "Spasmsides" }];
const rom = [
  { value: "Normal", name: "rom", classname: "scar" },
  { value: "Abnormal", name: "rom", classname: "scar" },
];
const romnpvalue = [{ value: "Not-Performed", classname: "exam", name: "rom" }];
const romnpreset = [{ name: "rom" }];
const romnpreason = [
  { value: "Surgery", classname: "scar", name: "RomNPReason" },
  { value: "Complaint of pain", classname: "exam1", name: "RomNPReason" },
  { value: "Non-Cooperation", classname: "exam1", name: "RomNPReason" },
  { value: "Not Wish to Perform", classname: "exam1", name: "RomNPReason" },
  { value: "Brace", classname: "scar", name: "RomNPReason" },
];
const romnpother = [{ name: "RomNPReason", classname: "scar" }];
const romnpreasonreset = [{ name: "RomNPReason" }];
const selfrestricted = [
  { name: "Srestricted", classname: "scar", value: "No" },
  { name: "Srestricted", classname: "scar", value: "Yes" },
];
const srestrictedreset = [{ name: "Srestricted" }];
const rompain = [
  { value: "All", name: "Rompain", classname: "scar" },
  { value: "Flexion", name: "Rompain", classname: "scar" },
  { value: "Extension", name: "Rompain", classname: "scar" },
  { value: "Right Bending", name: "Rompain", classname: "exam" },
  { value: "Left Bending", name: "Rompain", classname: "exam" },
];
const spasmpainreset = [{ name: "Rompain" }];
const yesno = [{ value: "No", classname: "scar", name: "Soptimal" }];
const yesreset = [{ name: "Soptimal" }];
const yesnovalue = [{ value: "Yes", name: "Soptimal", classname: "scar" }];
const atropyyesno = [{ name: "Atropy", value: "No", classname: "scar" }];
const atropyreset = [{ name: "Atropy" }];
const atropyvalue = [{ value: "Yes", name: "Atropy", classname: "scar" }];
const ecchymosisyesno = [
  { name: "ecchymosis", value: "No", classname: "scar" },
];
const ecchymosisreset = [{ name: "ecchymosis" }];
const ecchymosisvalue = [
  { value: "Yes", name: "ecchymosis", classname: "scar" },
];
const symptomvalue = [{ name: "symptom", value: "No", classname: "scar" }];
const symptomreset = [{ name: "symptom" }];
const symptomyesname = [{ value: "Yes", name: "symptom", classname: "scar" }];
const orthotest = [
  { name: "Orthopedictest", value: "Performed", classname: "scar" },
];
const orthonpvalue = [
  { value: "Not-Performed", classname: "exam", name: "Orthopedictest" },
];
const orthonpreset = [{ name: "Orthopedictest" }];
const orthonpreason = [
  { value: "Surgery", classname: "scar", name: "NperformReason" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "NperformReason",
  },
  { value: "Non-Cooperation", classname: "exam1", name: "NperformReason" },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "NperformReason",
  },
  { value: "Brace", classname: "scar", name: "NperformReason" },
];
const orthonpother = [{ name: "NperformReason", classname: "scar" }];
const npreasonreset = [{ name: "NperformReason" }];
const negativepositive = [
  { value: "Negative", name: "Legtest", classname: "scar" },
];
const negativepositive1 = [
  { value: "Positive", name: "Legtest", classname: "scar" },
];
const legtestnpvalue = [
  { value: "Not-Performed", classname: "exam", name: "Legtest" },
];
const legtestnpreset = [{ name: "Legtest" }];
const legtestnpreason = [
  { value: "Surgery", classname: "scar", name: "Legtest" },
  { value: "Complaint of pain", classname: "exam1", name: "Legtest" },
  { value: "Non-Cooperation", classname: "exam1", name: "Legtest" },
  { value: "Not Wish to Perform", classname: "exam1", name: "Legtest" },
  { value: "Brace", classname: "scar", name: "Legtest" },
];
const legtestnpother = [{ name: "Legtest", classname: "scar" }];
const legtestnpreasonreset = [{ name: "Legtest" }];
const neuroexam = [{ value: "Performed", classname: "scar", name: "Nuroexam" }];
const nexamnpvalue = [
  { value: "Not-Performed", classname: "exam", name: "Nuroexam" },
];
const nexampainscale = [{ name: "nexam" }];
const nexamnpreset = [{ name: "Nuroexam" }];
const nexamnpreason = [
  { value: "Surgery", classname: "scar", name: "NuroexamNperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "NuroexamNperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "NuroexamNperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "NuroexamNperform",
  },
  { value: "Brace", classname: "scar", name: "NuroexamNperform" },
];
const nexamnpother = [{ name: "NuroexamNperform", oclassname: "scar" }];
const nexamnpreasonreset = [{ name: "NuroexamNperform" }];
const mstrengthdec = [
  { value: "5/5", name: "Mstrength", classname: "scar" },
  { value: "Decreased", name: "Mstrength", classname: "scar" },
];
const mstrength = [
  { value: "EHL", classname: "scar" },
  { value: "PF", classname: "scar" },
  { value: "Quad", classname: "exam" },
  { value: "TA", classname: "scar" },
  // { value: "Interossei", classname: "scar" },
  // { value: "Triceps", classname: "scar" },
];
const mstrengthsvalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const mstrengthsreset = [{ name: "Sidevalue" }];
const mstrengthside = [{ name: "Side" }];
const mstrengthother = [{ name: "csalllevel", otherclassname: "scar" }];
const mstrengthreset = [
  { value: "Reset", name: "Sidevalue", classname: "scar" },
];
//   const MSreset = [
//     { value: "Reset", name: "decreased", classname: "scar" },
//   ];
const mstrengthnpvalue = [
  { value: "Not-Performed", classname: "exam", name: "Mstrength" },
];
const mstrengthnpreset = [{ name: "Mstrength" }];
const mstrengthnpreason = [
  { value: "Surgery", classname: "scar", name: "MstrengthNperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "MstrengthNperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "MstrengthNperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "MstrengthNperform",
  },
  { value: "Brace", classname: "scar", name: "MstrengthNperform" },
];
const mstrengthnpother = [
  { name: "MstrengthNperform", otherclassname: "scar" },
];
const mstrengthnpreasonreset = [{ name: "MstrengthNperform" }];
const examnotpform = [{ classn: "s" }];
const sensation = [
  { value: "Intact", name: "sensation", classname: "scar" },
  { value: "Decreased", name: "sensation", classname: "scar" },
];
const sensationnpvalue = [
  { value: "Not-Performed", classname: "exam", name: "sensation" },
];
const sensationnpreset = [{ name: "sensation" }];
const sensationnpreason = [
  { value: "Surgery", classname: "scar", name: "sensationNperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "sensationNperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "sensationNperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "sensationNperform",
  },
  { value: "Brace", classname: "scar", name: "sensationNperform" },
];
const sensationnpother = [
  { name: "sensationNperform", otherclassname: "scar" },
];
const sensationnpreasonreset = [{ name: "sensationNperform" }];
const reflexonevalue = [
  { value: "Equal", classname: "scar", name: "Refone" },
  { value: "Symmetrical", classname: "exam", name: "Refone" },
];
const reflex = [{ name: "Reflex", value: "0" }];
const reflexsvalue = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const reflexsreset = [{ name: "Sidevalue" }];
const reflexside = [{ name: "Side" }];
const reflex2 = [
  { value: "1+", classname: "scar", name: "Reflex" },
  { value: "2+", classname: "scar", name: "Reflex" },
];
const refreset = [{ name: "Reflex" }];

const detailsreset = [{ name: "Addetails" }];
const refsidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const refsidereset = [{ value: "Reset" }];
const refsidesname = [{ name: "Side" }];
const romnotpform = [{ classn: "scarr" }];
const orthonotpform = [{ classn: "s" }];
const neuroexamnotpform = [{ classn: "s" }];
const sensationnotpform = [{ classn: "scarr" }];
const mstrengthnotpform = [{ classn: "e" }];
const legtestnotpform = [{ classn: "scarr" }];
const detailsvalue = [{ name: "Addetails", value: "No", classname: "scar" }];

const detailsyesno = [{ value: "Yes", name: "Addetails", classname: "scar" }];
const sintact = [{ value: "L2-S1", name: "intact", classname: "scar" }];
const level2 = [
  { value: "L1" },
  { value: "L2" },
  { value: "L3" },
  { value: "L4" },
  { value: "L5" },
  { value: "S1" },
];
const other = [{ name: "csalllevel" }];
const value1 = [{ value: "L1-S1", name: "csalllevel" }];
const resetvalue1 = [{ name: "csalllevel" }];
const individualvalue = [{ name: "csalllevel", value: "Individual Dermatome" }];
const level3 = [
  { value: "L1" },
  { value: "L2" },
  { value: "L3" },
  { value: "L4" },
  { value: "L5" },
  { value: "S1" },
];
const othervalue = [{ name: "csalllevel" }];
const value2 = [{ value: "L1-S1", name: "csalllevel" }];
const resetvalue2 = [{ name: "csalllevel" }];
const individualvalue1 = [
  { name: "csalllevel", value: "Individual Dermatome" },
];
const DecreasedButton = [
  { value: "5/5", name: "decreased", classname: "scar" },
  { value: "Decreased", name: "decreased", classname: "scar" },
];
const strength = [
  { value: "Biceps", classname: "scar" },
  { value: "Triceps", classname: "scar" },
  { value: "Wrist Extension", classname: "exam" },
  { value: "Grip", classname: "scar" },
  { value: "Interossei", classname: "scar" },
  { value: "Triceps", classname: "scar" },
];
const Sidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const Sidereset = [{ value: "Reset", name: "Sidevalue", classname: "scar" }];
const Sidesv = [{ name: "Side" }];
const other9 = [{ classname: "csalllevel" }];
const Decreasedreset = [
  { value: "Reset", name: "Sidevalue", classname: "scar" },
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
const rreflexonevalue = [
  { value: "Equal", classname: "scar", name: "Refone" },
  { value: "Symmetrical", classname: "scar", name: "Refone" },
];
const rreflex = [
  { value: "1+", classname: "scar", name: "Zero" },
  { value: "2+", classname: "scar", name: "Zero" },
];
const Sidevalues1 = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const Sidereset1 = [{ value: "Reset", name: "Sidevalue", classname: "scar" }];
const Sidesv1 = [{ name: "Side" }];
const reflex11 = [{ name: "Zero", value: "0" }];
const reflexSvalue = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const reflexSreset = [{ name: "Sidevalue" }];
const rreflexside = [{ name: "Side" }];
const zeroreset = [{ name: "Zero" }];
export const LumbosacralSpine = () => (
  <LumboSacralSpine
    lspine={lspine}
    statusvalue={statusvalue}
    statusother={statusother}
    statusreset={statusreset}
    scarreset={scarreset}
    appearanceother={appearanceother}
    appearancevalue={appearancevalue}
    aspectname={aspectname}
    aspectvalue={aspectvalue}
    sidevalue={sidevalue}
    scarvalue={scarvalue}
    examvalue={examvalue}
    nexamvalue={nexamvalue}
    nexampainscale={nexampainscale}
    align={align}
    gettable={gettable}
    tendernessvalue={tendernessvalue}
    clasifi={clasifi}
    clasifiother={clasifiother}
    individual={individual}
    othername={othername}
    reseti={reseti}
    positionvalue={positionvalue}
    positionother={positionother}
    tsidevalue={tsidevalue}
    spasmvalue={spasmvalue}
    spasmclasifiother={spasmclasifiother}
    spasmclasifi={spasmclasifi}
    level={level}
    spslothername={spslothername}
    spslevel={spslevel}
    spspositionvalue={spspositionvalue}
    spspositionother={spspositionother}
    spasmsidevalue={spasmsidevalue}
    levelvalue={levelvalue}
    spslevelvalue={spslevelvalue}
    tdermotome={tdermotome}
    sdermotome={sdermotome}
    rom={rom}
    selfrestricted={selfrestricted}
    rompain={rompain}
    nexamreset={nexamreset}
    alignmetreset={alignmetreset}
    tbreset={tbreset}
    treset={treset}
    claisifireset={claisifireset}
    positionreset={positionreset}
    sidereset={sidereset}
    spasmreset={spasmreset}
    spasmclreset={spasmclreset}
    spasmpreset={spasmpreset}
    spasmsidereset={spasmsidereset}
    srestrictedreset={srestrictedreset}
    spasmpainreset={spasmpainreset}
    appearancereset={appearancereset}
    aspectreset={aspectreset}
    scarsidereset={scarsidereset}
    yesnovalue={yesnovalue}
    yesreset={yesreset}
    yesno={yesno}
    atropyreset={atropyreset}
    atropyvalue={atropyvalue}
    atropyyesno={atropyyesno}
    ecchymosisreset={ecchymosisreset}
    ecchymosisvalue={ecchymosisvalue}
    ecchymosisyesno={ecchymosisyesno}
    symptomvalue={symptomvalue}
    symptomreset={symptomreset}
    symptomyesname={symptomyesname}
    orthotest={orthotest}
    orthonpother={orthonpother}
    orthonpvalue={orthonpvalue}
    orthonpreset={orthonpreset}
    orthonpreason={orthonpreason}
    npreasonreset={npreasonreset}
    examnpvalue={examnpvalue}
    examnpreset={examnpreset}
    examnpreason={examnpreason}
    examnpother={examnpother}
    examreasonreset={examreasonreset}
    romnpvalue={romnpvalue}
    romnpreset={romnpreset}
    romnpreason={romnpreason}
    romnpother={romnpother}
    romnpreasonreset={romnpreasonreset}
    negativepositive={negativepositive}
    negativepositive1={negativepositive1}
    sintact={sintact}
    legtestnpvalue={legtestnpvalue}
    legtestnpreset={legtestnpreset}
    legtestnpreason={legtestnpreason}
    legtestnpother={legtestnpother}
    legtestnpreasonreset={legtestnpreasonreset}
    neuroexam={neuroexam}
    nexamnpvalue={nexamnpvalue}
    nexamnpreset={nexamnpreset}
    nexamnpreason={nexamnpreason}
    nexamnpother={nexamnpother}
    nexamnpreasonreset={nexamnpreasonreset}
    mstrengthdec={mstrengthdec}
    mstrength={mstrength}
    mstrengthside={mstrengthside}
    mstrengthsreset={mstrengthsreset}
    mstrengthsvalues={mstrengthsvalues}
    mstrengthother={mstrengthother}
    mstrengthreset={mstrengthreset}
    mstrengthnpvalue={mstrengthnpvalue}
    mstrengthnpreset={mstrengthnpreset}
    mstrengthnpreason={mstrengthnpreason}
    mstrengthnpother={mstrengthnpother}
    mstrengthnpreasonreset={mstrengthnpreasonreset}
    sensation={sensation}
    sensationnpvalue={sensationnpvalue}
    sensationnpreset={sensationnpreset}
    sensationnpreason={sensationnpreason}
    sensationnpother={sensationnpother}
    sensationnpreasonreset={sensationnpreasonreset}
    reflexonevalue={reflexonevalue}
    reflex={reflex}
    reflexside={reflexside}
    reflexsreset={reflexsreset}
    reflexsvalue={reflexsvalue}
    reflex2={reflex2}
    refreset={refreset}
    detailsreset={detailsreset}
    refsidesname={refsidesname}
    refsidevalues={refsidevalues}
    refsidereset={refsidereset}
    examnotpform={examnotpform}
    orthonotpform={orthonotpform}
    romnotpform={romnotpform}
    sensationnotpform={sensationnotpform}
    neuroexamnotpform={neuroexamnotpform}
    mstrengthnotpform={mstrengthnotpform}
    legtestnotpform={legtestnotpform}
    detailsyesno={detailsyesno}
    detailsvalue={detailsvalue}
    level2={level2}
    other={other}
    value1={value1}
    resetvalue1={resetvalue1}
    individualvalue={individualvalue}
    level3={level3}
    othervalue={othervalue}
    value2={value2}
    resetvalue2={resetvalue2}
    individualvalue1={individualvalue1}
    DecreasedButton={DecreasedButton}
    strength={strength}
    Sidevalues={Sidevalues}
    Sidesv={Sidesv}
    Sidereset={Sidereset}
    other9={other9}
    Decreasedreset={Decreasedreset}
    other11={other11}
    Reason7={Reason7}
    Notperform7={Notperform7}
    examreset7={examreset7}
    exam1reset7={exam1reset7}
    rreflexonevalue={rreflexonevalue}
    rreflex={rreflex}
    Sidesv1={Sidesv1}
    Sidereset1={Sidereset1}
    Sidevalues1={Sidevalues1}
    zeroreset={zeroreset}
    rreflexside={rreflexside}
    reflexSreset={reflexSreset}
    reflexSvalue={reflexSvalue}
    reflex11={reflex11}
  />
);
