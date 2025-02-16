package com.emp_backend.service;

import java.util.List;

import com.emp_backend.dto.EmployeeDto;

public interface EmployeeService {
    
	// Returntype-methodname-(method Parameter) 
	EmployeeDto CreateEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);

	List<EmployeeDto> getAllEmployees();
	
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto);
    
    void deleteEmployee(Long employeeId);
}
