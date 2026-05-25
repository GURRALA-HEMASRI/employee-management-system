package com.app.service;

import com.app.model.Employee;
import com.app.repository.EmployeeRepo;
import com.app.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.*;

@Service
public class EmployeeService {

 private final EmployeeRepo repo;

 public EmployeeService(EmployeeRepo repo){
  this.repo=repo;
 }

 public Page<Employee> getAll(String search,int page,int size){
  Pageable p=PageRequest.of(page,size);
  if(search!=null) return repo.findByNameContaining(search,p);
  return repo.findAll(p);
 }

 public Employee get(Long id){
  return repo.findById(id)
   .orElseThrow(()->new ResourceNotFoundException("Employee not found"));
 }

 public Employee save(Employee e){ return repo.save(e); }

 public void delete(Long id){ repo.deleteById(id); }
}
