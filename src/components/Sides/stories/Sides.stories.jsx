import Sides from "../Sides";

export default {
  title: "Sides/Side",
  component: Sides,
};
const Sidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const Sidereset = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const Sidesv = [{ name: "Side" }];
export const Side = () => (
  <Sides Sidesv={Sidesv} Sidevalues={Sidevalues} Sidereset={Sidereset} />
);
