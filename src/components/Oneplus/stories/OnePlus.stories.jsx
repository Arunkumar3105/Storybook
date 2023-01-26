import OnePlus from "../OnePlus";

export default {
  title: "One/1",
  component: OnePlus,
};
const reflexonevalue = [
  { value: "Equal", classname: "scar", name: "Refone" },
  { value: "Symmetrical", classname: "scar", name: "Refone" },
];
const reflex = [
  { value: "1+", classname: "scar", name: "Zero" },
  { value: "2+", classname: "scar", name: "Zero" },
];
const sidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const sidereset = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const sidesv = [{ name: "Side" }];
export const OneRef = () => (
  <OnePlus
    reflexonevalue={reflexonevalue}
    reflex={reflex}
    sidesv={sidesv}
    sidereset={sidereset}
    sidevalues={sidevalues}
  />
);
