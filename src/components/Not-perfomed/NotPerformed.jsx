import React from "react";
import Others from "../Others/Others";
import RadioButton from "../RadioButton/RadioButton";
import Reset1 from "../Reset1/Reset1";
import { useState } from "react";

function NotPerformed({ other2, reason, examreset, exam1reset, notperform }) {
  const [notperformed, setnotperformed] = useState(false);
  return (
    <>
      {notperform.map((value, key) => (
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
      <Reset1 resetall={exam1reset} />
      <br />
      {notperformed ? (
        <div style={{ display: "flex", marginTop: "20px" }}>
          <RadioButton inputarray={reason} />
          <Others other={other2} />
          <Reset1 resetall={examreset} />
        </div>
      ) : null}
    </>
  );
}
export default NotPerformed;
