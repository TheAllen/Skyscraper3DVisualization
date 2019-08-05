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

import com.SkyscraperInfo.Entity.Restaurant;
import com.SkyscraperInfo.Service.MapValidationService;
import com.SkyscraperInfo.Service.RestaurantService;

@RestController
@RequestMapping(path="/api/restaurant")
public class RestaurantController {
	
	@Autowired
	private RestaurantService restaurantService;
	
	@Autowired
	private MapValidationService mapValidationService;
	
	@RequestMapping(path="/", method=RequestMethod.POST)
	public ResponseEntity<?> createRestaurantInfo(@Valid @RequestBody Restaurant restaurant, BindingResult result) {
		
		if(result.hasErrors()) {
			ResponseEntity<?> errorMap = mapValidationService.mapValidationService(result);
			return errorMap;
		}
		
		Restaurant restaurantInfo = restaurantService.addRestaurant(restaurant);
		
		return new ResponseEntity<Restaurant> (restaurantInfo, HttpStatus.CREATED);
	}
}
