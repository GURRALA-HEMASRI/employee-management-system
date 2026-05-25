package com.app.controller;

import com.app.repository.EmployeeRepo;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin
public class DashboardController {

 private final EmployeeRepo repo;

 public DashboardController(EmployeeRepo repo){
  this.repo=repo;
 }

 @GetMapping("/stats")
 public Map<String,Object> stats(){
  Map<String,Object> m=new HashMap<>();
  m.put("totalEmployees", repo.count());
  return m;
 }
}
