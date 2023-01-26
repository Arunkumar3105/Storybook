import Fingervalue from "../Finger";

export default {
  title: "Fingervalues/Fvalue",
  component: Fingervalue,
};
const Finger = [
  {
    Fname: "All Finger Value",
    value1: "DIP",
    vname1: "AllFinger",
    value2: "PIP",
    vname2: "AllFinger",
    value3: "MP",
    vname3: "AllFinger",
  },
];
export const Fvalues = () => <Fingervalue Finger={Finger} />;
