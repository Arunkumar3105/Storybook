import Label from "../Label";
export default {
  title: "PageLabel/label",
  component: Label,
};
const Pagelabel = [{ name: "Right Ankle" }];
export const Labels = () => <Label Pagelabel={Pagelabel} />;
