# 🚀 Employee Management System (Full-Stack CRUD App)

## 📌 Overview
The **Employee Management System** is a full-stack web application built with **React.js, Spring Boot, and MySQL**. It allows users to **Add, View, Update, and Delete** employee records efficiently through a **REST API**.  

The system is designed to **simplify employee record management** with an intuitive UI and seamless backend operations.

---

## 🛠️ Tech Stack

### 🌐 Frontend (React.js)
- **React.js** – For building a dynamic UI  
- **React Router** – For seamless navigation  
- **Bootstrap** – For styling and responsiveness  
- **Axios** – For API requests  

### 🖥️ Backend (Spring Boot)
- **Spring Boot** – Backend framework  
- **Spring Data JPA** – ORM for database operations  
- **Hibernate** – Database interaction  
- **MySQL** – Relational database  

### 🔄 API Communication
- **RESTful APIs** – Backend services  
- **CORS Enabled** – Cross-origin requests support  

---

## 🎯 Features
✔️ **Add New Employees**  
✔️ **View All Employees**  
✔️ **Update Employee Details**  
✔️ **Delete Employee Records**  
✔️ **User-Friendly Interface**  
✔️ **Secure & Fast API Communication**  
✔️ **MySQL Database Integration**  

---

## 🚀 Getting Started

### 🔹 1️⃣ Clone the Repository

git clone https://github.com/VikramGoswami10/Spring-Boot-CRUD.git

cd Spring-Boot-CRUD

🔹 2️⃣ Backend Setup (Spring Boot)

➤ Configure MySQL Database

Update the database credentials in application.properties inside src/main/resources/:

properties

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db

spring.datasource.username=root

spring.datasource.password=yourpassword

Make sure you have MySQL running and create a database named employee_db before starting the backend.

➤ Run the Backend

cd backend

mvn spring-boot:run

🚀 Your backend will now run on http://localhost:8080.

🔹 3️⃣ Frontend Setup (React.js)

➤ Navigate to the Frontend Folder

cd emp-frontend

➤ Install Dependencies

npm install

➤ Run the Frontend

npm start
