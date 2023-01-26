import React from "react";
import NegativePositive from "../NegativePositive";
export default {
  title: "NegativePositive/NegativePositveButton",
  component: NegativePositive,
};
const negativepositive = [
  { value: "Negative", name: "Hoffman", classname: "scar" },
];
const negativepositive1 = [
  { value: "Positive", name: "Hoffman", classname: "scar" },
];

export const NegativePositivebutton = () => (
  <NegativePositive
    negativepositive={negativepositive}
    negativepositive1={negativepositive1}
  />
);
