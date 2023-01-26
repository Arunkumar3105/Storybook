import Shoulder from "../Shoulder";

export default {
  title: "BodyParts/shoulders",
  component: Shoulder,
};
const RightShoulder = [{ label: "Right Shoulder" }];
const LeftShoulder = [{ label: "Left Shoulder" }];
const rsaspect = [
  { value: "Anterior", name: "aspect", classname: "scar" },
  { value: "Posterior", name: "aspect", classname: "scar" },
  { value: "Medial", name: "aspect", classname: "scar" },
  { value: "Lateral", name: "aspect", classname: "scar" },
];
const rsscar = [
  { value: "No", name: "csscar", classname: "scar" },
  { value: "Yes", name: "csscar", classname: "scar" },
];
const rsappearance = [
  { value: "Scar", name: "appearance", classname: "scar" },
  { value: "Surgical scar", name: "appearance", classname: "exam" },
  { value: "Incision", name: "appearance", classname: "scar" },
  { value: "Portal", name: "appearance", classname: "scar" },
  { value: "Laceration", name: "appearance", classname: "exam" },
];
const rsstatus = [
  { value: "Well-healed", name: "status", classname: "exam" },
  { value: "Healed", name: "status", classname: "scar" },
  { value: "Unhealed", name: "status", classname: "scar" },
  { value: "Not-related", name: "status", classname: "exam" },
];
const rsappearanceother = [{ name: "appearance", otherclassname: "scar" }];
const rsstatusother = [{ name: "status", otherclassname: "scar" }];
const rsaspectother = [{ name: "aspect", otherclassname: "scar" }];
const rsscarreset = [{ name: "csscar" }];
const rsappearancereset = [{ name: "appearance" }];
const rsstatusreset = [{ name: "status" }];
const rsaspectreset = [{ name: "aspect" }];
const exnperform = [
  { value: "Not-Performed", classname: "exam", name: "RSNotperform" },
];
const exnpreset = [{ name: "RSNotperform" }];
const exnpreason = [
  { value: "Surgery", classname: "scar", name: "Npreason" },
  { value: "Complaint of pain", classname: "exam1", name: "Npreason" },
  { value: "Non-Cooperation", classname: "exam1", name: "Npreason" },
  { value: "Not Wish to Perform", classname: "exam1", name: "Npreason" },
  { value: "Brace", classname: "scar", name: "Npreason" },
];
const ExNpother = [{ name: "Npreason", otherclassname: "scar" }];
const exnpreasonreset = [{ name: "Npreason" }];
const rshoulderexam1 = [
  { name: "RSNotperform", value: "Perform", classname: "scar" },
];
const rsfyes = [{ name: "Findyes" }];
const rsfno = [{ name: "Findno" }];
const rsswelling = [{ name: "finding" }];
const rserythema = [{ name: "Erythema" }];
const rseffusion = [{ name: "Effusion" }];
const rsredness = [{ name: "Redness" }];
const rsedema = [{ name: "Edema" }];
const rsdeformity = [{ name: "Deformity" }];
const rsecchymosis = [{ name: "Ecchymosis" }];
const rsfnoother = [{ name: "FindNother", otherclassname: "scar" }];

