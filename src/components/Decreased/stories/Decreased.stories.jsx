import React from "react";
import Decreased from "../Decreased";
export default {
  title: "Decreased/Decreasedbutton",
};
const DecreasedButton = [
  { value: "5/5", name: "decreased", classname: "scar" },
  { value: "Decreased", name: "decreased", classname: "scar" },
];
const strength = [
  { value: "Biceps", classname: "scar" },
  { value: "Triceps", classname: "scar" },
  { value: "Wrist Extension", classname: "exam" },
  { value: "Grip", classname: "scar" },
  { value: "Interossei", classname: "scar" },
  { value: "Triceps", classname: "scar" },
];
const Sidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const Sidereset = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const Sidesv = [{ name: "Side" }];
const other9 = [{ classname: "csalllevel" }];
const Decreasedreset = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const other11 = [{ classname: "neuroreason" }];
const Reason7 = [
  { value: "surgery", name: "neuroreason", classname: "scar" },
  { value: "Complaint of pain", name: "neuroreason", classname: "exam1" },
  { value: "Non-cooperation", name: "neuroreason", classname: "exam1" },
  {
    value: "Not wish to perform",
    name: "neuroreason",
    classname: "exam1",
  },
  { value: "Brace", name: "neuroreason", classname: "scar" },
];
const Notperform7 = [
  { value: "Not-Performed", name: "neuroexam", classname: "exam" },
];
const examreset7 = [{ name: "neuroreason" }];
const exam1reset7 = [{ name: "neuroexam" }];
export const Decreasedbuttons = () => (
  <Decreased
    DecreasedButton={DecreasedButton}
    strength={strength}
    Sidevalues={Sidevalues}
    Sidereset={Sidereset}
    Sidesv={Sidesv}
    other9={other9}
    Decreasedreset={Decreasedreset}
    exam1reset7={exam1reset7}
    examreset7={examreset7}
    Notperform7={Notperform7}
    Reason7={Reason7}
    other11={other11}
  />
);
