import React from "react"
import ScarVariation2 from "../../Scar1/ScarVariation2";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import RadioButton from "../../RadioButton/RadioButton";
import Reset1 from "../../Reset1/Reset1";
import Findings from "../../Findings/Findings";
import CheckBox from "../../CheckboxButton/CheckBox";
import Others from "../../Others/Others";
import YesNo from "../../YesNo/YesNo";
import Decreased from "../../Decreased/Decreased";
import Strength from "../../strength/Strength";


function RightWrist({ Scar, Scarreset, aspect, aspectOther, aspectreset, Appearance, Appearancereset, AppearanceOther, Status, StatusOther, Statusreset, Exam, Nexam, other3, Reason1, exam1reset1, examreset1, Notperform1, Nexamreset, FyesOther,
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
  Tposition,
  TpositionOther,
  Taspect,
  TaspectOther,
  Taspectreset,
  Rom,
  exam1reset, examreset,
  other2,
  Notperform,
  Reason,
  RomSelf,
  Rompain,
  Rompainreset,
  Romselfreset,
  Symptom,
  Symptom1,
  Symptomreset,
  Suboptimal,
  Suboptimal01,
  Suboptimal1,
  Suboptimal11,
  Suboptimalreset,
  Suboptimalreset1,
  orthopedic,
  other4,
  Notperform2,
  Reason2,
  exam1reset2,
  examreset2,
  Notperform3,
  exam1reset3,
  examreset3,
  Reason3,
  other5,
  Negativepositive01,
  Negativepositive02,
  examreset4,
  exam1reset4,
  Reason4,
  other6,
  Notperform4,
  Negativepositive03,
  examreset5,
  exam1reset5,
  Reason5,
  other7,
  Notperform5,
  Negativepositive04,
  examreset6,
  exam1reset6,
  Reason6,
  other8,
  Notperform6,
  Negativepositive05,
  examreset7,
  exam1reset7,
  Reason7,
  other9,
  Notperform7,
  DecreasedButton,
  strength,
  other10,
  Decreasedreset,
  other11,
  Reason8,
  Notperform8,
  examreset8,
  exam1reset8,
  DecreasedButton1,
  strength1,
  other12,
  Decreasedreset1,
  other13,
  Reason9,
  Notperform9,
  examreset9,
  exam1reset9,
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
      <h2 style={{ marginLeft: "15px" }}>Values</h2>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Dorsiflexion(70)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Volar Flexion(80)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Ulnar-Deviation(30)</h3>
          <input type="text" className="size" />
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Radial Deviation(20)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Pronation(90)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Supination(90)</h3>
          <input type="text" className="size" />
        </div>
      </div>
      <h3 style={{ marginLeft: "25px" }}>Self Restricted</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={RomSelf} />
        <Reset1 Resetall={Romselfreset} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Pain causing Motion</h3>
      <div style={{ marginLeft: "35px" }}>
        <CheckBox InputArray1={Rompain} />
        <Reset1 Resetall={Rompainreset} />

      </div>
      <h2>Instability</h2>
      <YesNo Suboptimal={Suboptimal} Suboptimal1={Suboptimal1} Suboptimalreset={Suboptimalreset} />
      <h2>Poor Effort</h2>
      <YesNo Suboptimal={Suboptimal01} Suboptimal1={Suboptimal11} Suboptimalreset={Suboptimalreset1} />
      <h2>Symptom Magnification</h2>
      <YesNo Suboptimal={Symptom} Suboptimal1={Symptom1} Suboptimalreset={Symptomreset} />
      <h2>Orthopedic Tests</h2>
      <RadioButton InputArray={orthopedic} />
      <NotPerformed examreset={examreset2} exam1reset={exam1reset2} Notperform={Notperform2} Reason={Reason2} other2={other4} />
      <h3 style={{ marginLeft: "25px" }}>Tinel's test(over ulnar nerve)</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Negativepositive01} />
        <NotPerformed exam1reset={exam1reset3} examreset={examreset3} Notperform={Notperform3} Reason={Reason3} other2={other5} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Phalen's Test</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Negativepositive02} />
        <NotPerformed exam1reset={exam1reset4} examreset={examreset4} Notperform={Notperform4} Reason={Reason4} other2={other6} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Finkelstein Test</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Negativepositive03} />
        <NotPerformed exam1reset={exam1reset5} examreset={examreset5} Notperform={Notperform5} Reason={Reason5} other2={other7} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Watson Test</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Negativepositive04} />
        <NotPerformed exam1reset={exam1reset6} examreset={examreset6} Notperform={Notperform6} Reason={Reason6} other2={other8} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Shuck Test</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Negativepositive05} />
        <NotPerformed exam1reset={exam1reset7} examreset={examreset7} Notperform={Notperform7} Reason={Reason7} other2={other9} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Strength</h3>
      <div style={{ marginLeft: "35px" }}>
        <Strength exam1reset7={exam1reset8} examreset7={examreset8} Notperform7={Notperform8} Reason7={Reason8} other11={other11} Decreasedreset={Decreasedreset} strength={strength} DecreasedButton={DecreasedButton} other9={other10} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Sensation</h3>
      <div style={{ marginLeft: "35px" }}>
        <Strength exam1reset7={exam1reset9} examreset7={examreset9} Notperform7={Notperform9} Reason7={Reason9} other11={other13} Decreasedreset={Decreasedreset1} strength={strength1} DecreasedButton={DecreasedButton1} other9={other12} />
      </div>
      <h2>Add Details</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Adddetails} />
        <Reset1 Resetall={resetadd} />
      </div>
    </div>
  )
}
export default RightWrist;