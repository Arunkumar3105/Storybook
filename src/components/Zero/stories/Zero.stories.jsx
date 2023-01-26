import Zero from "../Zero";
export default {
  title: "Zero/O",
  components: Zero,
};
const reflex = [{ name: "Zero", value: "0" }];
const reflexsvalue = [
  { value: "Right", classname: "scar", name: "Sidevalue" },
  { value: "Left", classname: "scar", name: "Sidevalue" },
  { value: "Bilateral", classname: "scar", name: "Sidevalue" },
];
const reflexsreset = [{ name: "Sidevalue" }];
const reflexside = [{ name: "Side" }];
const zeroreset = [{ name: "Zero" }];
export const ReflexZero = () => (
  <Zero
    reflex={reflex}
    reflexside={reflexside}
    reflexsreset={reflexsreset}
    reflexsvalue={reflexsvalue}
    zeroreset={zeroreset}
  />
);
