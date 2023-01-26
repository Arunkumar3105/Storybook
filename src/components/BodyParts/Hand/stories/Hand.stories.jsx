import Hand from "../Hand";

export default {
  title: "BodyParts/Hands",
  component: Hand,
};
// Label
const lefthand = [{ label: "Left Hand" }];
const righthand = [{ label: "Right Hand" }];
// Scar
const aspect = [
  // Scar Aspect values
  { value: "Anterior", name: "RHaspect", classname: "scar" },
  { value: "Posterior", name: "RHaspect", classname: "scar" },
  { value: "Medial", name: "RHaspect", classname: "scar" },
  { value: "Lateral", name: "RHaspect", classname: "scar" },
];
const aspectOther = [{ name: "RHaspect", otherclassname: "scar" }];
const aspectreset = [{ name: "RHaspect" }];
const scar = [
  // Scar values
  { value: "No", name: "RHscar", classname: "scar" },
  { value: "Yes", name: "RHscar", classname: "scar" },
];
const scarreset = [{ name: "RHscar" }];
const appearance = [
  // Scar Appearance
  { value: "Scar", name: "RHappearance", classname: "scar" },
  { value: "Surgical scar", name: "RHappearance", classname: "scar" },
  { value: "Incision", name: "RHappearance", classname: "scar" },
  { value: "Portal", name: "RHappearance", classname: "scar" },
  { value: "Laceration", name: "RHappearance", classname: "scar" },
];
const appearanceOther = [{ name: "RHappearance", otherclassname: "scar" }];
const appearancereset = [{ name: "RHappearance" }];

const status = [
  // Scar Status
  { value: "Well-healed", name: "RHstatus", classname: "scar" },
  { value: "Healed", name: "RHstatus", classname: "scar" },
  { value: "Unhealed", name: "RHstatus", classname: "scar" },
  { value: "Not-related", name: "RHstatus", classname: "scar" },
];
const statusother = [{ name: "RHstatus", otherclassname: "scar" }];
const statusreset = [{ name: "RHstatus" }];

// Examination
const rhexam = [{ name: "RightHexam", value: "Performed", classname: "scar" }];
const rhexamnperform = [
  // Exam NotPerform
  { value: "Not-Performed", classname: "exam", name: "RightHexam" },
];
const rhexamnpreset = [
  // Exam Nperform Reset
  { name: "RightHexam" },
];
const rhexamnpreason = [
  // Exam Nperform Reason
  { value: "Surgery", classname: "scar", name: "RightHexamNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "RightHexamNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "RightHexamNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "RightHexamNotperform",
  },
  { value: "Brace", classname: "scar", name: "RightHexamNotperform" },
];
const rhexamnpother = [
  //Exam Nperform Other
  { name: "RightHexamNotperform", otherclassname: "scar" },
];
const rhexamnpreasonreset = [
  // Exam Nperform reason reset
  { name: "RightHexamNotperform" },
];
// Normal Exam
const nexamradio = [
  { name: "Normalexam", value: "Abnormal", classname: "scar" },
  { name: "Normalexam", value: "Normal", classname: "scar" },
];
const nexampainsale = [{ name: "Normalexam" }];
const nexamreset = [{ name: "Normalexam" }];
// Findings
const fyes = [{ name: "Findyes" }];
const fno = [{ name: "Findno" }];
const swelling = [{ name: "finding" }];
const erythema = [{ name: "erythema" }];
const effusion = [{ name: "effusion" }];
const redness = [{ name: "redness" }];
const edema = [{ name: "edema" }];
const deformity = [{ name: "deformity" }];
const ecchymosis = [{ name: "ecchymosis" }];
const fnoother = [{ name: "FindNother", otherclassname: "scar" }];

const swelling1 = [{ name: "finding" }];
const erythema1 = [{ name: "erythema" }];
const effusion1 = [{ name: "effusion" }];
const redness1 = [{ name: "redness" }];
const edema1 = [{ name: "edema" }];
const deformity1 = [{ name: "deformity" }];
const ecchymosis1 = [{ name: "ecchymosis" }];
const fyesother = [{ name: "FindNother", otherclassname: "scar" }];
// Tenderness
const tenderness = [
  { name: "Rhtender", value: "No", classname: "scar" },
  { name: "Rhtender", value: "Yes", classname: "scar" },
];
const treset = [{ name: "Rhtender" }];

