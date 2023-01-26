import Foot from "../Foot";

export default {
  title: "BodyParts/Foot",
  component: Foot,
};
//label
const leftfoot = ["Left Foot"];

const rightfoot = ["Right Foot"];
//scar
const aspect = [
  { value: "Anterior", name: "aspect", classname: "scar" },
  { value: "Posterior", name: "aspect", classname: "scar" },
  { value: "Medial", name: "aspect", classname: "scar" },
  { value: "Lateral", name: "aspect", classname: "scar" },
];

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
  { value: "Not-related", name: "status", classname: "exam" },
];
const appearanceother = [{ name: "appearance", otherclassname: "scar" }];
const statusother = [{ name: "status", otherclassname: "scar" }];
const aspectother = [{ name: "aspect", otherclassname: "scar" }];
const scarreset = [{ name: "csscar" }];
const appearancereset = [{ name: "appearance" }];
const statusreset = [{ name: "status" }];
const aspectreset = [{ name: "aspect" }];
//Examination
const rfootexam = [
  { value: "Performed", name: "rfootexam", classname: "scar" },
];
const rfexamnperform = [
  { value: "Not-Performed", classname: "exam", name: "rfootexam" },
];
const rfexamnpreset = [{ name: "rfootexam" }];
const rfexamnpreason = [
  { value: "Surgery", classname: "scar", name: "rfootexamNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "rfootexamNotperform",
  },
  { value: "Non-Cooperation", classname: "exam1", name: "rfootexamNotperform" },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "rfootexamNotperform",
  },
  { value: "Brace", classname: "scar", name: "rfootexamNotperform" },
];
const rfexamnpother = [{ name: "rfootexamNotperform", classname: "scar" }];
const rfexamnpreasonreset = [{ name: "rfootexamNotperform" }];
// NormalExam
const rfnexam = [
  { value: "Abnormal", classname: "scar", name: "Rfnormalexam" },
  { value: "Normal", classname: "scar", name: "Rfnormalexam" },
];
const nexampainscale = [{ name: "Rfnormalexam" }];
const rfnexamreset = [{ name: "Rfnormalexam" }];
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
const fnoother = [{ name: "FindNother", classname: "scar" }];

const swelling1 = [{ name: "finding" }];
const erythema1 = [{ name: "erythema" }];
const effusion1 = [{ name: "effusion" }];
const redness1 = [{ name: "redness" }];
const edema1 = [{ name: "edema" }];
const deformity1 = [{ name: "deformity" }];
const ecchymosis1 = [{ name: "ecchymosis" }];
const fyesother = [{ name: "FindNother", classname: "scar" }];

