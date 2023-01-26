import React from "react";
import CheckBox from "../CheckBox";
export default {
  title: "Multiselect/CheckboxButton",
  component: CheckBox,
};
const inputarray1 = [
  { value: "yes", classname: "exam1", name: "sscar" },
  { value: "No", classname: "exam1", name: "sscar" },
];
export const Checkbox = () => <CheckBox inputarray1={inputarray1} />;
