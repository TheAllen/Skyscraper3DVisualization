package com.SkyscraperInfo.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SkyscraperInfo.Entity.City;
import com.SkyscraperInfo.Service.CityService;
import com.SkyscraperInfo.Service.MapValidationService;

@RestController
@RequestMapping(path="/api/city")
public class CityController {
	
	@Autowired
	private CityService cityService;
	
	@Autowired
	private MapValidationService mapValidationService;
	
	@PostMapping(path="")
	private ResponseEntity<?> saveAndUpdateCity(@Valid @RequestBody City city, BindingResult result) {
		
		if(result.hasErrors()) {
			ResponseEntity<?> errorMap = mapValidationService.mapValidationService(result);
			return errorMap;
		}
		
		City newcity = cityService.saveAndUpdateCity(city);
		
		return new ResponseEntity<City> (newcity, HttpStatus.CREATED);
	}
}
