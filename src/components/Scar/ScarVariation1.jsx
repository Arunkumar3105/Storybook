import React from "react";
import "./scarvariation1.css";
import Others from "../Others/Others";
import RadioButton from "../RadioButton/RadioButton";
import CheckBox from "../CheckboxButton/CheckBox";
import Reset1 from "../Reset1/Reset1";

// import  PropTypes from "prop-types"
function ScarVariation1({
  aspect,
  appearance,
  side,
  statusother,
  appearanceother,
  aspectother,
  scar,
  status,
  scarreset,
  appearancereset,
  statusreset,
  sidereset,
  aspectreset,
}) {
  return (
    <div>
      <h2>Scar</h2>
      <div style={{ marginLeft: "15px" }}>
        <RadioButton inputarray={scar} />
        <Reset1 resetall={scarreset} />
        {/* Size */}
        <div style={{ marginLeft: "20px" }}>
          <h3>Size</h3>
          &nbsp;&nbsp;
          <input type="text" className="size" placeholder="size" />
          {/* status */}
          <h3>Status</h3>
          <div style={{ display: "flex" }}>
            <RadioButton inputarray={status} />
            <Others other={statusother} />
            <Reset1 resetall={statusreset} />
          </div>
          {/* Appearance */}
          <h3>Appearance</h3>
          <div style={{ display: "flex" }}>
            <RadioButton inputarray={appearance} />
            <Others other={appearanceother} />
            <Reset1 resetall={appearancereset} />
          </div>
          {/* Aspect */}
          <h3>Aspect</h3>
          <div style={{ display: "flex" }}>
            <CheckBox inputarray1={aspect} />
            <Others other={aspectother} />
            <Reset1 resetall={aspectreset} />
          </div>
          {/* Side */}
          <h3>Side</h3>
          <RadioButton inputarray={side} />
          <Reset1 resetall={sidereset} />
        </div>{" "}
      </div>
    </div>
  );
}

export default ScarVariation1;
