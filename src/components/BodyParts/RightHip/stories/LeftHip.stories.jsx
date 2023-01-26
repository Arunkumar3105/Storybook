import Hip from "../Hip";
export default {
  title: "BodyParts/Hip",
  component: Hip,
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
const appearance = [
  { value: "Scar", name: "appearance", classname: "scar" },
  { value: "Surgical scar", name: "appearance", classname: "exam" },
  { value: "Incision", name: "appearance", classname: "scar" },
  { value: "Portal", name: "appearance", classname: "scar" },
  { value: "Arthroscopic scar", name: "appearance", classname: "exam1" },
  { value: "Laceration", name: "appearance", classname: "scar" },
];
const status = [
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
  { value: "ASIS", name: "tposition", classname: "scar" },
  { value: "Anterior Groin", name: "tposition", classname: "exam1" },
  {
    value: "Greater trochanteric joint",
    name: "tposition",
    classname: "exam1",
  },
  { value: "Flexors", name: "tposition", classname: "scar" },
  { value: "Gluteal", name: "tposition", classname: "scar" },
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
//
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
  { value: "Flexion", name: "rompain", classname: "scar" },
  { value: "Extension", name: "rompain", classname: "scar" },
  { value: "Abduction", name: "rompain", classname: "scar" },
  { value: "Adduction", name: "rompain", classname: "scar" },
  { value: "External Rotation", name: "rompain", classname: "exam1" },
  { value: "Internal Rotation", name: "rompain", classname: "exam1" },
];
const romselfreset = [{ name: "romself" }];
const rompainreset = [{ name: "rompain" }];
const suboptimal = [{ value: "No", name: "instability", classname: "scar" }];
const suboptimal1 = [{ value: "Yes", name: "instability", classname: "scar" }];
const suboptimalreset = [{ name: "instability" }];
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
//Faber
const negativepositive01 = [
  { value: "Negative", name: "Faber", classname: "scar" },
  { value: "Positive", name: "Faber", classname: "scar" },
];
//not performed for faber
const other5 = [{ classname: "Faberreason" }];
const reason3 = [
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
const notperform3 = [
  { value: "Not-Performed", name: "Faber", classname: "exam" },
];
const examreset3 = [{ name: "Faberreason" }];
const exam1reset3 = [{ name: "Faber" }];
//trendelenburg
const negativepositive02 = [
  { value: "Negative", name: "trendelenburg", classname: "scar" },
  { value: "Positive", name: "trendelenburg", classname: "scar" },
];
const other6 = [{ classname: "trendelenburgreason" }];
const reason4 = [
  { value: "surgery", name: "trendelenburgreason", classname: "scar" },
  {
    value: "Complaint of pain",
    name: "trendelenburgreason",
    classname: "exam1",
  },
  { value: "Non-cooperation", name: "trendelenburgreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "trendelenburgreason",
    classname: "exam1",
  },
  { value: "Brace", name: "trendelenburgreason", classname: "scar" },
];
const notperform4 = [
  { value: "Not-Performed", name: "trendelenburg", classname: "exam" },
];
const examreset4 = [{ name: "trendelenburgreason" }];
const exam1reset4 = [{ name: "trendelenburg" }];

const adddetails = [{ value: "No", name: "Add", classname: "scar" }];
const adddetails1 = [{ value: "Yes", name: "Add", classname: "scar" }];
const adddetailsreset = [{ name: "Add" }];
const lefthiplabel = [{ name: "Left Hip" }];
const righthiplabel = [{ name: "Right Hip" }];
export const LeftHip = () => (
  <Hip
    pagelabel={lefthiplabel}
    aspect={aspect}
    scar={scar}
    scarreset={scarreset}
    appearance={appearance}
    status={status}
    aspectother={aspectother}
    appearanceother={appearanceother}
    statusreset={statusreset}
    appearancereset={appearancereset}
    statusother={statusother}
    aspectreset={aspectreset}
    exam={exam}
    nexam={nexam}
    nexampainscale={nexampainscale}
    examreset1={examreset1}
    other3={other3}
    reason1={reason1}
    exam1reset1={exam1reset1}
    notperform1={notperform1}
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
    tpositionreset={tpositionreset}
    tpositionother={tpositionother}
    tposition={tposition}
    taspect={taspect}
    taspectreset={taspectreset}
    taspectother={taspectother}
    rom={rom}
    notperform={notperform}
    exam1reset={exam1reset}
    examreset={examreset}
    reason={reason}
    other2={other2}
    romself={romself}
    rompain={rompain}
    romselfreset={romselfreset}
    rompainreset={rompainreset}
    suboptimalreset={suboptimalreset}
    suboptimal1={suboptimal1}
    suboptimal={suboptimal}
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
    suboptimaleffort={suboptimaleffort}
    suboptimaleffort1={suboptimaleffort1}
    suboptimaleffortreset={suboptimaleffortreset}
    atrophy={atrophy}
    atrophy1={atrophy1}
    atrophyreset={atrophyreset}
  />
);
export const RightHip = () => (
  <Hip
    pagelabel={righthiplabel}
    aspect={aspect}
    scar={scar}
    scarreset={scarreset}
    appearance={appearance}
    status={status}
    aspectother={aspectother}
    appearanceother={appearanceother}
    statusreset={statusreset}
    appearancereset={appearancereset}
    statusother={statusother}
    aspectreset={aspectreset}
    exam={exam}
    nexam={nexam}
    nexampainscale={nexampainscale}
    examreset1={examreset1}
    other3={other3}
    reason1={reason1}
    exam1reset1={exam1reset1}
    notperform1={notperform1}
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
    tpositionreset={tpositionreset}
    tpositionother={tpositionother}
    tposition={tposition}
    taspect={taspect}
    taspectreset={taspectreset}
    taspectother={taspectother}
    rom={rom}
    notperform={notperform}
    exam1reset={exam1reset}
    examreset={examreset}
    reason={reason}
    other2={other2}
    romself={romself}
    rompain={rompain}
    romselfreset={romselfreset}
    rompainreset={rompainreset}
    suboptimalreset={suboptimalreset}
    suboptimal1={suboptimal1}
    suboptimal={suboptimal}
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
    suboptimaleffort={suboptimaleffort}
    suboptimaleffort1={suboptimaleffort1}
    suboptimaleffortreset={suboptimaleffortreset}
    atrophy={atrophy}
    atrophy1={atrophy1}
    atrophyreset={atrophyreset}
  />
);
