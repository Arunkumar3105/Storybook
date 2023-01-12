import React, { useState } from "react";
import Reset1 from "../Reset1/Reset1";

import RadioButton from "../RadioButton/RadioButton";

function Sides({ Sidesv, Sidevalues, Sidereset }) {
  const [sidev, setSide] = useState(false);
  return (
    <span>
      {Sidesv.map((value) => (
        <span className="scar">
          <label>
            <input
              type="radio"
              name={value.name}
              onClick={() => setSide(true)}
            />
            <span>Sides</span>
          </label>
        </span>
      ))}
      <br />
      <br />
      {sidev ? (
        <div style={{ display: "flex" }}>
          <RadioButton InputArray={Sidevalues} />
          <Reset1 Resetall={Sidereset} />
        </div>
      ) : null}
    </span>
  );
}
export default Sides;
