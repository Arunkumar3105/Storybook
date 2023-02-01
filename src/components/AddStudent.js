import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddSpeciality() {
  let history = useNavigate();
  const [students, setStudents] = useState({
    name: "",
    display_name: "",
  });
 const { name,display_name} = students;
  const handleChange = (e) => {
    setStudents({ ...students, [e.target.name] : e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();

    await axios.post("http://192.168.1.180:8080/api/speciality", students).then((result) => {
      console.log(result);
      if ((result.data.status = "valid")) {
        history("/Doctor-Speciality");
      } else {
        alert("message");
      }
    });
  };
  return (
    <form onSubmit={e => submitForm(e)}>
      <div className="row">
        <h1>Add Speciality</h1>
        <div className="row">
        <div className="col-md-6  text-container ">
          Name
          </div>
          <div className="col-md-4">
          <input type={"text"} name="name" value={name} onChange={(e)=>handleChange(e)} />
        </div>
        </div>
        <div className="row" style={{marginTop:"20px"}}>
        <div className="col-md-6 g-3 text-container" >
          DisplayName
          </div>
          <div className="col-md-4">
          <input type={"text"} name="display_name" value={display_name} onChange={(e)=>handleChange(e)}/>
        </div>
        </div>
        
      </div>
      <div className="col-md-10 g-5 text-container" style={{marginTop:"10px"}}>
      <input type={'submit'}  value='submit'/>
      </div>
    </form>
  );
}
export default AddSpeciality;
