package com.SkyscraperInfo.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ResponseStatus;

@Service
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class MapValidationService {
	
	public ResponseEntity<?> mapValidationService(BindingResult result){
		
		if(result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<String, String>();
			
			for(FieldError error : result.getFieldErrors()) {
				
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			
			return new ResponseEntity<Map<String, String>> (errorMap, HttpStatus.BAD_REQUEST);
		}
		
		return null;
		
	}
}