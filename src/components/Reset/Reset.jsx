import React from "react";
function Reset({ cslevel, setcslevel, dermatome, setdermatome, resetvalue }) {
  return (
    <div>
      {resetvalue.map((value, key) => (
        <span className="reset reset1">
          <label>
            <input
              type="radio"
              name={value.name}
              onClick={() => {
                setcslevel(false);
                setdermatome(true);
              }}
            />
            <span>Reset</span>
          </label>
        </span>
      ))}
    </div>
  );
}
export default Reset;
