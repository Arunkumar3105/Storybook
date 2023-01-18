import React from "react"
import ScarVariation2 from "../../Scar1/ScarVariation2";
import RadioButton from "../../RadioButton/RadioButton";
import Reset1 from "../../Reset1/Reset1";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import Findings from "../../Findings/Findings";
import Others from "../../Others/Others";
import CheckBox from "../../CheckboxButton/CheckBox";
import YesNo from "../../YesNo/YesNo";
function RightHip({  Statusreset,
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
    Notperform1,
    Nexamreset,
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
    Symptom,
    Symptom1,
    Symptomreset,
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
Adddetails,
Adddetails1,
Adddetailsreset})
    {
    return(
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
      <h3>Findings</h3>
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
      <h3>Tenderness</h3>
      <div>
        <RadioButton InputArray={Tenderness} />
        <Reset1 Resetall={Tendernessreset} />
      </div>
      <div>
        <h4 style={{ marginLeft: "15px" }}>Classification</h4>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox InputArray1={Tstatus} />
          <Others other={TstatusOther} />
          <Reset1 Resetall={Tstatusreset} />
        </div>
        <h4 style={{ marginLeft: "15px" }}>Position</h4>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox InputArray1={Tposition} />
          <Others other={TpositionOther} />
          <Reset1 Resetall={Tpositionreset} />
        </div>
        <h4 style={{ marginLeft: "15px" }}>Aspect</h4>
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
          <h4 style={{ marginLeft: "25px" }}>Flexion(120)</h4>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h4 style={{ marginLeft: "25px" }}>Extension(30)</h4>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h4 style={{ marginLeft: "25px" }}>Abduction(45)</h4>
          <input type="text" className="size" />
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h4 style={{ marginLeft: "25px" }}>Adduction(35)</h4>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h4 style={{ marginLeft: "25px" }}>External Rotation(45)</h4>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h4 style={{ marginLeft: "25px" }}>Internal Rotation(45)</h4>
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
      <h2>Instability</h2>
      <YesNo Suboptimal={Suboptimal} Suboptimal1={Suboptimal1}  Suboptimalreset={ Suboptimalreset}/>
      <h2>Symptom Magnification</h2>
      <YesNo Suboptimal={Symptom} Suboptimal1={Symptom1} Suboptimalreset={Symptomreset} />
      </div>
      <h2>Orthopedic Tests</h2>
      <RadioButton InputArray={orthopedic} />
      <NotPerformed examreset={examreset2} exam1reset={exam1reset2} Notperform={Notperform2} Reason={Reason2} other2={other4} />

      <h3 style={{ marginLeft: "25px" }}>Faber Test</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Negativepositive01} />
        <NotPerformed exam1reset={exam1reset3} examreset={examreset3} Notperform={Notperform3} Reason={Reason3} other2={other5} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Trendelenburg Test</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Negativepositive02} />
        <NotPerformed exam1reset={exam1reset4} examreset={examreset4} Notperform={Notperform4} Reason={Reason4} other2={other6} />
      </div>
      <h2>Add Details</h2>
      <div style={{ marginLeft: "25px" }}>
        <YesNo Suboptimal={Adddetails} Suboptimal1={Adddetails1} Suboptimalreset={Adddetailsreset}/>
        
      </div>

      </div>
    )
}
export default RightHip;