const classification = [
  // Tenderness Classification
  { name: "Classification", value: "Diffuse", classname: "scar" },
  { name: "Classification", value: "Mild", classname: "scar" },
  { name: "Classification", value: "Moderate", classname: "scar" },
  { name: "Classification", value: "Severe", classname: "scar" },
];
const clother = [
  // Tenderness Classifi other
  { name: "Classification", otherclassname: "scar" },
];
const clreset = [
  // Tenderness Classifi Reset
  { name: "Classification" },
];
const aspect1 = [
  // Tenderness  Asspect
  { name: "Aspect", value: "Anterior", classname: "scar" },
  { name: "Aspect", value: "Posterior", classname: "scar" },
  { name: "Aspect", value: "Medial", classname: "scar" },
  { name: "Aspect", value: "Lateral", classname: "scar" },
];
const asother = [
  // Tenderness aspect other
  { name: "Aspect", otherclassname: "scar" },
];
const asreset = [
  // Tenderness Aspect Reset
  { name: "Aspect" },
];
const position = [
  // Tenderness Possition
  {
    name: "Rhposition",
    value: "Metacarpophalangeal Joint(MCP)",
    classname: "exam1",
  },
  {
    name: "Rhposition",
    value: "Proximal Interphalangeal Joint(PIP)",
    classname: "exam1",
  },
  {
    name: "Rhposition",
    value: "Distal Interphalangeal joint(DIP)",
    classname: "exam1",
  },
];
const positionother = [
  // Tenderness Possition Other
  { name: "Rhposition", classname: "scar" },
];
const positionreset = [
  // Tenderness Possition Reset
  { name: "Rhposition" },
];
// Rom
const rhandrom = [
  { name: "Rom", value: "Normal", classname: "scar" },
  { name: "Rom", value: "Abnormal", classname: "scar" },
];
const rhromnperform = [
  // Rom Notperform
  { value: "Not-Performed", classname: "exam", name: "Rom" },
];
const rhandromreset = [
  // Rom  Reset
  { name: "Rom" },
];
const rhromnpreason = [
  // Rom  Nperform reason
  { value: "Surgery", classname: "scar", name: "RightHRomNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "RightHRomNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "RightHRomNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "RightHRomNotperform",
  },
  { value: "Brace", classname: "scar", name: "RightHRomNotperform" },
];
const rhromnpother = [
  // rom NPother
  { name: "RightHRomNotperform", classname: "scar" },
];
const rhromnpreasonreset = [
  // rom Np reason reset
  { name: "RightHRomNotperform" },
];
const checkabrom = [
  // Rom Abnormal
  { name: "RomFingers", value: "All Fingers", classname: "scar" },
  { name: "RomFingers", value: "Thumb", classname: "scar" },
  { name: "RomFingers", value: "Second Finger", classname: "scar" },
  { name: "RomFingers", value: "Third Finger", classname: "scar" },
  { name: "RomFingers", value: "Fourth Finger", classname: "scar" },
  { name: "RomFingers", value: "Fifth Finger", classname: "scar" },
];
const romabreset = [{ name: "RomFingers" }];
const rhallfinger = [
  {
    Fname: "All Finger Value",
    value1: "DIP(0-90)",
    vname1: "AllFingerDIPtxt",
    value2: "PIP(0-100)",
    vname2: "AllFingerDIPtxt",
    value3: "MP(0-90)",
    vname3: "AllFingerDIPtxt",
  },
];
const rhthumbfinger = [
  {
    Fname: "Thumb Finger Value",
    value1: "IP(0-80)",
    vname1: "ThumbFingertxt",
    value2: "MCP(0-60)",
    vname2: "ThumbFingertxt",
    value3: "Radial Abduction(0-90)",
    vname3: "ThumbFingertxt",
  },
];
const rhsecondfinger = [
  {
    Fname: "Second Finger Value",
    value1: "DIP(0-90)",
    vname1: "secondFingertxt",
    value2: "PIP(0-100)",
    vname2: "secondFingertxt",
    value3: "MP(0-90)",
    vname3: "secondFingertxt",
  },
];
const rhthirdfinger = [
  {
    Fname: "ThirdFinger Value",
    value1: "DIP(0-90)",
    vname1: "ThirdFingertxt",
    value2: "PIP(0-100)",
    vname2: "ThirdFingertxt",
    value3: "MP(0-90)",
    vname3: "ThirdFingertxt",
  },
];
const rhfourthfinger = [
  {
    Fname: "Fourth Finger Value",
    value1: "DIP(0-90)",
    vname1: "FourthFingertxt",
    value2: "PIP(0-100)",
    vname2: "FourthFingertxt",
    value3: "MP(0-90)",
    vname3: "FourthFingertxt",
  },
];
const rhfifthfinger = [
  {
    Fname: "Fifth Finger Value",
    value1: "DIP(0-90)",
    vname1: "FifthFingertxt",
    value2: "PIP(0-100)",
    vname2: "FifthFingertxt",
    value3: "MP(0-90)",
    vname3: "FifthFingertxt",
  },
];
const rhnovalue = [{ value: "No", classname: "scar", name: "RomSrestricted" }];
const rhyesreset = [{ name: "RomSrestricted" }];
const rhyesno = [{ value: "Yes", name: "RomSrestricted", classname: "scar" }];
const rhpcausingmotion = [
  { name: "Rompcausingmotion", value: "All", classname: "scar" },
  { name: "Rompcausingmotion", value: "DIP", classname: "scar" },
  { name: "Rompcausingmotion", value: "PIP", classname: "scar" },
  { name: "Rompcausingmotion", value: "MP", classname: "scar" },
];
const rhpcmotion = [{ name: "Rompcausingmotion" }];
// Instability
const instabilitynovalue = [
  { value: "No", classname: "scar", name: "Instability" },
];
const instabilityyesreset = [{ name: "Instability" }];
const instabilityyesno = [
  { value: "Yes", name: "Instability", classname: "scar" },
];
// Triggering
const triggeringnovalue = [
  { value: "No", classname: "scar", name: "Triggering" },
];
const triggeringyesreset = [{ name: "Triggering" }];
const triggeringyesno = [
  { value: "Yes", name: "Triggering", classname: "scar" },
];
// Amputated
const amputatednovalue = [
  { value: "No", classname: "scar", name: "Amputated" },
];

