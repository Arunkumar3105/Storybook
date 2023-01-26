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
          Scar={rsscar}
          Scarreset={rsscarreset}
          aspect={rsaspect}
          aspectOther={rsaspectother}
          aspectreset={rsaspectreset}
          Appearance={rsappearance}
          Appearancereset={rsappearancereset}
          AppearanceOther={rsappearanceother}
          Status={rsstatus}
          Statusreset={rsstatusreset}
          StatusOther={rsstatusother}
        />
      </span>
      <h2>Examination</h2>

      <span style={{ display: "flex" }}>
        <RadioButton InputArray={rshoulderexam1} />
        <NotPerformed
          Notperform={exnperform}
          exam1reset={exnpreset}
          Reason={exnpreason}
          other2={ExNpother}
          examreset={exnpreasonreset}
        />
      </span>
      <h2>Normal Exam</h2>
      <span style={{ display: "flex" }}>
        <RadioButton InputArray={normalexam} />
        <PainScaleButton painScale={nexampainscale} />
        <Reset1 Resetall={nexamreset} />
      </span>
      <div style={{ marginLeft: "30px" }}>
        <span>
          <h3>Findings</h3>
          <span>
            <Findings
              Swelling={rsswelling}
              Erythema={rserythema}
              Effusion={rseffusion}
              Redness={rsredness}
              Edema={rsedema}
              Ecchymosis={rsecchymosis}
              Deformity={rsdeformity}
              Swelling1={rsswelling1}
              Erythema1={rserythema1}
              Effusion1={rseffusion1}
              Redness1={rsredness1}
              Edema1={rsedema1}
              Ecchymosis1={rsecchymosis1}
              Deformity1={rsdeformity1}
              Fyes={rsfyes}
              Fno={rsfno}
              FNoother={rsfnoother}
              FyesOther={rsfyesother}
            />
          </span>

          <h3>Tenderness</h3>
          <span>
            <span style={{ display: "flex" }}>
              <RadioButton InputArray={rstenderness} />
              <Reset1 Resetall={rstenderreset} />
            </span>
            <br />
            <div style={{ marginLeft: "30px" }}>
              <h4>Classification</h4>
              <span style={{ display: "flex" }}>
                <CheckBox InputArray1={tclassification} />
                <Others other={rscother} />
                <Reset1 Resetall={creset} />
              </span>
              <h4>Position</h4>
              <span>
                <CheckBox InputArray1={tposition} />
                <span style={{ display: "flex", marginTop: "20px" }}>
                  <Others other={tpositionother} />
                  <Reset1 Resetall={positionreset} />
                </span>
              </span>
              <h4>Aspect</h4>
              <span style={{ display: "flex" }}>
                <CheckBox InputArray1={taspect} />
                <Others other={taspectother} />
                <Reset1 Resetall={aspectreset} />
              </span>
            </div>
          </span>
          <h3>ROM</h3>
          <span>
            <span style={{ display: "flex" }}>
              <RadioButton InputArray={rsrom} />
              <NotPerformed
                Notperform={romnperform}
                exam1reset={romnpreset}
                Reason={romnpreason}
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
                <RadioButton InputArray={rsrestricted} />
                <Reset1 Resetall={selfrreset} />
              </span>
              <h4>Pain Causing Motion</h4>
              <span style={{ display: "flex" }}>
                <CheckBox InputArray1={rspcmotion} />
                <Reset1 Resetall={pcmotionreset} />
              </span>
            </div>
          </span>
          <span>
            <h3>Instability</h3>
            <YesNo
              Suboptimal={rsinstabilityyes}
              Suboptimal1={rsinstabilityyesnovalue}
              Suboptimalreset={rsinstabilityyesreset}
            />
            <h3>Symptom Magnification</h3>
            <YesNo
              Suboptimal={rssymptommyes}
              Suboptimal1={rssymptommyesnovalue}
              Suboptimalreset={rssymptommyesreset}
            />
            <h3>Suboptimal Effort</h3>
            <YesNo
              Suboptimal={rssuboptimalyes}
              Suboptimal1={rssuboptimalyesnovalue}
              Suboptimalreset={rssuboptimalyesreset}
            />
            <h3>Atrophy</h3>
            <YesNo
              Suboptimal={rsatrophyyes}
              Suboptimal1={rsatrophyyesnovalue}
              Suboptimalreset={rsatrophyyesreset}
            />
            <h3>Neurovascular Deficit</h3>
            <YesNo
              Suboptimal={rsnvascularyes}
              Suboptimal1={rsnvascularyesnovalue}
              Suboptimalreset={rsnvascularyesreset}
            />
            <h3>Orthopedic Test</h3>
            <span>
              <RadioButton InputArray={rsorthotest} />
              <NotPerformed
                Notperform={rsorthotestnperform}
                exam1reset={rsorthotestnpreset}
                Reason={rsorthotestnpreason}
                other2={rsorthotestnpother}
                examreset={rsorthotestnpreasonreset}
              />
            </span>
            <div style={{ marginLeft: "30px" }}>
              <h4>Apprehension test</h4>
              <span>
                <NegativePositive
                  Negativepositive={apprenhensionnegativepa}
                  Negativepositive1={apprenhensionnegativepa1}
                />
                <NotPerformed
                  Notperform={aptestnperform}
                  exam1reset={aptestnpreset}
                  Reason={aptestnpreason}
                  other2={aptestnpother}
                  examreset={aptestnpreasonreset}
                />
              </span>
              <h4>Sulcus test</h4>
              <span>
                <NegativePositive
                  Negativepositive={sulcustestnegativepa}
                  Negativepositive1={sulcustestnegativepa1}
                />
                <NotPerformed
                  Notperform={sulcustestnperform}
                  exam1reset={sulcustestnpreset}
                  Reason={sulcustestnpreason}
                  other2={sulcustestnpother}
                  examreset={sulcustestnpreasonreset}
                />
              </span>
              <h4>Neer Impingement test</h4>
              <span>
                <NegativePositive
                  Negativepositive={neeritestnegativepa}
                  Negativepositive1={neeritestnegativepa1}
                />
                <NotPerformed
                  Notperform={neerItestnperform}
                  exam1reset={neerItestnpreset}
                  Reason={neerItestnpreason}
                  other2={neerItestnpother}
                  examreset={neerItestnpreasonreset}
                />
              </span>
              <h4>Hawkins Impingement test</h4>
              <span>
                <NegativePositive
                  Negativepositive={hawkinsnegativepa}
                  Negativepositive1={hawkinsnegativepa1}
                />
                <NotPerformed
                  Notperform={hawkinsnperform}
                  exam1reset={hawkinsnpreset}
                  Reason={hawkinsnpreason}
                  other2={hawkinsnpother}
                  examreset={hawkinsnpreasonreset}
                />
              </span>
              <h4>Speed's test</h4>
              <span>
                <NegativePositive
                  Negativepositive={speedtestnegativepa}
                  Negativepositive1={speedtestnegativepa1}
                />
                <NotPerformed
                  Notperform={speedtestnperform}
                  exam1reset={speedtestnpreset}
                  Reason={speedtestnpreason}
                  other2={speedtestnpother}
                  examreset={speedtestnpreasonreset}
                />
              </span>
              <h4>Lift Off test</h4>
              <span>
                <NegativePositive
                  Negativepositive={lifttestnegativepa}
                  Negativepositive1={lifttestnegativepa1}
                />
                <NotPerformed
                  Notperform={lifttestnperform}
                  exam1reset={lifttestnpreset}
                  Reason={lifttestnpreason}
                  other2={lifttestnpother}
                  examreset={lifttestnpreasonreset}
                />
              </span>
              <h4>O'Brien's Test</h4>
              <span>
                <NegativePositive
                  Negativepositive={obrienstestnegativepa}
                  Negativepositive1={obrienstestnegativepa1}
                />
                <NotPerformed
                  Notperform={obrienstestnperform}
                  exam1reset={obrienstestnpreset}
                  Reason={obrienstestnpreason}
                  other2={obrienstestnpother}
                  examreset={obrienstestnpreasonreset}
                />
              </span>
              <h4>Strength</h4>
              <span>
                <Strength
                  DecreasedButton={decreasedbutton}
                  strength={strength}
                  other9={other9}
                  Decreasedreset={decreasedreset}
                  exam1reset7={exam1reset7}
                  examreset7={examreset7}
                  Notperform7={notperform7}
                  Reason7={reason7}
                  other11={other11}
                />
              </span>
            </div>
            <h3>Add Details</h3>
            <span style={{ display: "flex" }}>
              <YesNo
                Suboptimal={rsadddetailsyes}
                Suboptimal1={rsadddetailsyesnovalue}
                Suboptimalreset={adreset}
              />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
export default Shoulder;
