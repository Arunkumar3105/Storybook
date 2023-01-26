import React from "react";
import YesNo from "../YesNo";
export default {
  title: "YesNo/YesButton",
  component: YesNo,
};
const suboptimal = [{ value: "No", name: "suboptimal", classname: "scar" }];
const suboptimal1 = [
  {
    value: "Yes",
    name: "suboptimal",
    classname: "scar",
    txtname: "suboptimal",
  },
];
const suboptimalreset = [{ name: "suboptimal" }];
export const Yesno = () => (
  <YesNo
    suboptimal={suboptimal}
    suboptimalreset={suboptimalreset}
    suboptimal1={suboptimal1}
  />
);
