import React from "react";
import CsLevel from "../CsLevel";
export default {
  title: "Cslevel/CsLevel",
  component: CsLevel,
};
const level = [
  { value: "C1" },
  { value: "C2" },
  { value: "C3" },
  { value: "C4" },
  { value: "C5" },
  { value: "C6" },
  { value: "C7" },
];
const other = [{ name: "csalllevel" }];
const value1 = [{ value: "C1-C7", name: "csalllevel" }];
const resetvalue1 = [{ name: "csalllevel" }];
const individualvalue = [{ name: "csalllevel", value: "Individual Dermatome" }];

export const CsLevels = () => (
  <CsLevel
    level={level}
    other={other}
    value1={value1}
    resetvalue1={resetvalue1}
    individualvalue={individualvalue}
  />
);
