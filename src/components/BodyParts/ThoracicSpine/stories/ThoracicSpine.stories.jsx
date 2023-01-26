import ThoracicSpine from "../ThoracicSpine";

export default {
  title: "BodyParts/ThoracicSpine",
  componennt: ThoracicSpine,
};
const thoracic = [{ label: "Thoracic Spine" }];
// Status
const statusvalue = [
  { value: "Healed", classname: "scar", name: "status" },
  { value: "Well-healed", classname: "exam", name: "status" },
  { value: "Unhealed", classname: "scar", name: "status" },
];
const statusreset = [{ name: "status" }];
const statusother = [{ name: "status", otherclassname: "scar" }];
// Appearance
const appearancevalue = [
  { value: "Scar", classname: "scar", name: "Appearance" },
  { value: "Surgical Scar", classname: "exam", name: "Appearance" },
  { value: "Incision", classname: "scar", name: "Appearance" },
  { value: "Portal", classname: "scar", name: "Appearance" },
  { value: "Laceration", classname: "scar", name: "Appearance" },
];
const appearanceother = [{ name: "Appearance", otherclassname: "scar" }];
const appearancereset = [{ name: "Appearance" }];
//Aspect
const aspectvalue = [
  { value: "Anterior", classname: "scar", name: "Aspect" },
  { value: "Posterior", classname: "scar", name: "Aspect" },
  { value: "Medial", classname: "scar", name: "Aspect" },
  { value: "Lateral", classname: "scar", name: "Aspect" },
  // {'value':'Laceration','classname':'scar' ,'name':'Appearance'},
];
const aspectname = [{ name: "Aspect", otherclassname: "scar" }];
const aspectreset = [{ name: "Aspect" }];
//side
const sidevalue = [
  { value: "Right", classname: "scar", name: "Side" },
  { value: "Left", classname: "scar", name: "Side" },
  { value: "Bilateral", classname: "scar", name: "Side" },
];
const scarsidereset = [{ name: "Side" }];
//Scar
const scarvalue = [
  { value: "No", classname: "scar", name: "scar" },
  { value: "Yes", classname: "scar", name: "scar" },
];
const scarreset = [{ name: "scar" }];
// Examination
const tsexam = [{ name: "TSexam", value: "Performed", classname: "scar" }];
const examnperform = [
  { value: "Not-Performed", classname: "exam", name: "TSexam" },
];
const exam = [{ value: "Performed", classname: "scar", name: "TSexam" }];
const examnpreset = [{ name: "TSexam" }];
const examnpreason = [
  { value: "Surgery", classname: "scar", name: "TSExamNotperform" },
  {
    value: "Complaint of pain",
    classname: "ExamtableNp",
    name: "TSExamNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "ExamtableNp",
    name: "TSExamNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "ExamtableNp",
    name: "TSExamNotperform",
  },
  { value: "Brace", classname: "scar", name: "TSExamNotperform" },
];
const examnpother = [{ name: "TSExamNotperform", otherclassname: "scar" }];
const examnpreasonreset = [{ name: "TSExamNotperform" }];
const examnotpform = [{ classn: "s" }];
// Normal Exam
const nexam = [
  { name: "Normalexam", value: "Normal", classname: "scar" },
  { name: "Normalexam", value: "Abnormal", classname: "scar" },
];
const nexampainscale = [{ name: "Normalexam" }];
const nexamreset = [{ name: "Normalexam" }];
// Tenderness
const tenderness = [
  { name: "Classifi", value: "No", classname: "scar" },
  { name: "Classifi", value: "Yes", classname: "scar" },
];
const tendernessreset = [{ name: "Classifi" }];

