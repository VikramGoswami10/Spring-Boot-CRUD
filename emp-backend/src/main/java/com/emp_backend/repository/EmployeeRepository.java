package com.emp_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.emp_backend.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
	
}
