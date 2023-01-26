import React from "react";
import Reset1 from "../Reset1";
export default {
  title: "reset1/resetbutton",
  component: Reset1,
};
const resetall = [{ name: "tenderness" }];
export const Reset1button = () => <Reset1 resetall={resetall} />;
