import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import Reset1 from "../Reset1/Reset1";
import { useState } from "react";
function NegativePositive({ negativepositive, negativepositive1 }) {
  const [negativepositives, setnegativepositives] = useState(false);
  return (
    <span>
      <RadioButton inputarray={negativepositive} />
      {negativepositive1.map((value, key) => (
        <span
          key={key}
          className={value.classname}
          style={{ marginRight: "10px" }}
        >
          <label>
            <input
              type="radio"
              name={value.name}
              onClick={() => setnegativepositives(true)}
              id="status"
            />
            <span>{value.value}</span>
          </label>
        </span>
      ))}
      {negativepositives ? <input type="text" className="size" /> : null}
    </span>
  );
}
export default NegativePositive;
