import React from "react";
import IndividualDermatome from "../IndividualDermatome";
export default {
  title: "CsindividualDermatome/individualDermatome",
  component: IndividualDermatome,
};
const resetvalue = [{ name: "csalllevel" }];
const level = [
  { value: "C1" },
  { value: "C2" },
  { value: "C3" },
  { value: "C4" },
  { value: "C5" },
  { value: "C6" },
  { value: "C7" },
];
const individualvalue = [{ name: "csalllevel", value: "Individual Dermatome" }];
export const Individualdermatome = () => (
  <IndividualDermatome
    level={level}
    resetvalue={resetvalue}
    individualvalue={individualvalue}
  />
);
