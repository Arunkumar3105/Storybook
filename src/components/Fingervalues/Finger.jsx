import React from "react";

function Fingervalue({ finger }) {
  return (
    <span>
      {finger.map((value) => (
        <div>
          <h4>{value.Fname}</h4>
          <span style={{ display: "flex" }}>
            <div>
              <span style={{ marginLeft: "15px" }}>{value.value1}</span>
              <br />
              <input type={"text"} className="size" name={value.vname1} />
            </div>
            <div>
              <span style={{ marginLeft: "15px" }}>{value.value2}</span>
              <br />
              <input type={"text"} className="size" name={value.vname2} />
            </div>
            <div>
              <span style={{ marginLeft: "15px" }}>{value.value3}</span>
              <br />
              <input type={"text"} className="size" name={value.vname2} />
            </div>
          </span>
        </div>
      ))}
    </span>
  );
}
export default Fingervalue;
