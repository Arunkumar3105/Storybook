import React from "react";
import NotPerformed from "../NotPerformed";
export default {
  title: "Notperformed/Notperformedbutton",
  component: NotPerformed,
};

const other2 = [{ name: "examreason" }];
const reason = [
  { value: "surgery", name: "examreason", classname: "scar" },
  { value: "Complaint of pain", name: "examreason", classname: "exam1" },
  { value: "Non-cooperation", name: "examreason", classname: "exam1" },
  { value: "Not wish to perform", name: "examreason", classname: "exam1" },
  { value: "Brace", name: "examreason", classname: "scar" },
];
const notperform = [{ value: "Not-Performed", name: "rom", classname: "exam" }];
const examreset = [{ name: "examreason" }];
const exam1reset = [{ name: "rom" }];
export const NotPerformedbutton = () => (
  <NotPerformed
    other2={other2}
    reason={reason}
    examreset={examreset}
    exam1reset={exam1reset}
    notperform={notperform}
  />
);