const rsswelling1 = [{ name: "finding" }];
const rserythema1 = [{ name: "Erythema" }];
const rseffusion1 = [{ name: "Effusion" }];
const rsredness1 = [{ name: "Redness" }];
const rsedema1 = [{ name: "Edema" }];
const rsdeformity1 = [{ name: "Deformity" }];
const rsecchymosis1 = [{ name: "Ecchymosis" }];
const rsfyesother = [{ name: "FindNother", otherclassname: "scar" }];
const rstenderness = [
  { name: "RStendernes", value: "No", classname: "scar" },
  { name: "RStendernes", value: "yes", classname: "scar" },
];
const rstenderreset = [{ name: "RStendernes" }];
const tclassification = [
  { name: "RSTclasifi", value: "Diffiuse", classname: "scar" },
  { name: "RSTclasifi", value: "Mild", classname: "scar" },
  { name: "RSTclasifi", value: "Moderate", classname: "scar" },
  { name: "RSTclasifi", value: "Severe", classname: "scar" },
];
const rscother = [{ name: "RSTclasifi", otherclassname: "scar" }];
const creset = [{ name: "RSTclasifi" }];
const nexamreset = [{ name: "RSnormalexam" }];
const normalexam = [
  { name: "RSnormalexam", value: "Normal", classname: "scar" },
  { name: "RSnormalexam", value: "Abnormal", classname: "scar" },
];
const nexampainscale = [{ name: "RSnormalexam" }];
const tposition = [
  { name: "tposition", value: "Subacromial Joint", classname: "exam1" },
  {
    name: "tposition",
    value: "Acromioclavicular Joint",
    classname: "exam1",
  },
  { name: "tposition", value: "Clavicular Joint", classname: "exam" },
  { name: "tposition", value: "Biceps", classname: "scar" },
  { name: "tposition", value: "Triceps", classname: "scar" },
  { name: "tposition", value: "Rotator Cuff", classname: "exam" },
];
const tposition1 = [];
const tpositionother = [{ otherclassname: "scar", name: "tposition" }];
const positionreset = [{ name: "tposition" }];
const taspect = [
  { name: "taspect", value: "Anterior", classname: "scar" },
  { name: "taspect", value: "Posterior", classname: "scar" },
  { name: "taspect", value: "Medial ", classname: "scar" },
  { name: "taspect", value: "Lateral", classname: "scar" },
  // {name:'taspect' ,value:'Triceps' ,classname:'scar'},
  // {name:'taspect' ,value:'Rotator Cuff' ,classname:'exam'},
];
const rsrom = [
  { name: "rsrom", value: "Normal", classname: "scar" },
  { name: "rsrom", value: "Abnormal", classname: "scar" },
];
const taspectother = [{ otherclassname: "scar", name: "taspect" }];
const aspectreset = [{ name: "taspect" }];
const romnperform = [
  { value: "Not-Performed", classname: "exam", name: "rsrom" },
];
const romnpreset = [{ name: "rsrom" }];
const romnpreason = [
  { value: "Surgery", classname: "scar2", name: "romNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "romNotperform",
  },
  { value: "Non-Cooperation", classname: "exam1", name: "romNotperform" },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "romNotperform",
  },
  { value: "Brace", classname: "scar", name: "romNotperform" },
];
const romnpother = [{ name: "romNotperform", otherclassname: "scar" }];
const romnpreasonreset = [{ name: "romNotperform" }];
const rsrestricted = [
  { value: "No", classname: "scar", name: "selfRestricted" },
  { value: "Yes", classname: "scar", name: "selfRestricted" },
];
const selfrreset = [{ name: "selfRestricted" }];
const rspcmotion = [
  { value: "All", classname: "scar", name: "PainCmotion" },
  { value: "Forward Flexion", classname: "exam1", name: "PainCmotion" },
  { value: "Abduction", classname: "scar", name: "PainCmotion" },
  { value: "Extension", classname: "scar", name: "PainCmotion" },
  { value: "External Rotation", classname: "exam1", name: "PainCmotion" },
  { value: "Internal Rotation", classname: "exam1", name: "PainCmotion" },
  { value: "Adduction", classname: "scar", name: "PainCmotion" },
];
const pcmotionreset = [{ name: "PainCmotion" }];
//instability
const rsinstabilityyes = [
  { value: "No", classname: "scar", name: "Instability" },
];
const rsinstabilityyesreset = [{ name: "Instability" }];
const rsinstabilityyesnovalue = [
  { value: "Yes", name: "Instability", classname: "scar" },
];
//symptom
const rssymptommyesnovalue = [
  { value: "Yes", classname: "scar", name: "SymptomMagnification" },
];
const rssymptommyesreset = [{ name: "SymptomMagnification" }];
const rssymptommyes = [
  { value: "No", name: "SymptomMagnification", classname: "scar" },
];
//suboptimaleffort
const rssuboptimalyesnovalue = [
  { value: "Yes", classname: "scar", name: "SubOptimal" },
];
const rssuboptimalyesreset = [{ name: "SubOptimal" }];
const rssuboptimalyes = [
  { value: "No", name: "SubOptimal", classname: "scar" },
];
//atrophy
const rsatrophyyesnovalue = [
  { value: "Yes", classname: "scar", name: "Atrophy" },
];
const rsatrophyyesreset = [{ name: "Atrophy" }];
const rsatrophyyes = [{ value: "No", name: "Atrophy", classname: "scar" }];
//Neurovascular
const rsnvascularyesnovalue = [
  { value: "Yes", classname: "scar", name: "NeurovascularDificit" },
];
const rsnvascularyesreset = [{ name: "NeurovascularDificit" }];
const rsnvascularyes = [
  { value: "No", name: "NeurovascularDificit", classname: "scar" },
];
const rsorthotest = [
  { value: "Performed", classname: "scar", name: "OrthoTest" },
];
const rsorthotestnperform = [
  { value: "Not-Performed", classname: "exam", name: "OrthoTest" },
];
const rsorthotestnpreset = [{ name: "OrthoTest" }];
const rsorthotestnpreason = [
  { value: "Surgery", classname: "scar2", name: "orthotestNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "orthotestNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "orthotestNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "orthotestNotperform",
  },
  { value: "Brace", classname: "scar", name: "orthotestNotperform" },
];
const rsorthotestnpother = [
  { name: "orthotestNotperform", otherclassname: "scar" },
];
const rsorthotestnpreasonreset = [{ name: "orthotestNotperform" }];
const apprenhensionnegativepa = [
  { value: "Negative", name: "Apprehension", classname: "scar" },
];
const apprenhensionnegativepa1 = [
  { value: "Positive", name: "Apprehension", classname: "scar" },
];
const aptestnperform = [
  { value: "Not-Performed", classname: "exam", name: "Apprehension" },
];
const aptestnpreset = [{ name: "Apprehension" }];
const aptestnpreason = [
  { value: "Surgery", classname: "scar", name: "ApprehensionNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "ApprehensionNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "ApprehensionNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "ApprehensionNotperform",
  },
  { value: "Brace", classname: "scar", name: "ApprehensionNotperform" },
];
const aptestnpother = [
  { name: "ApprehensionNotperform", otherclassname: "scar" },
];
const aptestnpreasonreset = [{ name: "ApprehensionNotperform" }];
const sulcustestnegativepa = [
  { value: "Negative", name: "Sulcustest", classname: "scar" },
];
const sulcustestnegativepa1 = [
  { value: "Positive", name: "Sulcustest", classname: "scar" },
];
const sulcustestnperform = [
  { value: "Not-Performed", classname: "exam", name: "Sulcustest" },
];
const sulcustestnpreset = [{ name: "Sulcustest" }];
const sulcustestnpreason = [
  { value: "Surgery", classname: "scar", name: "SulcustestNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "SulcustestNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "SulcustestNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "SulcustestNotperform",
  },
  { value: "Brace", classname: "scar", name: "SulcustestNotperform" },
];
const sulcustestnpother = [
  { name: "SulcustestNotperform", otherclassname: "scar" },
];
const sulcustestnpreasonreset = [{ name: "SulcustestNotperform" }];
const neeritestnegativepa = [
  { value: "Negative", name: "NeerItest", classname: "scar" },
];
const neeritestnegativepa1 = [
  { value: "Positive", name: "NeerItest", classname: "scar" },
];
const neerItestnperform = [
  { value: "Not-Performed", classname: "exam", name: "NeerItest" },
];
const neerItestnpreset = [{ name: "NeerItest" }];
const neerItestnpreason = [
  { value: "Surgery", classname: "scar", name: "NeerItestNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "NeerItestNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "NeerItestNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "NeerItestNotperform",
  },
  { value: "Brace", classname: "scar", name: "NeerItestNotperform" },
];
const neerItestnpother = [
  { name: "NeerItestNotperform", otherclassname: "scar" },
];
const neerItestnpreasonreset = [{ name: "NeerItestNotperform" }];
const hawkinsnegativepa = [
  { value: "Negative", name: "Hawkins", classname: "scar" },
];
const hawkinsnegativepa1 = [
  { value: "Positive", name: "Hawkins", classname: "scar" },
];
const hawkinsnperform = [
  { value: "Not-Performed", classname: "exam", name: "Hawkins" },
];
const hawkinsnpreset = [{ name: "Hawkins" }];
const hawkinsnpreason = [
  { value: "Surgery", classname: "scar", name: "HawkinsNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "HawkinsNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "HawkinsNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "HawkinsNotperform",
  },
  { value: "Brace", classname: "scar", name: "HawkinsNotperform" },
];
const hawkinsnpother = [{ name: "HawkinsNotperform", otherclassname: "scar" }];
const hawkinsnpreasonreset = [{ name: "HawkinsNotperform" }];
const speedtestnegativepa = [
  { value: "Negative", name: "Speedtest", classname: "scar" },
];
const speedtestnegativepa1 = [
  { value: "Positive", name: "Speedtest", classname: "scar" },
];
const speedtestnperform = [
  { value: "Not-Performed", classname: "exam", name: "Speedtest" },
];
const speedtestnpreset = [{ name: "Speedtest" }];
const speedtestnpreason = [
  { value: "Surgery", classname: "scar", name: "SpeedtestNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "SpeedtestNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "SpeedtestNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "SpeedtestNotperform",
  },
  { value: "Brace", classname: "scar", name: "SpeedtestNotperform" },
];
const speedtestnpother = [{ name: "SpeedtestNotperform", classname: "scar" }];
const speedtestnpreasonreset = [{ name: "SpeedtestNotperform" }];
const lifttestnegativepa = [
  { value: "Negative", name: "Lifttest", classname: "scar" },
];
const lifttestnegativepa1 = [
  { value: "Positive", name: "Lifttest", classname: "scar" },
];
const lifttestnperform = [
  { value: "Not-Performed", classname: "exam", name: "Lifttest" },
];
const lifttestnpreset = [{ name: "Lifttest" }];
const lifttestnpreason = [
  { value: "Surgery", classname: "scar", name: "LifttestNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "LifttestNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "LifttestNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "LifttestNotperform",
  },
  { value: "Brace", classname: "scar", name: "LifttestNotperform" },
];
const lifttestnpother = [
  { name: "LifttestNotperform", otherclassname: "scar" },
];
const lifttestnpreasonreset = [{ name: "LifttestNotperform" }];
const obrienstestnegativepa = [
  { value: "Negative", name: "Obrienstest", classname: "scar" },
];
const obrienstestnegativepa1 = [
  { value: "Positive", name: "Obrienstest", classname: "scar" },
];
const obrienstestnperform = [
  { value: "Not-Performed", classname: "exam", name: "Obrienstest" },
];
const obrienstestnpreset = [{ name: "Obrienstest" }];
const obrienstestnpreason = [
  { value: "Surgery", classname: "scar", name: "ObrienstestNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "ObrienstestNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "ObrienstestNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "ObrienstestNotperform",
  },
  { value: "Brace", classname: "scar", name: "ObrienstestNotperform" },
];
const obrienstestnpother = [
  { name: "ObrienstestNotperform", otherclassname: "scar" },
];
const obrienstestnpreasonreset = [{ name: "ObrienstestNotperform" }];
const strengthnegativepa = [
  { value: "Negative", name: "Strength", classname: "scar" },
];
const strengthnegativepa1 = [
  { value: "Positive", name: "Strength", classname: "scar" },
];
const strengthnperform = [
  { value: "Not-Performed", classname: "exam", name: "Strength" },
];
const strengthnpreset = [{ name: "Strength" }];
const strengthnpreason = [
  { value: "Surgery", classname: "scar", name: "StrengthNotperform" },
  {
    value: "Complaint of pain",
    classname: "exam1",
    name: "StrengthNotperform",
  },
  {
    value: "Non-Cooperation",
    classname: "exam1",
    name: "StrengthNotperform",
  },
  {
    value: "Not Wish to Perform",
    classname: "exam1",
    name: "StrengthNotperform",
  },
  { value: "Brace", classname: "scar", name: "StrengthNotperform" },
];
const strengthnpother = [
  { name: "StrengthNotperform", otherclassname: "scar" },
];
const strengthnpreasonreset = [{ name: "StrengthNotperform" }];
const rsadddetails = [
  { name: "RSadddetail", value: "NO", classname: "scar" },
  { name: "RSadddetail", value: "Yes", classname: "scar" },
];
const adreset = [{ name: "RSadddetail" }];
const rsadddetailsyesnovalue = [
  { value: "Yes", classname: "scar", name: "RSadddetail" },
];
const rsadddetailsyes = [
  { value: "No", name: "RSadddetail", classname: "scar" },
];

