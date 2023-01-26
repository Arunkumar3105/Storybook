import Zero from "../Zero";
export default {
  title: "Zero/O",
  components: Zero,
};
const Reflex = [{ name: "Zero", value: "0" }];
const reflexSvalue = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const ReflexSreset = [{ name: "Sidevalue" }];
const Reflexside = [{ name: "Side" }];
const Zeroreset = [{ name: "Zero" }];
export const ReflexZero = () => (
  <Zero
    Reflex={Reflex}
    Reflexside={Reflexside}
    ReflexSreset={ReflexSreset}
    reflexSvalue={reflexSvalue}
    Zeroreset={Zeroreset}
  />
);
