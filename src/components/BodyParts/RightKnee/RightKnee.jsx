import React, { useState } from "react"
import RadioButton from "../../RadioButton/RadioButton"
import CheckBox from "../../CheckboxButton/CheckBox"
import Others from "../../Others/Others"
import YesNo from "../../YesNo/YesNo"
import NotPerformed from "../../Not-perfomed/NotPerformed"
import ScarVariation2 from "../../Scar1/ScarVariation2"
import Reset1 from "../../Reset1/Reset1"
import Findings from "../../Findings/Findings"
function RightKnee({ Appearancereset,
    Statusreset,
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
    Alignmentreset,
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
    Negativepositive06,
    examreset10,
    exam1reset10,
    Reason10,
    other14,
    Notperform10,
    Negativepositive07,
    examreset11,
    exam1reset11,
    Reason11,
    other15,
    Notperform11,
    Strengtht,
    Strengtht1,
    Strengthtreset,
    other11,
    examreset8,
    exam1reset8,
    Notperform8,
    Reason8,
    Adddetails,
    Adddetails1,
    Adddetailsreset }) {
    const [varus, setvarus] = useState(false)
    const [valgus, setvalgus] = useState(false)
    const[ostrength,setostrength]=useState(false)
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
                    <h4 style={{ marginLeft: "25px" }}>Flexion(140)</h4>
                    <input type="text" className="size" />
                </div>
                <div style={{ marginRight: "20px" }}>
                    <h4 style={{ marginLeft: "25px" }}>Extension(0)</h4>
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
            <h2>Alignment</h2>
            <span className="scar">
                <label>
                    <input type="radio" name="alignment" id="status" />
                    <span>Neutral</span></label>
            </span>
            <span className="exam1">
                <label>
                    <input type="radio" name="alignment" onClick={() => setvarus(true)} id="status" />
                    <span>Varus Alignment</span></label>
            </span>
            {varus ? <input type="text" name="varusalignment" className="size" /> : null}
            <span className="exam1">
                <label>
                    <input type="radio" name="alignment" onClick={() => setvalgus(true)} id="status" />
                    <span>valgus Alignment</span></label>
            </span>
            {valgus ? <input type="text" name="valgusalignment" className="size" /> : null}
            <Reset1 Resetall={Alignmentreset} />
            <h2>Instability</h2>
            <YesNo Suboptimal={Suboptimal} Suboptimal1={Suboptimal1} Suboptimalreset={Suboptimalreset} />
            <h2>Symptom Magnification</h2>
            <YesNo Suboptimal={Symptom} Suboptimal1={Symptom1} Suboptimalreset={Symptomreset} />
            <h2>Orthopedic Tests</h2>
            <RadioButton InputArray={orthopedic} />
            <NotPerformed examreset={examreset2} exam1reset={exam1reset2} Notperform={Notperform2} Reason={Reason2} other2={other4} />
            <h3 style={{ marginLeft: "25px" }}>Lachman Test</h3>
            <div style={{ marginLeft: "35px" }}>
                <RadioButton InputArray={Negativepositive01} />
                <NotPerformed exam1reset={exam1reset3} examreset={examreset3} Notperform={Notperform3} Reason={Reason3} other2={other5} />
            </div>
            <h3 style={{ marginLeft: "25px" }}>Anterior Drawer Test</h3>
            <div style={{ marginLeft: "35px" }}>
                <RadioButton InputArray={Negativepositive02} />
                <NotPerformed exam1reset={exam1reset4} examreset={examreset4} Notperform={Notperform4} Reason={Reason4} other2={other6} />
            </div>
            <h3 style={{ marginLeft: "25px" }}>Opening to Valgus/Varus Test</h3>
            <div style={{ marginLeft: "35px" }}>
                <RadioButton InputArray={Negativepositive03} />
                <NotPerformed exam1reset={exam1reset5} examreset={examreset5} Notperform={Notperform5} Reason={Reason5} other2={other7} />
            </div>
            <h3 style={{ marginLeft: "25px" }}>Patellar Apprehension Test</h3>
            <div style={{ marginLeft: "35px" }}>
                <RadioButton InputArray={Negativepositive04} />
                <NotPerformed exam1reset={exam1reset6} examreset={examreset6} Notperform={Notperform6} Reason={Reason6} other2={other8} />
            </div>
            <h3 style={{ marginLeft: "25px" }}>Patellar Grind Test</h3>
            <div style={{ marginLeft: "35px" }}>
                <RadioButton InputArray={Negativepositive05} />
                <NotPerformed exam1reset={exam1reset7} examreset={examreset7} Notperform={Notperform7} Reason={Reason7} other2={other9} />
            </div>
            <h3 style={{ marginLeft: "25px" }}>J-sign Test</h3>
            <div style={{ marginLeft: "35px" }}>
                <RadioButton InputArray={Negativepositive06} />
                <NotPerformed exam1reset={exam1reset10} examreset={examreset10} Notperform={Notperform10} Reason={Reason10} other2={other14} />
            </div>
            <h3 style={{ marginLeft: "25px" }}>McMurry Test</h3>
            <div style={{ marginLeft: "35px" }}>
                <RadioButton InputArray={Negativepositive07} />
                <NotPerformed exam1reset={exam1reset11} examreset={examreset11} Notperform={Notperform11} Reason={Reason11} other2={other15} />
            </div>
            <h3 style={{ marginLeft: "25px" }}>Strength</h3>
            <div style={{ marginLeft: "35px" }}>
            <span className="scar">
                <label>
                    <input type="radio" name="strength"  id="status" />
                    <span>5/5</span></label>
            </span>
            <span className="scar">
                <label>
                    <input type="radio" name="strength" onClick={() => setostrength(true)} id="status" />
                    <span>Decreased</span></label>
            </span>
           {ostrength? <input type="text" name="decreased" className="size"/>:null}

                <NotPerformed exam1reset={exam1reset8} examreset={examreset8} Notperform={Notperform8} Reason={Reason8} other2={other8} />

            </div>
            <h2>Add Details</h2>
      <div style={{ marginLeft: "25px" }}>
        <YesNo Suboptimal={Adddetails} Suboptimal1={Adddetails1} Suboptimalreset={Adddetailsreset}/>
        
      </div>

        </div>
    )
}
export default RightKnee