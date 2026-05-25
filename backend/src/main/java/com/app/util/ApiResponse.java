package com.app.util;

import lombok.*;

@Data
@AllArgsConstructor
public class ApiResponse<T>{
 private boolean success;
 private String message;
 private T data;
}
