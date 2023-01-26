import React from "react";
function Label({ Pagelabel }) {
  return (
    <div>
      {Pagelabel.map((value) => (
        <h2>{value.name}</h2>
      ))}
    </div>
  );
}
export default Label;
