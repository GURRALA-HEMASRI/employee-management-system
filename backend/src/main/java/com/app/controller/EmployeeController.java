package com.app.controller;

import com.app.service.EmployeeService;
import com.app.dto.*;
import com.app.model.Employee;
import com.app.util.ApiResponse;

import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/employees")
@CrossOrigin
public class EmployeeController {

 private final EmployeeService service;

 public EmployeeController(EmployeeService service){
  this.service=service;
 }

 @GetMapping
 public ApiResponse<Page<Employee>> getAll(
   @RequestParam(required=false) String search,
   @RequestParam(defaultValue="0") int page,
   @RequestParam(defaultValue="10") int size){
  return new ApiResponse<>(true,"success",
    service.getAll(search,page,size));
 }

 @PostMapping
 public ApiResponse<Employee> add(@Valid @RequestBody EmployeeRequestDTO dto){
  Employee e=new Employee();
  e.setName(dto.getName());
  e.setEmail(dto.getEmail());
  e.setPhone(dto.getPhone());
  e.setPosition(dto.getPosition());
  e.setSalary(dto.getSalary());
  return new ApiResponse<>(true,"created",service.save(e));
 }

 @GetMapping("/{id}")
 public ApiResponse<Employee> get(@PathVariable Long id){
  return new ApiResponse<>(true,"success",service.get(id));
 }

 @DeleteMapping("/{id}")
 public ApiResponse<?> delete(@PathVariable Long id){
  service.delete(id);
  return new ApiResponse<>(true,"deleted",null);
 }
}
