import React from "react";
function Reset1({ Resetall }) {
  return (
    <>
      {Resetall.map((value, key) => (
        <span key={key} className={"reset"}>
          <label>
            <input type="radio" name={value.name} id="appearance" />
            <span>Reset</span>
          </label>
        </span>
      ))}
    </>
  );
}
export default Reset1;
