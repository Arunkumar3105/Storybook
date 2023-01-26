import React from "react";
import ScarVariation2 from "../../Scar1/ScarVariation2";
import RadioButton from "../../RadioButton/RadioButton";
import CheckBox from "../../CheckboxButton/CheckBox";
import Others from "../../Others/Others";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import Findings from "../../Findings/Findings";
import YesNo from "../../YesNo/YesNo";
import Reset1 from "../../Reset1/Reset1";
import Strength from "../../strength/Strength";
import NegativePositive from "../../NegativePositive/NegativePositive";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";
function Shoulder({
  shoulders,
  rsaspect,
  rsstatus,
  rsappearance,
  rsscar,
  rsaspectreset,
  rsstatusreset,
  rsappearancereset,
  rsaspectother,
  rsstatusother,
  rsappearanceother,
  rsscarreset,
  exnperform,
  exnpreset,
  exnpreason,
  ExNpother,
  exnpreasonreset,
  rshoulderexam1,
  rsfyes,
  rsfno,
  rsswelling,
  rserythema,
  rseffusion,
  rsecchymosis,
  rsredness,
  rsedema,
  rsdeformity,
  rsswelling1,
  rserythema1,
  rseffusion1,
  rsecchymosis1,
  rsredness1,
  rsedema1,
  rsdeformity1,
  rsfnoother,
  rsfyesother,
  rstenderness,
  rstenderreset,
  tclassification,
  rscother,
  creset,
  normalexam,
  nexampainscale,
  nexamreset,
  tpositionother,
  positionreset,
  tposition,
  tposition1,
  taspect,
  taspectother,
  aspectreset,
  romnpreason,
  romnperform,
  romnpreset,
  romnpother,
  romnpreasonreset,
  rsrom,
  rsrestricted,
  selfrreset,
  rspcmotion,
  rsinstabilityyes,
  rsinstabilityyesnovalue,
  rsinstabilityyesreset,
  rssymptommyes,
  rssymptommyesnovalue,
  rssymptommyesreset,
  rsnvascularyes,
  rsnvascularyesnovalue,
  rsnvascularyesreset,
  rsorthotest,
  rsorthotestnperform,
  rsorthotestnpreset,
  rsorthotestnpreason,
  rsorthotestnpother,
  rsorthotestnpreasonreset,
  apprenhensionnegativepa,
  apprenhensionnegativepa1,
  aptestnpreasonreset,
  aptestnpother,
  aptestnpreason,
  aptestnpreset,
  aptestnperform,
  sulcustestnegativepa,
  sulcustestnegativepa1,
  sulcustestnpreasonreset,
  sulcustestnpother,
  sulcustestnpreason,
  sulcustestnpreset,
  sulcustestnperform,
  neeritestnegativepa,
  neeritestnegativepa1,
  neerItestnpreasonreset,
  neerItestnpother,
  neerItestnpreason,
  neerItestnpreset,
  neerItestnperform,
  hawkinsnegativepa,
  hawkinsnegativepa1,
  hawkinsnperform,
  hawkinsnpreset,
  hawkinsnpreason,
  hawkinsnpother,
  hawkinsnpreasonreset,
  lifttestnegativepa,
  lifttestnegativepa1,
  lifttestnperform,
  lifttestnpreset,
  lifttestnpreason,
  lifttestnpother,
  lifttestnpreasonreset,
  speedtestnegativepa,
  speedtestnegativepa1,
  speedtestnperform,
  speedtestnpreset,
  speedtestnpreason,
  speedtestnpother,
  speedtestnpreasonreset,
  obrienstestnegativepa,
  obrienstestnegativepa1,
  obrienstestnperform,
  obrienstestnpreset,
  obrienstestnpreason,
  obrienstestnpother,
  obrienstestnpreasonreset,
  rssuboptimalyesreset,
  rssuboptimalyesnovalue,
  rssuboptimalyes,
  decreasedbutton,
  strength,
  other9,
  decreasedreset,
  exam1reset7,
  examreset7,
  notperform7,
  reason7,
  other11,
  rsatrophyyes,
  rsatrophyyesnovalue,
  rsatrophyyesreset,
  adreset,
  rsadddetailsyes,
  rsadddetailsyesnovalue,
  pcmotionreset,
}) {
  return (
    <div>
      {shoulders.map((value) => (
        <h1 style={{ fontSize: "32px" }}>{value.label}</h1>
      ))}
      <span>
        <ScarVariation2
          scar={rsscar}
          scarreset={rsscarreset}
          aspect={rsaspect}
          aspectother={rsaspectother}
          aspectreset={rsaspectreset}
          appearance={rsappearance}
          appearancereset={rsappearancereset}
          appearanceother={rsappearanceother}
          status={rsstatus}
          statusreset={rsstatusreset}
          statusother={rsstatusother}
        />
      </span>
      <h2>Examination</h2>

      <span style={{ display: "flex" }}>
        <RadioButton inputarray={rshoulderexam1} />
        <NotPerformed
          notperform={exnperform}
          exam1reset={exnpreset}
          reason={exnpreason}
          other2={ExNpother}
          examreset={exnpreasonreset}
        />
      </span>
      <h2>Normal Exam</h2>
      <span style={{ display: "flex" }}>
        <RadioButton inputarray={normalexam} />
        <PainScaleButton painscale={nexampainscale} />
        <Reset1 resetall={nexamreset} />
      </span>
      <div style={{ marginLeft: "30px" }}>
        <span>
          <h3>Findings</h3>
          <span>
            <Findings
              swelling={rsswelling}
              erythema={rserythema}
              effusion={rseffusion}
              redness={rsredness}
              edema={rsedema}
              ecchymosis={rsecchymosis}
              deformity={rsdeformity}
              swelling1={rsswelling1}
              erythema1={rserythema1}
              effusion1={rseffusion1}
              redness1={rsredness1}
              edema1={rsedema1}
              ecchymosis1={rsecchymosis1}
              deformity1={rsdeformity1}
              fyes={rsfyes}
              fno={rsfno}
              fnoother={rsfnoother}
              fyesother={rsfyesother}
            />
          </span>

          <h3>Tenderness</h3>
          <span>
            <span style={{ display: "flex" }}>
              <RadioButton inputarray={rstenderness} />
              <Reset1 resetall={rstenderreset} />
            </span>
            <br />
            <div style={{ marginLeft: "30px" }}>
              <h4>Classification</h4>
              <span style={{ display: "flex" }}>
                <CheckBox inputarray1={tclassification} />
                <Others other={rscother} />
                <Reset1 resetall={creset} />
              </span>
              <h4>Position</h4>
              <span>
                <CheckBox inputarray1={tposition} />
                <span style={{ display: "flex", marginTop: "20px" }}>
                  <Others other={tpositionother} />
                  <Reset1 resetall={positionreset} />
                </span>
              </span>
              <h4>Aspect</h4>
              <span style={{ display: "flex" }}>
                <CheckBox inputarray1={taspect} />
                <Others other={taspectother} />
                <Reset1 resetall={aspectreset} />
              </span>
            </div>
          </span>
          <h3>ROM</h3>
          <span>
            <span style={{ display: "flex" }}>
              <RadioButton inputarray={rsrom} />
              <NotPerformed
                notperform={romnperform}
                exam1reset={romnpreset}
                reason={romnpreason}
                other2={romnpother}
                examreset={romnpreasonreset}
              />
            </span>
            <h4>Abnormol</h4>
            <div style={{ marginLeft: "30px" }}>
              <h3>Values</h3>
              <span style={{ display: "flex" }}>
                <div>
                  Forward Flexion(180) <br />
                  <input type="text" name="txtvalue" className="size" />
                </div>
                <div>
                  Abduction(180) <br />
                  <input type="text" name="txtvalue" className="size" />
                </div>
                <div>
                  Extension(60) <br />
                  <input type="text" name="txtvalue" className="size" />
                </div>

                <div>
                  External Rotation(90) <br />
                  <input type="text" name="txtvalue" className="size" />
                </div>
              </span>
              <br />
              <span style={{ display: "flex" }}>
                <div>
                  Internal Rotation(70) <br />
                  <input type="text" name="txtvalue" className="size" />
                </div>
                <div>
                  Adduction(30) <br />
                  <input type="text" name="txtvalue" className="size" />
                </div>
              </span>
              <h4>Self Restricted</h4>
              <span style={{ display: "flex" }}>
                <RadioButton inputarray={rsrestricted} />
                <Reset1 resetall={selfrreset} />
              </span>
              <h4>Pain Causing Motion</h4>
              <span style={{ display: "flex" }}>
                <CheckBox inputarray1={rspcmotion} />
                <Reset1 resetall={pcmotionreset} />
              </span>
            </div>
          </span>
          <span>
            <h3>Instability</h3>
            <YesNo
              suboptimal={rsinstabilityyes}
              suboptimal1={rsinstabilityyesnovalue}
              suboptimalreset={rsinstabilityyesreset}
            />
            <h3>Symptom Magnification</h3>
            <YesNo
              suboptimal={rssymptommyes}
              suboptimal1={rssymptommyesnovalue}
              suboptimalreset={rssymptommyesreset}
            />
            <h3>Suboptimal Effort</h3>
            <YesNo
              suboptimal={rssuboptimalyes}
              suboptimal1={rssuboptimalyesnovalue}
              suboptimalreset={rssuboptimalyesreset}
            />
            <h3>Atrophy</h3>
            <YesNo
              suboptimal={rsatrophyyes}
              suboptimal1={rsatrophyyesnovalue}
              suboptimalreset={rsatrophyyesreset}
            />
            <h3>Neurovascular Deficit</h3>
            <YesNo
              suboptimal={rsnvascularyes}
              suboptimal1={rsnvascularyesnovalue}
              suboptimalreset={rsnvascularyesreset}
            />
            <h3>Orthopedic Test</h3>
            <span>
              <RadioButton inputarray={rsorthotest} />
              <NotPerformed
                notperform={rsorthotestnperform}
                exam1reset={rsorthotestnpreset}
                reason={rsorthotestnpreason}
                other2={rsorthotestnpother}
                examreset={rsorthotestnpreasonreset}
              />
            </span>
            <div style={{ marginLeft: "30px" }}>
              <h4>Apprehension test</h4>
              <span>
                <NegativePositive
                  negativepositive={apprenhensionnegativepa}
                  negativepositive1={apprenhensionnegativepa1}
                />
                <NotPerformed
                  notperform={aptestnperform}
                  exam1reset={aptestnpreset}
                  reason={aptestnpreason}
                  other2={aptestnpother}
                  examreset={aptestnpreasonreset}
                />
              </span>
              <h4>Sulcus test</h4>
              <span>
                <NegativePositive
                  negativepositive={sulcustestnegativepa}
                  negativepositive1={sulcustestnegativepa1}
                />
                <NotPerformed
                  notperform={sulcustestnperform}
                  exam1reset={sulcustestnpreset}
                  reason={sulcustestnpreason}
                  other2={sulcustestnpother}
                  examreset={sulcustestnpreasonreset}
                />
              </span>
              <h4>Neer Impingement test</h4>
              <span>
                <NegativePositive
                  negativepositive={neeritestnegativepa}
                  negativepositive1={neeritestnegativepa1}
                />
                <NotPerformed
                  notperform={neerItestnperform}
                  exam1reset={neerItestnpreset}
                  reason={neerItestnpreason}
                  other2={neerItestnpother}
                  examreset={neerItestnpreasonreset}
                />
              </span>
              <h4>Hawkins Impingement test</h4>
              <span>
                <NegativePositive
                  negativepositive={hawkinsnegativepa}
                  negativepositive1={hawkinsnegativepa1}
                />
                <NotPerformed
                  notperform={hawkinsnperform}
                  exam1reset={hawkinsnpreset}
                  reason={hawkinsnpreason}
                  other2={hawkinsnpother}
                  examreset={hawkinsnpreasonreset}
                />
              </span>
              <h4>Speed's test</h4>
              <span>
                <NegativePositive
                  negativepositive={speedtestnegativepa}
                  negativepositive1={speedtestnegativepa1}
                />
                <NotPerformed
                  notperform={speedtestnperform}
                  exam1reset={speedtestnpreset}
                  reason={speedtestnpreason}
                  other2={speedtestnpother}
                  examreset={speedtestnpreasonreset}
                />
              </span>
              <h4>Lift Off test</h4>
              <span>
                <NegativePositive
                  negativepositive={lifttestnegativepa}
                  negativepositive1={lifttestnegativepa1}
                />
                <NotPerformed
                  notperform={lifttestnperform}
                  exam1reset={lifttestnpreset}
                  reason={lifttestnpreason}
                  other2={lifttestnpother}
                  examreset={lifttestnpreasonreset}
                />
              </span>
              <h4>O'Brien's Test</h4>
              <span>
                <NegativePositive
                  negativepositive={obrienstestnegativepa}
                  negativepositive1={obrienstestnegativepa1}
                />
                <NotPerformed
                  notperform={obrienstestnperform}
                  exam1reset={obrienstestnpreset}
                  reason={obrienstestnpreason}
                  other2={obrienstestnpother}
                  examreset={obrienstestnpreasonreset}
                />
              </span>
              <h4>Strength</h4>
              <span>
                <Strength
                  decreasedbutton={decreasedbutton}
                  strength={strength}
                  other9={other9}
                  decreasedreset={decreasedreset}
                  exam1reset7={exam1reset7}
                  examreset7={examreset7}
                  notperform7={notperform7}
                  reason7={reason7}
                  other11={other11}
                />
              </span>
            </div>
            <h3>Add Details</h3>
            <span style={{ display: "flex" }}>
              <YesNo
                suboptimal={rsadddetailsyes}
                suboptimal1={rsadddetailsyesnovalue}
                suboptimalreset={adreset}
              />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
export default Shoulder;