// Tenderness
const rfoottenderness = [
  { value: "No", name: "Tenderness", classname: "scar" },
  { value: "Yes", name: "Tenderness", classname: "scar" },
];
const tenderreset = [{ name: "Tenderness" }];
const classifitenderness = [
  { name: "Classification", value: "Diffuse", classname: "scar" },
  { name: "Classification", value: "Mild", classname: "scar" },
  { name: "Classification", value: "Moderate", classname: "scar" },
  { name: "Classification", value: "Severe", classname: "scar" },
];
const classifiother = [{ classname: "scar", name: "Classification" }];
const classifireset = [{ name: "Classification" }];
const aspecttenderness = [
  { name: "Aspect", value: "Anterior", classname: "scar" },
  { name: "Aspect", value: "Posterior", classname: "scar" },
  { name: "Aspect", value: "Medial", classname: "scar" },
  { name: "Aspect", value: "Lateral", classname: "scar" },
];
const aspectother1 = [{ classname: "scar", name: "Aspect" }];
const aspectreset1 = [{ name: "Aspect" }];
const Positionv = [
  { name: "Position", value: "Subtalar Joint", classname: "exam" },
  {
    name: "Position",
    value: "Talocalcaneonavicular joint",
    classname: "exam1",
  },
  { name: "Position", value: "Calcaneocuboid joint", classname: "exam1" },
  { name: "Position", value: "Cuneonavicular joint", classname: "exam1" },
  { name: "Position", value: "Cuboideonavicular joint", classname: "exam1" },
];
const positionv1 = [
  { name: "Position", value: "Intercuneiform joint", classname: "exam1" },
];
const positionother = [{ classname: "scar", name: "Position" }];
const positionreset = [{ name: "Position" }];
// Rom
const rom = [
  { name: "Rom", value: "Normal", classname: "scar" },
  { name: "Rom", value: "Abnormal", classname: "scar" },
];
const rfromnperform = [
  { value: "Not-Performed", classname: "exam", name: "Rom" },
];
const rfromnpreset = [{ name: "Rom" }];
const rfromnpreason = [
  { value: "Surgery", classname: "scar", name: "RfootromNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "RfootromNotperform",
  },
  { value: "Non-Cooperation", classname: "exam1", name: "RfootromNotperform" },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "RfootromNotperform",
  },
  { value: "Brace", classname: "scar", name: "RfootromNotperform" },
];
const rfromnpother = [{ name: "RfootromNotperform", classname: "scar" }];
const rfromnpreasonreset = [{ name: "RfootromNotperform" }];
const romfootvalue = [
  { name: "RomFoot", classname: "exam", value: "All Toes" },
  { name: "RomFoot", classname: "exam", value: "Great Toe" },
  { name: "RomFoot", classname: "exam", value: "Second Toe" },
  { name: "RomFoot", classname: "exam", value: "Third Toe" },
  { name: "RomFoot", classname: "exam", value: "Fourth Toe" },
  { name: "RomFoot", classname: "exam", value: "Fifth Toe" },
];
const romreset = [{ name: "RomFoot" }];
const rfalltoes = [
  {
    Fname: "All Toes Value",
    value1: "IP(90)",
    vname1: "Alltoestxt",
    value2: "MP Flexion(45)",
    vname2: "Alltoestxt",
    value3: "MP Extension(70)",
    vname3: "Alltoestxt",
  },
];
const rfgreadtoe = [
  {
    Fname: "Great Toe Value",
    value1: "IP(90)",
    vname1: "Greattoestxt",
    value2: "MP Flexion(45)",
    vname2: "Greattoestxt",
    value3: "MP Extension(70)",
    vname3: "Greattoestxt",
  },
];
const rfsecondtoe = [
  {
    Fname: "Second Toe Value",
    value1: "IP(90)",
    vname1: "Secondtoestxt",
    value2: "MP Flexion(45)",
    vname2: "Secondtoestxt",
    value3: "MP Extension(70)",
    vname3: "Secondtoestxt",
  },
];
const rfthirdtoe = [
  {
    Fname: "Third Toe Value",
    value1: "IP(90)",
    vname1: "Thirdtoestxt",
    value2: "MP Flexion(45)",
    vname2: "Thirdtoestxt",
    value3: "MP Extension(70)",
    vname3: "Thirdtoestxt",
  },
];
const rffourthtoe = [
  {
    Fname: "Fourth Toe Value",
    value1: "IP(90)",
    vname1: "Fourthtoestxt",
    value2: "MP Flexion(45)",
    vname2: "Fourthtoestxt",
    value3: "MP Extension(70)",
    vname3: "Fourthtoestxt",
  },
];
const rffifthtoe = [
  {
    Fname: "Fifth Toe Value",
    value1: "IP(90)",
    vname1: "Fifthtoestxt",
    value2: "MP Flexion(45)",
    vname2: "Fifthtoestxt",
    value3: "MP Extension(70)",
    vname3: "Fifthtoestxt",
  },
];
const srestricted = [
  { value: "No", name: "Selfrestricted", classname: "scar" },
  { value: "Yes", name: "Selfrestricted", classname: "scar" },
];
const srreset = [{ name: "Selfrestricted" }];
const repcmotion = [
  { name: "painCausingmotion", value: "ALL", classname: "scar" },
  { name: "painCausingmotion", value: "IP", classname: "scar" },
  { name: "painCausingmotion", value: "MP Flexion", classname: "exam" },
  { name: "painCausingmotion", value: "MP Extension", classname: "exam" },
];
const pcmotionreset = [{ name: "PainCausingmotion" }];
//Suboptimal
const soptimalnovalue = [
  { value: "No", classname: "scar", name: "RFSuboptimal" },
];
const soptimalyesreset = [{ name: "RFSuboptimal" }];
const soptimalyesno = [
  { value: "Yes", classname: "scar", name: "RFSuboptimal" },
];
// Atrophy
const atrophynovalue = [{ value: "No", classname: "scar", name: "RFAtrophy" }];
const atrophyyesreset = [{ name: "RFAtrophy" }];
const atrophyyesno = [{ value: "Yes", classname: "scar", name: "RFAtrophy" }];
//Instability
const instabilitynovalue = [
  { value: "No", classname: "scar", name: "RFInstability" },
];
const instabilityyesreset = [{ name: "RFInstability" }];
const instabilityyesno = [
  { value: "Yes", classname: "scar", name: "RFInstability" },
];
//Ambutated
const ambutatednovalue = [
  { value: "No", classname: "scar", name: "RFAmbutated" },
];
const ambutatedyesreset = [{ name: "RFAmbutated" }];
const ambutatedyesno = [
  { value: "Yes", classname: "scar", name: "RFAmbutated" },
];
//Sensation
const sensationnovalue = [
  { value: "No", classname: "scar", name: "RFSymptom" },
];
const sensationyesreset = [{ name: "RFSymptom" }];
const sensationyesno = [{ value: "Yes", classname: "scar", name: "RFSymptom" }];
const intactv = [{ value: "Intact", name: "Sensation", classname: "scar" }];
const decreasedv = [
  { value: "Decreased", name: "Sensation", classname: "scar" },
];
const rfsensationnperform = [
  { value: "Not-Performed", classname: "exam", name: "Sensation" },
];
const rfsensationnpreset = [{ name: "Sensation" }];
const rfsensationnpreason = [
  { value: "Surgery", classname: "scar", name: "RfootsensationNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "RfootsensationNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "RfootsensationNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "RfootsensationNotperform",
  },
  { value: "Brace", classname: "scar", name: "RfootsensationNotperform" },
];
const rfsensationnpother = [
  { name: "RfootsensationNotperform", classname: "scar" },
];
const rfsensationnpreasonreset = [{ name: "RfootsensationNotperform" }];

