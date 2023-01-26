import React from "react";
import "./CsLevel.css";
import IndividualDermatome from "../CsIndividualDermatome/IndividualDermatome";
// import Others from "../Others/Others"

import { useState } from "react";
function CsLevel({ level, other, value1, resetvalue1, individualvalue }) {
  const [dermatome, setdermatome] = useState(true);
  return (
    <div style={{ display: "flex" }}>
      {dermatome ? (
        <div>
          {value1.map((value, k) => (
            <span className="scar">
              <label>
                <input key={k} type="radio" name="csalllevel" />
                <span>{value.value}</span>
              </label>
            </span>
          ))}
        </div>
      ) : null}
      <div>
        <IndividualDermatome
          level={level}
          other={other}
          dermatome={dermatome}
          setdermatome={setdermatome}
          resetvalue={resetvalue1}
          individualvalue={individualvalue}
        />
      </div>
    </div>
  );
}
export default CsLevel;
