import RightElbow from "../RightElbow";

export default {
  title: "BodyParts/RightElbow",
  component: "RightElbow",
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

const aspectreset = [{ name: "aspect" }];
const Fyes = [{ name: "Findyes" }];
const Fno = [{ name: "Findno" }];
const Swelling = [{ name: "finding" }];
const Erythema = [{ name: "Erythema" }];
const Effusion = [{ name: "Effusion" }];
const Redness = [{ name: "Redness" }];
const Edema = [{ name: "Edema" }];
const Deformity = [{ name: "Deformity" }];
const Ecchymosis = [{ name: "Ecchymosis" }];
const FNoother = [{ name: "FindNother", classname: "scar" }];

const Swelling1 = [{ name: "finding" }];
const Erythema1 = [{ name: "Erythema" }];
const Effusion1 = [{ name: "Effusion" }];
const Redness1 = [{ name: "Redness" }];
const Edema1 = [{ name: "Edema" }];
const Deformity1 = [{ name: "Deformity" }];
const Ecchymosis1 = [{ name: "Ecchymosis" }];
const FyesOther = [{ name: "FindNother", classname: "scar" }];
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
const Tendernessreset = [{ name: "tenderness" }];
const TstatusOther = [{ name: "tstatus", classname: "scar" }];
const Tstatusreset = [{ name: "tstatus" }];
const Tposition = [
  { value: "Epicondyle joint", name: "tposition", classname: "exam1" },
  { value: "Olecranon", name: "tposition", classname: "scar" },
  { value: "Radial Head", name: "tposition", classname: "exam1" },
  { value: "Biceps", name: "tposition", classname: "scar" },
  { value: "Triceps", name: "tposition", classname: "scar" },
];
const TpositionOther = [{ name: "tposition", classname: "scar" }];
const Tpositionreset = [{ name: "tstatus" }];
const Taspect = [
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
const Taspectreset = [{ name: "taspect" }];
const TaspectOther = [{ name: "taspect", classname: "scar" }];
const Rom = [
  { value: "Normal", name: "rom", classname: "scar" },
  { value: "Abnormal", name: "rom", classname: "scar" },
];
//
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

export const Rightelbow = () => (
  <RightElbow
    aspect={aspect}
    Scar={Scar}
    Scarreset={Scarreset}
    Appearance={Appearance}
    Status={Status}
    aspectOther={aspectOther}
    AppearanceOther={AppearanceOther}
    Statusreset={Statusreset}
    Appearancereset={Appearancereset}
    StatusOther={StatusOther}
    aspectreset={aspectreset}
    FyesOther={FyesOther}
    Ecchymosis1={Ecchymosis1}
    Deformity1={Deformity1}
    Edema1={Edema1}
    Redness1={Redness1}
    Effusion1={Effusion1}
    Erythema1={Erythema1}
    Swelling1={Swelling1}
    FNoother={FNoother}
    Ecchymosis={Ecchymosis}
    Deformity={Deformity}
    Edema={Edema}
    Swelling={Swelling}
    Fno={Fno}
    Fyes={Fyes}
    Redness={Redness}
    Erythema={Erythema}
    Effusion={Effusion}
    Tenderness={Tenderness}
    Tendernessreset={Tendernessreset}
    Tstatus={Tstatus}
    TstatusOther={TstatusOther}
    Tstatusreset={Tstatusreset}
    Tpositionreset={Tpositionreset}
    TpositionOther={TpositionOther}
    Tposition={Tposition}
    Taspect={Taspect}
    Taspectreset={Taspectreset}
    TaspectOther={TaspectOther}
    Rom={Rom}
    Notperform={Notperform}
    exam1reset={exam1reset}
    examreset={examreset}
    Reason={Reason}
    other2={other2}
  />
);