const rfadddetailsreset = [{ name: "RFDetails" }];
//Add details
const rfadddetailsyesno = [
  { value: "Yes", classname: "scar", name: "RFDetails" },
];
const rfadddetailsnovalue = [
  { value: "No", classname: "scar", name: "RFDetails" },
];

export const RFoot = () => (
  <Foot
    label={rightfoot}
    aspect={aspect}
    status={status}
    appearance={appearance}
    scar={scar}
    aspectreset={aspectreset}
    statusreset={statusreset}
    appearancereset={appearancereset}
    scarreset={scarreset}
    aspectother={aspectother}
    statusother={statusother}
    appearanceother={appearanceother}
    rfootexam={rfootexam}
    rfexamnperform={rfexamnperform}
    rfexamnpreset={rfexamnpreset}
    rfexamnpreason={rfexamnpreason}
    rfexamnpother={rfexamnpother}
    rfexamnpreasonreset={rfexamnpreasonreset}
    rfnexam={rfnexam}
    nexampainscale={nexampainscale}
    rfnexamreset={rfnexamreset}
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
    rfoottenderness={rfoottenderness}
    tenderreset={tenderreset}
    classifitenderness={classifitenderness}
    classifiother={classifiother}
    classifireset={classifireset}
    aspecttenderness={aspecttenderness}
    aspectother1={aspectother1}
    aspectreset1={aspectreset1}
    rom={rom}
    rfromnperform={rfromnperform}
    rfromnpreset={rfromnpreset}
    rfromnpreason={rfromnpreason}
    rfromnpother={rfromnpother}
    rfromnpreasonreset={rfromnpreasonreset}
    romfootvalue={romfootvalue}
    romreset={romreset}
    rfalltoes={rfalltoes}
    rfgreadtoe={rfgreadtoe}
    rfsecondtoe={rfsecondtoe}
    rfthirdtoe={rfthirdtoe}
    rffourthtoe={rffourthtoe}
    rffifthtoe={rffifthtoe}
    srestricted={srestricted}
    srreset={srreset}
    repcmotion={repcmotion}
    pcmotionreset={pcmotionreset}
    instabilitynovalue={instabilitynovalue}
    instabilityyesreset={instabilityyesreset}
    instabilityyesno={instabilityyesno}
    ambutatednovalue={ambutatednovalue}
    ambutatedyesreset={ambutatedyesreset}
    ambutatedyesno={ambutatedyesno}
    Positionv={Positionv}
    positionother={positionother}
    positionreset={positionreset}
    intactv={intactv}
    decreasedv={decreasedv}
    sensationyesreset={sensationyesreset}
    sensationyesno={sensationyesno}
    sensationnovalue={sensationnovalue}
    rfsensationnperform={rfsensationnperform}
    rfsensationnpreset={rfsensationnpreset}
    rfsensationnpreason={rfsensationnpreason}
    rfsensationnpother={rfsensationnpother}
    rfsensationnpreasonreset={rfsensationnpreasonreset}
    rfadddetailsreset={rfadddetailsreset}
    positionv1={positionv1}
    soptimalnovalue={soptimalnovalue}
    soptimalyesreset={soptimalyesreset}
    soptimalyesno={soptimalyesno}
    atrophynovalue={atrophynovalue}
    atrophyyesreset={atrophyyesreset}
    atrophyyesno={atrophyyesno}
    rfadddetailsyesno={rfadddetailsyesno}
    rfadddetailsnovalue={rfadddetailsnovalue}
  />
);

