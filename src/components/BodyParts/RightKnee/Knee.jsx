import React, { useState } from "react";
import RadioButton from "../../RadioButton/RadioButton";
import CheckBox from "../../CheckboxButton/CheckBox";
import Others from "../../Others/Others";
import YesNo from "../../YesNo/YesNo";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import ScarVariation2 from "../../Scar1/ScarVariation2";
import Reset1 from "../../Reset1/Reset1";
import Findings from "../../Findings/Findings";
import NegativePositive from "../../NegativePositive/NegativePositive";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";
function Knee({
  appearancereset,
  statusreset,
  statusother,
  aspectreset,
  scarreset,
  aspectother,
  appearanceother,
  scar,
  status,
  appearance,
  aspect,
  exam,
  nexam,
  nexampainscale,
  examreset1,
  other3,
  reason1,
  exam1reset1,
  notperform1,
  nexamreset,
  fyesother,
  ecchymosis1,
  deformity1,
  edema1,
  redness1,
  effusion1,
  erythema1,
  swelling1,
  fnoother,
  ecchymosis,
  deformity,
  edema,
  redness,
  effusion,
  erythema,
  fno,
  fyes,
  swelling,
  tenderness,
  tendernessreset,
  tstatus,
  tstatusother,
  tstatusreset,
  tpositionreset,
  tpositionother,
  tposition,
  taspect,
  taspectreset,
  taspectother,
  rom,
  notperform,
  exam1reset,
  examreset,
  reason,
  other2,
  romself,
  rompain,
  romselfreset,
  rompainreset,
  alignmentreset,
  suboptimalreset,
  suboptimal1,
  suboptimal,
  symptom,
  symptom1,
  symptomreset,
  orthopedic,
  other4,
  notperform2,
  reason2,
  exam1reset2,
  examreset2,
  notperform3,
  exam1reset3,
  examreset3,
  reason3,
  other5,
  negativepositive,
  negativepositive1,
  negativepositive01,
  negativepositive11,
  examreset4,
  exam1reset4,
  reason4,
  other6,
  notperform4,
  negativepositive02,
  negativepositive12,
  examreset5,
  exam1reset5,
  reason5,
  other7,
  notperform5,
  negativepositive03,
  negativepositive13,
  examreset6,
  exam1reset6,
  reason6,
  other8,
  notperform6,
  negativepositive04,
  negativepositive14,
  examreset7,
  exam1reset7,
  reason7,
  other9,
  notperform7,
  negativepositive05,
  negativepositive15,
  examreset10,
  exam1reset10,
  reason10,
  other14,
  notperform10,
  negativepositive06,
  negativepositive16,
  negativepositive07,
  negativepositive17,
  examreset11,
  exam1reset11,
  reason11,
  other15,
  notperform11,
  examreset8,
  exam1reset8,
  notperform8,
  reason8,
  adddetails,
  adddetails1,
  adddetailsreset,
  suboptimaleffort,
  suboptimaleffort1,
  suboptimaleffortreset,
  atrophy,
  atrophy1,
  atrophyreset,
  pagelabel,
}) {
  const [varus, setvarus] = useState(false);
  const [valgus, setvalgus] = useState(false);
  const [ostrength, setostrength] = useState(false);
  return (
    <div>
      {pagelabel.map((value) => (
        <h1 style={{ fontSize: "32px", marginLeft: "0" }}>{value.name}</h1>
      ))}
      <ScarVariation2
        Scar={scar}
        Scarreset={scarreset}
        aspect={aspect}
        aspectOther={aspectother}
        aspectreset={aspectreset}
        Appearance={appearance}
        AppearanceOther={appearanceother}
        Appearancereset={appearancereset}
        Status={status}
        StatusOther={statusother}
        Statusreset={statusreset}
      />
      <h2>Examination</h2>
      <RadioButton InputArray={exam} />
      <NotPerformed
        examreset={examreset1}
        other2={other3}
        Reason={reason1}
        exam1reset={exam1reset1}
        Notperform={notperform1}
      />

      <h3 style={{ marginLeft: "15px" }}>Normal Exam</h3>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={nexam} />
        <PainScaleButton painScale={nexampainscale} />
        <Reset1 Resetall={nexamreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Findings</h4>
      <div style={{ marginLeft: "30px" }}>
        <Findings
          FyesOther={fyesother}
          Ecchymosis1={ecchymosis1}
          Deformity1={deformity1}
          Edema1={edema1}
          Redness1={redness1}
          Effusion1={effusion1}
          Erythema1={erythema1}
          Swelling1={swelling1}
          FNoother={fnoother}
          Ecchymosis={ecchymosis}
          Deformity={deformity}
          Edema={edema}
          Redness={redness}
          Effusion={effusion}
          Erythema={erythema}
          Swelling={swelling}
          Fno={fno}
          Fyes={fyes}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Tenderness</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={tenderness} />
        <Reset1 Resetall={tendernessreset} />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "15px" }}>Classification</h5>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox InputArray1={tstatus} />
          <Others other={tstatusother} />
          <Reset1 Resetall={tstatusreset} />
        </div>
        <h5 style={{ marginLeft: "15px" }}>Position</h5>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox InputArray1={tposition} />
          <Others other={tpositionother} />
          <Reset1 Resetall={tpositionreset} />
        </div>
        <h5 style={{ marginLeft: "15px" }}>Aspect</h5>
        <div style={{ marginLeft: "25px", display: "flex" }}>
          <CheckBox InputArray1={taspect} />
          <Others other={taspectother} />
          <Reset1 Resetall={taspectreset} />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>ROM</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={rom} />
        <NotPerformed
          Notperform={notperform}
          exam1reset={exam1reset}
          examreset={examreset}
          Reason={reason}
          other2={other2}
        />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "25px" }}>Values</h5>
        <div style={{ display: "flex", marginLeft: "35px" }}>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Flexion(140)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Extension(0)</h5>
            <input type="text" className="size" />
          </div>
        </div>

        <h5 style={{ marginLeft: "25px" }}>Self Restricted</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton InputArray={romself} />
          <Reset1 Resetall={romselfreset} />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Pain causing Motion</h5>
        <div style={{ marginLeft: "35px" }}>
          <CheckBox InputArray1={rompain} />
          <Reset1 Resetall={rompainreset} />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>Alignment</h4>
      <div style={{ marginLeft: "30px" }}>
        <span className="scar">
          <label>
            <input type="radio" name="alignment" id="status" />
            <span>Neutral</span>
          </label>
        </span>
        <span className="exam1">
          <label>
            <input
              type="radio"
              name="alignment"
              onClick={() => setvarus(true)}
              id="status"
            />
            <span>Varus Alignment</span>
          </label>
        </span>
        {varus ? (
          <input type="text" name="varusalignment" className="size" />
        ) : null}
        <span className="exam1">
          <label>
            <input
              type="radio"
              name="alignment"
              onClick={() => setvalgus(true)}
              id="status"
            />
            <span>valgus Alignment</span>
          </label>
        </span>
        {valgus ? (
          <input type="text" name="valgusalignment" className="size" />
        ) : null}
        <Reset1 Resetall={alignmentreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Instability</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={suboptimal}
          Suboptimal1={suboptimal1}
          Suboptimalreset={suboptimalreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Suboptimal Effort</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={suboptimaleffort}
          Suboptimal1={suboptimaleffort1}
          Suboptimalreset={suboptimaleffortreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Atrophy</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={atrophy}
          Suboptimal1={atrophy1}
          Suboptimalreset={atrophyreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Symptom Magnification</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={symptom}
          Suboptimal1={symptom1}
          Suboptimalreset={symptomreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Orthopedic Tests</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={orthopedic} />
        <NotPerformed
          examreset={examreset2}
          exam1reset={exam1reset2}
          Notperform={notperform2}
          Reason={reason2}
          other2={other4}
        />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "25px" }}>Lachman Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <NegativePositive
            Negativepositive={negativepositive}
            Negativepositive1={negativepositive1}
          />
          <NotPerformed
            exam1reset={exam1reset3}
            examreset={examreset3}
            Notperform={notperform3}
            Reason={reason3}
            other2={other5}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Anterior Drawer Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <NegativePositive
            Negativepositive={negativepositive01}
            Negativepositive1={negativepositive11}
          />
          <NotPerformed
            exam1reset={exam1reset4}
            examreset={examreset4}
            Notperform={notperform4}
            Reason={reason4}
            other2={other6}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Opening to Valgus/Varus Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <NegativePositive
            Negativepositive={negativepositive02}
            Negativepositive1={negativepositive12}
          />
          <NotPerformed
            exam1reset={exam1reset5}
            examreset={examreset5}
            Notperform={notperform5}
            Reason={reason5}
            other2={other7}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Patellar Apprehension Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <NegativePositive
            Negativepositive={negativepositive03}
            Negativepositive1={negativepositive13}
          />
          <NotPerformed
            exam1reset={exam1reset6}
            examreset={examreset6}
            Notperform={notperform6}
            Reason={reason6}
            other2={other8}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Patellar Grind Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <NegativePositive
            Negativepositive={negativepositive04}
            Negativepositive1={negativepositive14}
          />
          <NotPerformed
            exam1reset={exam1reset7}
            examreset={examreset7}
            Notperform={notperform7}
            Reason={reason7}
            other2={other9}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>J-sign Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <NegativePositive
            Negativepositive={negativepositive05}
            Negativepositive1={negativepositive15}
          />
          <NotPerformed
            exam1reset={exam1reset10}
            examreset={examreset10}
            Notperform={notperform10}
            Reason={reason10}
            other2={other14}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>McMurry Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <NegativePositive
            Negativepositive={negativepositive06}
            Negativepositive1={negativepositive16}
          />
          <NotPerformed
            exam1reset={exam1reset11}
            examreset={examreset11}
            Notperform={notperform11}
            Reason={reason11}
            other2={other15}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Strength</h5>
        <div style={{ marginLeft: "35px" }}>
          <NegativePositive
            Negativepositive={negativepositive07}
            Negativepositive1={negativepositive17}
          />

          <NotPerformed
            exam1reset={exam1reset8}
            examreset={examreset8}
            Notperform={notperform8}
            Reason={reason8}
            other2={other8}
          />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>Add Details</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={adddetails}
          Suboptimal1={adddetails1}
          Suboptimalreset={adddetailsreset}
        />
      </div>
    </div>
  );
}
export default Knee;
