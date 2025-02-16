import axios from "axios";

const baseUrl = "http://localhost:8080/api/employees"

// Fetch all employees
export const listEmployees = () =>{
    return axios.get(baseUrl);
}

// Add a new employee
export const addEmployee = (employee) => axios.post(baseUrl, employee);

// Get employee by ID
export const getEmployeeById = (id) => axios.get(`${baseUrl}/${id}`);

// Update employee
export const updateEmployee = (id, employee) => axios.put(`${baseUrl}/${id}`, employee);

// Delete employee
export const deleteEmployee = (id) => axios.delete(`${baseUrl}/${id}`);
