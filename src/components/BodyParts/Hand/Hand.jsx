import React from "react";
import ScarVariation2 from "../../Scar1/ScarVariation2";
import RadioButton from "../../RadioButton/RadioButton";
import CheckBox from "../../CheckboxButton/CheckBox";
import Others from "../../Others/Others";
import Reset1 from "../../Reset1/Reset1";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import Findings from "../../Findings/Findings";
import YesNo from "../../YesNo/YesNo";
import NegativePositive from "../../NegativePositive/NegativePositive";
import Fingervalue from "../../Fingervalues/Finger";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";

function Hand({
  hand,
  status,
  appearance,
  aspect,
  scar,
  aspectreset,
  statusreset,
  appearancereset,
  scarreset,
  aspectOther,
  statusother,
  appearanceOther,
  rhexam,
  rhexamnperform,
  rhexamnpreset,
  rhexamnpreason,
  rhexamnpother,
  rhexamnpreasonreset,
  nexamradio,
  nexampainsale,
  nexamreset,
  fyes,
  fno,
  swelling,
  erythema,
  effusion,
  ecchymosis,
  redness,
  edema,
  deformity,
  swelling1,
  erythema1,
  effusion1,
  ecchymosis1,
  redness1,
  edema1,
  deformity1,
  fnoother,
  fyesother,
  tenderness,
  treset,
  classification,
  clother,
  clreset,
  asreset,
  asother,
  aspect1,
  rhandrom,
  rhandromreset,
  rhromnperform,
  rhromnpreason,
  rhromnpother,
  rhromnpreasonreset,
  checkabrom,
  romabreset,
  rhallfinger,
  rhthumbfinger,
  rhsecondfinger,
  rhthirdfinger,
  rhfourthfinger,
  rhfifthfinger,
  rhnovalue,
  rhyesreset,
  rhyesno,
  rhpcausingmotion,
  rhpcmotion,
  instabilitynovalue,
  instabilityyesreset,
  instabilityyesno,
  triggeringnovalue,
  triggeringyesreset,
  triggeringyesno,
  amputatednovalue,
  amputatedyesreset,
  amputatedyesno,
  smagnificationnovalue,
  smagnificationyesreset,
  smagnificationyesno,
  addreset,
  sensationva,
  sensationva1,
  rhsensationnperform,
  rhsensationnpreset,
  rhsensationnpreason,
  rhsensationnpother,
  rhsensationnpreasonreset,
  soptimalnovalue,
  soptimalyesreset,
  soptimalyesno,
  atrophynovalue,
  atrophyyesreset,
  atrophyyesno,
  position,
  positionother,
  positionreset,
  adddetailsyesno,
  adddetailsnovalue,
  cmcmotion,
  cmcreset,
  thumbcmcyes,
  thumbcmcyesreset,
  tendonyesreset,
  tendonyesno,
  tendonnovalue,
}) {
  return (
    <div>
      {hand.map((value) => (
        <h1 style={{ fontSize: "32px" }}>{value.label}</h1>
      ))}
      <ScarVariation2
        aspect={aspect}
        status={status}
        appearance={appearance}
        scar={scar}
        aspectreset={aspectreset}
        statusreset={statusreset}
        appearancereset={appearancereset}
        scarreset={scarreset}
        aspectother={aspectOther}
        statusother={statusother}
        appearanceother={appearanceOther}
      />
      <div>
        <h2>Examination</h2>
        <span>
          <RadioButton inputarray={rhexam} />s
          <NotPerformed
            notperform={rhexamnperform}
            exam1reset={rhexamnpreset}
            reason={rhexamnpreason}
            other2={rhexamnpother}
            examreset={rhexamnpreasonreset}
          />
        </span>
        <h2>Normal Exam</h2>
        <span style={{ display: "flex" }}>
          <RadioButton inputarray={nexamradio} />
          <PainScaleButton painscale={nexampainsale} />
          <Reset1 resetall={nexamreset} />
        </span>
        <h3>Findings</h3>
        <span>
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
            deformity1={deformity1}
            fyes={fyes}
            fno={fno}
            fNoother={fnoother}
            fyesother={fyesother}
          />
        </span>
        <h3>Tenderness</h3>
        <span style={{ display: "flex" }}>
          <RadioButton inputarray={tenderness} />
          <Reset1 resetall={treset} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <h4>Classification</h4>
          <span style={{ display: "flex" }}>
            <CheckBox inputarray1={classification} />
            <Others other={clother} />
            <Reset1 resetall={clreset} />
          </span>
          <h4>Aspect</h4>
          <span style={{ display: "flex" }}>
            <CheckBox inputarray1={aspect1} />
            <Others other={asother} />
            <Reset1 resetall={asreset} />
          </span>
          <h4>position</h4>
          <span style={{ display: "flex" }}>
            <CheckBox inputarray1={position} />
            <Others other={positionother} />
            <Reset1 resetall={positionreset} />
          </span>
        </div>
        <h3>ROM</h3>
        <span>
          <RadioButton inputarray={rhandrom} />
          <NotPerformed
            notperform={rhromnperform}
            exam1reset={rhandromreset}
            reason={rhromnpreason}
            other2={rhromnpother}
            examreset={rhromnpreasonreset}
          />
        </span>
        <span style={{ display: "flex" }}>
          <CheckBox inputarray1={checkabrom} />
          <Reset1 resetall={romabreset} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <Fingervalue finger={rhallfinger} />
          <Fingervalue finger={rhthumbfinger} />
          <Fingervalue finger={rhsecondfinger} />
          <Fingervalue finger={rhthirdfinger} />
          <Fingervalue finger={rhfourthfinger} />
          <Fingervalue finger={rhfifthfinger} />
          <h4>Self Restricted</h4>
          <YesNo
            suboptimal={rhnovalue}
            suboptimalreset={rhyesreset}
            suboptimal1={rhyesno}
          />
          <h4>Pain Causing motion</h4>
          <span style={{ display: "flex" }}>
            <CheckBox inputarray1={rhpcausingmotion} />
            <Reset1 resetall={rhpcmotion} />
          </span>
        </div>
        <h3>Suboptimal Effort</h3>
        <YesNo
          suboptimal={soptimalnovalue}
          suboptimalreset={soptimalyesreset}
          suboptimal1={soptimalyesno}
        />
        <h3>Atrophy</h3>
        <YesNo
          suboptimal={atrophynovalue}
          suboptimalreset={atrophyyesreset}
          suboptimal1={atrophyyesno}
        />
        <h3>Instability</h3>
        <YesNo
          suboptimal={instabilitynovalue}
          suboptimalreset={instabilityyesreset}
          suboptimal1={instabilityyesno}
        />
        <h3>Triggering</h3>
        <YesNo
          suboptimal={triggeringnovalue}
          suboptimalreset={triggeringyesreset}
          suboptimal1={triggeringyesno}
        />
        <h3>Amputated</h3>
        <YesNo
          suboptimal={amputatednovalue}
          suboptimalreset={amputatedyesreset}
          suboptimal1={amputatedyesno}
        />
        <h3>Symptom Magnification</h3>
        <YesNo
          suboptimal={smagnificationnovalue}
          suboptimalreset={smagnificationyesreset}
          suboptimal1={smagnificationyesno}
        />
        <h3>Sensation</h3>
        <span>
          <NegativePositive
            negativepositive={sensationva}
            negativepositive1={sensationva1}
          />
          <NotPerformed
            notperform={rhsensationnperform}
            exam1reset={rhsensationnpreset}
            reason={rhsensationnpreason}
            other2={rhsensationnpother}
            examreset={rhsensationnpreasonreset}
          />
        </span>
        <h3>Thumb CMC Motion</h3>
        <span style={{ display: "flex" }}>
          <RadioButton inputarray={cmcmotion} />
          <Reset1 resetall={cmcreset} />
        </span>
        <br />
        <div style={{ display: "flex" }}>
          <RadioButton inputarray={thumbcmcyes} />
          <Reset1 resetall={thumbcmcyesreset} />
        </div>
        <h3>Tendon Lac</h3>
        <span>
          <YesNo
            suboptimal={tendonnovalue}
            suboptimalreset={tendonyesreset}
            suboptimal1={tendonyesno}
          />
        </span>
        <h3>Add Details</h3>
        <span style={{ display: "flex" }}>
          <YesNo
            suboptimal={adddetailsnovalue}
            suboptimalreset={addreset}
            suboptimal1={adddetailsyesno}
          />
        </span>
      </div>
    </div>
  );
}
export default Hand;
