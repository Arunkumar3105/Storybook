import React from "react";
import Reset1 from "../Reset1";
export default {
  title: "reset1/resetbutton",
  component: Reset1,
};
const Resetall = [{ name: "tenderness" }];
export const Reset1button = () => <Reset1 Resetall={Resetall} />;
