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
        Suboptimal={headnovalue}
        Suboptimalreset={headreset}
        Suboptimal1={headyesno}
      />
      <h2>Atraumatic</h2>
      <YesNo
        Suboptimal={headAtraumaticnovalue}
        Suboptimalreset={headAtraumaticreset}
        Suboptimal1={headAtraumaticyesno}
      />
    </div>
  );
}
export default Head;
