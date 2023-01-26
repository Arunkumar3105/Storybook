import React, { useState } from "react";
import Reset1 from "../Reset1/Reset1";
import Sides from "../Sides/Sides";

function Zero({ reflex, reflexside, reflexsvalue, reflexsreset, zeroreset }) {
  const [reflexZero, setReflexZero] = useState(false);
  return (
    <span>
      {reflex.map((value) => (
        <span className="scar">
          <label>
            <input
              type={"radio"}
              name={value.name}
              onClick={() => setReflexZero(true)}
            />
            <span>{value.value}</span>
          </label>
        </span>
      ))}
      <Reset1 resetall={zeroreset} />
      <br />
      <br />
      {reflexZero ? (
        <Sides
          sidesv={reflexside}
          sidevalues={reflexsvalue}
          sidereset={reflexsreset}
        />
      ) : null}
    </span>
  );
}
export default Zero;
