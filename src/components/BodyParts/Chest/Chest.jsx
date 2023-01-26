import React from "react";
import ScarVariation1 from "../../Scar/ScarVariation1";
import RadioButton from "../../RadioButton/RadioButton";
import Reset1 from "../../Reset1/Reset1";
import CheckBox from "../../CheckboxButton/CheckBox";
import Others from "../../Others/Others";
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
      <h5 style={{ marginLeft: "30px" }}>Side</h5>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={tside} />
        <Reset1 Resetall={tsidereset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Ecchymosis</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={ecchymosis}
          Suboptimal1={ecchymosis1}
          Suboptimalreset={ecchymosisreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Stable</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={stable}
          Suboptimal1={stable1}
          Suboptimalreset={stablereset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>ChestExpansion</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={expansion}
          Suboptimal1={expansion1}
          Suboptimalreset={expansionreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Crepitus Ribs</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={crepitus} />
        <Zero
          Reflexside={reflexside}
          ReflexSreset={reflexsreset}
          reflexSvalue={reflexsvalue}
          Reflex={reflex1}
          Zeroreset={zeroreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Crepitus Sternum</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={sternum} />
        <Zero
          Reflexside={reflexside1}
          ReflexSreset={reflexsreset1}
          reflexSvalue={reflexsvalue1}
          Reflex={reflex2}
          Zeroreset={zeroreset1}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Crepitus Sternoclay</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={sternoclay} />
        <Zero
          Reflexside={reflexside2}
          ReflexSreset={reflexsreset2}
          reflexSvalue={reflexsvalue2}
          Reflex={reflex3}
          Zeroreset={zeroreset2}
        />
      </div>
    </div>
  );
}
export default Chest;
