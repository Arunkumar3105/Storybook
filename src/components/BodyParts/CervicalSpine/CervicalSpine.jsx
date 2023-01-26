import React from "react";
import ScarVariation1 from "../../Scar/ScarVariation1";
import RadioButton from "../../RadioButton/RadioButton";
import CheckBox from "../../CheckboxButton/CheckBox";
import { Other } from "../../../button1/scarvariation1.stories";

import CsLevel from "../../CsLevel/CsLevel";

import Reset1 from "../../Reset1/Reset1";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import YesNo from "../../YesNo/YesNo";
import NegativePositive from "../../NegativePositive/NegativePositive";
import Decreased from "../../Decreased/Decreased";
import OnePlus from "../../Oneplus/OnePlus";
import Zero from "../../Zero/Zero";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";
function CervicalSpine({
  aspect,
  appearance,
  status,
  side,
  scar,
  appearanceother,
  statusother,
  aspectother,
  exam,
  nexam,
  nexampainscale,
  alignment,
  tenderness,
  tstatus,
  tstatusother,
  level,
  other,
  tposition,
  tpositionother,
  tside,
  spasm,
  sstatus,
  sstatusother,
  level1,
  other1,
  sposition,
  spositionother,
  sside,
  rom,
  romself,
  rompain,

  nexamreset,
  alignmentreset,
  tendernessreset,
  tstatusreset,
  tpositionreset,
  tsidereset,
  spasmreset,
  sstatusreset,
  spositionreset,
  ssidereset,
  romreset,
  romselfreset,
  rompainreset,
  scarreset,
  appearancereset,
  statusreset,
  sidereset,
  aspectreset,
  examreset,
  other2,
  reason,
  exam1reset,
  suboptimal,
  suboptimal1,
  suboptimalreset,
  atrophyreset,
  atrophy,
  atrophy1,
  echymosisreset,
  echymosis,
  echymosis1,
  symptommagnification,
  symptommagnification1,
  symptomreset,
  other3,
  reason1,
  examreset1,
  exam1reset1,
  notperform,
  notperform1,
  orthopedic,
  other4,
  reason2,
  examreset2,
  exam1reset2,
  notperform2,
  negativepositive,
  negativepositive1,
  other5,
  reason3,
  notperform3,
  examreset3,
  exam1reset3,
  other6,
  reason4,
  notperform4,
  examreset4,
  exam1reset4,
  negativepositive11,
  negativepositive01,
  other7,
  reason5,
  notperform5,
  examreset5,
  exam1reset5,
  negativepositive12,
  negativepositive02,
  neurological,
  notperform6,
  exam1reset6,
  examreset6,
  reason6,
  other8,
  decreasedreset,
  other9,
  sidesv,
  sidesreset,
  sidevalues,
  strength,
  decreasedbutton,
  // Decreasedreset1,
  // other10,
  // Sidesv1,
  // Sidesreset1,
  // Sidevalues1,
  // strength1,
  // DecreasedButton1,
  exam1reset7,
  examreset7,
  notperform7,
  reason7,
  other11,

  sensation,
  exam1reset8,
  examreset8,
  notperform8,
  reason8,
  other12,
  reflexes,
  resetreflex,
  adddetails,
  adddetails1,
  adddetailsreset,
  reflexside,
  reflexsreset,
  reflexsvalue,
  reflex1,
  reflex,
  reflexonevalue,
  zeroreset,
  sidesv1,
  sidereset1,
  sidevalues1,
  shoulder,
  shoulder1,
  shoulderreset,
  value1,
  value2,
  values1,
  individualvalues,
  resetvalues1,
  resetvalue2,
  individualvalue2,
  values2,
}) {
  return (
    <div>
      <h1 style={{ fontSize: "32px", marginLeft: "0px" }}>Cervical Spine</h1>
      <ScarVariation1
        aspect={aspect}
        Appearance={appearance}
        Status={status}
        Side={side}
        Scar={scar}
        AppearanceOther={appearanceother}
        StatusOther={statusother}
        aspectOther={aspectother}
        Scarreset={scarreset}
        Appearancereset={appearancereset}
        Statusreset={statusreset}
        Sidereset={sidereset}
        aspectreset={aspectreset}
      />
      <h2>Examination</h2>
      <RadioButton InputArray={exam} />
      <NotPerformed
        examreset={examreset1}
        other2={other3}
        Reason={reason1}
        exam1reset={exam1reset1}
        Notperform={notperform1}
      />

      <h3 style={{ marginLeft: "15px" }}>Normal Exam</h3>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={nexam} />
        <PainScaleButton painScale={nexampainscale} />
        <Reset1 Resetall={nexamreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Alignment</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={alignment} />
        <Reset1 Resetall={alignmentreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Tenderness</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={tenderness} />
        <Reset1 Resetall={tendernessreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Status</h5>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox InputArray1={tstatus} />
        <Other other={tstatusother} />
        <Reset1 Resetall={tstatusreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Level</h5>
      <div style={{ marginLeft: "35px" }}>
        <CsLevel
          level={level}
          value1={values2}
          other={other}
          resetvalue1={resetvalue2}
          individualvalue={individualvalue2}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Position</h5>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox InputArray1={tposition} />
        <Other other={tpositionother} />
        <Reset1 Resetall={tpositionreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Side</h5>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={tside} />
        <Reset1 Resetall={tsidereset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Spasm</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={spasm} />
        <Reset1 Resetall={spasmreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Status</h5>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox InputArray1={sstatus} />
        <Other other={sstatusother} />
        <Reset1 Resetall={sstatusreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Level</h5>
      <div style={{ marginLeft: "35px" }}>
        <CsLevel
          level={level1}
          value1={values1}
          other={other1}
          resetvalue1={resetvalues1}
          individualvalue={individualvalues}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Position</h5>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox InputArray1={sposition} />
        <Other other={spositionother} />
        <Reset1 Resetall={spositionreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Side</h5>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={sside} />
        <Reset1 Resetall={ssidereset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>ROM</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={rom} />
        <NotPerformed
          examreset={examreset}
          other2={other2}
          Reason={reason}
          exam1reset={exam1reset}
          Notperform={notperform}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Values</h5>
      <div style={{ marginLeft: "10px" }}>
        <div style={{ display: "flex", marginLeft: "35px" }}>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Flexion(45)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Extension(45)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Right-Rotation(60)</h5>
            <input type="text" className="size" />
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "35px" }}>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Left-Rotation(60)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Right-Bending(45)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Left-Bending(45)</h5>
            <input type="text" className="size" />
          </div>
        </div>
      </div>
      <h5 style={{ marginLeft: "30px" }}>Self-Restricted</h5>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={romself} />
        <Reset1 Resetall={romselfreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Pain causing motion</h5>
      <div style={{ marginLeft: "35px" }}>
        <CheckBox InputArray1={rompain} />
        <Reset1 Resetall={rompainreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Suboptimal Effort</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={suboptimal}
          Suboptimal1={suboptimal1}
          Suboptimalreset={suboptimalreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Atrophy</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={atrophy}
          Suboptimal1={atrophy1}
          Suboptimalreset={atrophyreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Ecchymosis Pain Scale</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={echymosis}
          Suboptimal1={echymosis1}
          Suboptimalreset={echymosisreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Symptom Magnification</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={symptommagnification}
          Suboptimal1={symptommagnification1}
          Suboptimalreset={symptomreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Orthopedic Test</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={orthopedic} />
        <NotPerformed
          other2={other4}
          Reason={reason2}
          examreset={examreset2}
          exam1reset={exam1reset2}
          Notperform={notperform2}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Hoffman</h5>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          Negativepositive={negativepositive}
          Negativepositive1={negativepositive1}
        />
        <NotPerformed
          other2={other5}
          Reason={reason3}
          Notperform={notperform3}
          examreset={examreset3}
          exam1reset={exam1reset3}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Spurling</h5>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          Negativepositive={negativepositive01}
          Negativepositive1={negativepositive11}
        />
        <NotPerformed
          other2={other6}
          Reason={reason4}
          Notperform={notperform4}
          exam1reset={exam1reset4}
          examreset={examreset4}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Compression Test</h5>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          Negativepositive={negativepositive02}
          Negativepositive1={negativepositive12}
        />
        <NotPerformed
          other2={other7}
          Reason={reason5}
          Notperform={notperform5}
          exam1reset={exam1reset5}
          examreset={examreset5}
        />
      </div>
      <h5 style={{ marginLeft: "25px" }}>Shoulder Compression Test</h5>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={shoulder}
          Suboptimal1={shoulder1}
          Suboptimalreset={shoulderreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Neurological Examination</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={neurological} />
        <NotPerformed
          other2={other8}
          Reason={reason6}
          Notperform={notperform6}
          examreset={examreset6}
          exam1reset={exam1reset6}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Muscle Strength</h5>
      <div style={{ display: "flex", marginTop: "20px", marginLeft: "40px" }}>
        <Decreased
          Decreasedreset={decreasedreset}
          other9={other9}
          Sidesv={sidesv}
          Sidereset={sidesreset}
          Sidevalues={sidevalues}
          strength={strength}
          DecreasedButton={decreasedbutton}
          exam1reset7={exam1reset7}
          examreset7={examreset7}
          Notperform7={notperform7}
          Reason7={reason7}
          other11={other11}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Sensation</h5>
      <div style={{ marginLeft: "40px" }}>
        <RadioButton InputArray={sensation} />
        <NotPerformed
          other2={other12}
          Reason={reason8}
          Notperform={notperform8}
          examreset={examreset8}
          exam1reset={exam1reset8}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Reflexes</h5>
      <div style={{ marginLeft: "40px", display: "flex" }}>
        <OnePlus
          Reflexonevalue={reflexonevalue}
          Reflex={reflex}
          Sidesv={sidesv1}
          Sidereset={sidereset1}
          Sidevalues={sidevalues1}
        />
        <Zero
          Reflexside={reflexside}
          ReflexSreset={reflexsreset}
          reflexSvalue={reflexsvalue}
          Reflex={reflex1}
          Zeroreset={zeroreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Add Details</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={adddetails}
          Suboptimal1={adddetails1}
          Suboptimalreset={adddetailsreset}
        />
      </div>
    </div>
  );
}
export default CervicalSpine;
