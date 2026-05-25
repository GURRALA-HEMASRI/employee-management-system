package com.app.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class EmployeeRequestDTO {

 @NotNull @Size(min=3)
 private String name;

 @Email
 private String email;

 private String phone;
 private String position;
 private double salary;
}
