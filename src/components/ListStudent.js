import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ListSpeciality() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.180:8080/api/speciality")
      .then((response) => setStudents(response.data));
  }, []);
  //   const DeleteList = (id) => {
  //     fetch(`http://192.168.1.180:8080/api/speciality/${id}`, {
  //       method: "DELETE",
  //     }).then((respone) => {
  //       console.warn(respone);
  //       setStudentList();
  //     });
  //   };
  const DeleteList = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .delete(`http://192.168.1.180:8080/api/speciality/${id}`, {
          data: { id: id },
        })
        .then(() => {
          axios
            .get("http://192.168.1.180:8080/api/speciality")
            .then((result) => {
              setStudents(result.data);
            });
        })
        .catch(() => {
          alert("Error In The code");
        });
    }
  };
  return (
    <div>
      <h1>Doctor Speciality</h1>
      <div>
        <table>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>DisplayName</th>
              <th>Stats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {students.map((value, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{value.name}</td>
                <td>{value.display_name}</td>
                <td>{value.stats}</td>
                <td>
                  <Link
                    className="btn btn-danger"
                    to="/Doctor-Speciality"
                    onClick={() => DeleteList(value.id)}
                  >
                    Delete
                  </Link>
                  <Link
                    className="btn btn-success"
                    to={`/edit-Speciality/${value.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListSpeciality;
