import React ,{useState ,useEffect} from "react";
import { useNavigate ,useParams } from "react-router-dom";
import axios from "axios";

function EditSpeciality(){
    let history = useNavigate();
    const {id}=useParams();
    const [students, setStudents] = useState({
        name: "",
        display_name: "",
        id:""
        
      });
    
    
   const { name,display_name } = students;
    const handleChange = (e) => {
      setStudents({ ...students, [e.target.name] : e.target.value });
    };

    const UpdateForm = async (e) => {
        e.preventDefault();
    
        await axios.put(`http://192.168.1.180:8080/api/speciality/${id}`, students).then((result) => {
          console.log(result);
          if ((result.data.status = "valid")) {
            history("/Doctor-Speciality");
          } else {
            alert("message");
          }
        });
      };
    //   useEffect(()=>{
    //     fetch(`http://192.168.1.180:8080/api/speciality/${id}` ,{
    //         // data:{id:id}
    //         method:'GET',
    //         headers:{
    //             'content-type':'application/Json'
    //         }
    //     }) .then (jsonresponse => jsonresponse.json()).then(jsonresponse=>get)
    //         setStudentList(result.data)
    //      })
    //     .catch(()=>{
    //         alert('Error In The code');
    //     })
    // })
  
    useEffect(()=>{
        loaduser();
    },[])
    const loaduser=async()=>{
        const result = await axios.get(`http://192.168.1.180:8080/api/speciality/${id}`)
        setStudents(result.data);
        console.log(result.data)
    }
    return(
        <form onSubmit={e => UpdateForm(e)}>
        <div className="row">
          <h1>Edit Speciality</h1>
          <div className="row">
          <div className="col-md-6 g-3 text-container">
            Name
            </div>
            <div className="col-md-4">
            <input type={"text"} name="name" value={name} onChange={(e)=>handleChange(e)} />
          </div>
          </div>
          <div className="row">
          <div className ="col-md-6 g-3 text-container" >
            DisplayName
            </div>
            <div className="col-md-4">
            <input type={"text"} name="display_name" value={display_name} onChange={(e)=>handleChange(e)}/>
          </div>
          </div>
        
        <div className="col-md-6 g-5 text-container">
        <input type={'submit'}  value='Update'/>
        </div>
        </div>
      </form>
    )
}
export default EditSpeciality;




