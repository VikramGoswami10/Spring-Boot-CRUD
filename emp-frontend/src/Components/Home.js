import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      {/* Welcome Section */}
      <h1 className="display-4 fw-bold">Welcome to Employee Management System</h1>
      <p className="lead text-muted">
        Efficiently manage your company's employees with our easy-to-use system.
      </p>

      {/* Quick Navigation Cards */}
      <div className="row mt-4">
        {/* View Employees */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">View Employees</h5>
              <p className="card-text">Check the list of all employees in your organization.</p>
              <Link to="/employees" className="btn btn-primary">View Employees</Link>
            </div>
          </div>
        </div>

        {/* Add Employee */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Add Employee</h5>
              <p className="card-text">Register a new employee with just a few clicks.</p>
              <Link to="/add-employee" className="btn btn-success">Add Employee</Link>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">About the Application</h5>
              <p className="card-text">Learn more about how our system works.</p>
              <Link to="/about" className="btn btn-info">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-5 text-muted">
        <p>© 2024 Employee Management System | Designed for Efficiency</p>
      </footer>
    </div>
  );
};

export default Home;
