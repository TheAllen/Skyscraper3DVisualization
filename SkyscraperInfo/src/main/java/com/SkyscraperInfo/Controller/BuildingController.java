package com.SkyscraperInfo.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SkyscraperInfo.Entity.Building;
import com.SkyscraperInfo.Service.BuildingService;
import com.SkyscraperInfo.Service.MapValidationService;

@RestController
@RequestMapping(path="/api/building")
public class BuildingController {
	
	@Autowired
	private BuildingService buildingService;
	
	@Autowired
	private MapValidationService mapValidationService;

	@GetMapping(path="/message")
	public String message() {
		return "Building information message";
	}
	
	@RequestMapping(path="/", method = RequestMethod.POST)
	public ResponseEntity<?> createBuildingInfo(@Valid @RequestBody Building building, BindingResult result){
		
		if(result.hasErrors()) {
			ResponseEntity<?> errorMap = mapValidationService.mapValidationService(result);
			return errorMap;
		}
		
		
		Building buildingInfo = buildingService.saveBuildingInfo(building);
		
		return new ResponseEntity<Building> (buildingInfo, HttpStatus.CREATED);
		
	}
}
