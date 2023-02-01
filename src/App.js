import React from "react";
import EditSpeciality from "./components/EditStudent";
import AddSpeciality from "./components/AddStudent";
import Datatable from "./components/Datatable";
// import ListSpeciality from "./components/ListStudent";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <main className="container">
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Doctor-Speciality" element={<Datatable/>} />
              <Route path="/add-Speciality" element={<AddSpeciality/>} />
              <Route path="/edit-Speciality/:id" element={<EditSpeciality/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </main>
      
    </div>
  );
}

export default App;
