import React, { useState } from "react";
import CheckBox from "../CheckboxButton/CheckBox";
import Sides from "../Sides/Sides";

function OnePlus({ Reflexonevalue, Reflex, Sidesv, Sidereset, Sidevalues }) {
  const [Rone, setRone] = useState(false);
  return (
    <span>
      {Reflex.map((value) => (
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
          <CheckBox InputArray1={Reflexonevalue} />
          <Sides
            Sidesv={Sidesv}
            Sidereset={Sidereset}
            Sidevalues={Sidevalues}
          />
        </span>
      ) : null}
    </span>
  );
}
export default OnePlus;