const amputatedyesreset = [{ name: "Amputated" }];
const amputatedyesno = [{ value: "Yes", name: "Amputated", classname: "scar" }];
// Suboptimal
const soptimalnovalue = [
  { value: "No", classname: "scar", name: "Suboptimal" },
];
const soptimalyesreset = [{ name: "Suboptimal" }];
const soptimalyesno = [{ value: "Yes", name: "Suboptimal", classname: "scar" }];
// Atrophy
const atrophynovalue = [{ value: "No", classname: "scar", name: "Atrophy" }];
const atrophyyesreset = [{ name: "Atrophy" }];
const atrophyyesno = [{ value: "yes", name: "Atrophy", classname: "scar" }];
// Symptom Magnification
const smagnificationnovalue = [
  { value: "No", classname: "scar", name: "SymptomMagnification" },
];
const smagnificationyesreset = [{ name: "SymptomMagnification" }];
const smagnificationyesno = [
  { value: "Yes", name: "SymptomMagnification", classname: "scar" },
];
// Sensation
const sensationva = [{ value: "Intact", classname: "scar", name: "sensation" }];
const sensationva1 = [
  { value: "Decreased", classname: "scar", name: "sensation" },
];

const rhsensationnperform = [
  { value: "Not-Performed", classname: "exam", name: "sensation" },
];
const rhsensationnpreset = [{ name: "sensation" }];
const rhsensationnpreason = [
  {
    value: "Surgery",
    classname: "scar",
    name: "RightHsensationNotperform",
  },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "RightHsensationNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "RightHsensationNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "RightHsensationNotperform",
  },
  { value: "Brace", classname: "scar", name: "RightHsensationNotperform" },
];
const rhsensationnpother = [
  { name: "RightHsensationNotperform", otherclassname: "scar" },
];
const rhsensationnpreasonreset = [{ name: "RightHsensationNotperform" }];
// Added Value
const adddetailsnovalue = [
  { value: "No", classname: "scar", name: "Adddetails" },
];
const addreset = [{ name: "Adddetails" }];
const adddetailsyesno = [
  { value: "Yes", name: "Adddetails", classname: "scar" },
];
//thump CMC motion
const cmcmotion = [
  { name: "cmcmotion", value: "No", classname: "scar" },
  { name: "cmcmotion", value: "Yes", classname: "scar" },
];
const cmcreset = [{ name: "cmcmotion" }];
const thumbcmcyes = [
  { name: "cmcyes", value: "Mild", classname: "scar" },
  { name: "cmcyes", value: "Moderate", classname: "scar" },
  { name: "cmcyes", value: "Marked", classname: "scar" },
];
const thumbcmcyesreset = [{ name: "cmcyes" }];
// Tendon Lac
const tendonnovalue = [{ name: "Tendon", value: "No", classname: "scar" }];
const tendonyesno = [{ value: "Yes", name: "Tendon", classname: "scar" }];
const tendonyesreset = [{ name: "Tendon" }];
export const Lefthand = () => (
  <Hand
    hand={lefthand}
    aspect={aspect}
    status={status}
    appearance={appearance}
    scar={scar}
    aspectreset={aspectreset}
    statusreset={statusreset}
    appearancereset={appearancereset}
    scarreset={scarreset}
    aspectOther={aspectOther}
    statusother={statusother}
    appearanceOther={appearanceOther}
    rhexam={rhexam}
    rhexamnperform={rhexamnperform}
    rhexamnpreset={rhexamnpreset}
    rhexamnpreason={rhexamnpreason}
    rhexamnpother={rhexamnpother}
    rhexamnpreasonreset={rhexamnpreasonreset}
    nexamradio={nexamradio}
    nexampainsale={nexampainsale}
    nexamreset={nexamreset}
    swelling={swelling}
    erythema={erythema}
    effusion={effusion}
    redness={redness}
    edema={edema}
    ecchymosis={ecchymosis}
    deformity={deformity}
    swelling1={swelling1}
    erythema1={erythema1}
    effusion1={effusion1}
    redness1={redness1}
    edema1={edema1}
    ecchymosis1={ecchymosis1}
    deformity1={deformity1}
    fyes={fyes}
    fno={fno}
    fnoother={fnoother}
    fyesother={fyesother}
    tenderness={tenderness}
    treset={treset}
    classification={classification}
    clother={clother}
    clreset={clreset}
    aspect1={aspect1}
    asother={asother}
    asreset={asreset}
    rhandrom={rhandrom}
    rhandromreset={rhandromreset}
    rhromnpreasonreset={rhromnpreasonreset}
    rhromnpother={rhromnpother}
    rhromnpreason={rhromnpreason}
    rhromnperform={rhromnperform}
    checkabrom={checkabrom}
    romabreset={romabreset}
    rhallfinger={rhallfinger}
    rhthumbfinger={rhthumbfinger}
    rhsecondfinger={rhsecondfinger}
    rhthirdfinger={rhthirdfinger}
    rhfourthfinger={rhfourthfinger}
    rhfifthfinger={rhfifthfinger}
    rhnovalue={rhnovalue}
    rhyesreset={rhyesreset}
    rhyesno={rhyesno}
    rhpcausingmotion={rhpcausingmotion}
    rhpcmotion={rhpcmotion}
    instabilitynovalue={instabilitynovalue}
    instabilityyesreset={instabilityyesreset}
    instabilityyesno={instabilityyesno}
    triggeringnovalue={triggeringnovalue}
    triggeringyesreset={triggeringyesreset}
    triggeringyesno={triggeringyesno}
    amputatednovalue={amputatednovalue}
    amputatedyesreset={amputatedyesreset}
    amputatedyesno={amputatedyesno}
    smagnificationnovalue={smagnificationnovalue}
    smagnificationyesreset={smagnificationyesreset}
    smagnificationyesno={smagnificationyesno}
    addreset={addreset}
    sensationva1={sensationva1}
    sensationva={sensationva}
    rhsensationnperform={rhsensationnperform}
    rhsensationnpreset={rhsensationnpreset}
    rhsensationnpreason={rhsensationnpreason}
    rhsensationnpother={rhsensationnpother}
    rhsensationnpreasonreset={rhsensationnpreasonreset}
    soptimalnovalue={soptimalnovalue}
    soptimalyesreset={soptimalyesreset}
    soptimalyesno={soptimalyesno}
    atrophynovalue={atrophynovalue}
    atrophyyesreset={atrophyyesreset}
    atrophyyesno={atrophyyesno}
    position={position}
    positionother={positionother}
    positionreset={positionreset}
    adddetailsnovalue={adddetailsnovalue}
    adddetailsyesno={adddetailsyesno}
    cmcmotion={cmcmotion}
    cmcreset={cmcreset}
    thumbcmcyes={thumbcmcyes}
    thumbcmcyesreset={thumbcmcyesreset}
    tendonnovalue={tendonnovalue}
    tendonyesno={tendonyesno}
    tendonyesreset={tendonyesreset}
  />
);

