import React from "react";
import YesNo from "../YesNo";
export default {
  title: "YesNo/YesButton",
  component: YesNo,
};
const Suboptimal = [{ value: "No", name: "suboptimal", classname: "scar" }];
const Suboptimal1 = [{ value: "Yes", name: "suboptimal", classname: "scar" }];
const Suboptimalreset = [{ name: "suboptimal" }];
export const Yesno = () => ( 
  <YesNo
    Suboptimal={Suboptimal}
    Suboptimalreset={Suboptimalreset}
    Suboptimal1={Suboptimal1}
  />
);
