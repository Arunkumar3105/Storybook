import React from "react";
function Reset1({ resetall }) {
  return (
    <>
      {resetall.map((value, key) => (
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