export const Righthand = () => (
  <Hand
    hand={righthand}
    aspect={aspect}
    status={status}
    appearance={appearance}
    scar={scar}
    aspectreset={aspectreset}
    statusreset={statusreset}
    appearancereset={appearancereset}
    scarreset={scarreset}
    aspectOther={aspectOther}
    statusother={statusother}
    appearanceOther={appearanceOther}
    rhexam={rhexam}
    rhexamnperform={rhexamnperform}
    rhexamnpreset={rhexamnpreset}
    rhexamnpreason={rhexamnpreason}
    rhexamnpother={rhexamnpother}
    rhexamnpreasonreset={rhexamnpreasonreset}
    nexamradio={nexamradio}
    nexampainsale={nexampainsale}
    nexamreset={nexamreset}
    swelling={swelling}
    erythema={erythema}
    effusion={effusion}
    redness={redness}
    edema={edema}
    ecchymosis={ecchymosis}
    deformity={deformity}
    swelling1={swelling1}
    erythema1={erythema1}
    effusion1={effusion1}
    redness1={redness1}
    edema1={edema1}
    ecchymosis1={ecchymosis1}
    deformity1={deformity1}
    fyes={fyes}
    fno={fno}
    fnoother={fnoother}
    fyesother={fyesother}
    tenderness={tenderness}
    treset={treset}
    classification={classification}
    clother={clother}
    clreset={clreset}
    aspect1={aspect1}
    asother={asother}
    asreset={asreset}
    rhandrom={rhandrom}
    rhandromreset={rhandromreset}
    rhromnpreasonreset={rhromnpreasonreset}
    rhromnpother={rhromnpother}
    rhromnpreason={rhromnpreason}
    rhromnperform={rhromnperform}
    checkabrom={checkabrom}
    romabreset={romabreset}
    rhallfinger={rhallfinger}
    rhthumbfinger={rhthumbfinger}
    rhsecondfinger={rhsecondfinger}
    rhthirdfinger={rhthirdfinger}
    rhfourthfinger={rhfourthfinger}
    rhfifthfinger={rhfifthfinger}
    rhnovalue={rhnovalue}
    rhyesreset={rhyesreset}
    rhyesno={rhyesno}
    rhpcausingmotion={rhpcausingmotion}
    rhpcmotion={rhpcmotion}
    instabilitynovalue={instabilitynovalue}
    instabilityyesreset={instabilityyesreset}
    instabilityyesno={instabilityyesno}
    triggeringnovalue={triggeringnovalue}
    triggeringyesreset={triggeringyesreset}
    triggeringyesno={triggeringyesno}
    amputatednovalue={amputatednovalue}
    amputatedyesreset={amputatedyesreset}
    amputatedyesno={amputatedyesno}
    smagnificationnovalue={smagnificationnovalue}
    smagnificationyesreset={smagnificationyesreset}
    smagnificationyesno={smagnificationyesno}
    addreset={addreset}
    sensationva1={sensationva1}
    sensationva={sensationva}
    rhsensationnperform={rhsensationnperform}
    rhsensationnpreset={rhsensationnpreset}
    rhsensationnpreason={rhsensationnpreason}
    rhsensationnpother={rhsensationnpother}
    rhsensationnpreasonreset={rhsensationnpreasonreset}
    soptimalnovalue={soptimalnovalue}
    soptimalyesreset={soptimalyesreset}
    soptimalyesno={soptimalyesno}
    atrophynovalue={atrophynovalue}
    atrophyyesreset={atrophyyesreset}
    atrophyyesno={atrophyyesno}
    position={position}
    positionother={positionother}
    positionreset={positionreset}
    adddetailsnovalue={adddetailsnovalue}
    adddetailsyesno={adddetailsyesno}
    cmcmotion={cmcmotion}
    cmcreset={cmcreset}
    thumbcmcyes={thumbcmcyes}
    thumbcmcyesreset={thumbcmcyesreset}
    tendonnovalue={tendonnovalue}
    tendonyesno={tendonyesno}
    tendonyesreset={tendonyesreset}
  />
);
