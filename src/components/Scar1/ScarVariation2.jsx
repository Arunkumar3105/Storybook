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
      <h2>Size</h2>
      &nbsp;&nbsp;
      <input type="text" className="size" placeholder="size" />
      {/* status */}
      <h2>Status</h2>
      <div style={{ display: "flex" }}>
        <RadioButton InputArray={Status} />
        <Others other={StatusOther} />
        <Reset1 Resetall={Statusreset} />
      </div>
      {/* Appearance */}
      <h2>Appearance</h2>
      <div style={{ display: "flex" }}>
        <RadioButton InputArray={Appearance} />
        <Others other={AppearanceOther} />
        <Reset1 Resetall={Appearancereset} />
      </div>
      {/* Aspect */}
      <h2>Aspect</h2>
      <div style={{ display: "flex" }}>
        <CheckBox InputArray1={aspect} />
        <Others other={aspectOther} />
        <Reset1 Resetall={aspectreset} />
      </div>
    </div>
  );
}

export default ScarVariation2;
