import React from "react";
import ScarVariation1 from "../../Scar/ScarVariation1";
import RadioButton from "../../RadioButton/RadioButton";
import Reset1 from "../../Reset1/Reset1";
import CheckBox from "../../CheckboxButton/CheckBox";
// import Others from "../../Others/Others";
import { Other } from "../../../button1/scarvariation1.stories";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import YesNo from "../../YesNo/YesNo";
import Zero from "../../Zero/Zero";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";
function Chest({
  aspect,
  appearance,
  status,
  side,
  scar,
  appearanceother,
  statusother,
  aspectother,
  appearancereset,
  statusreset,
  sidereset,
  aspectreset,
  scarreset,
  tenderness,
  tstatus,
  tstatusother,
  tside,
  tendernessreset,
  tstatusreset,
  tsidereset,
  exam,
  exam1reset1,
  examreset1,
  notperform1,
  reason1,
  other3,
  nexam,
  nexampainscale,
  nexamreset,
  ecchymosis,
  ecchymosis1,
  ecchymosisreset,
  stable,
  stable1,
  stablereset,
  expansion,
  expansion1,
  expansionreset,
  reflex1,
  reflexside,
  reflexsvalue,
  reflexsreset,
  zeroreset,
  crepitus,
  reflex2,
  reflexside1,
  reflexsvalue1,
  reflexsreset1,
  zeroreset1,
  sternum,
  reflex3,
  reflexside2,
  reflexsvalue2,
  reflexsreset2,
  zeroreset2,
  sternoclay,
}) {
  return (
    <div>
      <h1 style={{ fontSize: "32px", marginLeft: "0" }}>Chest</h1>
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
      <h5 style={{ marginLeft: "30px" }}>Side</h5>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton inputarray={tside} />
        <Reset1 resetall={tsidereset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Ecchymosis</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={ecchymosis}
          suboptimal1={ecchymosis1}
          suboptimalreset={ecchymosisreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Stable</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={stable}
          suboptimal1={stable1}
          suboptimalreset={stablereset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>ChestExpansion</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={expansion}
          suboptimal1={expansion1}
          suboptimalreset={expansionreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Crepitus Ribs</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={crepitus} />
        <Zero
          reflexside={reflexside}
          reflexsreset={reflexsreset}
          reflexsvalue={reflexsvalue}
          reflex={reflex1}
          zeroreset={zeroreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Crepitus Sternum</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={sternum} />
        <Zero
          reflexside={reflexside1}
          reflexsreset={reflexsreset1}
          reflexsvalue={reflexsvalue1}
          reflex={reflex2}
          zeroreset={zeroreset1}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Crepitus Sternoclay</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={sternoclay} />
        <Zero
          reflexside={reflexside2}
          reflexsreset={reflexsreset2}
          reflexsvalue={reflexsvalue2}
          reflex={reflex3}
          zeroreset={zeroreset2}
        />
      </div>
    </div>
  );
}
export default Chest;
