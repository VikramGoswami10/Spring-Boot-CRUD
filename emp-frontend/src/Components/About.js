import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <h1 className="text-center fw-bold">About This Project</h1>
      <p className="text-center text-muted">Learn more about the Employee Management System.</p>

      {/* Developer Section */}
      <div className="card shadow-lg p-4 mt-4">
        <h3 className="fw-bold">👨‍💻 Developed by Vikram Goswami</h3>
        <p>
          Hello! I am <strong>Vikram Goswami</strong>, a passionate software developer. 
          I designed and built this Employee Management System as a CRUD web application 
          to efficiently manage employee records.
        </p>
      </div>

      {/* Technologies Used */}
      <div className="card shadow-lg p-4 mt-4">
        <h3 className="fw-bold">🚀 Technologies Used</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Frontend:</strong> React.js, Bootstrap</li>
          <li className="list-group-item"><strong>Backend:</strong> Spring Boot, Java</li>
          <li className="list-group-item"><strong>Database:</strong> MySQL</li>
          <li className="list-group-item"><strong>API Communication:</strong> RESTful APIs</li>
        </ul>
      </div>

      {/* Purpose Section */}
      <div className="card shadow-lg p-4 mt-4">
        <h3 className="fw-bold">🎯 Purpose of This Project</h3>
        <p>
          This Employee Management System is designed to simplify employee record handling. 
          It allows you to <strong>add, view, update, and delete employees</strong> effortlessly. 
          The system ensures data consistency and provides a user-friendly interface for efficient management.
        </p>
      </div>
      <br/>
    </div>
  );
};

export default About;
