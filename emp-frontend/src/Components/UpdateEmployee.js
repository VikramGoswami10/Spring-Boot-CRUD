import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../Services/EmployeeServices";

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({ firstname: "", lastname: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    getEmployeeById(id)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, employee)
      .then(() => navigate("/employees"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <h2 className="text-center">Update Employee</h2>
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
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
