import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import EmployeeList from "./Components/ListEmployees";
// import AddEmployee from "./Pages/AddEmployee";
// import FAQs from "./Pages/FAQs";
// import About from "./Pages/About";
import './App.css';
import ListEmployees from "./Components/ListEmployees";
import AddEmployee from "./Components/AddEmployee";
import UpdateEmployee from "./Components/UpdateEmployee";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<ListEmployees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
