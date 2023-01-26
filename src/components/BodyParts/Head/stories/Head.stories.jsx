import Head from "../Head";

export default {
  title: "BodyParts/Head",
  component: Head,
};
const label = ["Head"];
const headnovalue = [{ value: "No", classname: "scar", name: "head" }];
const headreset = [{ name: "head" }];
const headyesno = [{ value: "Yes", name: "head", classname: "scar" }];
const headAtraumaticnovalue = [
  { value: "No", classname: "scar", name: "atraumatic" },
];
const headAtraumaticreset = [{ name: "atraumatic" }];
const headAtraumaticyesno = [
  { value: "Yes", name: "atraumatic", classname: "scar" },
];
export const HeadPart = () => (
  <Head
    headnovalue={headnovalue}
    headreset={headreset}
    headyesno={headyesno}
    headAtraumaticnovalue={headAtraumaticnovalue}
    headAtraumaticreset={headAtraumaticreset}
    headAtraumaticyesno={headAtraumaticyesno}
    label={label}
  />
);