const tstenderclassification = [
  { name: "Tenderness", value: "Diffuse", classname: "scar" },
  { name: "Tenderness", value: "Mild", classname: "scar" },
  { name: "Tenderness", value: "Moderate", classname: "scar" },
  { name: "Tenderness", value: "Severe", classname: "scar" },
];
const cother = [{ name: "Tenderness", otherclassname: "scar" }];
const creset = [{ name: "Tenderness" }];
const clevel = [{ name: "Clevel", value: "T1-T12", classname: "scar" }];
const level2 = [
  { value: "T1" },
  { value: "T2" },
  { value: "T3" },
  { value: "T4" },
  { value: "T5" },
  { value: "T6" },
  { value: "T7" },
  { value: "T8" },
  { value: "T9" },
  { value: "T10" },
  { value: "T11" },
  { value: "T12" },
];
const level3 = [
  { value: "T1" },
  { value: "T2" },
  { value: "T3" },
  { value: "T4" },
  { value: "T5" },
  { value: "T6" },
  { value: "T7" },
  { value: "T8" },
  { value: "T9" },
  { value: "T10" },
  { value: "T11" },
  { value: "T12" },
];
const other = [{ name: "csalllevel" }];
const other2 = [{ name: "csalllevel" }];
const value1 = [{ value: "T1-T12", name: "csalllevel" }];
const value2 = [{ value: "T1-T12", name: "csalllevel" }];
const resetvalue1 = [{ name: "csalllevel" }];
const resetvalue2 = [{ name: "csalllevel" }];
const individualvalue = [{ name: "csalllevel", value: "Individual Dermatome" }];
const individualvalue2 = [
  { name: "csalllevel", value: "Individual Dermatome" },
];
const position = [
  { name: "position", value: "Parathoracic muscles", classname: "exam1" },
  { name: "position", value: "Midline", classname: "scar" },
];
const pother = [{ name: "position", otherclassname: "scar" }];
const preset = [{ name: "position" }];
const sides = [
  { name: "Sides", value: "Right", classname: "scar" },
  { name: "Sides", value: "Left", classname: "scar" },
  { name: "Sides", value: "Bilateral", classname: "scar" },
];
const tsidereset = [{ name: "Sides" }];
// Spasm
const tsspasmclassification = [
  { name: "Spasmc", value: "Diffuse", classname: "scar" },
  { name: "Spasmc", value: "Mild", classname: "scar" },
  { name: "Spasmc", value: "Moderate", classname: "scar" },
  { name: "Spasmc", value: "Severe", classname: "scar" },
];
const spasmother = [{ name: "Spasmc", otherclassname: "scar" }];
const spasmreset = [{ name: "Spasmc" }];
const spasm = [
  { name: "Spasm", value: "No", classname: "scar" },
  { name: "Spasm", value: "Yes", classname: "scar" },
];
const spasmreset1 = [{ name: "Spasm" }];
const spasmlevel = [{ name: "slevel", value: "T1-T12", classname: "scar" }];
const tsslevelv = [{ iname: "slevel", resetname: "slevel" }];
const tssinput = [
  { name: "slevelIdermotome", value: "T1", classname: "scar" },
  { name: "slevelIdermotome", value: "T2", classname: "scar" },
  { name: "slevelIdermotome", value: "T3", classname: "scar" },
  { name: "slevelIdermotome", value: "T4", classname: "scar" },
  { name: "slevelIdermotome", value: "T5", classname: "scar" },
  { name: "slevelIdermotome", value: "T6", classname: "scar" },
  { name: "slevelIdermotome", value: "T7", classname: "scar" },
  { name: "slevelIdermotome", value: "T8", classname: "scar" },
];
const tssinput2 = [
  { name: "slevelIdermotome", value: "T9", classname: "scar" },
  { name: "slevelIdermotome", value: "T10", classname: "scar" },
  { name: "slevelIdermotome", value: "T11", classname: "scar" },
  { name: "slevelIdermotome", value: "T12", classname: "scar" },
];
const tsslevelother = [{ otherclassname: "scar", name: "slevel" }];
const sindreset = [{ name: "slevelIdermotome" }];
const spasmposition = [
  {
    name: "Sposition",
    value: "Parathoracic muscles",
    classname: "exam1",
  },
  { name: "Sposition", value: "Midline", classname: "scar" },
];
const spasmpositionother = [{ name: "Sposition", otherclassname: "scar" }];
const spasmpreset = [{ name: "Sposition" }];
const spasmsides = [
  { name: "SSides", value: "Right", classname: "scar" },
  { name: "SSides", value: "Left", classname: "scar" },
  { name: "SSides", value: "Bilateral", classname: "scar" },
];
const ssidereset = [{ name: "SSides" }];
//Rom
const tsrom = [
  { name: "TSrom", value: "Normal", classname: "scar" },
  { name: "TSrom", value: "Abnormal", classname: "scar" },
];
const tsromnperform = [
  { value: "Not-Performed", classname: "exam", name: "TSrom" },
];
const tsromnpreset = [{ name: "TSrom" }];
const tsromnpreason = [
  { value: "Surgery", classname: "scarNp2", name: "TSromNotperform" },
  {
    value: "Complaint of pain",
    classname: "ExamtableNp",
    name: "TSromNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "ExamtableNp",
    name: "TSromNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "ExamtableNp",
    name: "TSromNotperform",
  },
  { value: "Brace", classname: "scar", name: "TSromNotperform" },
];
const tsromnpother = [{ name: "TSromNotperform", otherclassname: "scar" }];
const tsromnpreasonreset = [{ name: "TSromNotperform" }];
const romnotpform = [{ classn: "scarr1" }];
const yesself = [{ value: "No", classname: "scar", name: "Srestricted" }];
const selfyesreset = [{ name: "Srestricted" }];
const sryesno = [{ value: "Yes", name: "Srestricted", classname: "scar" }];
const paincm = [
  { value: "All", name: "Pcausingmotion", classname: "scar" },
  { value: "Flexion", name: "Pcausingmotion", classname: "scar" },
  { value: "Extension", name: "Pcausingmotion", classname: "scar" },
];
const paincmreset = [{ name: "paincausingmreset" }];
// Suboptimal
const soptimalno = [{ value: "No", classname: "scar", name: "Suboptimal" }];
const soptimalyesreset = [{ name: "Suboptimal" }];
const soptimalyes = [{ value: "Yes", name: "Suboptimal", classname: "scar" }];
//Atrophy
const atrophyno = [{ value: "No", classname: "scar", name: "Atrophy" }];
const atrophyyesreset = [{ name: "Atrophy" }];
const atrophyyes = [{ value: "Yes", name: "Atrophy", classname: "scar" }];
// Ecchymosis
const ecchymosisno = [{ value: "No", classname: "scar", name: "ecchymosis" }];
const ecchymosisyesreset = [{ name: "ecchymosis" }];
const ecchymosisyes = [{ value: "Yes", name: "ecchymosis", classname: "scar" }];
// Symptom Magnification
const symptomno = [{ value: "No", classname: "scar", name: "Symptom" }];
const symptomreset = [{ name: "Symptom" }];
const symptomyes = [{ value: "Yes", name: "Symptom", classname: "scar" }];
// Chest Expansion
const cexpansion = [
  { name: "ChestExpansion", value: "Not-Equal", classname: "scar" },
  { name: "ChestExpansion", value: "Symmetrical", classname: "scar" },
  { name: "ChestExpansion", value: "Intact", classname: "scar" },
];
const cexpansionreset = [{ name: "ChestExpansion" }];
const cexpansion1 = [
  { name: "ChestExpansion1", value: "Equal", classname: "scar" },
  { name: "ChestExpansion1", value: "Symmetrical", classname: "scar" },
  { name: "ChestExpansion1", value: "Intact", classname: "scar" },
];
const cexpansionreset1 = [{ name: "ChestExpansion1" }];
// Sensation
const sensation = [
  { name: "sensation", value: "Decreased", classname: "scar" },
];
const decreasedbutton = [
  { value: "Intact", name: "sensation", classname: "scar" },
];
const strength = [{ value: "T1-T12", classname: "scar", name: "sensationD" }];
const sidevalues = [
  { value: "Right", classname: "scar", name: "sensationSidevalue" },
  { value: "Left", classname: "scar", name: "sensationSidevalue" },
  { value: "Bilateral", classname: "scar", name: "sensationSidevalue" },
];
const sidereset = [{ name: "sensationSidevalue" }];
const sidesv = [{ name: "sensationD" }];
const other9 = [{ name: "sensationD", otherclassname: "scar" }];
const decreasedreset = [
  { value: "Reset", name: "sensationD", classname: "scar" },
];
const mstrengthnpvalue = [
  { value: "Not-Performed", classname: "exam", name: "sensation" },
];
const mstrengthnpreset = [{ name: "sensation" }];
const mstrengthnpreason = [
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
const mstrengthnpother = [
  { name: "sensationNperform", otherclassname: "scar" },
];
const mstrengthnpreasonreset = [{ name: "sensationNperform" }];
const mstrengthnotpform = [{ classn: "as" }];
// Add Details
const addetails = [
  { name: "Adddetails", value: "No", classname: "scar" },
  { name: "Adddetails", value: "Yes", classname: "scar" },
];
const addetailsreset = [{ name: "Adddetails" }];

export const Thoracicspine = () => (
  <ThoracicSpine
    thoracic={thoracic}
    statusvalue={statusvalue}
    scarreset={scarreset}
    statusother={statusother}
    statusreset={statusreset}
    appearanceother={appearanceother}
    appearancevalue={appearancevalue}
    aspectname={aspectname}
    aspectvalue={aspectvalue}
    sidevalue={sidevalue}
    scarvalue={scarvalue}
    appearancereset={appearancereset}
    aspectreset={aspectreset}
    scarsidereset={scarsidereset}
    tsexam={tsexam}
    examnperform={examnperform}
    examnpreset={examnpreset}
    examnpreason={examnpreason}
    examnpother={examnpother}
    examnpreasonreset={examnpreasonreset}
    tenderness={tenderness}
    tendernessreset={tendernessreset}
    nexam={nexam}
    nexampainscale={nexampainscale}
    nexamreset={nexamreset}
    tstenderclassification={tstenderclassification}
    cother={cother}
    creset={creset}
    clevel={clevel}
    position={position}
    pother={pother}
    preset={preset}
    sides={sides}
    level2={level2}
    other={other}
    value1={value1}
    resetvalue1={resetvalue1}
    individualvalue={individualvalue}
    tsspasmclassification={tsspasmclassification}
    spasmother={spasmother}
    spasmreset={spasmreset}
    spasmreset1={spasmreset1}
    spasm={spasm}
    tsslevelv={tsslevelv}
    tssinput={tssinput}
    tsslevelother={tsslevelother}
    tssinput2={tssinput2}
    sindreset={sindreset}
    spasmlevel={spasmlevel}
    spasmpositionother={spasmpositionother}
    spasmpreset={spasmpreset}
    spasmposition={spasmposition}
    spasmsides={spasmsides}
    tsidereset={tsidereset}
    ssidereset={ssidereset}
    tsrom={tsrom}
    tsromnperform={tsromnperform}
    tsromnpreset={tsromnpreset}
    tsromnpreason={tsromnpreason}
    tsromnpother={tsromnpother}
    tsromnpreasonreset={tsromnpreasonreset}
    sryesno={sryesno}
    selfyesreset={selfyesreset}
    yesself={yesself}
    paincm={paincm}
    paincmreset={paincmreset}
    soptimalyes={soptimalyes}
    soptimalno={soptimalno}
    soptimalyesreset={soptimalyesreset}
    symptomyes={symptomyes}
    symptomno={symptomno}
    symptomreset={symptomreset}
    cexpansion={cexpansion}
    cexpansionreset={cexpansionreset}
    cexpansion1={cexpansion1}
    cexpansionreset1={cexpansionreset1}
    sensation={sensation}
    decreasedbutton={decreasedbutton}
    strength={strength}
    sidevalues={sidevalues}
    sidereset={sidereset}
    sidesv={sidesv}
    other9={other9}
    decreasedreset={decreasedreset}
    mstrengthnpvalue={mstrengthnpvalue}
    mstrengthnpreset={mstrengthnpreset}
    mstrengthnpreason={mstrengthnpreason}
    mstrengthnpother={mstrengthnpother}
    mstrengthnpreasonreset={mstrengthnpreasonreset}
    mstrengthnotpform={mstrengthnotpform}
    addetails={addetails}
    addetailsreset={addetailsreset}
    atrophyyes={atrophyyes}
    atrophyno={atrophyno}
    atrophyyesreset={atrophyyesreset}
    ecchymosisyes={ecchymosisyes}
    ecchymosisno={ecchymosisno}
    ecchymosisyesreset={ecchymosisyesreset}
    examnotpform={examnotpform}
    romnotpform={romnotpform}
    other2={other2}
    level3={level3}
    value2={value2}
    resetvalue2={resetvalue2}
    individualvalue2={individualvalue2}
    exam={exam}
  />
);
