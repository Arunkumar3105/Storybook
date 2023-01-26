import PainScaleButton from "../PainScaleButton";

export default {
  title: "PainScale/Pscale",
  component: PainScaleButton,
};
const painScale = [{ name: "pscale" }];
export const Painscalebutton = () => <PainScaleButton painScale={painScale} />;
