import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import Reset1 from "../Reset1/Reset1";
import CheckBox from "../CheckboxButton/CheckBox";
import Others from "../Others/Others";
// import 'bootstrap/dist/css/bootstrap.min.css';
function ScarVariation2({
  Status,
  Appearance,
  aspect,
  Scar,
  aspectreset,
  Statusreset,
  Appearancereset,
  Scarreset,
  aspectOther,
  StatusOther,
  AppearanceOther,
}) {
  return (
    <div>
      <h2>Scar</h2>
      <RadioButton InputArray={Scar} />
      <Reset1 Resetall={Scarreset} />
      {/* Size */}
      <div style={{ marginLeft: "20px" }}>
        <h3 style={{ marginLeft: "15px" }}>Size</h3>
        &nbsp;&nbsp;
        <input type="text" className="size" placeholder="size" />
        {/* status */}
        <h3 style={{ marginLeft: "15px" }}>Status</h3>
        <div style={{ display: "flex" }}>
          <RadioButton InputArray={Status} />
          <Others other={StatusOther} />
          <Reset1 Resetall={Statusreset} />
        </div>
        {/* Appearance */}
        <h3 style={{ marginLeft: "15px" }}>Appearance</h3>
        <div style={{ display: "flex" }}>
          <RadioButton InputArray={Appearance} />
          <Others other={AppearanceOther} />
          <Reset1 Resetall={Appearancereset} />
        </div>
        {/* Aspect */}
        <h3 style={{ marginLeft: "15px" }}>Aspect</h3>
        <div style={{ display: "flex" }}>
          <CheckBox InputArray1={aspect} />
          <Others other={aspectOther} />
          <Reset1 Resetall={aspectreset} />
        </div>
      </div>
    </div>
  );
}

export default ScarVariation2;
