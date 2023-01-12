import React from "react";
import CheckBox from "../../CheckboxButton/CheckBox";
import Findings from "../../Findings/Findings";
import RadioButton from "../../RadioButton/RadioButton";
import Reset1 from "../../Reset1/Reset1";

// import Reset1 from "../../../Reset1/Reset1";
// import Others from "../../../Others/Others";
// import RadioButton from "../../../RadioButton/RadioButton";
// import CheckBox from "../../../CheckboxButton/CheckBox";
import Others from "../../Others/Others";
import ScarVariation2 from "../../Scar1/ScarVariation2";
import NotPerformed from "../../Not-perfomed/NotPerformed";
function RightElbow({
  Statusreset,
  Appearancereset,
  StatusOther,
  aspectreset,
  Scarreset,
  aspectOther,
  AppearanceOther,
  Scar,
  Status,
  Appearance,
  aspect,
  FyesOther,
  Ecchymosis1,
  Deformity1,
  Edema1,
  Redness1,
  Effusion1,
  Erythema1,
  Swelling1,
  FNoother,
  Ecchymosis,
  Deformity,
  Edema,
  Redness,
  Effusion,
  Erythema,
  Fno,
  Fyes,
  Swelling,
  Tenderness,
  Tendernessreset,
  Tstatus,
  TstatusOther,
  Tstatusreset,
  Tpositionreset,
  TpositionOther,
  Tposition,
  Taspect,
  Taspectreset,
  TaspectOther,
  Rom,
  Notperform,
  exam1reset,
  examreset,
  Reason,
  other2,
}) {
  return (
    <div>
      <ScarVariation2
        Scar={Scar}
        Scarreset={Scarreset}
        aspect={aspect}
        aspectOther={aspectOther}
        aspectreset={aspectreset}
        Appearance={Appearance}
        AppearanceOther={AppearanceOther}
        Appearancereset={Appearancereset}
        Status={Status}
        StatusOther={StatusOther}
        Statusreset={Statusreset}
      />
      <h2>Findings</h2>
      <Findings
        FyesOther={FyesOther}
        Ecchymosis1={Ecchymosis1}
        Deformity1={Deformity1}
        Edema1={Edema1}
        Redness1={Redness1}
        Effusion1={Effusion1}
        Erythema1={Erythema1}
        Swelling1={Swelling1}
        FNoother={FNoother}
        Ecchymosis={Ecchymosis}
        Deformity={Deformity}
        Edema={Edema}
        Redness={Redness}
        Effusion={Effusion}
        Erythema={Erythema}
        Swelling={Swelling}
        Fno={Fno}
        Fyes={Fyes}
      />
      <h2>Tenderness</h2>
      <div>
        <RadioButton InputArray={Tenderness} />
        <Reset1 Resetall={Tendernessreset} />
      </div>
      <div>
        <h3 style={{ marginLeft: "15px" }}>Classification</h3>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox InputArray1={Tstatus} />
          <Others other={TstatusOther} />
          <Reset1 Resetall={Tstatusreset} />
        </div>
        <h3 style={{ marginLeft: "15px" }}>Position</h3>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox InputArray1={Tposition} />
          <Others other={TpositionOther} />
          <Reset1 Resetall={Tpositionreset} />
        </div>
        <h3 style={{ marginLeft: "15px" }}>Aspect</h3>
        <div style={{ marginLeft: "25px", display: "flex" }}>
          <CheckBox InputArray1={Taspect} />
          <Others other={TaspectOther} />
          <Reset1 Resetall={Taspectreset} />
        </div>
      </div>
      <h2>ROM</h2>
      <div>
        <RadioButton InputArray={Rom} />
        <NotPerformed
          Notperform={Notperform}
          exam1reset={exam1reset}
          examreset={examreset}
          Reason={Reason}
          other2={other2}
        />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Values</h2>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Flexion(150)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Extension(0)</h3>
          <input type="text" className="size" />
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Pronation(90)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Supination(90)</h3>
          <input type="text" className="size" />
        </div>
      </div>
    </div>
  );
}
export default RightElbow;
