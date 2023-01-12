import React from "react";
import NegativePositive from "../NegativePositive";
export default {
  title: "NegativePositive/NegativePositveButton",
  component: NegativePositive,
};
const Negativepositive = [
  { value: "Negative", name: "Hoffman", classname: "scar" },
];
const Negativepositive1 = [
  { value: "Positive", name: "Hoffman", classname: "scar" },
];

export const NegativePositivebutton = () => (
  <NegativePositive
    Negativepositive={Negativepositive}
    Negativepositive1={Negativepositive1}
  />
);
