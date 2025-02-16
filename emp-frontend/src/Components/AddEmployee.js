import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../Services/EmployeeServices";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({ firstname: "", lastname: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee)
      .then(() => navigate("/employees"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <h2 className="text-center">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input type="text" className="form-control" name="firstname" value={employee.firstname} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control" name="lastname" value={employee.lastname} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={employee.email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default AddEmployee;
