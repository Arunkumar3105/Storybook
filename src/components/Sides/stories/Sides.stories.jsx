import Sides from "../Sides";

export default {
  title: "Sides/Side",
  component: Sides,
};
const sidevalues = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const sidereset = [
  { value: "Reset", name: "Sidevalue", classname: "scarradio" },
];
const sidesv = [{ name: "Side" }];
export const Side = () => (
  <Sides sidesv={sidesv} sidevalues={sidevalues} sidereset={sidereset} />
);
