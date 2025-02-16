package com.emp_backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp_backend.dto.EmployeeDto;
import com.emp_backend.exception.ResourceNotFoundException;
import com.emp_backend.mapper.EmployeeMapper;
import com.emp_backend.model.Employee;
import com.emp_backend.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	private EmployeeRepository employeeRepository;
	 
	//  Create Employees Implementation
	@Override
	public EmployeeDto CreateEmployee(EmployeeDto employeeDto) {
		Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee=employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}
	
	//  Get Employee By ID Implementation
	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee = employeeRepository.findById(employeeId)
							.orElseThrow(()->new ResourceNotFoundException("Employee not found with the ID : "+employeeId)); 
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	//  Get All Employees Implementation
    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map(EmployeeMapper::mapToEmployeeDto)
                .collect(Collectors.toList());
    }

    //  Update Employee Implementation
    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto) {
        Employee existingEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + employeeId));

        existingEmployee.setFirstname(employeeDto.getFirstname());
        existingEmployee.setLastname(employeeDto.getLastname());
        existingEmployee.setEmail(employeeDto.getEmail());

        Employee updatedEmployee = employeeRepository.save(existingEmployee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
    }

    //  Delete Employee Implementation
    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + employeeId));
        employeeRepository.delete(employee);
    }
    
}
