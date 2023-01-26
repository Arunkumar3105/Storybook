import React from "react";
import CheckBox from "../../CheckboxButton/CheckBox";
import Findings from "../../Findings/Findings";
import RadioButton from "../../RadioButton/RadioButton";
import Reset1 from "../../Reset1/Reset1";

// import Reset1 from "../../../Reset1/Reset1";
// import Others from "../../../Others/Others";
// import RadioButton from "../../../RadioButton/RadioButton";
// import CheckBox from "../../../CheckboxButton/CheckBox";
import Others from "../../Others/Others";
import ScarVariation2 from "../../Scar1/ScarVariation2";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import YesNo from "../../YesNo/YesNo";
import Decreased from "../../Decreased/Decreased";
import Strength from "../../strength/Strength";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";
function Elbow({
  statusreset,
  appearancereset,
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
  suboptimalreset,
  suboptimal1,
  suboptimal,
  painre,
  painrereset,
  painrf,
  painrfreset,
  suboptimal01,
  suboptimal11,
  suboptimalreset1,
  symptom,
  symptom1,
  symptomreset,
  exam1reset2,
  examreset2,
  notperform2,
  reason2,
  other4,
  orthopedic,

  negativepositive01,
  exam1reset3,
  examreset3,
  notperform3,
  reason3,
  other5,
  exam1reset7,
  examreset7,
  notperform7,
  reason7,
  other11,
  decreasedreset,
  other9,
  strength,
  decreasedbutton,
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
  return (
    <div>
      {pagelabel.map((value) => (
        <h1 style={{ fontSize: "32px", marginLeft: "0" }}>{value.name}</h1>
      ))}
      <ScarVariation2
        scar={scar}
        scarreset={scarreset}
        aspect={aspect}
        aspectother={aspectother}
        aspectreset={aspectreset}
        appearance={appearance}
        appearanceother={appearanceother}
        appearancereset={appearancereset}
        status={status}
        statusother={statusother}
        statusreset={statusreset}
      />
      <h2>Examination</h2>
      <RadioButton inputarray={exam} />
      <NotPerformed
        examreset={examreset1}
        other2={other3}
        reason={reason1}
        exam1reset={exam1reset1}
        notperform={notperform1}
      />

      <h3 style={{ marginLeft: "15px" }}>Normal Exam</h3>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton inputarray={nexam} />
        <PainScaleButton painscale={nexampainscale} />
        <Reset1 resetall={nexamreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Findings</h4>
      <div style={{ marginLeft: "30px" }}>
        <Findings
          fyesother={fyesother}
          ecchymosis1={ecchymosis1}
          deformity1={deformity1}
          edema1={edema1}
          redness1={redness1}
          effusion1={effusion1}
          erythema1={erythema1}
          swelling1={swelling1}
          fnoother={fnoother}
          ecchymosis={ecchymosis}
          deformity={deformity}
          edema={edema}
          redness={redness}
          effusion={effusion}
          erythema={erythema}
          swelling={swelling}
          fno={fno}
          fyes={fyes}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Tenderness</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={tenderness} />
        <Reset1 resetall={tendernessreset} />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "15px" }}>Classification</h5>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox inputarray1={tstatus} />
          <Others other={tstatusother} />
          <Reset1 resetall={tstatusreset} />
        </div>
        <h5 style={{ marginLeft: "15px" }}>Position</h5>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox inputarray1={tposition} />
          <Others other={tpositionother} />
          <Reset1 resetall={tpositionreset} />
        </div>
        <h5 style={{ marginLeft: "15px" }}>Aspect</h5>
        <div style={{ marginLeft: "25px", display: "flex" }}>
          <CheckBox inputarray1={taspect} />
          <Others other={taspectother} />
          <Reset1 resetall={taspectreset} />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>ROM</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={rom} />
        <NotPerformed
          notperform={notperform}
          exam1reset={exam1reset}
          examreset={examreset}
          reason={reason}
          other2={other2}
        />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "30px" }}>Values</h5>

        <div style={{ display: "flex", marginLeft: "35px" }}>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Flexion(150)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Extension(0)</h5>
            <input type="text" className="size" />
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "35px" }}>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Pronation(90)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Supination(90)</h5>
            <input type="text" className="size" />
          </div>
        </div>
        <h5 style={{ marginLeft: "25px" }}>Self Restricted</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton inputarray={romself} />
          <Reset1 resetall={romselfreset} />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Pain causing Motion</h5>
        <div style={{ marginLeft: "35px" }}>
          <CheckBox inputarray1={rompain} />
          <Reset1 resetall={rompainreset} />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>Pain with Resisted Extension</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={painre} />

        <Reset1 resetall={painrereset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Pain with Resisted Flexion</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={painrf} />
        <Reset1 resetall={painrfreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Valgus Stress Instability</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={suboptimal}
          suboptimal1={suboptimal1}
          suboptimalreset={suboptimalreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Varus Stress Instability</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={suboptimal01}
          suboptimal1={suboptimal11}
          suboptimalreset={suboptimalreset1}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Suboptimal Effort</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={suboptimaleffort}
          suboptimal1={suboptimaleffort1}
          suboptimalreset={suboptimaleffortreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Atrophy</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={atrophy}
          suboptimal1={atrophy1}
          suboptimalreset={atrophyreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Symptom Magnification</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={symptom}
          suboptimal1={symptom1}
          suboptimalreset={symptomreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Orthopedic Tests</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={orthopedic} />
        <NotPerformed
          examreset={examreset2}
          exam1reset={exam1reset2}
          notperform={notperform2}
          reason={reason2}
          other4={other4}
        />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "25px" }}>Tinel's test(over ulnar nerve)</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton inputarray={negativepositive01} />
          <NotPerformed
            exam1reset={exam1reset3}
            examreset={examreset3}
            notperform={notperform3}
            reason={reason3}
            other2={other5}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Strength</h5>
        <div style={{ marginLeft: "35px" }}>
          <Strength
            exam1reset7={exam1reset7}
            examreset7={examreset7}
            notperform7={notperform7}
            reason7={reason7}
            other11={other11}
            decreasedreset={decreasedreset}
            strength={strength}
            decreasedbutton={decreasedbutton}
            other9={other9}
          />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>Add Details</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={adddetails}
          suboptimal1={adddetails1}
          suboptimalreset={adddetailsreset}
        />
      </div>
    </div>
  );
}
export default Elbow;
