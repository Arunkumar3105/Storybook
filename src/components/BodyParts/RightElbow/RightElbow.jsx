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
function RightElbow({
  Statusreset,
  Appearancereset,
  StatusOther,
  aspectreset,
  Scarreset,
  aspectOther,
  AppearanceOther,
  Scar,
  Status,
  Appearance,
  aspect,
  Exam,
  Nexam,
  examreset1,
  other3,
  Reason1,
  exam1reset1,
  Notperform1,Nexamreset,
  FyesOther,
  Ecchymosis1,
  Deformity1,
  Edema1,
  Redness1,
  Effusion1,
  Erythema1,
  Swelling1,
  FNoother,
  Ecchymosis,
  Deformity,
  Edema,
  Redness,
  Effusion,
  Erythema,
  Fno,
  Fyes,
  Swelling,
  Tenderness,
  Tendernessreset,
  Tstatus,
  TstatusOther,
  Tstatusreset,
  Tpositionreset,
  TpositionOther,
  Tposition,
  Taspect,
  Taspectreset,
  TaspectOther,
  Rom,
  Notperform,
  exam1reset,
  examreset,
  Reason,
  other2,
  RomSelf,
  Rompain,
  Romselfreset,
  Rompainreset,
  Suboptimalreset,
  Suboptimal1,
  Suboptimal,
  PainRE,
  PainREreset,
  PainRF,
  PainRFreset,
  Suboptimal01,
  Suboptimal11,
  Suboptimalreset1,
  Symptom,
  Symptom1,
  Symptomreset,
  exam1reset2,
  examreset2,
  Notperform2,
  Reason2,
  other4,
  orthopedic,

  Negativepositive01,
  exam1reset3,
  examreset3,
  Notperform3,
  Reason3,other5,
  exam1reset7,
  examreset7,
  Notperform7,
  Reason7,
  other11,
  Decreasedreset,
  other9,
  strength,
  DecreasedButton,
  Adddetails,
  resetadd


}) {
  return (
    <div>
      <ScarVariation2
        Scar={Scar}
        Scarreset={Scarreset}
        aspect={aspect}
        aspectOther={aspectOther}
        aspectreset={aspectreset}
        Appearance={Appearance}
        AppearanceOther={AppearanceOther}
        Appearancereset={Appearancereset}
        Status={Status}
        StatusOther={StatusOther}
        Statusreset={Statusreset}
      />
      <h2>Examination</h2>
      <RadioButton InputArray={Exam} />
      <NotPerformed
        examreset={examreset1}
        other2={other3}
        Reason={Reason1}
        exam1reset={exam1reset1}
        Notperform={Notperform1}
      />

      <h2 style={{ marginLeft: "15px" }}>Normal Exam</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Nexam} />
        <Reset1 Resetall={Nexamreset} />
      </div>
      <h2>Findings</h2>
      <Findings
        FyesOther={FyesOther}
        Ecchymosis1={Ecchymosis1}
        Deformity1={Deformity1}
        Edema1={Edema1}
        Redness1={Redness1}
        Effusion1={Effusion1}
        Erythema1={Erythema1}
        Swelling1={Swelling1}
        FNoother={FNoother}
        Ecchymosis={Ecchymosis}
        Deformity={Deformity}
        Edema={Edema}
        Redness={Redness}
        Effusion={Effusion}
        Erythema={Erythema}
        Swelling={Swelling}
        Fno={Fno}
        Fyes={Fyes}
      />
      <h2>Tenderness</h2>
      <div>
        <RadioButton InputArray={Tenderness} />
        <Reset1 Resetall={Tendernessreset} />
      </div>
      <div>
        <h3 style={{ marginLeft: "15px" }}>Classification</h3>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox InputArray1={Tstatus} />
          <Others other={TstatusOther} />
          <Reset1 Resetall={Tstatusreset} />
        </div>
        <h3 style={{ marginLeft: "15px" }}>Position</h3>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox InputArray1={Tposition} />
          <Others other={TpositionOther} />
          <Reset1 Resetall={Tpositionreset} />
        </div>
        <h3 style={{ marginLeft: "15px" }}>Aspect</h3>
        <div style={{ marginLeft: "25px", display: "flex" }}>
          <CheckBox InputArray1={Taspect} />
          <Others other={TaspectOther} />
          <Reset1 Resetall={Taspectreset} />
        </div>
      </div>
      <h2>ROM</h2>
      <div>
        <RadioButton InputArray={Rom} />
        <NotPerformed
          Notperform={Notperform}
          exam1reset={exam1reset}
          examreset={examreset}
          Reason={Reason}
          other2={other2}
        />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Values</h3>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Flexion(150)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Extension(0)</h3>
          <input type="text" className="size" />
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Pronation(90)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Supination(90)</h3>
          <input type="text" className="size" />
        </div>
      </div>
      <h3 style={{marginLeft:"25px"}}>Self Restricted</h3>
      <div style={{marginLeft:"35px"}}>
      <RadioButton InputArray={RomSelf}/>
      <Reset1 Resetall={Romselfreset}/>
      </div>
      <h3 style={{marginLeft:"25px"}}>Pain causing Motion</h3>
      <div style={{marginLeft:"35px"}}>
      <CheckBox InputArray1={Rompain}/>
      <Reset1 Resetall={Rompainreset}/>



      </div>
      <h2>Pain with Resisted Extension</h2>
      <RadioButton InputArray={PainRE} />
      <Reset1 Resetall={PainREreset}/>
      <h2>Pain with Resisted Flexion</h2>
      <RadioButton InputArray={PainRF}/>
      <Reset1 Resetall={PainRFreset}/>
      <h2>Valgus Stress Instability</h2>
      <YesNo Suboptimal={Suboptimal} Suboptimal1={Suboptimal1}  Suboptimalreset={ Suboptimalreset}/>
      <h2>Varus Stress Instability</h2>
      <YesNo Suboptimal={Suboptimal01} Suboptimal1={Suboptimal11} Suboptimalreset={Suboptimalreset1}  />
      <h2>Symptom Magnification</h2>
      <YesNo Suboptimal={Symptom} Suboptimal1={Symptom1} Suboptimalreset={Symptomreset} />
      <h2>Orthopedic Tests</h2>
      <RadioButton InputArray={orthopedic}/>
      <NotPerformed examreset={examreset2} exam1reset={exam1reset2} Notperform={Notperform2} Reason={Reason2} other4={other4}/>
<h3 style={{marginLeft:"25px"}}>Tinel's test(over ulnar nerve)</h3>
<div style={{marginLeft:"35px"}}>
<RadioButton InputArray={ Negativepositive01}/>
<NotPerformed  exam1reset={ exam1reset3} examreset={examreset3} Notperform={Notperform3} Reason={Reason3} other2={other5}/>
</div>
<h3 style={{marginLeft:"25px"}}>Strength</h3>
<div style={{marginLeft:"35px"}}>
<Strength  exam1reset7={exam1reset7} examreset7={examreset7} Notperform7={Notperform7} Reason7={Reason7} other11={other11} Decreasedreset={Decreasedreset} strength={strength} DecreasedButton={DecreasedButton} other9={other9}/>
</div>
<h2>Add Details</h2>
<div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Adddetails} />
        <Reset1 Resetall={resetadd} />
      </div>


    </div>
  );
}
export default RightElbow;
