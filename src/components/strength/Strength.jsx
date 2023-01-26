import React, { useState } from "react";
import CheckBox from "../CheckboxButton/CheckBox";
import Others from "../Others/Others";
import Reset1 from "../Reset1/Reset1";

import NotPerformed from "../Not-perfomed/NotPerformed";

function Strength({
  DecreasedButton,
  strength,

  other9,
  Decreasedreset,
  exam1reset7,
  examreset7,
  Notperform7,
  Reason7,
  other11,
}) {
  const [mstrength, setmstrength] = useState(false);
  return (
    <span>
      {DecreasedButton.map((value, key) => (
        <span
          key={key}
          className={value.classname}
          style={{
            marginRight: "10px",

            marginTop: "20px",
          }}
        >
          <label>
            <input
              type="radio"
              name={value.name}
              onClick={() => setmstrength(true)}
              id="status"
            />
            <span>{value.value}</span>
          </label>
        </span>
      ))}
      <NotPerformed
        other2={other11}
        Reason={Reason7}
        Notperform={Notperform7}
        examreset={examreset7}
        exam1reset={exam1reset7}
      />

      {mstrength ? (
        <span style={{ display: "flex" }}>
          <CheckBox InputArray1={strength} />

          <Others other={other9} />
          <Reset1 Resetall={Decreasedreset} />
        </span>
      ) : null}
    </span>
  );
}
export default Strength;
