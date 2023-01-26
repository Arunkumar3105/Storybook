import React, { useState } from "react";
import CheckBox from "../CheckboxButton/CheckBox";
import Sides from "../Sides/Sides";

function OnePlus({ reflexonevalue, reflex, sidesv, sidereset, sidevalues }) {
  const [Rone, setRone] = useState(false);
  return (
    <span>
      {reflex.map((value) => (
        <span className="scar">
          <label>
            <input
              type="radio"
              onClick={() => setRone(true)}
              name={value.name}
            />
            <span>{value.value}</span>
          </label>
        </span>
      ))}
      <br />
      <br />
      {Rone ? (
        <span>
          <CheckBox inputarray1={reflexonevalue} />
          <Sides
            sidesv={sidesv}
            sidereset={sidereset}
            sidevalues={sidevalues}
          />
        </span>
      ) : null}
    </span>
  );
}
export default OnePlus;
