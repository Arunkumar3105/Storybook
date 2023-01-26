import React from "react";
import RadioButton from "../../RadioButton/RadioButton";
import CheckBox from "../../CheckboxButton/CheckBox";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import ScarVariation1 from "../../Scar/ScarVariation1";
import Reset1 from "../../Reset1/Reset1";
import Others from "../../Others/Others";
import YesNo from "../../YesNo/YesNo";
import CsLevel from "../../CsLevel/CsLevel";
import Decreased from "../../Decreased/Decreased";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";

const ThoracicSpine = ({
  thoracic,
  statusvalue,
  scarreset,
  statusother,
  statusreset,
  appearanceother,
  appearancevalue,
  aspectname,
  aspectvalue,
  sidevalue,
  scarvalue,
  appearancereset,
  aspectreset,
  scarsidereset,
  tsexam,
  examnperform,
  examnpreset,
  examnpreason,
  examnpother,
  examnpreasonreset,
  tenderness,
  tendernessreset,
  nexam,
  nexampainscale,
  nexamreset,
  tstenderclassification,
  cother,
  creset,
  clevel,
  position,
  pother,
  preset,
  sides,
  level2,
  other,
  value1,
  resetvalue1,
  individualvalue,
  spasmreset,
  spasmother,
  tsspasmclassification,
  spasm,
  spasmreset1,
  level3,
  other2,
  value2,
  resetvalue2,
  individualvalue2,
  spasmlevel,

  spasmposition,
  spasmpositionother,
  spasmpreset,
  spasmsides,
  tsidereset,
  ssidereset,
  tsrom,
  tsromnperform,
  tsromnpreset,
  tsromnpreason,
  tsromnpother,
  tsromnpreasonreset,
  sryesno,
  selfyesreset,
  yesself,
  paincm,
  paincmreset,
  soptimalyesreset,
  soptimalno,
  soptimalyes,
  symptomyes,
  symptomno,
  symptomreset,
  cexpansion,
  cexpansionreset,
  cexpansion1,
  cexpansionreset1,
  sensation,
  decreasedbutton,
  strength,
  sidesv,
  sidereset,
  sidevalues,
  other9,
  decreasedreset,
  mstrengthnpvalue,
  mstrengthnpreset,
  mstrengthnpreason,
  mstrengthnpother,
  mstrengthnpreasonreset,
  mstrengthnotpform,
  addetails,
  addetailsreset,
  atrophyyes,
  atrophyno,
  atrophyyesreset,
  ecchymosisyes,
  ecchymosisno,
  ecchymosisyesreset,
  romnotpform,
  examnotpform,
  exam,
}) => {
  return (
    <div>
      {thoracic.map((value) => (
        <h1 style={{ fontSize: "32px" }}>{value.label}</h1>
      ))}
      <span>
        <ScarVariation1
          Status={statusvalue}
          Scarreset={scarreset}
          StatusOther={statusother}
          Statusreset={statusreset}
          AppearanceOther={appearanceother}
          Appearance={appearancevalue}
          aspectOther={aspectname}
          aspect={aspectvalue}
          Side={sidevalue}
          Scar={scarvalue}
          Appearancereset={appearancereset}
          aspectreset={aspectreset}
          Sidereset={scarsidereset}
        />
      </span>
      <h2>Examination</h2>
      <span>
        <span style={{ display: "flex" }}>
          <RadioButton InputArray={exam} />
          <NotPerformed
            Notperform={examnperform}
            exam1reset={examnpreset}
            Reason={examnpreason}
            other2={examnpother}
            examreset={examnpreasonreset}
          />
        </span>
        <h2>Normal Exam</h2>
        <span style={{ display: "flex" }}>
          <RadioButton InputArray={nexam} />
          <PainScaleButton painScale={nexampainscale} />
          <Reset1 Resetall={nexamreset} />
        </span>
        <h3>Tenderness</h3>
        <span style={{ display: "flex" }}>
          <RadioButton InputArray={tenderness} />
          <Reset1 Resetall={tendernessreset} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <h4>Classification</h4>
          <span style={{ display: "flex" }}>
            <CheckBox InputArray1={tstenderclassification} />
            <Others other={cother} />
            <Reset1 Resetall={creset} />
          </span>
          <h4>Level</h4>
          <span style={{ display: "flex" }}>
            <RadioButton InputArray={clevel} /> <br />
            <span style={{ display: "flex" }}>
              <CsLevel
                level={level2}
                other={other}
                value1={value1}
                resetvalue1={resetvalue1}
                individualvalue={individualvalue}
              />
            </span>
          </span>
          <h4>Position</h4>
          <span style={{ display: "flex" }}>
            <CheckBox InputArray1={position} />
            <Others other={pother} />
            <Reset1 Resetall={preset} />
          </span>
          <h4>Sides</h4>
          <span style={{ display: "flex" }}>
            <RadioButton InputArray={sides} />
            <Reset1 Resetall={tsidereset} />
          </span>
        </div>
        <h3>Spasm</h3>
        <span style={{ display: "flex" }}>
          <RadioButton InputArray={spasm} />
          <Reset1 Resetall={spasmreset1} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <h4>Classification</h4>
          <span style={{ display: "flex" }}>
            <CheckBox InputArray1={tsspasmclassification} />
            <Others other={spasmother} />
            <Reset1 Resetall={spasmreset} />
          </span>
          <h4>Level</h4>
          <span style={{ display: "flex" }}>
            <RadioButton InputArray={spasmlevel} />
            <CsLevel
              level={level3}
              other={other2}
              value1={value2}
              resetvalue1={resetvalue2}
              individualvalue={individualvalue2}
            />
          </span>
          <h4>Position</h4>
          <span style={{ display: "flex" }}>
            <CheckBox InputArray1={spasmposition} />
            <Others other={spasmpositionother} />
            <Reset1 Resetall={spasmpreset} />
          </span>
          <h4>Sides</h4>
          <span style={{ display: "flex" }}>
            <RadioButton InputArray={spasmsides} />
            <Reset1 Resetall={ssidereset} />
          </span>
        </div>
      </span>
      <h3>ROM</h3>
      <span style={{ display: "flex" }}>
        <RadioButton InputArray={tsrom} />
        <NotPerformed
          Notperform={tsromnperform}
          exam1reset={tsromnpreset}
          Reason={tsromnpreason}
          other2={tsromnpother}
          examreset={tsromnpreasonreset}
        />
      </span>
      <div style={{ marginLeft: "30px" }}>
        <h4>Values</h4>
        <span style={{ display: "flex" }}>
          <div>
            Flexion(20) <br />
            <input type="text" name="RomFlexiontxt" className="size" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            Extension (10) <br />
            <input type="text" name="RomExtensiontxt" className="size" />
          </div>
        </span>
        <h4>Self Restricted</h4>
        <span style={{ display: "flex" }}>
          <YesNo
            Suboptimal1={sryesno}
            Suboptimal={yesself}
            Suboptimalreset={selfyesreset}
          />
        </span>
        <h4>Pain Causing Motion</h4>
        <span style={{ display: "flex" }}>
          <CheckBox InputArray1={paincm} />
          <Reset1 Resetall={paincmreset} />
        </span>
      </div>
      <h3>Suboptimal Effort</h3>
      <span>
        <YesNo
          Suboptimal1={soptimalyes}
          Suboptimal={soptimalno}
          Suboptimalreset={soptimalyesreset}
        />
      </span>
      <h3>Atrophy</h3>
      <YesNo
        Suboptimal1={atrophyyes}
        Suboptimal={atrophyno}
        Suboptimalreset={atrophyyesreset}
      />
      <h3>Ecchymosis Pain Scale</h3>
      <YesNo
        Suboptimal1={ecchymosisyes}
        Suboptimal={ecchymosisno}
        Suboptimalreset={ecchymosisyesreset}
      />
      <h3>Symptom Magnification</h3>
      <span>
        <YesNo
          Suboptimal1={symptomyes}
          Suboptimal={symptomno}
          Suboptimalreset={symptomreset}
        />
      </span>
      <h3>Chest Expansion</h3>
      <span style={{ display: "flex" }}>
        <RadioButton InputArray={cexpansion} />
        <Reset1 Resetall={cexpansionreset} />
      </span>
      <span style={{ display: "flex", marginTop: "10px" }}>
        <RadioButton InputArray={cexpansion1} />
        <Reset1 Resetall={cexpansionreset1} />
      </span>
      <h3>Sensation</h3>
      <span style={{ display: "flex" }}>
        <RadioButton InputArray={sensation} />
        <Decreased
          DecreasedButton={decreasedbutton}
          strength={strength}
          Sidevalues={sidevalues}
          Sidereset={sidereset}
          Sidesv={sidesv}
          other9={other9}
          Decreasedreset={decreasedreset}
          Notperform7={mstrengthnpvalue}
          exam1reset7={mstrengthnpreset}
          Reason7={mstrengthnpreason}
          other11={mstrengthnpother}
          examreset7={mstrengthnpreasonreset}
        />
      </span>
      <h3>Add Details</h3>
      <span style={{ display: "flex" }}>
        <RadioButton InputArray={addetails} />
        <Reset1 Resetall={addetailsreset} />
      </span>
    </div>
  );
};
export default ThoracicSpine;
