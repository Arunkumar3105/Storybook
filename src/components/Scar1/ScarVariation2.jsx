import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import Reset1 from "../Reset1/Reset1";
import CheckBox from "../CheckboxButton/CheckBox";
import Others from "../Others/Others";
// import 'bootstrap/dist/css/bootstrap.min.css';
function ScarVariation2({
  status,
  appearance,
  aspect,
  scar,
  aspectreset,
  statusreset,
  appearancereset,
  scarreset,
  aspectother,
  statusother,
  appearanceother,
}) {
  return (
    <div>
      <h2>Scar</h2>
      <RadioButton inputarray={scar} />
      <Reset1 resetall={scarreset} />
      {/* Size */}
      <div style={{ marginLeft: "20px" }}>
        <h3 style={{ marginLeft: "15px" }}>Size</h3>
        &nbsp;&nbsp;
        <input type="text" className="size" placeholder="size" />
        {/* status */}
        <h3 style={{ marginLeft: "15px" }}>Status</h3>
        <div style={{ display: "flex" }}>
          <RadioButton inputarray={status} />
          <Others other={statusother} />
          <Reset1 resetall={statusreset} />
        </div>
        {/* Appearance */}
        <h3 style={{ marginLeft: "15px" }}>Appearance</h3>
        <div style={{ display: "flex" }}>
          <RadioButton inputarray={appearance} />
          <Others other={appearanceother} />
          <Reset1 resetall={appearancereset} />
        </div>
        {/* Aspect */}
        <h3 style={{ marginLeft: "15px" }}>Aspect</h3>
        <div style={{ display: "flex" }}>
          <CheckBox inputarray1={aspect} />
          <Others other={aspectother} />
          <Reset1 resetall={aspectreset} />
        </div>
      </div>
    </div>
  );
}

export default ScarVariation2;
