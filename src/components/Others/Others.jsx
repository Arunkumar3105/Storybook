import React from "react";
import "./Others.css";
import { useState } from "react";
function Others({ other }) {
  const [othertext, setothertext] = useState(false);
  return (
    <div>
      {other.map((value, key) => (
        <span>
          <span key={key} className="scar">
            <label>
              <input
                type="radio"
                name={value.name}
                id="aspect"
                onClick={() => setothertext(true)}
              />
              <span>Other</span>
            </label>
          </span>
          {othertext ? (
            <span>
              <input className="other" name={value.txtname} type="text" />
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
export default Others;
