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
        appearance={appearance}
        status={status}
        side={side}
        scar={scar}
        appearanceother={appearanceother}
        statusother={statusother}
        aspectother={aspectother}
        scarreset={scarreset}
        appearancereset={appearancereset}
        statusreset={statusreset}
        sidereset={sidereset}
        aspectreset={aspectreset}
      />
      <h2>Examination</h2>
      <RadioButton inputarray={exam} />
      <NotPerformed
        examreset={examreset1}
        other2={other3}
        reason={reason1}
        exam1reset={exam1reset1}
        notperform={notperform1}
      />

      <h3 style={{ marginLeft: "15px" }}>Normal Exam</h3>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton inputarray={nexam} />
        <PainScaleButton painscale={nexampainscale} />
        <Reset1 resetall={nexamreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Alignment</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={alignment} />
        <Reset1 resetall={alignmentreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Tenderness</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={tenderness} />
        <Reset1 resetall={tendernessreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Status</h5>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox inputarray1={tstatus} />
        <Other other={tstatusother} />
        <Reset1 resetall={tstatusreset} />
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
        <CheckBox inputarray1={tposition} />
        <Other other={tpositionother} />
        <Reset1 resetall={tpositionreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Side</h5>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton inputarray={tside} />
        <Reset1 resetall={tsidereset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Spasm</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={spasm} />
        <Reset1 resetall={spasmreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Status</h5>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox inputarray1={sstatus} />
        <Other other={sstatusother} />
        <Reset1 resetall={sstatusreset} />
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
        <CheckBox inputarray1={sposition} />
        <Other other={spositionother} />
        <Reset1 resetall={spositionreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Side</h5>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton inputarray={sside} />
        <Reset1 resetall={ssidereset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>ROM</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={rom} />
        <NotPerformed
          examreset={examreset}
          other2={other2}
          Reason={reason}
          exam1reset={exam1reset}
          notperform={notperform}
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
        <RadioButton inputarray={romself} />
        <Reset1 resetall={romselfreset} />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Pain causing motion</h5>
      <div style={{ marginLeft: "35px" }}>
        <CheckBox inputarray1={rompain} />
        <Reset1 resetall={rompainreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Suboptimal Effort</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={suboptimal}
          suboptimal1={suboptimal1}
          suboptimalreset={suboptimalreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Atrophy</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={atrophy}
          suboptimal1={atrophy1}
          suboptimalreset={atrophyreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Ecchymosis Pain Scale</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={echymosis}
          suboptimal1={echymosis1}
          suboptimalreset={echymosisreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Symptom Magnification</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={symptommagnification}
          suboptimal1={symptommagnification1}
          suboptimalreset={symptomreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Orthopedic Test</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={orthopedic} />
        <NotPerformed
          other2={other4}
          reason={reason2}
          examreset={examreset2}
          exam1reset={exam1reset2}
          notperform={notperform2}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Hoffman</h5>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          negativepositive={negativepositive}
          negativepositive1={negativepositive1}
        />
        <NotPerformed
          other2={other5}
          reason={reason3}
          notperform={notperform3}
          examreset={examreset3}
          exam1reset={exam1reset3}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Spurling</h5>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          negativepositive={negativepositive01}
          negativepositive1={negativepositive11}
        />
        <NotPerformed
          other2={other6}
          reason={reason4}
          notperform={notperform4}
          exam1reset={exam1reset4}
          examreset={examreset4}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Compression Test</h5>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          negativepositive={negativepositive02}
          negativepositive1={negativepositive12}
        />
        <NotPerformed
          other2={other7}
          Reason={reason5}
          notperform={notperform5}
          exam1reset={exam1reset5}
          examreset={examreset5}
        />
      </div>
      <h5 style={{ marginLeft: "25px" }}>Shoulder Compression Test</h5>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={shoulder}
          suboptimal1={shoulder1}
          suboptimalreset={shoulderreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Neurological Examination</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={neurological} />
        <NotPerformed
          other2={other8}
          reason={reason6}
          notperform={notperform6}
          examreset={examreset6}
          exam1reset={exam1reset6}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Muscle Strength</h5>
      <div style={{ display: "flex", marginTop: "20px", marginLeft: "40px" }}>
        <Decreased
          decreasedreset={decreasedreset}
          other9={other9}
          sidesv={sidesv}
          sidereset={sidesreset}
          sidevalues={sidevalues}
          strength={strength}
          decreasedbutton={decreasedbutton}
          exam1reset7={exam1reset7}
          examreset7={examreset7}
          notperform7={notperform7}
          reason7={reason7}
          other11={other11}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Sensation</h5>
      <div style={{ marginLeft: "40px" }}>
        <RadioButton inputarray={sensation} />
        <NotPerformed
          other2={other12}
          reason={reason8}
          notperform={notperform8}
          examreset={examreset8}
          exam1reset={exam1reset8}
        />
      </div>
      <h5 style={{ marginLeft: "30px" }}>Reflexes</h5>
      <div style={{ marginLeft: "40px", display: "flex" }}>
        <OnePlus
          reflexonevalue={reflexonevalue}
          reflex={reflex}
          sidesv={sidesv1}
          sidereset={sidereset1}
          sidevalues={sidevalues1}
        />
        <Zero
          reflexside={reflexside}
          reflexsreset={reflexsreset}
          reflexsvalue={reflexsvalue}
          reflex={reflex1}
          zeroreset={zeroreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Add Details</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={adddetails}
          suboptimal1={adddetails1}
          suboptimalreset={adddetailsreset}
        />
      </div>
    </div>
  );
}
export default CervicalSpine;
