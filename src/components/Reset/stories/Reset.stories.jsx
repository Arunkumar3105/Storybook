import React from "react";
import Reset from "../Reset";
export default {
  title: "reset/resetbutton",
  component: Reset,
};
const resetvalue = [{ name: "csalllevel" }];
export const ResetButton = () => <Reset resetvalue={resetvalue} />;
