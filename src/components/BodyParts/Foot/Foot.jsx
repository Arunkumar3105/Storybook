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
const Foot = ({
  label,
  status,
  appearance,
  aspect,
  scar,
  aspectreset,
  statusreset,
  appearancereset,
  scarreset,
  aspectother,
  statusother,
  appearanceother,
  rfootexam,
  rfexamnperform,
  rfexamnpreset,
  rfexamnpreason,
  rfexamnpother,
  rfexamnpreasonreset,
  rfnexam,
  nexampainscale,
  rfnexamreset,
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
  rfoottenderness,
  tenderreset,
  classifitenderness,
  classifiother,
  classifireset,
  aspecttenderness,
  aspectother1,
  aspectreset1,
  rom,
  rfromnperform,
  rfromnpreset,
  rfromnpreason,
  rfromnpother,
  rfromnpreasonreset,
  romfootvalue,
  romreset,
  rfalltoes,
  rfgreadtoe,
  rfsecondtoe,
  rfthirdtoe,
  rffourthtoe,
  rffifthtoe,
  srestricted,
  srreset,
  repcmotion,
  pcmotionreset,
  instabilitynovalue,
  instabilityyesreset,
  instabilityyesno,
  ambutatednovalue,
  ambutatedyesreset,
  ambutatedyesno,
  positionreset,
  positionother,
  Positionv,
  sensationnovalue,
  sensationyesreset,
  sensationyesno,
  intactv,
  decreasedv,
  rfsensationnperform,
  rfsensationnpreset,
  rfsensationnpreason,
  rfsensationnpother,
  rfsensationnpreasonreset,
  rfadddetailsreset,
  positionv1,
  soptimalnovalue,
  soptimalyesreset,
  soptimalyesno,
  atrophynovalue,
  atrophyyesreset,
  atrophyyesno,
  rfadddetailsnovalue,
  rfadddetailsyesno,
}) => {
  return (
    <div>
      <h1 style={{ fontSize: "32px" }}>{label}</h1>
      <ScarVariation2
        aspect={aspect}
        Status={status}
        Appearance={appearance}
        Scar={scar}
        aspectreset={aspectreset}
        Statusreset={statusreset}
        Appearancereset={appearancereset}
        Scarreset={scarreset}
        aspectOther={aspectother}
        StatusOther={statusother}
        AppearanceOther={appearanceother}
      />
      <div>
        <h2>Examination</h2>
        <span>
          <RadioButton InputArray={rfootexam} />
          <NotPerformed
            Notperform={rfexamnperform}
            exam1reset={rfexamnpreset}
            Reason={rfexamnpreason}
            other2={rfexamnpother}
            examreset={rfexamnpreasonreset}
          />
        </span>
        <h2>Normal Exam</h2>
        <span style={{ display: "flex" }}>
          <RadioButton InputArray={rfnexam} />
          <PainScaleButton painScale={nexampainscale} />
          <Reset1 Resetall={rfnexamreset} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <h3>Findings</h3>
          <div>
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
          </div>
          <h3>Tenderness</h3>
          <span style={{ display: "flex" }}>
            <RadioButton InputArray={rfoottenderness} />
            <Reset1 Resetall={tenderreset} />
          </span>
          <div style={{ marginLeft: "20px" }}>
            <h4>Classification</h4>
            <span style={{ display: "flex" }}>
              <CheckBox InputArray1={classifitenderness} />
              <Others other={classifiother} />
              <Reset1 Resetall={classifireset} />
            </span>
            <h4>Aspect</h4>
            <span style={{ display: "flex" }}>
              <CheckBox InputArray1={aspecttenderness} />
              <Others other={aspectother1} />
              <Reset1 Resetall={aspectreset1} />
            </span>
            <h4>Position</h4>
            <span>
              <CheckBox InputArray1={Positionv} />
              <span style={{ display: "flex", marginTop: "10px" }}>
                <CheckBox InputArray1={positionv1} />
                <Others other={positionother} />
                <Reset1 Resetall={positionreset} />
              </span>
            </span>
          </div>
          <h3>ROM</h3>
          <span>
            <RadioButton InputArray={rom} />
            <NotPerformed
              Notperform={rfromnperform}
              exam1reset={rfromnpreset}
              Reason={rfromnpreason}
              other2={rfromnpother}
              examreset={rfromnpreasonreset}
            />
          </span>
          <div style={{ marginLeft: "20px" }}>
            <span style={{ display: "flex" }}>
              <CheckBox InputArray1={romfootvalue} />
              <Reset1 Resetall={romreset} />
            </span>
            <span>
              <Fingervalue Finger={rfalltoes} />
              <Fingervalue Finger={rfgreadtoe} />
              <Fingervalue Finger={rfsecondtoe} />
              <Fingervalue Finger={rfthirdtoe} />
              <Fingervalue Finger={rffourthtoe} />
              <Fingervalue Finger={rffifthtoe} />
              <h4>Self Restricted</h4>
              <span style={{ display: "flex" }}>
                <RadioButton InputArray={srestricted} />
                <Reset1 Resetall={srreset} />
              </span>
              <h4>Pain Causing Motion</h4>
              <span style={{ display: "flex" }}>
                <CheckBox InputArray1={repcmotion} />
                <Reset1 Resetall={pcmotionreset} />
              </span>
            </span>
          </div>
          <h3>Suboptimal Effort</h3>
          <span>
            <YesNo
              Suboptimal={soptimalnovalue}
              Suboptimalreset={soptimalyesreset}
              Suboptimal1={soptimalyesno}
            />
          </span>
          <h3>Atrophy</h3>
          <span>
            <YesNo
              Suboptimal={atrophynovalue}
              Suboptimalreset={atrophyyesreset}
              Suboptimal1={atrophyyesno}
            />
          </span>
          <h3>Instability</h3>
          <span>
            <YesNo
              Suboptimal={instabilitynovalue}
              Suboptimalreset={instabilityyesreset}
              Suboptimal1={instabilityyesno}
            />
          </span>
          <h3>Amputated</h3>
          <span>
            <YesNo
              Suboptimal={ambutatednovalue}
              Suboptimalreset={ambutatedyesreset}
              Suboptimal1={ambutatedyesno}
            />
          </span>

          <h3>Symptom Magnification</h3>
          <span>
            <YesNo
              Suboptimal={sensationnovalue}
              Suboptimalreset={sensationyesreset}
              Suboptimal1={sensationyesno}
            />
          </span>
          <h3>Sensation</h3>
          <span>
            <NegativePositive
              Negativepositive={intactv}
              Negativepositive1={decreasedv}
            />
            <NotPerformed
              Notperform={rfsensationnperform}
              exam1reset={rfsensationnpreset}
              Reason={rfsensationnpreason}
              other2={rfsensationnpother}
              examreset={rfsensationnpreasonreset}
            />
          </span>
          <h3>Add Details</h3>
          <span style={{ display: "flex" }}>
            <YesNo
              Suboptimal={rfadddetailsnovalue}
              Suboptimalreset={rfadddetailsreset}
              Suboptimal1={rfadddetailsyesno}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Foot;
