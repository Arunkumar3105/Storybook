import React, { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
function StrengthText({ textbox, textbox1 }) {
  const [strengthtext, setstrengthtext] = useState(false);
  return (
    <span>
      <RadioButton InputArray={textbox} />
      {textbox1.map((values, key) => (
        <span key={key} className={values.classname}>
          <label>
            <input
              type="radio"
              name={values.name}
              onClick={() => setstrengthtext(true)}
              id="status"
            />
            <span>{values.value}</span>
          </label>
        </span>
      ))}
      {strengthtext ? (
        <input type="text" name="decreased" className="size" />
      ) : null}
    </span>
  );
}
export default StrengthText;