const decreasedbutton = [
  { value: "5/5", name: "decreased", classname: "scar" },
  { value: "Decreased", name: "decreased", classname: "scar" },
];
const strength = [
  { value: "Biceps", classname: "scar", name: "Strenth5/5" },
  { value: "Triceps", classname: "scar", name: "Strenth5/5" },
  { value: "Rotator Cuff", classname: "exam", name: "Strenth5/5" },
];

const other9 = [{ name: "Strenth5/5", otherclassname: "scar" }];
const decreasedreset = [
  { value: "Reset", name: "Strenth5/5", classname: "scar" },
];
const other11 = [{ name: "neuroreason", otherclassname: "scar" }];
const reason7 = [
  { value: "surgery", name: "neuroreason", classname: "scar" },
  { value: "Complaint of pain", name: "neuroreason", classname: "exam1" },
  { value: "Non-cooperation", name: "neuroreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "neuroreason",
    classname: "exam1",
  },
  { value: "Brace", name: "neuroreason", classname: "scar" },
];
const notperform7 = [
  { value: "Not-Performed", name: "decreased", classname: "exam" },
];
const examreset7 = [{ name: "decreased" }];
const exam1reset7 = [{ name: "neuroreason" }];

export const Rightshoulder = () => (
  <Shoulder
    shoulders={RightShoulder}
    rsaspect={rsaspect}
    rsstatus={rsstatus}
    rsappearance={rsappearance}
    rsscar={rsscar}
    rsaspectreset={rsaspectreset}
    rsstatusreset={rsstatusreset}
    rsappearancereset={rsappearancereset}
    rsaspectother={rsaspectother}
    rsstatusother={rsstatusother}
    rsappearanceother={rsappearanceother}
    rsscarreset={rsscarreset}
    exnperform={exnperform}
    exnpreset={exnpreset}
    exnpreason={exnpreason}
    ExNpother={ExNpother}
    exnpreasonreset={exnpreasonreset}
    rshoulderexam1={rshoulderexam1}
    rsfyes={rsfyes}
    rsfno={rsfno}
    rsswelling={rsswelling}
    rserythema={rserythema}
    rseffusion={rseffusion}
    rsecchymosis={rsecchymosis}
    rsredness={rsredness}
    rsedema={rsedema}
    rsdeformity={rsdeformity}
    rsswelling1={rsswelling1}
    rserythema1={rserythema1}
    rseffusion1={rseffusion1}
    rsecchymosis1={rsecchymosis1}
    rsredness1={rsredness1}
    rsedema1={rsedema1}
    rsdeformity1={rsdeformity1}
    rsfnoother={rsfnoother}
    rsfyesother={rsfyesother}
    rstenderness={rstenderness}
    rstenderreset={rstenderreset}
    tclassification={tclassification}
    rscother={rscother}
    creset={creset}
    normalexam={normalexam}
    nexampainscale={nexampainscale}
    nexamreset={nexamreset}
    tposition={tposition}
    positionreset={positionreset}
    tpositionother={tpositionother}
    taspect={taspect}
    taspectother={taspectother}
    aspectreset={aspectreset}
    romnperform={romnperform}
    romnpreset={romnpreset}
    romnpreason={romnpreason}
    romnpreasonreset={romnpreasonreset}
    romnpother={romnpother}
    rsrom={rsrom}
    rsrestricted={rsrestricted}
    selfrreset={selfrreset}
    rspcmotion={rspcmotion}
    pcmotionreset={pcmotionreset}
    rsinstabilityyesreset={rsinstabilityyesreset}
    rsinstabilityyesnovalue={rsinstabilityyesnovalue}
    rsinstabilityyes={rsinstabilityyes}
    rssymptommyes={rssymptommyes}
    rssymptommyesnovalue={rssymptommyesnovalue}
    rssymptommyesreset={rssymptommyesreset}
    rsnvascularyes={rsnvascularyes}
    rsnvascularyesnovalue={rsnvascularyesnovalue}
    rsnvascularyesreset={rsnvascularyesreset}
    rsorthotest={rsorthotest}
    rsorthotestnperform={rsorthotestnperform}
    rsorthotestnpreset={rsorthotestnpreset}
    rsorthotestnpreason={rsorthotestnpreason}
    rsorthotestnpother={rsorthotestnpother}
    rsorthotestnpreasonreset={rsorthotestnpreasonreset}
    apprenhensionnegativepa1={apprenhensionnegativepa1}
    apprenhensionnegativepa={apprenhensionnegativepa}
    aptestnperform={aptestnperform}
    aptestnpreset={aptestnpreset}
    aptestnpother={aptestnpother}
    aptestnpreason={aptestnpreason}
    aptestnpreasonreset={aptestnpreasonreset}
    sulcustestnegativepa1={sulcustestnegativepa1}
    sulcustestnegativepa={sulcustestnegativepa}
    sulcustestnperform={sulcustestnperform}
    sulcustestnpreset={sulcustestnpreset}
    sulcustestnpother={sulcustestnpother}
    sulcustestnpreason={sulcustestnpreason}
    sulcustestnpreasonreset={sulcustestnpreasonreset}
    neeritestnegativepa1={neeritestnegativepa1}
    neeritestnegativepa={neeritestnegativepa}
    neerItestnperform={neerItestnperform}
    neerItestnpreset={neerItestnpreset}
    neerItestnpother={neerItestnpother}
    neerItestnpreason={neerItestnpreason}
    neerItestnpreasonreset={neerItestnpreasonreset}
    hawkinsnegativepa={hawkinsnegativepa}
    hawkinsnegativepa1={hawkinsnegativepa1}
    hawkinsnperform={hawkinsnperform}
    hawkinsnpreset={hawkinsnpreset}
    hawkinsnpreason={hawkinsnpreason}
    hawkinsnpother={hawkinsnpother}
    hawkinsnpreasonreset={hawkinsnpreasonreset}
    speedtestnegativepa={speedtestnegativepa}
    speedtestnegativepa1={speedtestnegativepa1}
    speedtestnperform={speedtestnperform}
    speedtestnpreset={speedtestnpreset}
    speedtestnpreason={speedtestnpreason}
    speedtestnpother={speedtestnpother}
    speedtestnpreasonreset={speedtestnpreasonreset}
    lifttestnegativepa={lifttestnegativepa}
    lifttestnegativepa1={lifttestnegativepa1}
    lifttestnperform={lifttestnperform}
    lifttestnpreset={lifttestnpreset}
    lifttestnpreason={lifttestnpreason}
    lifttestnpother={lifttestnpother}
    lifttestnpreasonreset={lifttestnpreasonreset}
    obrienstestnegativepa={obrienstestnegativepa}
    obrienstestnegativepa1={obrienstestnegativepa1}
    obrienstestnperform={obrienstestnperform}
    obrienstestnpreset={obrienstestnpreset}
    obrienstestnpreason={obrienstestnpreason}
    obrienstestnpother={obrienstestnpother}
    obrienstestnpreasonreset={obrienstestnpreasonreset}
    strengthnegativepa={strengthnegativepa}
    strengthnegativepa1={strengthnegativepa1}
    strengthnperform={strengthnperform}
    strengthnpreset={strengthnpreset}
    strengthnpreason={strengthnpreason}
    strengthnpother={strengthnpother}
    strengthnpreasonreset={strengthnpreasonreset}
    rsadddetails={rsadddetails}
    tposition1={tposition1}
    rssuboptimalyes={rssuboptimalyes}
    rssuboptimalyesreset={rssuboptimalyesreset}
    rssuboptimalyesnovalue={rssuboptimalyesnovalue}
    rsatrophyyes={rsatrophyyes}
    rsatrophyyesnovalue={rsatrophyyesnovalue}
    rsatrophyyesreset={rsatrophyyesreset}
    adreset={adreset}
    rsadddetailsyesnovalue={rsadddetailsyesnovalue}
    rsadddetailsyes={rsadddetailsyes}
    decreasedbutton={decreasedbutton}
    strength={strength}
    other9={other9}
    decreasedreset={decreasedreset}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    notperform7={notperform7}
    reason7={reason7}
    other11={other11}
  />
);

