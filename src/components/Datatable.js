import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const Datatable = () => {
  const [search, setsearch] = useState([]);
  const [speciality, setspeciality] = useState([]);
  const [filterspeciality, setfilterspeciality] = useState([]);
  const getspeciality = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.180:8080/api/speciality"
      );
      setspeciality(response.data);
      setfilterspeciality(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
              setspeciality(result.data);
            });
        })
        .catch(() => {
          alert("Error In The code");
        });
    }
  };
  const i=1;
  const columns = [
    {
        name: "id",
        selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Display Name",
      selector: (row) => row.display_name,
    },
    {
      name: "Stats",
      selector: (row) => row.stats,
    },
    {
      name: "Action",
      cell: (row) => (
        <span>
          <Link className="btn btn-primary" to={`/edit-Speciality/${row.id}`}>
            Edit
          </Link>
          <button className="btn btn-danger" onClick={() => DeleteList(row.id)}>
            Delete
          </button>
        </span>
      ),
    },
  ];
  useEffect(() => {
    getspeciality();
  }, []);
  useEffect(() => {
    const result = speciality.filter((speciality) => {
      return speciality.name.tolowerCase().match(search.tolowerCase());
    });
    setfilterspeciality(result);
  }, [search]);
  return (
    <div>
      <DataTable
        title="SpecialityList"
        columns={columns}
        data={speciality}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type={"text"}
            placeholder="Search Here"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        }
      />
    </div>
    //  actions={<button className='btn btn-sm btn-info ' to='/Doctor-Speciality'>AddSpeciality</button>}
  );
};
export default Datatable;
