import Chest from "../Chest";
export default {
  title: "BodyParts/Chest",
  component: Chest,
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

const appearanceother = [{ name: "appearance", classname: "scar" }];
const statusother = [{ name: "status", classname: "scar" }];
const aspectother = [{ name: "aspect", classname: "scar" }];
const appearancereset = [{ name: "appearance" }];
const statusreset = [{ name: "status" }];
const sidereset = [{ name: "side" }];
const aspectreset = [{ name: "aspect" }];
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
const tside = [
  { value: "Right", name: "tside", classname: "scar" },
  { value: "Left", name: "tside", classname: "scar" },
  { value: "Bilateral", name: "tside", classname: "scar" },
];
const tendernessreset = [{ name: "tenderness" }];
const tstatusreset = [{ name: "tstatus" }];
const tstatusother = [{ name: "tstatus", classname: "scar" }];

const tsidereset = [{ name: "tstatus" }];
const exam = [{ value: "Performed", name: "exam", classname: "scar" }];
const nexam = [
  { value: "Normal", name: "nexam", classname: "scar" },
  { value: "Abnormal", name: "nexam", classname: "scar" },
];
const nexampainscale = [{ name: "nexam" }];
const nexamreset = [{ name: "nexam" }];
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
const ecchymosis = [{ value: "No", name: "Ecchymosis ", classname: "scar" }];
const ecchymosis1 = [{ value: "Yes", name: "Ecchymosis ", classname: "scar" }];
const ecchymosisreset = [{ name: "Ecchymosis " }];
const stable = [{ value: "No", name: "Stable ", classname: "scar" }];
const stable1 = [{ value: "Yes", name: "Stable ", classname: "scar" }];
const stablereset = [{ name: "Stable " }];
const expansion = [{ value: "No", name: "Expansion ", classname: "scar" }];
const expansion1 = [{ value: "Yes", name: "Expansion  ", classname: "scar" }];
const expansionreset = [{ name: "Expansion  " }];
const reflex1 = [{ name: "Zero", value: "Yes" }];
const reflexsvalue = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const reflexsreset = [{ name: "Sidevalue" }];
const reflexside = [{ name: "Side" }];
const zeroreset = [{ name: "Zero" }];
const crepitus = [{ value: "No", name: "csscar", classname: "scar" }];
//Sternum
const reflex2 = [{ name: "Zero", value: "Yes" }];
const reflexsvalue1 = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const reflexsreset1 = [{ name: "Sidevalue" }];
const reflexside1 = [{ name: "Side" }];
const zeroreset1 = [{ name: "Zero" }];
const sternum = [{ value: "No", name: "csscar", classname: "scar" }];
//Sternoclay
const reflex3 = [{ name: "Zero", value: "Yes" }];
const reflexSvalue2 = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const reflexSreset2 = [{ name: "Sidevalue" }];
const reflexside2 = [{ name: "Side" }];
const zeroreset2 = [{ name: "Zero" }];
const sternoclay = [{ value: "No", name: "csscar", classname: "scar" }];

export const Ribs = () => (
  <Chest
    scar={scar}
    appearance={appearance}
    status={status}
    side={side}
    aspect={aspect}
    aspectother={aspectother}
    appearanceother={appearanceother}
    statusother={statusother}
    scarreset={scarreset}
    appearancereset={appearancereset}
    statusreset={statusreset}
    aspectreset={aspectreset}
    sidereset={sidereset}
    tenderness={tenderness}
    tstatus={tstatus}
    tstatusother={tstatusother}
    tside={tside}
    tendernessreset={tendernessreset}
    tstatusreset={tstatusreset}
    tsidereset={tsidereset}
    exam={exam}
    nexam={nexam}
    nexampainscale={nexampainscale}
    nexamreset={nexamreset}
    other3={other3}
    reason1={reason1}
    notperform1={notperform1}
    exam1reset1={exam1reset1}
    examreset1={examreset1}
    ecchymosis={ecchymosis}
    ecchymosis1={ecchymosis1}
    ecchymosisreset={ecchymosisreset}
    stable={stable}
    stable1={stable1}
    stablereset={stablereset}
    expansion={expansion}
    expansion1={expansion1}
    expansionreset={expansionreset}
    reflex1={reflex1}
    reflexside={reflexside}
    reflexsreset={reflexsreset}
    reflexsvalue={reflexsvalue}
    zeroreset={zeroreset}
    crepitus={crepitus}
    reflex2={reflex2}
    reflexside1={reflexside1}
    reflexsreset1={reflexsreset1}
    reflexsvalue1={reflexsvalue1}
    zeroreset1={zeroreset1}
    sternum={sternum}
    reflex3={reflex3}
    reflexside2={reflexside2}
    reflexsreset2={reflexSreset2}
    reflexsvalue2={reflexSvalue2}
    zeroreset2={zeroreset2}
    sternoclay={sternoclay}
  />
);
