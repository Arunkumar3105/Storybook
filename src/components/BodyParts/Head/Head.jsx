import React from "react";
import YesNo from "../../YesNo/YesNo";

function Head({
  headnovalue,
  headreset,
  headyesno,
  headAtraumaticnovalue,
  headAtraumaticreset,
  headAtraumaticyesno,
  label,
}) {
  return (
    <div>
      <h1 style={{ fontSize: "32px" }}>{label}</h1>
      <h2>NormoCephalic</h2>
      <YesNo
        suboptimal={headnovalue}
        suboptimalreset={headreset}
        suboptimal1={headyesno}
      />
      <h2>Atraumatic</h2>
      <YesNo
        suboptimal={headAtraumaticnovalue}
        suboptimalreset={headAtraumaticreset}
        suboptimal1={headAtraumaticyesno}
      />
    </div>
  );
}
export default Head;
