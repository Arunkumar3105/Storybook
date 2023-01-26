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
          <RadioButton InputArray={romself} />
          <Reset1 Resetall={romselfreset} />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Pain causing Motion</h5>
        <div style={{ marginLeft: "35px" }}>
          <CheckBox InputArray1={rompain} />
          <Reset1 Resetall={rompainreset} />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>Pain with Resisted Extension</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={painre} />

        <Reset1 Resetall={painrereset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Pain with Resisted Flexion</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton InputArray={painrf} />
        <Reset1 Resetall={painrfreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Valgus Stress Instability</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={suboptimal}
          Suboptimal1={suboptimal1}
          Suboptimalreset={suboptimalreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Varus Stress Instability</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          Suboptimal={suboptimal01}
          Suboptimal1={suboptimal11}
          Suboptimalreset={suboptimalreset1}
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
          other4={other4}
        />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "25px" }}>Tinel's test(over ulnar nerve)</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton InputArray={negativepositive01} />
          <NotPerformed
            exam1reset={exam1reset3}
            examreset={examreset3}
            Notperform={notperform3}
            Reason={reason3}
            other2={other5}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Strength</h5>
        <div style={{ marginLeft: "35px" }}>
          <Strength
            exam1reset7={exam1reset7}
            examreset7={examreset7}
            Notperform7={notperform7}
            Reason7={reason7}
            other11={other11}
            Decreasedreset={decreasedreset}
            strength={strength}
            DecreasedButton={decreasedbutton}
            other9={other9}
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
export default Elbow;
