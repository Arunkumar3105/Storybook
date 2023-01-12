import React from "react";
import Others from "../Others/Others";
import RadioButton from "../RadioButton/RadioButton";
import Reset1 from "../Reset1/Reset1";
import { useState } from "react";

function NotPerformed({ other2, Reason, examreset, exam1reset, Notperform }) {
  const [notperformed, setnotperformed] = useState(false);
  return (
    <>
      {Notperform.map((value, key) => (
        <span key={key} className={value.classname}>
          <label>
            <input
              type="radio"
              name={value.name}
              onClick={() => setnotperformed(true)}
              id="status"
            />
            <span>{value.value}</span>
          </label>
        </span>
      ))}
      <Reset1 Resetall={exam1reset} />
      <br />
      {notperformed ? (
        <div style={{ display: "flex", marginTop: "20px" }}>
          <RadioButton InputArray={Reason} />
          <Others other={other2} />
          <Reset1 Resetall={examreset} />
        </div>
      ) : null}
    </>
  );
}
export default NotPerformed;
