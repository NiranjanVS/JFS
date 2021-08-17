package com.telstra.springboot.proj.controller;

import java.util.List;
import com.telstra.springboot.proj.entity.Department;
import com.telstra.springboot.proj.error.DepartmentNotFoundException;
import com.telstra.springboot.proj.service.DepartmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DeadlockLoserDataAccessException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    private final Logger logger = LoggerFactory.getLogger(DepartmentController.class);

    @PostMapping("/departments")
    public Department saveDepartment(@Valid @RequestBody Department department){
        logger.info("inside save method");
        return departmentService.saveDepartment(department);
    }

    @GetMapping("/departments")
    public List<Department> getDepartmentList(){
        logger.info("inside get departments method");
        return departmentService.getDepartmentList();
    }

    @GetMapping("/departments/{id}")
    public Department getDepartmentById(@PathVariable("id") Long departmentId) throws DepartmentNotFoundException {
        logger.info("inside get department by id method");
        return departmentService.getDepartmentById(departmentId);
    }

    @DeleteMapping("/departments/{id}")
    public String deleteDepartmentById(@PathVariable("id") Long departmentId){
        logger.info("inside delete department by id method");
        departmentService.deleteDepartmentById(departmentId);
        return "Department Deletes Successfully ....!!!";
    }

    @PutMapping("/departments/{id}")
    public Department updateDepartmentById(@PathVariable("id") Long departmentId, @RequestBody Department department){
        logger.info("inside update department by id method");
        return departmentService.updateDepartmentById(departmentId, department);
    }

    @GetMapping("/departments/name/{departmentName}")
    public Department getDepartmentByName(@PathVariable("departmentName") String departmentName){
        logger.info("inside get department by name method");
        return departmentService.getDepartmentByName(departmentName);
    }
}
