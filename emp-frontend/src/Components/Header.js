import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 bg-light border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <span className="fs-4 ms-2">Employee Management System</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/employees" className="nav-link">All Employees</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-employee" className="nav-link">Add Employee</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
