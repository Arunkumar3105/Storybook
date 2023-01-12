import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import Reset1 from "../Reset1/Reset1";
import { useState } from "react";
function NegativePositive({ Negativepositive, Negativepositive1 }) {
  const [negativepositive, setnegativepositive] = useState(false);
  return (
    <span>
      <RadioButton InputArray={Negativepositive} />
      {Negativepositive1.map((value, key) => (
        <span
          key={key}
          className={value.classname}
          style={{ marginRight: "10px" }}
        >
          <label>
            <input
              type="radio"
              name={value.name}
              onClick={() => setnegativepositive(true)}
              id="status"
            />
            <span>{value.value}</span>
          </label>
        </span>
      ))}
      {negativepositive ? <input type="text" className="size" /> : null}
    </span>
  );
}
export default NegativePositive;
