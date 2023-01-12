import React, { useState } from "react";
import Reset1 from "../Reset1/Reset1";
import Sides from "../Sides/Sides";

function Zero({ Reflex, Reflexside, reflexSvalue, ReflexSreset, Zeroreset }) {
  const [reflexZero, setReflexZero] = useState(false);
  return (
    <span>
      {Reflex.map((value) => (
        <span className="scar">
          <label>
            <input
              type={"radio"}
              name={value.name}
              onClick={() => setReflexZero(true)}
            />
            <span>O</span>
          </label>
        </span>
      ))}
      <Reset1 Resetall={Zeroreset} />
      <br />
      <br />
      {reflexZero ? (
        <Sides
          Sidesv={Reflexside}
          Sidevalues={reflexSvalue}
          Sidereset={ReflexSreset}
        />
      ) : null}
    </span>
  );
}
export default Zero;
