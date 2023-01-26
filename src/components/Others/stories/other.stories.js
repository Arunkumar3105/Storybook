import React from "react";
import Others from "../Others.jsx";

export default {
  title: "Other/OtherButton",
  component: Others,
};

const other = [{ name: "csalllevel", txtname: "Csleveltxt" }];
export const Other = () => <Others other={other} />;
