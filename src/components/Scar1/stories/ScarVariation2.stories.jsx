import ScarVariation2 from "../ScarVariation2";

// import Levelall from "../LevelAll"
// import Lsindividual from "../individual"
// import LSlevel from "./Level"
export default {
  title: "Scar1/Exam",
  component: ScarVariation2,
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
const level = [
  { value: "C1" },
  { value: "C2" },
  { value: "C3" },
  { value: "C4" },
  { value: "C5" },
  { value: "C6" },
  { value: "C7" },
];
const AppearanceOther = [{ name: "appearance", classname: "scar" }];
const StatusOther = [{ name: "status", classname: "scar" }];
const aspectOther = [{ name: "aspect", classname: "scar" }];
const Scarreset = [{ name: "csscar" }];
const Appearancereset = [{ name: "appearance" }];
const Statusreset = [{ name: "status" }];
const Sidereset = [{ name: "side" }];
const aspectreset = [{ name: "aspect" }];

// const Template = ({}) => (

export const Scarvariation2 = () => (
  <span>
    <ScarVariation2
      aspect={aspect}
      Status={Status}
      Appearance={Appearance}
      Scar={Scar}
      aspectreset={aspectreset}
      Sidereset={Sidereset}
      Statusreset={Statusreset}
      Appearancereset={Appearancereset}
      Scarreset={Scarreset}
      aspectOther={aspectOther}
      StatusOther={StatusOther}
      AppearanceOther={AppearanceOther}
      Side={Side}
    />
  </span>
);
