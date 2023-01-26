import React, { useState } from "react";

const PainScaleButton = ({ painscale }) => {
  const [painScale1, setPainScale2] = useState(false);
  return (
    <span>
      {painscale.map((value) => (
        <span className="scar">
          <label>
            <input
              type="checkbox"
              name={value.name}
              onClick={() => setPainScale2(!painScale1)}
            />
            <span>Pain Scale</span>
          </label>
        </span>
      ))}
      <span>
        {painScale1 ? (
          <input
            type={"text"}
            style={{ marginLeft: "10px" }}
            name="painscaletxt"
          />
        ) : null}
      </span>
    </span>
  );
};
export default PainScaleButton;
