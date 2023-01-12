import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import Reset1 from "../Reset1/Reset1";
import { useState } from "react";
function YesNo({ Suboptimal, Suboptimalreset, Suboptimal1 }) {
  const [suboptimal, setsuboptimal] = useState(false);
  return (
    <div>
      <RadioButton InputArray={Suboptimal} />
      {Suboptimal1.map((value, key) => (
        <span
          key={key}
          className={value.classname}
          style={{ marginRight: "10px" }}
        >
          <label>
            <input
              type="radio"
              name={value.name}
              onClick={() => setsuboptimal(true)}
              id="status"
            />
            <span>{value.value}</span>
          </label>
        </span>
      ))}
      {suboptimal ? <input type="text" className="size" /> : null}
      <Reset1 Resetall={Suboptimalreset} />
    </div>
  );
}
export default YesNo;
