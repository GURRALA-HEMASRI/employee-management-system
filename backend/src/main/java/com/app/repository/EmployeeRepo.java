package com.app.repository;

import com.app.model.Employee;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.*;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
 Page<Employee> findByNameContaining(String name, Pageable pageable);
}
