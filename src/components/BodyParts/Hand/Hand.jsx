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
        Status={status}
        Appearance={appearance}
        Scar={scar}
        aspectreset={aspectreset}
        Statusreset={statusreset}
        Appearancereset={appearancereset}
        Scarreset={scarreset}
        aspectOther={aspectOther}
        StatusOther={statusother}
        AppearanceOther={appearanceOther}
      />
      <div>
        <h2>Examination</h2>
        <span>
          <RadioButton InputArray={rhexam} />
          <NotPerformed
            Notperform={rhexamnperform}
            exam1reset={rhexamnpreset}
            Reason={rhexamnpreason}
            other2={rhexamnpother}
            examreset={rhexamnpreasonreset}
          />
        </span>
        <h2>Normal Exam</h2>
        <span style={{ display: "flex" }}>
          <RadioButton InputArray={nexamradio} />
          <PainScaleButton painScale={nexampainsale} />
          <Reset1 Resetall={nexamreset} />
        </span>
        <h3>Findings</h3>
        <span>
          <Findings
            Swelling={swelling}
            Erythema={erythema}
            Effusion={effusion}
            Redness={redness}
            Edema={edema}
            Ecchymosis={ecchymosis}
            Deformity={deformity}
            Swelling1={swelling1}
            Erythema1={erythema1}
            Effusion1={effusion1}
            Redness1={redness1}
            Edema1={edema1}
            Ecchymosis1={ecchymosis1}
            Deformity1={deformity1}
            Fyes={fyes}
            Fno={fno}
            FNoother={fnoother}
            FyesOther={fyesother}
          />
        </span>
        <h3>tenderness</h3>
        <span style={{ display: "flex" }}>
          <RadioButton InputArray={tenderness} />
          <Reset1 Resetall={treset} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <h4>Classification</h4>
          <span style={{ display: "flex" }}>
            <CheckBox InputArray1={classification} />
            <Others other={clother} />
            <Reset1 Resetall={clreset} />
          </span>
          <h4>Aspect</h4>
          <span style={{ display: "flex" }}>
            <CheckBox InputArray1={aspect1} />
            <Others other={asother} />
            <Reset1 Resetall={asreset} />
          </span>
          <h4>position</h4>
          <span style={{ display: "flex" }}>
            <CheckBox InputArray1={position} />
            <Others other={positionother} />
            <Reset1 Resetall={positionreset} />
          </span>
        </div>
        <h3>ROM</h3>
        <span>
          <RadioButton InputArray={rhandrom} />
          <NotPerformed
            Notperform={rhromnperform}
            exam1reset={rhandromreset}
            Reason={rhromnpreason}
            other2={rhromnpother}
            examreset={rhromnpreasonreset}
          />
        </span>
        <span style={{ display: "flex" }}>
          <CheckBox InputArray1={checkabrom} />
          <Reset1 Resetall={romabreset} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <Fingervalue Finger={rhallfinger} />
          <Fingervalue Finger={rhthumbfinger} />
          <Fingervalue Finger={rhsecondfinger} />
          <Fingervalue Finger={rhthirdfinger} />
          <Fingervalue Finger={rhfourthfinger} />
          <Fingervalue Finger={rhfifthfinger} />
          <h4>Self Restricted</h4>
          <YesNo
            Suboptimal={rhnovalue}
            Suboptimalreset={rhyesreset}
            Suboptimal1={rhyesno}
          />
          <h4>Pain Causing motion</h4>
          <span style={{ display: "flex" }}>
            <CheckBox InputArray1={rhpcausingmotion} />
            <Reset1 Resetall={rhpcmotion} />
          </span>
        </div>
        <h3>Suboptimal Effort</h3>
        <YesNo
          Suboptimal={soptimalnovalue}
          Suboptimalreset={soptimalyesreset}
          Suboptimal1={soptimalyesno}
        />
        <h3>Atrophy</h3>
        <YesNo
          Suboptimal={atrophynovalue}
          Suboptimalreset={atrophyyesreset}
          Suboptimal1={atrophyyesno}
        />
        <h3>Instability</h3>
        <YesNo
          Suboptimal={instabilitynovalue}
          Suboptimalreset={instabilityyesreset}
          Suboptimal1={instabilityyesno}
        />
        <h3>Triggering</h3>
        <YesNo
          Suboptimal={triggeringnovalue}
          Suboptimalreset={triggeringyesreset}
          Suboptimal1={triggeringyesno}
        />
        <h3>Amputated</h3>
        <YesNo
          Suboptimal={amputatednovalue}
          Suboptimalreset={amputatedyesreset}
          Suboptimal1={amputatedyesno}
        />
        <h3>Symptom Magnification</h3>
        <YesNo
          Suboptimal={smagnificationnovalue}
          Suboptimalreset={smagnificationyesreset}
          Suboptimal1={smagnificationyesno}
        />
        <h3>Sensation</h3>
        <span>
          <NegativePositive
            Negativepositive={sensationva}
            Negativepositive1={sensationva1}
          />
          <NotPerformed
            Notperform={rhsensationnperform}
            exam1reset={rhsensationnpreset}
            Reason={rhsensationnpreason}
            other2={rhsensationnpother}
            examreset={rhsensationnpreasonreset}
          />
        </span>
        <h3>Thumb CMC Motion</h3>
        <span style={{ display: "flex" }}>
          <RadioButton InputArray={cmcmotion} />
          <Reset1 Resetall={cmcreset} />
        </span>
        <br />
        <div style={{ display: "flex" }}>
          <RadioButton InputArray={thumbcmcyes} />
          <Reset1 Resetall={thumbcmcyesreset} />
        </div>
        <h3>Tendon Lac</h3>
        <span>
          <YesNo
            Suboptimal={tendonnovalue}
            Suboptimalreset={tendonyesreset}
            Suboptimal1={tendonyesno}
          />
        </span>
        <h3>Add Details</h3>
        <span style={{ display: "flex" }}>
          <YesNo
            Suboptimal={adddetailsnovalue}
            Suboptimalreset={addreset}
            Suboptimal1={adddetailsyesno}
          />
        </span>
      </div>
    </div>
  );
}
export default Hand;