export const Leftshoulder = () => (
  <Shoulder
    shoulders={LeftShoulder}
    rsaspect={rsaspect}
    rsstatus={rsstatus}
    rsappearance={rsappearance}
    rsscar={rsscar}
    rsaspectreset={rsaspectreset}
    rsstatusreset={rsstatusreset}
    rsappearancereset={rsappearancereset}
    rsaspectother={rsaspectother}
    rsstatusother={rsstatusother}
    rsappearanceother={rsappearanceother}
    rsscarreset={rsscarreset}
    exnperform={exnperform}
    exnpreset={exnpreset}
    exnpreason={exnpreason}
    ExNpother={ExNpother}
    exnpreasonreset={exnpreasonreset}
    rshoulderexam1={rshoulderexam1}
    rsfyes={rsfyes}
    rsfno={rsfno}
    rsswelling={rsswelling}
    rserythema={rserythema}
    rseffusion={rseffusion}
    rsecchymosis={rsecchymosis}
    rsredness={rsredness}
    rsedema={rsedema}
    rsdeformity={rsdeformity}
    rsswelling1={rsswelling1}
    rserythema1={rserythema1}
    rseffusion1={rseffusion1}
    rsecchymosis1={rsecchymosis1}
    rsredness1={rsredness1}
    rsedema1={rsedema1}
    rsdeformity1={rsdeformity1}
    rsfnoother={rsfnoother}
    rsfyesother={rsfyesother}
    rstenderness={rstenderness}
    rstenderreset={rstenderreset}
    tclassification={tclassification}
    rscother={rscother}
    creset={creset}
    normalexam={normalexam}
    nexampainscale={nexampainscale}
    nexamreset={nexamreset}
    tposition={tposition}
    positionreset={positionreset}
    tpositionother={tpositionother}
    taspect={taspect}
    taspectother={taspectother}
    aspectreset={aspectreset}
    romnperform={romnperform}
    romnpreset={romnpreset}
    romnpreason={romnpreason}
    romnpreasonreset={romnpreasonreset}
    romnpother={romnpother}
    rsrom={rsrom}
    rsrestricted={rsrestricted}
    selfrreset={selfrreset}
    rspcmotion={rspcmotion}
    pcmotionreset={pcmotionreset}
    rsinstabilityyesreset={rsinstabilityyesreset}
    rsinstabilityyesnovalue={rsinstabilityyesnovalue}
    rsinstabilityyes={rsinstabilityyes}
    rssymptommyes={rssymptommyes}
    rssymptommyesnovalue={rssymptommyesnovalue}
    rssymptommyesreset={rssymptommyesreset}
    rsnvascularyes={rsnvascularyes}
    rsnvascularyesnovalue={rsnvascularyesnovalue}
    rsnvascularyesreset={rsnvascularyesreset}
    rsorthotest={rsorthotest}
    rsorthotestnperform={rsorthotestnperform}
    rsorthotestnpreset={rsorthotestnpreset}
    rsorthotestnpreason={rsorthotestnpreason}
    rsorthotestnpother={rsorthotestnpother}
    rsorthotestnpreasonreset={rsorthotestnpreasonreset}
    apprenhensionnegativepa1={apprenhensionnegativepa1}
    apprenhensionnegativepa={apprenhensionnegativepa}
    aptestnperform={aptestnperform}
    aptestnpreset={aptestnpreset}
    aptestnpother={aptestnpother}
    aptestnpreason={aptestnpreason}
    aptestnpreasonreset={aptestnpreasonreset}
    sulcustestnegativepa1={sulcustestnegativepa1}
    sulcustestnegativepa={sulcustestnegativepa}
    sulcustestnperform={sulcustestnperform}
    sulcustestnpreset={sulcustestnpreset}
    sulcustestnpother={sulcustestnpother}
    sulcustestnpreason={sulcustestnpreason}
    sulcustestnpreasonreset={sulcustestnpreasonreset}
    neeritestnegativepa1={neeritestnegativepa1}
    neeritestnegativepa={neeritestnegativepa}
    neerItestnperform={neerItestnperform}
    neerItestnpreset={neerItestnpreset}
    neerItestnpother={neerItestnpother}
    neerItestnpreason={neerItestnpreason}
    neerItestnpreasonreset={neerItestnpreasonreset}
    hawkinsnegativepa={hawkinsnegativepa}
    hawkinsnegativepa1={hawkinsnegativepa1}
    hawkinsnperform={hawkinsnperform}
    hawkinsnpreset={hawkinsnpreset}
    hawkinsnpreason={hawkinsnpreason}
    hawkinsnpother={hawkinsnpother}
    hawkinsnpreasonreset={hawkinsnpreasonreset}
    speedtestnegativepa={speedtestnegativepa}
    speedtestnegativepa1={speedtestnegativepa1}
    speedtestnperform={speedtestnperform}
    speedtestnpreset={speedtestnpreset}
    speedtestnpreason={speedtestnpreason}
    speedtestnpother={speedtestnpother}
    speedtestnpreasonreset={speedtestnpreasonreset}
    lifttestnegativepa={lifttestnegativepa}
    lifttestnegativepa1={lifttestnegativepa1}
    lifttestnperform={lifttestnperform}
    lifttestnpreset={lifttestnpreset}
    lifttestnpreason={lifttestnpreason}
    lifttestnpother={lifttestnpother}
    lifttestnpreasonreset={lifttestnpreasonreset}
    obrienstestnegativepa={obrienstestnegativepa}
    obrienstestnegativepa1={obrienstestnegativepa1}
    obrienstestnperform={obrienstestnperform}
    obrienstestnpreset={obrienstestnpreset}
    obrienstestnpreason={obrienstestnpreason}
    obrienstestnpother={obrienstestnpother}
    obrienstestnpreasonreset={obrienstestnpreasonreset}
    strengthnegativepa={strengthnegativepa}
    strengthnegativepa1={strengthnegativepa1}
    strengthnperform={strengthnperform}
    strengthnpreset={strengthnpreset}
    strengthnpreason={strengthnpreason}
    strengthnpother={strengthnpother}
    strengthnpreasonreset={strengthnpreasonreset}
    rsadddetails={rsadddetails}
    tposition1={tposition1}
    rssuboptimalyes={rssuboptimalyes}
    rssuboptimalyesreset={rssuboptimalyesreset}
    rssuboptimalyesnovalue={rssuboptimalyesnovalue}
    rsatrophyyes={rsatrophyyes}
    rsatrophyyesnovalue={rsatrophyyesnovalue}
    rsatrophyyesreset={rsatrophyyesreset}
    adreset={adreset}
    rsadddetailsyesnovalue={rsadddetailsyesnovalue}
    rsadddetailsyes={rsadddetailsyes}
    decreasedbutton={decreasedbutton}
    strength={strength}
    other9={other9}
    decreasedreset={decreasedreset}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    notperform7={notperform7}
    reason7={reason7}
    other11={other11}
  />
);
