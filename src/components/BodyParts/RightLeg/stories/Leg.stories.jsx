import Leg from "../Leg";
export default {
  title: "BodyParts/Leg",
  component: Leg,
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
  { value: "Proximal", name: "tposition", classname: "scar" },
  { value: "Mid", name: "tposition", classname: "scar" },
  { value: "Distal", name: "tposition", classname: "scar" },
  {
    value: "Calf",
    name: "tposition",
    classname: "scar",
  },
  { value: "Fibula", name: "tposition", classname: "scar" },
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
const other2 = [{ name: "romreason" }];
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
  { value: "Plantarflexion", name: "rompain", classname: "scar" },
  { value: "Eversion", name: "rompain", classname: "scar" },
  { value: "Inversion", name: "rompain", classname: "scar" },
];
const romselfreset = [{ name: "romself" }];
const rompainreset = [{ name: "rompain" }];
const suboptimal = [{ value: "No", name: "pittingedema", classname: "scar" }];
const suboptimal1 = [{ value: "Yes", name: "pittingedema", classname: "scar" }];
const suboptimalreset = [{ name: "pittingedema" }];
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
const other4 = [{ name: "orthopedic" }];
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
//Homans Test
const other5 = [{ name: "homansreason" }];
const reason3 = [
  { value: "surgery", name: "homansreason", classname: "scar" },
  { value: "Complaint of pain", name: "homansreason", classname: "exam1" },
  { value: "Non-cooperation", name: "homansreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "homansreason",
    classname: "exam1",
  },
  { value: "Brace", name: "homansreason", classname: "scar" },
];
const notperform3 = [
  { value: "Not-Performed", name: "homans", classname: "exam" },
];
const examreset3 = [{ name: "homansreason" }];
const exam1reset3 = [{ name: "homans" }];
const negativepositive = [
  { value: "Negative", name: "homans", classname: "scar" },
];
const negativepositive1 = [
  { value: "Positive", name: "homans", classname: "scar" },
];
//Compartment sign test
const other6 = [{ classname: "compartmentsignreason" }];
const reason4 = [
  { value: "surgery", name: "compartmentsignreason", classname: "scar" },
  {
    value: "Complaint of pain",
    name: "compartmentsignreason",
    classname: "exam1",
  },
  {
    value: "Non-cooperation",
    name: "compartmentsignreason",
    classname: "exam1",
  },
  {
    value: "Not wish to perform",
    name: "compartmentsignreason",
    classname: "exam1",
  },
  { value: "Brace", name: "compartmentsignreason", classname: "scar" },
];
const notperform4 = [
  { value: "Not-Performed", name: "compartmentsign", classname: "exam" },
];
const examreset4 = [{ name: "compartmentsignreason" }];
const exam1reset4 = [{ name: "compartmentsign" }];
const negativepositive01 = [
  { value: "Negative", name: "compartmentsign", classname: "scar" },
];
const negativepositive11 = [
  { value: "Positive", name: "compartmentsign", classname: "scar" },
];
//strength
const other7 = [{ name: "strengthreason" }];
const reason5 = [
  { value: "surgery", name: "strengthreason", classname: "scar" },
  { value: "Complaint of pain", name: "strengthreason", classname: "exam1" },
  { value: "Non-cooperation", name: "strengthreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "strengthreason",
    classname: "exam1",
  },
  { value: "Brace", name: "strengthreason", classname: "scar" },
];
const notperform5 = [
  { value: "Not-Performed", name: "strength", classname: "exam" },
];
const examreset5 = [{ name: "strengthreason" }];
const exam1reset5 = [{ name: "strength" }];
const negativepositive02 = [
  { value: "5/5", name: "strength", classname: "scar" },
];
const negativepositive12 = [
  { value: "Decreased", name: "strength", classname: "scar" },
];
const adddetails = [{ value: "No", name: "Add", classname: "scar" }];
const adddetails1 = [{ value: "Yes", name: "Add", classname: "scar" }];
const adddetailsreset = [{ name: "Add" }];
const leftleglabel = [{ name: "Left Leg" }];
const rightleglabel = [{ name: "Right Leg" }];

export const LeftLeg = () => (
  <Leg
    pagelabel={leftleglabel}
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
    other5={other5}
    notperform3={notperform3}
    exam1reset3={exam1reset3}
    examreset3={examreset3}
    reason3={reason3}
    negativepositive={negativepositive}
    negativepositive1={negativepositive1}
    negativepositive01={negativepositive01}
    negativepositive11={negativepositive11}
    other6={other6}
    exam1reset4={exam1reset4}
    examreset4={examreset4}
    notperform4={notperform4}
    reason4={reason4}
    other7={other7}
    notperform5={notperform5}
    exam1reset5={exam1reset5}
    examreset5={examreset5}
    reason5={reason5}
    negativepositive02={negativepositive02}
    negativepositive12={negativepositive12}
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
export const RightLeg = () => (
  <Leg
    pagelabel={rightleglabel}
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
    other5={other5}
    notperform3={notperform3}
    exam1reset3={exam1reset3}
    examreset3={examreset3}
    reason3={reason3}
    negativepositive={negativepositive}
    negativepositive1={negativepositive1}
    negativepositive01={negativepositive01}
    negativepositive11={negativepositive11}
    other6={other6}
    exam1reset4={exam1reset4}
    examreset4={examreset4}
    notperform4={notperform4}
    reason4={reason4}
    other7={other7}
    notperform5={notperform5}
    exam1reset5={exam1reset5}
    examreset5={examreset5}
    reason5={reason5}
    negativepositive02={negativepositive02}
    negativepositive12={negativepositive12}
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
