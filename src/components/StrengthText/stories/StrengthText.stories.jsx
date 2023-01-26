import StrengthText from "../StrengthText";
export default {
  title: "Textbox/StrengthText",
  component: StrengthText,
};
const textbox = [{ value: "5/5", name: "strength", classname: "scar" }];
const textbox1 = [{ value: "Decreased", name: "strength", classname: "scar" }];

export const Strengthtext = () => (
  <StrengthText textbox={textbox} textbox1={textbox1} />
);
