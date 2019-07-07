package com.SkyscraperInfo.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SkyscraperInfo.Entity.Skyscraper;
import com.SkyscraperInfo.Service.MapValidationService;
import com.SkyscraperInfo.Service.SkyscraperService;

@RestController
@RequestMapping(path="/api/skyscraper")
@CrossOrigin
public class SkyscraperController {
	
	
	@Autowired
	private SkyscraperService skyscraperService;
	
	@Autowired
	private MapValidationService mapValidationService;
	
	@RequestMapping(path="", method=RequestMethod.POST)
	public ResponseEntity<?> saveBuildingProfile(@Valid @RequestBody Skyscraper skyscraper, BindingResult result) {
		
		if(result.hasErrors()) {
			mapValidationService.mapValidationService(result);
		}
		
		Skyscraper building = skyscraperService.saveAndUpdateBuilding(skyscraper);
		return new ResponseEntity<Skyscraper>(building, HttpStatus.CREATED);
		
	}
	
	@GetMapping("")
	public String message() {
		return "Default message";
	}
	
	@RequestMapping(path="/{buildingName}", method=RequestMethod.GET)
	public ResponseEntity<Skyscraper> getBuildingInfo(@PathVariable("buildingName") String name) {
		
	}
	
	@GetMapping("/all")
	public Iterable<Skyscraper> findAllSkyscrapers(){
		return skyscraperService.findAll();
	}
}
