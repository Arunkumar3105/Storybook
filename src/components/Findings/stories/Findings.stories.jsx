import Findings from "../Findings";

export default {
  title: "Finding/Finding",
  component: Findings,
};
const fyes = [{ name: "Findyes" }];
const fno = [{ name: "Findno" }];
const swelling = [{ name: "finding" }];
const erythema = [{ name: "Erythema" }];
const effusion = [{ name: "Effusion" }];
const redness = [{ name: "Redness" }];
const edema = [{ name: "Edema" }];
const deformity = [{ name: "Deformity" }];
const ecchymosis = [{ name: "Ecchymosis" }];
const fnoother = [{ name: "FindNother", classname: "scar" }];

const swelling1 = [{ name: "finding" }];
const erythema1 = [{ name: "Erythema" }];
const effusion1 = [{ name: "Effusion" }];
const redness1 = [{ name: "Redness" }];
const edema1 = [{ name: "Edema" }];
const deformity1 = [{ name: "Deformity" }];
const ecchymosis1 = [{ name: "Ecchymosis" }];
const fyesother = [{ name: "FindNother", classname: "scar" }];
export const RsFindings = () => (
  <Findings
    swelling={swelling}
    erythema={erythema}
    effusion={effusion}
    redness={redness}
    edema={edema}
    ecchymosis={ecchymosis}
    deformity={deformity}
    swelling1={swelling1}
    erythema1={erythema1}
    effusion1={effusion1}
    redness1={redness1}
    edema1={edema1}
    ecchymosis1={ecchymosis1}
    eeformity1={deformity1}
    fyes={fyes}
    fno={fno}
    fnoother={fnoother}
    fyesother={fyesother}
  />
);
