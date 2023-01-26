import React from "react";
import NotPerformed from "../NotPerformed";
export default {
  title: "Notperformed/Notperformedbutton",
  component: NotPerformed,
};

const other2 = [{ name: "examreason" }];
const Reason = [
  { value: "surgery", name: "examreason", classname: "scar" },
  { value: "Complaint of pain", name: "examreason", classname: "exam1" },
  { value: "Non-cooperation", name: "examreason", classname: "exam1" },
  { value: "Not wish to perform", name: "examreason", classname: "exam1" },
  { value: "Brace", name: "examreason", classname: "scar" },
];
const Notperform = [{ value: "Not-Performed", name: "rom", classname: "exam" }];
const examreset = [{ name: "examreason" }];
const exam1reset = [{ name: "rom" }];
export const NotPerformedbutton = () => (
  <NotPerformed
    other2={other2}
    Reason={Reason}
    examreset={examreset}
    exam1reset={exam1reset}
    Notperform={Notperform}
  />
);
