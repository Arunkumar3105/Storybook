import Knee from "../Knee";
export default {
  title: "BodyParts/Knee",
  component: Knee,
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
const other3 = [{ name: "examreason" }];
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
  { value: "Medial joint Line", name: "tposition", classname: "exam1" },
  { value: "Lateral joint Line", name: "tposition", classname: "exam1" },
  { value: "Pop Fossa", name: "tposition", classname: "scar" },
  { value: "Pes Bursa", name: "tposition", classname: "scar" },
  { value: "Quadriceps", name: "tposition", classname: "scar" },
  { value: "Lateral Cruciate Ligament", name: "tposition", classname: "exam1" },
  { value: "Medial Cruciate Ligament", name: "tposition", classname: "exam1" },
  { value: "Tibia", name: "tposition", classname: "scar" },
  { value: "Tub", name: "tposition", classname: "scar" },
  { value: "Patella", name: "tposition", classname: "scar" },
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
  { value: "Flexion", name: "rompain", classname: "scar" },
  { value: "Extension", name: "rompain", classname: "scar" },
];
const romselfreset = [{ name: "romself" }];
const rompainreset = [{ name: "rompain" }];
const alignmentreset = [{ name: "alignment" }];
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
//lachman test
const negativepositive = [
  { value: "Negative", name: "lachman", classname: "scar" },
];
const negativepositive1 = [
  { value: "Positive", name: "lachman", classname: "scar" },
];

const other5 = [{ name: "lachmanreason" }];
const reason3 = [
  { value: "surgery", name: "lachmanreason", classname: "scar" },
  { value: "Complaint of pain", name: "lachmanreason", classname: "exam1" },
  { value: "Non-cooperation", name: "lachmanreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "lachmanreason",
    classname: "exam1",
  },
  { value: "Brace", name: "lachmanreason", classname: "scar" },
];
const notperform3 = [
  { value: "Not-Performed", name: "lachman", classname: "exam" },
];
const examreset3 = [{ name: "lachmanreason" }];
const exam1reset3 = [{ name: "lachman" }];
//anterior drawer test
const negativepositive01 = [
  { value: "Negative", name: "anterior", classname: "scar" },
];
const negativepositive11 = [
  { value: "Positive", name: "anterior", classname: "scar" },
];
const other6 = [{ name: "anteriorreason" }];
const reason4 = [
  { value: "surgery", name: "anteriorreason", classname: "scar" },
  { value: "Complaint of pain", name: "anteriorreason", classname: "exam1" },
  { value: "Non-cooperation", name: "anteriorreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "anteriorreason",
    classname: "exam1",
  },
  { value: "Brace", name: "anteriorreason", classname: "scar" },
];
const notperform4 = [
  { value: "Not-Performed", name: "anterior", classname: "exam" },
];
const examreset4 = [{ name: "anteriorreason" }];
const exam1reset4 = [{ name: "anterior" }];
//opening to valgus /varus
const negativepositive02 = [
  { value: "Negative", name: "valgus", classname: "scar" },
];
const negativepositive12 = [
  { value: "Positive", name: "valgus", classname: "scar" },
];
const other7 = [{ name: "valgusreason" }];
const reason5 = [
  { value: "surgery", name: "valgusreason", classname: "scar" },
  { value: "Complaint of pain", name: "valgusreason", classname: "exam1" },
  { value: "Non-cooperation", name: "valgusreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "valgusreason",
    classname: "exam1",
  },
  { value: "Brace", name: "valgusreason", classname: "scar" },
];
const notperform5 = [
  { value: "Not-Performed", name: "valgus", classname: "exam" },
];
const examreset5 = [{ name: "valgusreason" }];
const exam1reset5 = [{ name: "valgus" }];
//patellar apprehension test
const negativepositive03 = [
  { value: "Negative", name: "patellar", classname: "scar" },
];
const negativepositive13 = [
  { value: "Positive", name: "patellar", classname: "scar" },
];
const other8 = [{ classname: "patellarreason" }];
const reason6 = [
  { value: "surgery", name: "patellarreason", classname: "scar" },
  { value: "Complaint of pain", name: "patellarreason", classname: "exam1" },
  { value: "Non-cooperation", name: "patellarreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "patellarreason",
    classname: "exam1",
  },
  { value: "Brace", name: "patellarreason", classname: "scar" },
];
const notperform6 = [
  { value: "Not-Performed", name: "patellar", classname: "exam" },
];
const examreset6 = [{ name: "patellarreason" }];
const exam1reset6 = [{ name: "patellar" }];
//patellar grind test
const negativepositive04 = [
  { value: "Negative", name: "patellargrind", classname: "scar" },
];
const negativepositive14 = [
  { value: "Positive", name: "patellargrind", classname: "scar" },
];
const other9 = [{ classname: "patellargrindreason" }];
const reason7 = [
  { value: "surgery", name: "patellargrindreason", classname: "scar" },
  {
    value: "Complaint of pain",
    name: "patellargrindreason",
    classname: "exam1",
  },
  { value: "Non-cooperation", name: "patellargrindreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "patellargrindreason",
    classname: "exam1",
  },
  { value: "Brace", name: "patellargrindreason", classname: "scar" },
];
const notperform7 = [
  { value: "Not-Performed", name: "patellargrind", classname: "exam" },
];
const examreset7 = [{ name: "patellargrindreason" }];
const exam1reset7 = [{ name: "patellargrind" }];
//J sign test
const negativepositive05 = [
  { value: "Negative", name: "jsign", classname: "scar" },
];
const negativepositive15 = [
  { value: "Positive", name: "jsign", classname: "scar" },
];
const other14 = [{ classname: "jsignreason" }];
const reason10 = [
  { value: "surgery", name: "jsignreason", classname: "scar" },
  { value: "Complaint of pain", name: "jsignreason", classname: "exam1" },
  { value: "Non-cooperation", name: "jsignreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "jsignreason",
    classname: "exam1",
  },
  { value: "Brace", name: "jsignreason", classname: "scar" },
];
const notperform10 = [
  { value: "Not-Performed", name: "jsign", classname: "exam" },
];
const examreset10 = [{ name: "jsignreason" }];
const exam1reset10 = [{ name: "jsign" }];
//mcmurry test
const negativepositive06 = [
  { value: "Negative", name: "mcmurry", classname: "scar" },
];
const negativepositive16 = [
  { value: "Positive", name: "mcmurry", classname: "scar" },
];
const other15 = [{ classname: "mcmurryreason" }];
const reason11 = [
  { value: "surgery", name: "mcmurryreason", classname: "scar" },
  { value: "Complaint of pain", name: "mcmurryreason", classname: "exam1" },
  { value: "Non-cooperation", name: "mcmurryreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "mcmurryreason",
    classname: "exam1",
  },
  { value: "Brace", name: "mcmurryreason", classname: "scar" },
];
const notperform11 = [
  { value: "Not-Performed", name: "mcmurry", classname: "exam" },
];
const examreset11 = [{ name: "mcmurryreason" }];
const exam1reset11 = [{ name: "mcmurry" }];
//strength

