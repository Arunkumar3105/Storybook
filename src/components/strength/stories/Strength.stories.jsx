import Strength from "../Strength";
export default{
    title:"Strength/StrengthButton",
    component:Strength
}
const decreasedbutton = [
    { value: "5/5", name: "decreased", classname: "scar" },
    { value: "Decreased", name: "decreased", classname: "scar" },
  ];
  const strength = [
    { value: "Biceps", classname:  "scar" },
    { value: "Triceps", classname: "scar" },
    { value: "Wrist Extension", classname: "exam" },
    { value: "Grip", classname: "scar" },
    { value: "Interossei", classname: "scar" },
    { value: "Triceps", classname: "scar" },
  ];

  const other9 = [{ classname: "csalllevel" }];
  const decreasedreset = [
    { value: "Reset", name: "Sidevalue", classname: "scarradio" },
  ];
  const other11 = [{ classname: "neuroreason" }];
  const reason7 = [
    { value: "surgery", name: "neuroreason", classname: "scar" },
    { value: "Complaint of pain", name: "neuroreason", classname: "exam1" },
    { value: "Non-cooperation", name: "neuroreason", classname: "exam1" },
    {
      value: "Not wish to perform",
      name: "neuroreason",
      classname: "exam1",
    },
    { value: "Brace", name: "neuroreason", classname: "scar" },
  ];
  const notperform7 = [
    { value: "Not-Performed", name: "neuroexam", classname: "exam" },
  ];
  const examreset7 = [{ name: "neuroreason" }];
  const exam1reset7 = [{ name: "neuroexam" }];
  export const StrengthButtons = () => (
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
  );