import OnePlus from "../OnePlus";

export default {
  title: "One/1",
  component: OnePlus,
};
const Reflexonevalue = [
  { value: "Equal", classname: "scar", name: "Refone" },
  { value: "Symmetrical", classname: "scar", name: "Refone" },
];
const Reflex = [
  { value: "1+", classname: "scar", name: "Zero" },
  { value: "2+", classname: "scar", name: "Zero" },
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
export const OneRef = () => (
  <OnePlus
    Reflexonevalue={Reflexonevalue}
    Reflex={Reflex}
    Sidesv={Sidesv}
    Sidereset={Sidereset}
    Sidevalues={Sidevalues}
  />
);
