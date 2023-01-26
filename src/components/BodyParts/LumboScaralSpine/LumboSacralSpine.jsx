import ScarVariation1 from "../../Scar/ScarVariation1";
import RadioButton from "../../RadioButton/RadioButton";
import Others from "../../Others/Others";
import CsLevel from "../../CsLevel/CsLevel";
import Reset1 from "../../Reset1/Reset1";
import YesNo from "../../YesNo/YesNo";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import NegativePositive from "../../NegativePositive/NegativePositive";
import Zero from "../../Zero/Zero";
import OnePlus from "../../Oneplus/OnePlus";
import Decreased from "../../Decreased/Decreased";
// import "./Lumbosacral.css";
import CheckBox from "../../CheckboxButton/CheckBox";
import { Other } from "../../../button1/scarvariation1.stories";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";
const LumboSacralSpine = ({
  lspine,
  statusvalue,
  scarreset,
  statusother,
  statusreset,
  appearancevalue,
  appearanceother,
  aspectname,
  aspectvalue,
  appearancereset,
  aspectreset,
  scarsidereset,
  sidevalue,
  scarvalue,
  examvalue,
  nexamvalue,
  nexampainscale,
  align,
  gettable,
  tendernessvalue,
  clasifi,
  clasifiother,
  positionvalue,
  positionother,
  tsidevalue,
  spasmvalue,
  spasmclasifi,
  spasmclasifiother,
  level,
  spslothername,
  sdermotome,
  spslevel,
  spslevelvalue,
  spspositionvalue,
  spspositionother,
  spasmsidevalue,
  rom,
  selfrestricted,
  rompain,
  nexamreset,
  alignmetreset,
  tbreset,
  treset,
  claisifireset,
  positionreset,
  sidereset,
  spasmreset,
  spasmclreset,
  spasmpreset,
  spasmsidereset,
  srestrictedreset,
  spasmpainreset,
  yesno,
  yesnovalue,
  yesreset,
  atropyyesno,
  atropyvalue,
  atropyreset,
  ecchymosisyesno,
  ecchymosisvalue,
  ecchymosisreset,
  symptomyesname,
  symptomreset,
  symptomvalue,
  orthotest,
  orthonpother,
  orthonpreason,
  orthonpreset,
  orthonpvalue,
  npreasonreset,
  examnpvalue,
  examnpreset,
  examnpreason,
  examnpother,
  examreasonreset,
  romnpvalue,
  romnpreset,
  romnpreason,
  romnpother,
  romnpreasonreset,
  negativepositive1,
  negativepositive,
  legtestnpvalue,
  legtestnpreset,
  legtestnpreason,
  legtestnpother,
  legtestnpreasonreset,
  neuroexam,
  nexamnpvalue,
  nexamnpreset,
  nexamnpreason,
  nexamnpother,
  nexamnpreasonreset,
  mstrengthdec,
  mstrength,
  mstrengthside,
  mstrengthsreset,
  mstrengthsvalues,
  mstrengthother,
  mstrengthreset,
  mstrengthnpvalue,
  mstrengthnpreset,
  mstrengthnpreason,
  mstrengthnpother,
  mstrengthnpreasonreset,
  sensation,
  sensationnpvalue,
  sensationnpreset,
  sensationnpreason,
  sensationnpother,
  sensationnpreasonreset,
  sintact,
  reflexonevalue,
  reflex,
  reflexside,
  reflexsvalue,
  reflexsreset,
  reflex2,
  refreset,
  detailsreset,
  refsidesname,
  refsidevalues,
  refsidereset,
  examnotpform,
  romnotpform,
  orthonotpform,
  neuroexamnotpform,
  sensationnotpform,
  mstrengthnotpform,
  legtestnotpform,
  detailsyesno,
  detailsvalue,
  level2,
  other,
  value1,
  resetvalue1,
  individualvalue,
  level3,
  othervalue,
  value2,
  resetvalue2,
  individualvalue1,
  exam1reset7,
  examreset7,
  Notperform7,
  Reason7,
  other11,
  Decreasedreset,
  other9,
  Sidereset,
  Sidevalues,
  Sidesv,
  DecreasedButton,
  strength,
  Sidevalues1,
  Sidereset1,
  Sidesv1,
  rreflex,
  rreflexonevalue,
  zeroreset,
  rreflexside,
  reflexSreset,
  reflexSvalue,
  reflex11,
}) => {
  return (
    <div>
      {lspine.map((value) => (
        <h1 style={{ fontSize: "32px" }}>{value.label}</h1>
      ))}
      <span>
        <ScarVariation1
          Status={statusvalue}
          StatusOther={statusother}
          AppearanceOther={appearanceother}
          Appearance={appearancevalue}
          aspectOther={aspectname}
          aspect={aspectvalue}
          Side={sidevalue}
          Scar={scarvalue}
          Appearancereset={appearancereset}
          aspectreset={aspectreset}
          Sidereset={scarsidereset}
          Scarreset={scarreset}
          Statusreset={statusreset}
        />
      </span>
      <div>
        <h2>Examination</h2>
        <div style={{ display: "flex" }}>
          <RadioButton InputArray={examvalue} />
          <div>
            <NotPerformed
              Notperform={examnpvalue}
              exam1reset={examnpreset}
              Reason={examnpreason}
              other2={examnpother}
              examreset={examreasonreset}
            />
          </div>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <h2>Normal Exam</h2>
          <div style={{ display: "flex" }}>
            <RadioButton InputArray={nexamvalue} />
            <PainScaleButton painScale={nexampainscale} />
            <Reset1 Resetall={nexamreset} />
          </div>
          <h3>Alignment</h3>
          <div style={{ display: "flex" }}>
            <RadioButton InputArray={align} />
            <Reset1 Resetall={alignmetreset} />
          </div>
          <h3>Getting On/ off table</h3>
          <div style={{ display: "flex" }}>
            <RadioButton InputArray={gettable} />
            <Reset1 Resetall={tbreset} />
          </div>
          <h3>Tenderness</h3>

          <div style={{ display: "flex" }}>
            <RadioButton InputArray={tendernessvalue} />
            <Reset1 Resetall={treset} />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <h4>Classification</h4>
            <div style={{ display: "flex" }}>
              <CheckBox InputArray1={clasifi} />
              <Other other={clasifiother} />
              <Reset1 Resetall={claisifireset} />
            </div>
            <h4>Level</h4>
            <div style={{ display: "flex" }}>
              <CsLevel
                level={level2}
                other={other}
                value1={value1}
                resetvalue1={resetvalue1}
                individualvalue={individualvalue}
              />
            </div>
            <h4>Position</h4>
            <div style={{ display: "flex" }}>
              <CheckBox InputArray1={positionvalue} />
              <Other other={positionother} />
              <Reset1 Resetall={positionreset} />
            </div>
            <h4>Sides</h4>
            <div style={{ display: "flex" }}>
              <RadioButton InputArray={tsidevalue} />
              <Reset1 Resetall={sidereset} />
            </div>
          </div>
          <h3>Spasm</h3>
          <div style={{ display: "flex" }}>
            <RadioButton InputArray={spasmvalue} />
            <Reset1 Resetall={spasmreset} />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <h4>Classification</h4>
            <div style={{ display: "flex" }}>
              <CheckBox InputArray1={spasmclasifi} />
              <Other other={spasmclasifiother} />
              <Reset1 Resetall={spasmclreset} />
            </div>
            <h4>Level</h4>
            <div style={{ display: "flex" }}>
              <CsLevel
                level={level3}
                other={othervalue}
                value1={value2}
                resetvalue1={resetvalue2}
                individualvalue={individualvalue1}
              />
            </div>
            <h4>Position</h4>
            <div style={{ display: "flex" }}>
              <CheckBox InputArray1={spspositionvalue} />
              <Other other={spspositionother} />
              <Reset1 Resetall={spasmpreset} />
            </div>
            <h4>Sides</h4>
            <div style={{ display: "flex" }}>
              <RadioButton InputArray={spasmsidevalue} />
              <Reset1 Resetall={spasmsidereset} />
            </div>
          </div>
          <h3>ROM</h3>
          <div>
            <div>
              <RadioButton InputArray={rom} />
              <NotPerformed
                Notperform={romnpvalue}
                exam1reset={romnpreset}
                Reason={romnpreason}
                other2={romnpother}
                examreset={romnpreasonreset}
              />
            </div>

            <div style={{ marginLeft: "30px" }}>
              <h4>Values</h4>
              <div style={{ display: "flex", marginLeft: "20px" }}>
                <div>
                  Flexion(80)
                  <br />
                  <input type="text" className="size" />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  Extension(45)
                  <br />
                  <input type="text" className="size" />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  Right Bending(45)
                  <br />
                  <input type="text" className="size" />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  Left Bending(45)
                  <br />
                  <input type="text" className="size" />
                </div>
              </div>
              <h4>Self Restricted</h4>
              <div style={{ display: "flex" }}>
                <RadioButton InputArray={selfrestricted} />
                <Reset1 Resetall={srestrictedreset} />
              </div>
              <h4>Pain Causing Motion</h4>
              <div style={{ display: "flex" }}>
                <CheckBox InputArray1={rompain} />
                <Reset1 Resetall={spasmpainreset} />
              </div>
            </div>
          </div>
          <h3>Suboptimal Effort</h3>
          <div>
            <YesNo
              Suboptimal1={yesnovalue}
              Suboptimalreset={yesreset}
              Suboptimal={yesno}
            />
          </div>
          <h3>Atrophy</h3>
          <div>
            <YesNo
              Suboptimal1={atropyvalue}
              Suboptimalreset={atropyreset}
              Suboptimal={atropyyesno}
            />
          </div>
          <h3>Ecchymosis Pain Scale</h3>
          <div>
            <YesNo
              Suboptimal1={ecchymosisvalue}
              Suboptimalreset={ecchymosisreset}
              Suboptimal={ecchymosisyesno}
            />
          </div>
          <h3>Symptom Magnification</h3>
          <div>
            <YesNo
              Suboptimal={symptomvalue}
              Suboptimalreset={symptomreset}
              Suboptimal1={symptomyesname}
            />
          </div>
          <h3>Orthopedic Tests</h3>
          <span>
            <div>
              <RadioButton InputArray={orthotest} />
              <NotPerformed
                Notperform={orthonpvalue}
                exam1reset={orthonpreset}
                Reason={orthonpreason}
                other2={orthonpother}
                examreset={npreasonreset}
              />
            </div>
            <h4 style={{ marginLeft: "20px" }}>Straight Leg Raise Test</h4>
            <div style={{ marginLeft: "20px" }}>
              <NegativePositive
                Negativepositive={negativepositive}
                Negativepositive1={negativepositive1}
              />

              <NotPerformed
                Notperform={legtestnpvalue}
                exam1reset={legtestnpreset}
                Reason={legtestnpreason}
                other2={legtestnpother}
                examreset={legtestnpreasonreset}
              />
            </div>
          </span>
          <h3>Neurological Examination</h3>
          <div>
            <span>
              <RadioButton InputArray={neuroexam} />
              <NotPerformed
                Notperform={nexamnpvalue}
                exam1reset={nexamnpreset}
                Reason={nexamnpreason}
                other2={nexamnpother}
                examreset={nexamnpreasonreset}
              />
            </span>
            <h4 style={{ marginLeft: "20px" }}>Muscle Strength</h4>
            <span style={{ display: "flex", marginLeft: "20px" }}>
              <Decreased
                Decreasedreset={Decreasedreset}
                other9={other9}
                Sidesv={Sidesv}
                Sidereset={Sidereset}
                Sidevalues={Sidevalues}
                strength={strength}
                DecreasedButton={DecreasedButton}
                exam1reset7={exam1reset7}
                examreset7={examreset7}
                Notperform7={Notperform7}
                Reason7={Reason7}
                other11={other11}
              />
            </span>
            <h4 style={{ marginLeft: "20px" }}>Sensation</h4>
            <span style={{ marginLeft: "20px" }}>
              <RadioButton InputArray={sensation} />
              <NotPerformed
                Notperform={sensationnpvalue}
                exam1reset={sensationnpreset}
                Reason={sensationnpreason}
                other2={sensationnpother}
                examreset={sensationnpreasonreset}
              />
            </span>
            <span>
              <br />
              <RadioButton InputArray={sintact} />
            </span>
            <h4 style={{ marginLeft: "20px" }}>Reflexes</h4>
            <span style={{ display: "flex", marginLeft: "20px" }}>
              <OnePlus
                Reflexonevalue={rreflexonevalue}
                Reflex={rreflex}
                Sidevalues={Sidevalues1}
                Sidesv={Sidesv1}
                Sidereset={Sidereset1}
              />
              <Zero
                Reflexside={rreflexside}
                ReflexSreset={reflexSreset}
                reflexSvalue={reflexSvalue}
                Reflex={reflex11}
                Zeroreset={zeroreset}
              />
              <Reset1 Resetall={refreset} />
            </span>
          </div>
          <h3>Add Details</h3>
          <div style={{ display: "flex" }}>
            <YesNo
              Suboptimal={detailsvalue}
              Suboptimalreset={detailsreset}
              Suboptimal1={detailsyesno}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LumboSacralSpine;
