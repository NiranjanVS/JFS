package com.telstra.springboot.proj.service;

import com.telstra.springboot.proj.entity.Department;
import com.telstra.springboot.proj.error.DepartmentNotFoundException;

import java.util.List;

public interface DepartmentService {
    public Department saveDepartment(Department department);

    public List<Department> getDepartmentList();

    Department getDepartmentById(Long departmentId) throws DepartmentNotFoundException;

    void deleteDepartmentById(Long departmentId);

    Department updateDepartmentById(Long departmentId, Department department);

    Department getDepartmentByName(String departmentName);
}
