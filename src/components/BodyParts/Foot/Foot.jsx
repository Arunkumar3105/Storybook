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
        status={status}
        appearance={appearance}
        scar={scar}
        aspectreset={aspectreset}
        statusreset={statusreset}
        appearancereset={appearancereset}
        scarreset={scarreset}
        aspectother={aspectother}
        statusother={statusother}
        appearanceother={appearanceother}
      />
      <div>
        <h2>Examination</h2>
        <span>
          <RadioButton inputarray={rfootexam} />
          <NotPerformed
            notperform={rfexamnperform}
            exam1reset={rfexamnpreset}
            reason={rfexamnpreason}
            other2={rfexamnpother}
            examreset={rfexamnpreasonreset}
          />
        </span>
        <h2>Normal Exam</h2>
        <span style={{ display: "flex" }}>
          <RadioButton inputarray={rfnexam} />
          <PainScaleButton painscale={nexampainscale} />
          <Reset1 resetall={rfnexamreset} />
        </span>
        <div style={{ marginLeft: "30px" }}>
          <h3>Findings</h3>
          <div>
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
              fnoother={fnoother}
              fyesother={fyesother}
            />
          </div>
          <h3>Tenderness</h3>
          <span style={{ display: "flex" }}>
            <RadioButton inputarray={rfoottenderness} />
            <Reset1 resetall={tenderreset} />
          </span>
          <div style={{ marginLeft: "20px" }}>
            <h4>Classification</h4>
            <span style={{ display: "flex" }}>
              <CheckBox inputarray1={classifitenderness} />
              <Others other={classifiother} />
              <Reset1 resetall={classifireset} />
            </span>
            <h4>Aspect</h4>
            <span style={{ display: "flex" }}>
              <CheckBox inputarray1={aspecttenderness} />
              <Others other={aspectother1} />
              <Reset1 resetall={aspectreset1} />
            </span>
            <h4>Position</h4>
            <span>
              <CheckBox inputarray1={Positionv} />
              <span style={{ display: "flex", marginTop: "10px" }}>
                <CheckBox inputarray1={positionv1} />
                <Others other={positionother} />
                <Reset1 resetall={positionreset} />
              </span>
            </span>
          </div>
          <h3>ROM</h3>
          <span>
            <RadioButton inputarray={rom} />
            <NotPerformed
              notperform={rfromnperform}
              exam1reset={rfromnpreset}
              reason={rfromnpreason}
              other2={rfromnpother}
              examreset={rfromnpreasonreset}
            />
          </span>
          <div style={{ marginLeft: "20px" }}>
            <span style={{ display: "flex" }}>
              <CheckBox inputarray1={romfootvalue} />
              <Reset1 resetall={romreset} />
            </span>
            <span>
              <Fingervalue finger={rfalltoes} />
              <Fingervalue finger={rfgreadtoe} />
              <Fingervalue finger={rfsecondtoe} />
              <Fingervalue finger={rfthirdtoe} />
              <Fingervalue finger={rffourthtoe} />
              <Fingervalue finger={rffifthtoe} />
              <h4>Self Restricted</h4>
              <span style={{ display: "flex" }}>
                <RadioButton inputarray={srestricted} />
                <Reset1 resetall={srreset} />
              </span>
              <h4>Pain Causing Motion</h4>
              <span style={{ display: "flex" }}>
                <CheckBox inputarray1={repcmotion} />
                <Reset1 resetall={pcmotionreset} />
              </span>
            </span>
          </div>
          <h3>Suboptimal Effort</h3>
          <span>
            <YesNo
              suboptimal={soptimalnovalue}
              suboptimalreset={soptimalyesreset}
              suboptimal1={soptimalyesno}
            />
          </span>
          <h3>Atrophy</h3>
          <span>
            <YesNo
              suboptimal={atrophynovalue}
              suboptimalreset={atrophyyesreset}
              suboptimal1={atrophyyesno}
            />
          </span>
          <h3>Instability</h3>
          <span>
            <YesNo
              suboptimal={instabilitynovalue}
              suboptimalreset={instabilityyesreset}
              suboptimal1={instabilityyesno}
            />
          </span>
          <h3>Amputated</h3>
          <span>
            <YesNo
              suboptimal={ambutatednovalue}
              suboptimalreset={ambutatedyesreset}
              suboptimal1={ambutatedyesno}
            />
          </span>

          <h3>Symptom Magnification</h3>
          <span>
            <YesNo
              suboptimal={sensationnovalue}
              suboptimalreset={sensationyesreset}
              suboptimal1={sensationyesno}
            />
          </span>
          <h3>Sensation</h3>
          <span>
            <NegativePositive
              negativepositive={intactv}
              negativepositive1={decreasedv}
            />
            <NotPerformed
              notperform={rfsensationnperform}
              exam1reset={rfsensationnpreset}
              reason={rfsensationnpreason}
              other2={rfsensationnpother}
              examreset={rfsensationnpreasonreset}
            />
          </span>
          <h3>Add Details</h3>
          <span style={{ display: "flex" }}>
            <YesNo
              suboptimal={rfadddetailsnovalue}
              suboptimalreset={rfadddetailsreset}
              suboptimal1={rfadddetailsyesno}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Foot;
