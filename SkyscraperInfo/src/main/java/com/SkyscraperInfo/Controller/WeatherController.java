package com.SkyscraperInfo.Controller;

import java.awt.PageAttributes.MediaType;
import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api/weather")
public class WeatherController {

	@GetMapping(path="/all")
	public ResponseEntity<String> getAllWeather() {
		
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(new MediaType[] {MediaType.APPLICATION_JSON}));
		headers.set("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com");
		headers.set("X-RapidAPI-Key", "7945eef772msh1fd4967ac8377e6p1861d4jsnf22254fd5d7f");
		
		HttpEntity<String> entity = new HttpEntity<String>(headers);
	}
}
