import React from "react";
import { useState } from "react";
import "./IndividualDermatome.css";
import Reset from "../Reset/Reset";
import Others from "../Others/Others";
function IndividualDermatome({
  level,
  dermatome,
  setdermatome,
  other,
  resetvalue,
  individualvalue,
}) {
  const [cslevel, setcslevel] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      {individualvalue.map((value) => (
        <span className="scar clevel">
          <label>
            <input
              type="radio"
              name={value.name}
              id="level"
              onClick={() => {
                setcslevel(true);
                setdermatome(false);
              }}
            />
            <span>{value.value}</span>
          </label>
        </span>
      ))}
      {cslevel ? (
        <div>
          {level.map((value, j) => (
            <span key={j} className="cstlevel">
              <label>
                <input type="checkbox" name="level" id="level" />
                <span>{value.value}</span>
              </label>
            </span>
          ))}
        </div>
      ) : null}
      {dermatome ? <Others other={other} /> : null}
      <Reset
        cslevel={cslevel}
        resetvalue={resetvalue}
        dermatome={dermatome}
        setdermatome={setdermatome}
        setcslevel={setcslevel}
      />
    </div>
  );
}
export default IndividualDermatome;
