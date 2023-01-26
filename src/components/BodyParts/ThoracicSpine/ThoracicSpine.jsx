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
  addetailsno,
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
          status={statusvalue}
          scarreset={scarreset}
          statusother={statusother}
          statusreset={statusreset}
          appearanceother={appearanceother}
          appearance={appearancevalue}
          aspectother={aspectname}
          aspect={aspectvalue}
          side={sidevalue}
          scar={scarvalue}
          appearancereset={appearancereset}
          aspectreset={aspectreset}
          sidereset={scarsidereset}
        />
      </span>
      <h2>Examination</h2>
      <span>
        <span>
          <RadioButton inputarray={exam} />
          <NotPerformed
            notperform={examnperform}
            exam1reset={examnpreset}
            reason={examnpreason}
            other2={examnpother}
            examreset={examnpreasonreset}
          />
        </span>
        <h2>Normal Exam</h2>
        <span style={{ display: "flex" }}>
          <RadioButton inputarray={nexam} />
          <PainScaleButton painscale={nexampainscale} />
          <Reset1 resetall={nexamreset} />
        </span>
        <h3>Tenderness</h3>
        <span style={{ display: "flex" }}>
          <RadioButton inputarray={tenderness} />
          <Reset1 resetall={tendernessreset} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <h4>Classification</h4>
          <span style={{ display: "flex" }}>
            <CheckBox inputarray1={tstenderclassification} />
            <Others other={cother} />
            <Reset1 resetall={creset} />
          </span>
          <h4>Level</h4>
          <span style={{ display: "flex" }}>
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
            <CheckBox inputarray1={position} />
            <Others other={pother} />
            <Reset1 resetall={preset} />
          </span>
          <h4>Sides</h4>
          <span style={{ display: "flex" }}>
            <RadioButton inputarray={sides} />
            <Reset1 resetall={tsidereset} />
          </span>
        </div>
        <h3>Spasm</h3>
        <span style={{ display: "flex" }}>
          <RadioButton inputarray={spasm} />
          <Reset1 resetall={spasmreset1} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <h4>Classification</h4>
          <span style={{ display: "flex" }}>
            <CheckBox inputarray1={tsspasmclassification} />
            <Others other={spasmother} />
            <Reset1 resetall={spasmreset} />
          </span>
          <h4>Level</h4>
          <span style={{ display: "flex" }}>
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
            <CheckBox inputarray1={spasmposition} />
            <Others other={spasmpositionother} />
            <Reset1 resetall={spasmpreset} />
          </span>
          <h4>Sides</h4>
          <span style={{ display: "flex" }}>
            <RadioButton inputarray={spasmsides} />
            <Reset1 resetall={ssidereset} />
          </span>
        </div>
      </span>
      <h3>ROM</h3>
      <span>
        <RadioButton inputarray={tsrom} />
        <NotPerformed
          notperform={tsromnperform}
          exam1reset={tsromnpreset}
          reason={tsromnpreason}
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
            suboptimal1={sryesno}
            suboptimal={yesself}
            suboptimalreset={selfyesreset}
          />
        </span>
        <h4>Pain Causing Motion</h4>
        <span style={{ display: "flex" }}>
          <CheckBox inputarray1={paincm} />
          <Reset1 resetall={paincmreset} />
        </span>
      </div>
      <h3>Suboptimal Effort</h3>
      <span>
        <YesNo
          suboptimal1={soptimalyes}
          suboptimal={soptimalno}
          suboptimalreset={soptimalyesreset}
        />
      </span>
      <h3>Atrophy</h3>
      <YesNo
        suboptimal1={atrophyyes}
        suboptimal={atrophyno}
        suboptimalreset={atrophyyesreset}
      />
      <h3>Ecchymosis Pain Scale</h3>
      <YesNo
        suboptimal1={ecchymosisyes}
        suboptimal={ecchymosisno}
        suboptimalreset={ecchymosisyesreset}
      />
      <h3>Symptom Magnification</h3>
      <span>
        <YesNo
          suboptimal1={symptomyes}
          suboptimal={symptomno}
          suboptimalreset={symptomreset}
        />
      </span>
      <h3>Chest Expansion</h3>
      <span style={{ display: "flex" }}>
        <RadioButton inputarray={cexpansion} />
        <Reset1 resetall={cexpansionreset} />
      </span>
      <span style={{ display: "flex", marginTop: "10px" }}>
        <RadioButton inputarray={cexpansion1} />
        <Reset1 resetall={cexpansionreset1} />
      </span>
      <h3>Sensation</h3>
      <span style={{ display: "flex" }}>
        <RadioButton inputarray={sensation} />
        <Decreased
          decreasedbutton={decreasedbutton}
          strength={strength}
          sidevalues={sidevalues}
          sidereset={sidereset}
          sidesv={sidesv}
          other9={other9}
          decreasedreset={decreasedreset}
          notperform7={mstrengthnpvalue}
          exam1reset7={mstrengthnpreset}
          reason7={mstrengthnpreason}
          other11={mstrengthnpother}
          examreset7={mstrengthnpreasonreset}
        />
      </span>
      <h3>Add Details</h3>
      <span style={{ display: "flex" }}>
        <YesNo
          suboptimal1={addetails}
          suboptimal={addetailsno}
          suboptimalreset={addetailsreset}
        />
      </span>
    </div>
  );
};
export default ThoracicSpine;
