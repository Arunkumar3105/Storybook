import React from "react";
import ScarVariation1 from "../../Scar/ScarVariation1";
import RadioButton from "../../RadioButton/RadioButton";
import CheckBox from "../../CheckboxButton/CheckBox";
import { Other } from "../../../button1/scarvariation1.stories";

import CsLevel from "../../CsLevel/CsLevel";

import Reset1 from "../../Reset1/Reset1";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import YesNo from "../../YesNo/YesNo";
import NegativePositive from "../../NegativePositive/NegativePositive";
import Decreased from "../../Decreased/Decreased";
import OnePlus from "../../Oneplus/OnePlus";
import Zero from "../../Zero/Zero";
function CervicalSpine({
  aspect,
  Appearance,
  Status,
  Side,
  Scar,
  AppearanceOther,
  StatusOther,
  aspectOther,
  Exam,
  Nexam,
  Alignment,
  Tenderness,
  Tstatus,
  TstatusOther,
  level,
  other,
  Tposition,
  TpositionOther,
  Tside,
  Spasm,
  Sstatus,
  SstatusOther,
  level1,
  other1,
  Sposition,
  SpositionOther,
  Sside,
  Rom,
  RomSelf,
  Rompain,

  Nexamreset,
  Alignmentreset,
  Tendernessreset,
  Tstatusreset,
  Tpositionreset,
  Tsidereset,
  Spasmreset,
  Sstatusreset,
  Spositionreset,
  Ssidereset,
  Romreset,
  Romselfreset,
  Rompainreset,
  Scarreset,
  Appearancereset,
  Statusreset,
  Sidereset,
  aspectreset,
  examreset,
  other2,
  Reason,
  exam1reset,
  Suboptimal,
  Suboptimal1,
  Suboptimalreset,
  Atrophyreset,
  Atrophy,
  Atrophy1,
  Symptommagnification,
  Symptommagnification1,
  Symptomreset,
  other3,
  Reason1,
  examreset1,
  exam1reset1,
  Notperform,
  Notperform1,
  orthopedic,
  other4,
  Reason2,
  examreset2,
  exam1reset2,
  Notperform2,
  Negativepositive,
  Negativepositive1,
  other5,
  Reason3,
  Notperform3,
  examreset3,
  exam1reset3,
  other6,
  Reason4,
  Notperform4,
  examreset4,
  exam1reset4,
  Negativepositive11,
  Negativepositive01,
  other7,
  Reason5,
  Notperform5,
  examreset5,
  exam1reset5,
  Negativepositive12,
  Negativepositive02,
  Neurological,
  Notperform6,
  exam1reset6,
  examreset6,
  Reason6,
  other8,
  Decreasedreset,
  other9,
  Sidesv,
  Sidesreset,
  Sidevalues,
  strength,
  DecreasedButton,
  // Decreasedreset1,
  // other10,
  // Sidesv1,
  // Sidesreset1,
  // Sidevalues1,
  // strength1,
  // DecreasedButton1,
  exam1reset7,
  examreset7,
  Notperform7,
  Reason7,
  other11,

  sensation,
  exam1reset8,
  examreset8,
  Notperform8,
  Reason8,
  other12,
  Reflexes,
  resetreflex,
  Adddetails,
  resetadd,
  Reflexside,
  ReflexSreset,
  reflexSvalue,
  Reflex1,
  Reflex,
  Reflexonevalue,
  Zeroreset,
  Sidesv1,
  Sidereset1,
  Sidevalues1,
}) {
  return (
    <div>
      <ScarVariation1
        aspect={aspect}
        Appearance={Appearance}
        Status={Status}
        Side={Side}
        Scar={Scar}
        AppearanceOther={AppearanceOther}
        StatusOther={StatusOther}
        aspectOther={aspectOther}
        Scarreset={Scarreset}
        Appearancereset={Appearancereset}
        Statusreset={Statusreset}
        Sidereset={Sidereset}
        aspectreset={aspectreset}
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
      <h2 style={{ marginLeft: "15px" }}>Alignment</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Alignment} />
        <Reset1 Resetall={Alignmentreset} />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Tenderness</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Tenderness} />
        <Reset1 Resetall={Tendernessreset} />
      </div>
      <h3 style={{ marginLeft: "30px" }}>Status</h3>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox InputArray1={Tstatus} />
        <Other other={TstatusOther} />
        <Reset1 Resetall={Tstatusreset} />
      </div>
      <h3 style={{ marginLeft: "30px" }}>Level</h3>
      <div style={{ marginLeft: "35px" }}>
        <CsLevel level={level} other={other} />
      </div>
      <h3 style={{ marginLeft: "30px" }}>Position</h3>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox InputArray1={Tposition} />
        <Other other={TpositionOther} />
        <Reset1 Resetall={Tpositionreset} />
      </div>
      <h3 style={{ marginLeft: "30px" }}>Side</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Tside} />
        <Reset1 Resetall={Tsidereset} />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Spasm</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Spasm} />
        <Reset1 Resetall={Spasmreset} />
      </div>
      <h3 style={{ marginLeft: "30px" }}>Status</h3>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox InputArray1={Sstatus} />
        <Other other={SstatusOther} />
        <Reset1 Resetall={Sstatusreset} />
      </div>
      <h3 style={{ marginLeft: "30px" }}>Level</h3>
      <div style={{ marginLeft: "35px" }}>
        <CsLevel level={level1} other={other1} />
      </div>
      <h3 style={{ marginLeft: "30px" }}>Position</h3>
      <div style={{ marginLeft: "35px", display: "flex" }}>
        <CheckBox InputArray1={Sposition} />
        <Other other={SpositionOther} />
        <Reset1 Resetall={Spositionreset} />
      </div>
      <h3 style={{ marginLeft: "30px" }}>Side</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={Sside} />
        <Reset1 Resetall={Ssidereset} />
      </div>
      <h2 style={{ marginLeft: "15px" }}>ROM</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Rom} />
        <NotPerformed
          examreset={examreset}
          other2={other2}
          Reason={Reason}
          exam1reset={exam1reset}
          Notperform={Notperform}
        />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Values</h2>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Flexion(45)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Extension(45)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Right-Rotation(60)</h3>
          <input type="text" className="size" />
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Left-Rotation(60)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Right-Bending(80)</h3>
          <input type="text" className="size" />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h3 style={{ marginLeft: "25px" }}>Left-Bending(80)</h3>
          <input type="text" className="size" />
        </div>
      </div>
      <h3 style={{ marginLeft: "25px" }}>Self-Restricted</h3>
      <div style={{ marginLeft: "35px" }}>
        <RadioButton InputArray={RomSelf} />
        <Reset1 Resetall={Romselfreset} />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Pain causing motion</h3>
      <div style={{ marginLeft: "35px" }}>
        <CheckBox InputArray1={Rompain} />
        <Reset1 Resetall={Rompainreset} />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Suboptimal Effort</h2>
      <div style={{ marginLeft: "25px" }}>
        <YesNo
          Suboptimal={Suboptimal}
          Suboptimal1={Suboptimal1}
          Suboptimalreset={Suboptimalreset}
        />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Atrophy</h2>
      <div style={{ marginLeft: "25px" }}>
        <YesNo
          Suboptimal={Atrophy}
          Suboptimal1={Atrophy1}
          Suboptimalreset={Atrophyreset}
        />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Symptom Magnification</h2>
      <div style={{ marginLeft: "25px" }}>
        <YesNo
          Suboptimal={Symptommagnification}
          Suboptimal1={Symptommagnification1}
          Suboptimalreset={Symptomreset}
        />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Orthopedic Test</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={orthopedic} />
        <NotPerformed
          other2={other4}
          Reason={Reason2}
          examreset={examreset2}
          exam1reset={exam1reset2}
          Notperform={Notperform2}
        />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Hoffman</h3>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          Negativepositive={Negativepositive}
          Negativepositive1={Negativepositive1}
        />
        <NotPerformed
          other2={other5}
          Reason={Reason3}
          Notperform={Notperform3}
          examreset={examreset3}
          exam1reset={exam1reset3}
        />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Spurling</h3>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          Negativepositive={Negativepositive01}
          Negativepositive1={Negativepositive11}
        />
        <NotPerformed
          other2={other6}
          Reason={Reason4}
          Notperform={Notperform4}
          exam1reset={exam1reset4}
          examreset={examreset4}
        />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Compression Test</h3>
      <div style={{ marginLeft: "35px" }}>
        <NegativePositive
          Negativepositive={Negativepositive02}
          Negativepositive1={Negativepositive12}
        />
        <NotPerformed
          other2={other7}
          Reason={Reason5}
          Notperform={Notperform5}
          exam1reset={exam1reset5}
          examreset={examreset5}
        />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Neurological Examination</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Neurological} />
        <NotPerformed
          other2={other8}
          Reason={Reason6}
          Notperform={Notperform6}
          examreset={examreset6}
          exam1reset={exam1reset6}
        />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Muscle Strength</h3>
      <div style={{ display: "flex", marginTop: "20px", marginLeft: "40px" }}>
        <Decreased
          Decreasedreset={Decreasedreset}
          other9={other9}
          Sidesv={Sidesv}
          Sidereset={Sidesreset}
          Sidevalues={Sidevalues}
          strength={strength}
          DecreasedButton={DecreasedButton}
          exam1reset7={exam1reset7}
          examreset7={examreset7}
          Notperform7={Notperform7}
          Reason7={Reason7}
          other11={other11}
        />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Sensation</h3>
      <div style={{ marginLeft: "40px" }}>
        <RadioButton InputArray={sensation} />
        <NotPerformed
          other2={other12}
          Reason={Reason8}
          Notperform={Notperform8}
          examreset={examreset8}
          exam1reset={exam1reset8}
        />
      </div>
      <h3 style={{ marginLeft: "25px" }}>Reflexes</h3>
      <div style={{ marginLeft: "40px", display: "flex" }}>
        <OnePlus
          Reflexonevalue={Reflexonevalue}
          Reflex={Reflex}
          Sidesv={Sidesv1}
          Sidereset={Sidereset1}
          Sidevalues={Sidevalues1}
        />
        <Zero
          Reflexside={Reflexside}
          ReflexSreset={ReflexSreset}
          reflexSvalue={reflexSvalue}
          Reflex={Reflex1}
          Zeroreset={Zeroreset}
        />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Add Details</h2>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton InputArray={Adddetails} />
        <Reset1 Resetall={resetadd} />
      </div>
    </div>
  );
}
export default CervicalSpine;
