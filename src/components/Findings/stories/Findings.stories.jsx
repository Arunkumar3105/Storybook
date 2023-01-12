import Findings from "../Findings";

export default {
  title: "Finding/Finding",
  component: Findings,
};
const Fyes = [{ name: "Findyes" }];
const Fno = [{ name: "Findno" }];
const Swelling = [{ name: "finding" }];
const Erythema = [{ name: "Erythema" }];
const Effusion = [{ name: "Effusion" }];
const Redness = [{ name: "Redness" }];
const Edema = [{ name: "Edema" }];
const Deformity = [{ name: "Deformity" }];
const Ecchymosis = [{ name: "Ecchymosis" }];
const FNoother = [{ name: "FindNother", classname: "scar" }];

const Swelling1 = [{ name: "finding" }];
const Erythema1 = [{ name: "Erythema" }];
const Effusion1 = [{ name: "Effusion" }];
const Redness1 = [{ name: "Redness" }];
const Edema1 = [{ name: "Edema" }];
const Deformity1 = [{ name: "Deformity" }];
const Ecchymosis1 = [{ name: "Ecchymosis" }];
const FyesOther = [{ name: "FindNother", classname: "scar" }];
export const RsFindings = () => (
  <Findings
    Swelling={Swelling}
    Erythema={Erythema}
    Effusion={Effusion}
    Redness={Redness}
    Edema={Edema}
    Ecchymosis={Ecchymosis}
    Deformity={Deformity}
    Swelling1={Swelling1}
    Erythema1={Erythema1}
    Effusion1={Effusion1}
    Redness1={Redness1}
    Edema1={Edema1}
    Ecchymosis1={Ecchymosis1}
    Deformity1={Deformity1}
    Fyes={Fyes}
    Fno={Fno}
    FNoother={FNoother}
    FyesOther={FyesOther}
  />
);
