import PainScaleButton from "../PainScaleButton";

export default {
  title: "PainScale/Pscale",
  component: PainScaleButton,
};
const painscale = [{ name: "pscale" }];
export const Painscalebutton = () => <PainScaleButton painscale={painscale} />;
