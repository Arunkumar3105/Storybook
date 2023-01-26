import Wrist from "../Wrist";

export default {
  title: "BodyParts/Wrist",
  component: Wrist,
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
// const level = [
//   { value: "C1" },
//   { value: "C2" },
//   { value: "C3" },
//   { value: "C4" },
//   { value: "C5" },
//   { value: "C6" },
//   { value: "C7" },
// ];
// const InputArray=[{"value":"No"},{"value":"Yes"}]

const scar = [
  { value: "No", name: "csscar", classname: "scar" },
  { value: "Yes", name: "csscar", classname: "scar" },
];
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
const appearanceother = [{ name: "appearance", classname: "scar" }];
const statusother = [{ name: "status", classname: "scar" }];
const aspectother = [{ name: "aspect", classname: "scar" }];
const scarreset = [{ name: "csscar" }];
const appearancereset = [{ name: "appearance" }];
const statusreset = [{ name: "status" }];
const aspectreset = [{ name: "aspect" }];
const exam = [{ value: "Performed", name: "exam", classname: "scar" }];
const nexam = [
  { value: "Normal", name: "nexam", classname: "scar" },
  { value: "Abnormal", name: "nexam", classname: "scar" },
];
const nexampainscale = [{ name: "nexam" }];
const other3 = [{ classname: "examreason" }];
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
const nexamreset = [{ name: "nexam" }];
const fyes = [{ name: "Findyes" }];
const fno = [{ name: "Findno" }];
const swelling = [{ name: "finding" }];
const erythema = [{ name: "Erythema" }];
const effusion = [{ name: "Effusion" }];
const redness = [{ name: "Redness" }];
const edema = [{ name: "Edema" }];
const deformity = [{ name: "Deformity" }];
const ecchymosis = [{ name: "Ecchymosis" }];
const fnoother = [{ name: "FindNother", classname: "scar" }];

const swelling1 = [{ name: "finding" }];
const erythema1 = [{ name: "Erythema" }];
const effusion1 = [{ name: "Effusion" }];
const redness1 = [{ name: "Redness" }];
const edema1 = [{ name: "Edema" }];
const deformity1 = [{ name: "Deformity" }];
const ecchymosis1 = [{ name: "Ecchymosis" }];
const fyesother = [{ name: "FindNother", classname: "scar" }];
const tenderness = [
  { value: "No", name: "tenderness", classname: "scar" },
  { value: "Yes", name: "tenderness", classname: "scar" },
];
const tendernessreset = [{ name: "tenderness" }];
const tstatus = [
  { value: "Diffuse", name: "tstatus", classname: "scar" },
  { value: "Mild", name: "tstatus", classname: "scar" },
  { value: "Moderate", name: "tstatus", classname: "scar" },
  { value: "Severe", name: "tstatus", classname: "scar" },
];

const tstatusother = [{ name: "tstatus", classname: "scar" }];
const tstatusreset = [{ name: "tstatus" }];
const tposition = [
  { value: "First Ext Compartment", name: "tposition", classname: "exam1" },
  { value: "Distal Radius Joint", name: "tposition", classname: "exam1" },
  { value: "Distal Radius", name: "tposition", classname: "exam1" },
  { value: "Ulnar side", name: "tposition", classname: "scar" },
  { value: "DRUJ", name: "tposition", classname: "scar" },
  {
    value: "Transverse Carpal Ligament",
    name: "tposition",
    classname: "exam1",
  },
];
const tpositionother = [{ name: "tposition", classname: "scar" }];
const tpositionreset = [{ name: "tstatus" }];
const taspect = [
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
const taspectreset = [{ name: "taspect" }];
const taspectother = [{ name: "taspect", classname: "scar" }];
const rom = [
  { value: "Normal", name: "rom", classname: "scar" },
  { value: "Abnormal", name: "rom", classname: "scar" },
];
//rom reason
const other2 = [{ classname: "romreason" }];
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
const romself = [
  { value: "No", name: "romself", classname: "scar" },
  { value: "Yes", name: "romself", classname: "scar" },
];
const rompain = [
  { value: "Dorsiflexion", name: "rompain", classname: "scar" },
  { value: "Volar Flexion", name: "rompain", classname: "scar" },
  { value: "Ulnar Deviation", name: "rompain", classname: "exam" },
  { value: "Radial Deviation", name: "rompain", classname: "exam" },
  { value: "Pronation", name: "rompain", classname: "exam" },
  { value: "Supination", name: "rompain", classname: "exam" },
];
const romselfreset = [{ name: "romself" }];
const rompainreset = [{ name: "rompain" }];
const suboptimal = [{ value: "No", name: "instability", classname: "scar" }];
const suboptimal1 = [{ value: "Yes", name: "instability", classname: "scar" }];
const suboptimalreset = [{ name: "instability" }];
const suboptimal01 = [{ value: "No", name: "pooreffort", classname: "scar" }];
const suboptimal11 = [{ value: "Yes", name: "pooreffort", classname: "scar" }];
const suboptimalreset1 = [{ name: "pooreffort" }];
const suboptimaleffort = [
  { value: "No", name: "suboptimaleffort", classname: "scar" },
];
const suboptimaleffort1 = [
  { value: "Yes", name: "suboptimaleffort", classname: "scar" },
];
const suboptimaleffortreset = [{ name: "suboptimaleffort" }];
const atrophy = [{ value: "No", name: "atrophy", classname: "scar" }];
const atrophy1 = [{ value: "Yes", name: "atrophy", classname: "scar" }];
const atrophyreset = [{ name: "atrophy" }];

const symptom = [{ value: "No", name: "symptom", classname: "scar" }];
const symptom1 = [{ value: "Yes", name: "symptom", classname: "scar" }];
const symptomreset = [{ name: "symptom" }];
const orthopedic = [
  { value: "Performed", name: "orthopedic", classname: "scar" },
];
//orthopedic reason
const other4 = [{ classname: "orthopedic" }];
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
const negativepositive01 = [
  { value: "Negative", name: "tinel", classname: "scar" },
  { value: "Positive", name: "tinel", classname: "scar" },
];
//not performed for ulnar nerve
const other5 = [{ classname: "tinelreason" }];
const reason3 = [
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
const notperform3 = [
  { value: "Not-Performed", name: "tinel", classname: "exam" },
];
const examreset3 = [{ name: "tinelreason" }];
const exam1reset3 = [{ name: "tinel" }];
//phalen
const negativepositive02 = [
  { value: "Negative", name: "phalen", classname: "scar" },
  { value: "Positive", name: "phalen", classname: "scar" },
];
const other6 = [{ classname: "phalenreason" }];
const reason4 = [
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
const notperform4 = [
  { value: "Not-Performed", name: "phalen", classname: "exam" },
];
const examreset4 = [{ name: "phalenreason" }];
const exam1reset4 = [{ name: "phalen" }];
//Finkelstein test
const negativepositive03 = [
  { value: "Negative", name: "finkelstein", classname: "scar" },
  { value: "Positive", name: "finkelstein", classname: "scar" },
];
const other7 = [{ classname: "finkelsteinreason" }];
const reason5 = [
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
const notperform5 = [
  { value: "Not-Performed", name: "finkelstein", classname: "exam" },
];
const examreset5 = [{ name: "finkelsteinreason" }];
const exam1reset5 = [{ name: "finkelstein" }];
//watson test
const negativepositive04 = [
  { value: "Negative", name: "watson", classname: "scar" },
  { value: "Positive", name: "watson", classname: "scar" },
];
const other8 = [{ classname: "watsonreason" }];
const reason6 = [
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
const notperform6 = [
  { value: "Not-Performed", name: "watson", classname: "exam" },
];
const examreset6 = [{ name: "watsonreason" }];
const exam1reset6 = [{ name: "watson" }];
//Shuck test
const negativepositive05 = [
  { value: "Negative", name: "watson", classname: "scar" },
  { value: "Positive", name: "watson", classname: "scar" },
];
const other9 = [{ classname: "watsonreason" }];
const reason7 = [
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
const notperform7 = [
  { value: "Not-Performed", name: "watson", classname: "exam" },
];
const examreset7 = [{ name: "watsonreason" }];
const exam1reset7 = [{ name: "watson" }];
//strength
const decreasedbutton = [
  { value: "5/5", name: "strength", classname: "scar" },
  { value: "Decreased", name: "strength", classname: "scar" },
];
const strength = [
  { value: "Biceps", classname: "scar" },
  { value: "Triceps", classname: "scar" },
];
const sidevalues = [
  { value: "Right", classname: "scar", name: "sidevalue" },
  { value: "Left", classname: "scar", name: "sidevalue" },
  { value: "Bilateral", classname: "scar", name: "sidevalue" },
];
const sidereset = [
  { value: "Reset", name: "sidevalue", classname: "scarradio" },
];
const sidesv = [{ name: "Side" }];
const other10 = [{ classname: "csalllevel" }];
const decreasedreset = [
  { value: "Reset", name: "sidevalue", classname: "scarradio" },
];
const other11 = [{ classname: "strengthreason" }];
const reason8 = [
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
const notperform8 = [
  { value: "Not-Performed", name: "strength", classname: "exam" },
];
const examreset8 = [{ name: "strengthreason" }];
const exam1reset8 = [{ name: "strength" }];
//sensation
const decreasedbutton1 = [
  { value: "Intact", name: "sensation", classname: "scar" },
  { value: "Decreased", name: "sensation", classname: "scar" },
];
const strength1 = [
  { value: "Median nerve", classname: "exam1" },
  { value: "Ulnar nerve", classname: "exam1" },
  { value: "Radial nerve", classname: "exam1" },
];
const sidevalues1 = [
  { value: "Right", classname: "scar", name: "sidevalue" },
  { value: "Left", classname: "scar", name: "sidevalue" },
  { value: "Bilateral", classname: "scar", name: "sidevalue" },
];
const sidereset1 = [
  { value: "Reset", name: "sidevalue", classname: "scarradio" },
];
const sidesv1 = [{ name: "Side" }];
const other12 = [{ classname: "csalllevel" }];
const decreasedreset1 = [
  { value: "Reset", name: "sidevalue", classname: "scarradio" },
];
const other13 = [{ classname: "sensationreason" }];
const reason9 = [
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
const notperform9 = [
  { value: "Not-Performed", name: "sensation", classname: "exam" },
];
const examreset9 = [{ name: "sensationreason" }];
const exam1reset9 = [{ name: "sensation" }];
//Add details
const adddetails = [{ value: "No", name: "Add", classname: "scar" }];
const adddetails1 = [{ value: "Yes", name: "Add", classname: "scar" }];
const adddetailsreset = [{ name: "Add" }];
const leftwristlabel = [{ name: "Left Wrist" }];
const rightwristlabel = [{ name: "Right Wrist" }];
export const LeftWrist = () => (
  <Wrist
    pagelabel={leftwristlabel}
    aspect={aspect}
    scar={scar}
    appearance={appearance}
    status={status}
    appearanceother={appearanceother}
    appearancereset={appearancereset}
    statusother={statusother}
    statusreset={statusreset}
    scarreset={scarreset}
    aspectother={aspectother}
    aspectreset={aspectreset}
    exam={exam}
    nexam={nexam}
    nexampainscale={nexampainscale}
    other3={other3}
    reason1={reason1}
    notperform1={notperform1}
    examreset1={examreset1}
    exam1reset1={exam1reset1}
    nexamreset={nexamreset}
    fyesother={fyesother}
    ecchymosis1={ecchymosis1}
    deformity1={deformity1}
    edema1={edema1}
    redness1={redness1}
    effusion1={effusion1}
    erythema1={erythema1}
    swelling1={swelling1}
    fnoother={fnoother}
    ecchymosis={ecchymosis}
    deformity={deformity}
    edema={edema}
    swelling={swelling}
    fno={fno}
    fyes={fyes}
    redness={redness}
    erythema={erythema}
    effusion={effusion}
    tenderness={tenderness}
    tendernessreset={tendernessreset}
    tstatus={tstatus}
    tstatusother={tstatusother}
    tstatusreset={tstatusreset}
    tposition={tposition}
    tpositionother={tpositionother}
    tpositionreset={tpositionreset}
    taspect={taspect}
    taspectother={taspectother}
    taspectreset={taspectreset}
    rom={rom}
    other2={other2}
    reason={reason}
    examreset={examreset}
    exam1reset={exam1reset}
    notperform={notperform}
    romself={romself}
    rompain={rompain}
    rompainreset={rompainreset}
    romselfreset={romselfreset}
    suboptimal={suboptimal}
    suboptimal1={suboptimal1}
    suboptimalreset={suboptimalreset}
    suboptimal01={suboptimal01}
    suboptimal11={suboptimal11}
    suboptimalreset1={suboptimalreset1}
    symptom={symptom}
    symptom1={symptom1}
    symptomreset={symptomreset}
    exam1reset2={exam1reset2}
    examreset2={examreset2}
    notperform2={notperform2}
    reason2={reason2}
    orthopedic={orthopedic}
    other4={other4}
    negativepositive01={negativepositive01}
    other5={other5}
    notperform3={notperform3}
    exam1reset3={exam1reset3}
    examreset3={examreset3}
    reason3={reason3}
    negativepositive02={negativepositive02}
    other6={other6}
    exam1reset4={exam1reset4}
    examreset4={examreset4}
    notperform4={notperform4}
    reason4={reason4}
    adddetails={adddetails}
    adddetails1={adddetails1}
    adddetailsreset={adddetailsreset}
    other7={other7}
    notperform5={notperform5}
    exam1reset5={exam1reset5}
    examreset5={examreset5}
    reason5={reason5}
    negativepositive03={negativepositive03}
    other8={other8}
    notperform6={notperform6}
    exam1reset6={exam1reset6}
    examreset6={examreset6}
    reason6={reason6}
    negativepositive04={negativepositive04}
    other9={other9}
    notperform7={notperform7}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    reason7={reason7}
    negativepositive05={negativepositive05}
    decreasedbutton={decreasedbutton}
    strength={strength}
    sidevalues={sidevalues}
    sidereset={sidereset}
    sidesv={sidesv}
    other10={other10}
    decreasedreset={decreasedreset}
    other11={other11}
    reason8={reason8}
    notperform8={notperform8}
    examreset8={examreset8}
    exam1reset8={exam1reset8}
    decreasedbutton1={decreasedbutton1}
    strength1={strength1}
    sidevalues1={sidevalues1}
    sidereset1={sidereset1}
    sidesv1={sidesv1}
    other12={other12}
    decreasedreset1={decreasedreset1}
    other13={other13}
    reason9={reason9}
    notperform9={notperform9}
    examreset9={examreset9}
    exam1reset9={exam1reset9}
    suboptimaleffort={suboptimaleffort}
    suboptimaleffort1={suboptimaleffort1}
    suboptimaleffortreset={suboptimaleffortreset}
    atrophy={atrophy}
    atrophy1={atrophy1}
    atrophyreset={atrophyreset}
  />
);
export const RightWrist = () => (
  <Wrist
    pagelabel={rightwristlabel}
    aspect={aspect}
    scar={scar}
    appearance={appearance}
    status={status}
    appearanceother={appearanceother}
    appearancereset={appearancereset}
    statusother={statusother}
    statusreset={statusreset}
    scarreset={scarreset}
    aspectother={aspectother}
    aspectreset={aspectreset}
    exam={exam}
    nexam={nexam}
    nexampainscale={nexampainscale}
    other3={other3}
    reason1={reason1}
    notperform1={notperform1}
    examreset1={examreset1}
    exam1reset1={exam1reset1}
    nexamreset={nexamreset}
    fyesother={fyesother}
    ecchymosis1={ecchymosis1}
    deformity1={deformity1}
    edema1={edema1}
    redness1={redness1}
    effusion1={effusion1}
    erythema1={erythema1}
    swelling1={swelling1}
    fnoother={fnoother}
    ecchymosis={ecchymosis}
    deformity={deformity}
    edema={edema}
    swelling={swelling}
    fno={fno}
    fyes={fyes}
    redness={redness}
    erythema={erythema}
    effusion={effusion}
    tenderness={tenderness}
    tendernessreset={tendernessreset}
    tstatus={tstatus}
    tstatusother={tstatusother}
    tstatusreset={tstatusreset}
    tposition={tposition}
    tpositionother={tpositionother}
    tpositionreset={tpositionreset}
    taspect={taspect}
    taspectother={taspectother}
    taspectreset={taspectreset}
    rom={rom}
    other2={other2}
    reason={reason}
    examreset={examreset}
    exam1reset={exam1reset}
    notperform={notperform}
    romself={romself}
    rompain={rompain}
    rompainreset={rompainreset}
    romselfreset={romselfreset}
    suboptimal={suboptimal}
    suboptimal1={suboptimal1}
    suboptimalreset={suboptimalreset}
    suboptimal01={suboptimal01}
    suboptimal11={suboptimal11}
    suboptimalreset1={suboptimalreset1}
    symptom={symptom}
    symptom1={symptom1}
    symptomreset={symptomreset}
    exam1reset2={exam1reset2}
    examreset2={examreset2}
    notperform2={notperform2}
    reason2={reason2}
    orthopedic={orthopedic}
    other4={other4}
    negativepositive01={negativepositive01}
    other5={other5}
    notperform3={notperform3}
    exam1reset3={exam1reset3}
    examreset3={examreset3}
    reason3={reason3}
    negativepositive02={negativepositive02}
    other6={other6}
    exam1reset4={exam1reset4}
    examreset4={examreset4}
    notperform4={notperform4}
    reason4={reason4}
    adddetails={adddetails}
    adddetails1={adddetails1}
    adddetailsreset={adddetailsreset}
    other7={other7}
    notperform5={notperform5}
    exam1reset5={exam1reset5}
    examreset5={examreset5}
    reason5={reason5}
    negativepositive03={negativepositive03}
    other8={other8}
    notperform6={notperform6}
    exam1reset6={exam1reset6}
    examreset6={examreset6}
    reason6={reason6}
    negativepositive04={negativepositive04}
    other9={other9}
    notperform7={notperform7}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    reason7={reason7}
    negativepositive05={negativepositive05}
    decreasedbutton={decreasedbutton}
    strength={strength}
    sidevalues={sidevalues}
    sidereset={sidereset}
    sidesv={sidesv}
    other10={other10}
    decreasedreset={decreasedreset}
    other11={other11}
    reason8={reason8}
    notperform8={notperform8}
    examreset8={examreset8}
    exam1reset8={exam1reset8}
    decreasedbutton1={decreasedbutton1}
    strength1={strength1}
    sidevalues1={sidevalues1}
    sidereset1={sidereset1}
    sidesv1={sidesv1}
    other12={other12}
    decreasedreset1={decreasedreset1}
    other13={other13}
    reason9={reason9}
    notperform9={notperform9}
    examreset9={examreset9}
    exam1reset9={exam1reset9}
    suboptimaleffort={suboptimaleffort}
    suboptimaleffort1={suboptimaleffort1}
    suboptimaleffortreset={suboptimaleffortreset}
    atrophy={atrophy}
    atrophy1={atrophy1}
    atrophyreset={atrophyreset}
  />
);
