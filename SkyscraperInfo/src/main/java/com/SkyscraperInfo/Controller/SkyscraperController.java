package com.SkyscraperInfo.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SkyscraperInfo.Entity.Skyscraper;
import com.SkyscraperInfo.Service.MapValidationService;
import com.SkyscraperInfo.Service.SkyscraperService;

@RestController
@RequestMapping(path="api/skyscraper")
public class SkyscraperController {
	
	@Autowired
	private SkyscraperService skyscraperService;
	
	@Autowired
	private MapValidationService mapValidationService;
	
	//Welcome message
	@RequestMapping(path="/welcome")
	public String welcome() {
		return "Welcome to Skyscraper Visualization";
	}
	
	@RequestMapping(path = "/", method = RequestMethod.POST)
	public ResponseEntity<?> saveSkyscraper(@Valid @RequestBody Skyscraper skyscraper, BindingResult result) {
		
		if(result.hasErrors()) {
			ResponseEntity<?> errorMap = mapValidationService.mapValidationService(result);
			return errorMap;
		}
		
		Skyscraper newSkyscraper = skyscraperService.addSkyscraper(skyscraper);
		
		return new ResponseEntity<Skyscraper> (newSkyscraper, HttpStatus.CREATED);
	}
}