const negativepositive07 = [
  { value: "5/5", name: "strength", classname: "scar" },
];
const negativepositive17 = [
  { value: "Decreased", name: "strength", classname: "scar" },
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
const adddetails = [{ value: "No", name: "Add", classname: "scar" }];
const adddetails1 = [{ value: "Yes", name: "Add", classname: "scar" }];
const adddetailsreset = [{ name: "Add" }];
const leftkneelabel = [{ name: "Left Knee" }];
const rightkneelabel = [{ name: "Right Knee" }];

export const Leftknee = () => (
  <Knee
    pagelabel={leftkneelabel}
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
    alignmentreset={alignmentreset}
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
    negativepositive={negativepositive}
    negativepositive1={negativepositive1}
    other5={other5}
    notperform3={notperform3}
    exam1reset3={exam1reset3}
    examreset3={examreset3}
    reason3={reason3}
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
    other8={other8}
    notperform6={notperform6}
    exam1reset6={exam1reset6}
    examreset6={examreset6}
    reason6={reason6}
    negativepositive03={negativepositive03}
    negativepositive13={negativepositive13}
    other9={other9}
    notperform7={notperform7}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    reason7={reason7}
    negativepositive04={negativepositive04}
    negativepositive14={negativepositive14}
    other14={other14}
    notperform10={notperform10}
    exam1reset10={exam1reset10}
    examreset10={examreset10}
    reason10={reason10}
    negativepositive05={negativepositive05}
    negativepositive15={negativepositive15}
    other15={other15}
    notperform11={notperform11}
    exam1reset11={exam1reset11}
    examreset11={examreset11}
    reason11={reason11}
    negativepositive06={negativepositive06}
    negativepositive16={negativepositive16}
    negativepositive07={negativepositive07}
    negativepositive17={negativepositive17}
    other11={other11}
    exam1reset8={exam1reset8}
    examreset8={examreset8}
    reason8={reason8}
    notperform8={notperform8}
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
export const Rightknee = () => (
  <Knee
    pagelabel={rightkneelabel}
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
    alignmentreset={alignmentreset}
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
    negativepositive={negativepositive}
    negativepositive1={negativepositive1}
    other5={other5}
    notperform3={notperform3}
    exam1reset3={exam1reset3}
    examreset3={examreset3}
    reason3={reason3}
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
    other8={other8}
    notperform6={notperform6}
    exam1reset6={exam1reset6}
    examreset6={examreset6}
    reason6={reason6}
    negativepositive03={negativepositive03}
    negativepositive13={negativepositive13}
    other9={other9}
    notperform7={notperform7}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    reason7={reason7}
    negativepositive04={negativepositive04}
    negativepositive14={negativepositive14}
    other14={other14}
    notperform10={notperform10}
    exam1reset10={exam1reset10}
    examreset10={examreset10}
    reason10={reason10}
    negativepositive05={negativepositive05}
    negativepositive15={negativepositive15}
    other15={other15}
    notperform11={notperform11}
    exam1reset11={exam1reset11}
    examreset11={examreset11}
    reason11={reason11}
    negativepositive06={negativepositive06}
    negativepositive16={negativepositive16}
    negativepositive07={negativepositive07}
    negativepositive17={negativepositive17}
    other11={other11}
    exam1reset8={exam1reset8}
    examreset8={examreset8}
    reason8={reason8}
    notperform8={notperform8}
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
