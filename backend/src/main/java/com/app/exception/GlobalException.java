package com.app.exception;

import org.springframework.web.bind.annotation.*;
import com.app.util.ApiResponse;

@RestControllerAdvice
public class GlobalException {

 @ExceptionHandler(ResourceNotFoundException.class)
 public ApiResponse<?> handleNotFound(ResourceNotFoundException e){
  return new ApiResponse<>(false,e.getMessage(),null);
 }
}
