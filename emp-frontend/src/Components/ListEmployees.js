import React, { useEffect, useState } from "react";
import { listEmployees, deleteEmployee } from "../Services/EmployeeServices";
import { useNavigate } from "react-router-dom";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

      // const dummydata = [
    //     {
    //         "id": 1,
    //         "firstname":"vikram",
    //         "lastname":"goswami",
    //         "email":"vikram@gmail.com"
    //     },
    //     {
    //         "id": 2,
    //         "firstname":"vaishnavi",
    //         "lastname":"goswami",
    //         "email":"vaishnavi@gmail.com"
    //     }
    // ]
    
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    deleteEmployee(id)
      .then(() => {
        fetchEmployees(); // Refresh list after delete
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center">List of Employees</h1>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/add-employee")}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-warning mx-2" onClick={() => navigate(`/update-employee/${employee.id}`)}>
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployees;