export const LFoot = () => (
  <Foot
    label={leftfoot}
    aspect={aspect}
    status={status}
    appearance={appearance}
    scar={scar}
    aspectreset={aspectreset}
    statusreset={statusreset}
    appearancereset={appearancereset}
    scarreset={scarreset}
    aspectother={aspectother}
    statusother={statusother}
    appearanceother={appearanceother}
    rfootexam={rfootexam}
    rfexamnperform={rfexamnperform}
    rfexamnpreset={rfexamnpreset}
    rfexamnpreason={rfexamnpreason}
    rfexamnpother={rfexamnpother}
    rfexamnpreasonreset={rfexamnpreasonreset}
    rfnexam={rfnexam}
    nexampainscale={nexampainscale}
    rfnexamreset={rfnexamreset}
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
    rfoottenderness={rfoottenderness}
    tenderreset={tenderreset}
    classifitenderness={classifitenderness}
    classifiother={classifiother}
    classifireset={classifireset}
    aspecttenderness={aspecttenderness}
    aspectother1={aspectother1}
    aspectreset1={aspectreset1}
    rom={rom}
    rfromnperform={rfromnperform}
    rfromnpreset={rfromnpreset}
    rfromnpreason={rfromnpreason}
    rfromnpother={rfromnpother}
    rfromnpreasonreset={rfromnpreasonreset}
    romfootvalue={romfootvalue}
    romreset={romreset}
    rfalltoes={rfalltoes}
    rfgreadtoe={rfgreadtoe}
    rfsecondtoe={rfsecondtoe}
    rfthirdtoe={rfthirdtoe}
    rffourthtoe={rffourthtoe}
    rffifthtoe={rffifthtoe}
    srestricted={srestricted}
    srreset={srreset}
    repcmotion={repcmotion}
    pcmotionreset={pcmotionreset}
    instabilitynovalue={instabilitynovalue}
    instabilityyesreset={instabilityyesreset}
    instabilityyesno={instabilityyesno}
    ambutatednovalue={ambutatednovalue}
    ambutatedyesreset={ambutatedyesreset}
    ambutatedyesno={ambutatedyesno}
    Positionv={Positionv}
    positionother={positionother}
    positionreset={positionreset}
    intactv={intactv}
    decreasedv={decreasedv}
    sensationyesreset={sensationyesreset}
    sensationyesno={sensationyesno}
    sensationnovalue={sensationnovalue}
    rfsensationnperform={rfsensationnperform}
    rfsensationnpreset={rfsensationnpreset}
    rfsensationnpreason={rfsensationnpreason}
    rfsensationnpother={rfsensationnpother}
    rfsensationnpreasonreset={rfsensationnpreasonreset}
    rfadddetailsreset={rfadddetailsreset}
    positionv1={positionv1}
    soptimalnovalue={soptimalnovalue}
    soptimalyesreset={soptimalyesreset}
    soptimalyesno={soptimalyesno}
    atrophynovalue={atrophynovalue}
    atrophyyesreset={atrophyyesreset}
    atrophyyesno={atrophyyesno}
    rfadddetailsyesno={rfadddetailsyesno}
    rfadddetailsnovalue={rfadddetailsnovalue}
  />
);
