import React from "react";
import "./scarvariation1.css";
import Others from "../Others/Others";
import RadioButton from "../RadioButton/RadioButton";
import CheckBox from "../CheckboxButton/CheckBox";
import Reset1 from "../Reset1/Reset1";

// import  PropTypes from "prop-types"
function ScarVariation1({
  aspect,
  Appearance,
  Side,
  StatusOther,
  AppearanceOther,
  aspectOther,
  Scar,
  Status,
  Scarreset,
  Appearancereset,
  Statusreset,
  Sidereset,
  aspectreset,
}) {
  return (
    <div>
      <h2>Scar</h2>
      <div style={{ marginLeft: "15px" }}>
        <RadioButton InputArray={Scar} />
        <Reset1 Resetall={Scarreset} />
        {/* Size */}
        <div style={{ marginLeft: "20px" }}>
          <h3>Size</h3>
          &nbsp;&nbsp;
          <input type="text" className="size" placeholder="size" />
          {/* status */}
          <h3>Status</h3>
          <div style={{ display: "flex" }}>
            <RadioButton InputArray={Status} />
            <Others other={StatusOther} />
            <Reset1 Resetall={Statusreset} />
          </div>
          {/* Appearance */}
          <h3>Appearance</h3>
          <div style={{ display: "flex" }}>
            <RadioButton InputArray={Appearance} />
            <Others other={AppearanceOther} />
            <Reset1 Resetall={Appearancereset} />
          </div>
          {/* Aspect */}
          <h3>Aspect</h3>
          <div style={{ display: "flex" }}>
            <CheckBox InputArray1={aspect} />
            <Others other={aspectOther} />
            <Reset1 Resetall={aspectreset} />
          </div>
          {/* Side */}
          <h3>Side</h3>
          <RadioButton InputArray={Side} />
          <Reset1 Resetall={Sidereset} />
        </div>{" "}
      </div>
    </div>
  );
}

export default ScarVariation1;
