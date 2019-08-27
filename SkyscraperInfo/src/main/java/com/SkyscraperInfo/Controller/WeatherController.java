package com.SkyscraperInfo.Controller;

import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping(path="/api/weather")
public class WeatherController {

	@GetMapping("/all")
	public ResponseEntity<?> getAllWeather() {
		
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(new MediaType[] {MediaType.APPLICATION_JSON}));
		headers.set("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com");
		headers.set("X-RapidAPI-Key", "7945eef772msh1fd4967ac8377e6p1861d4jsnf22254fd5d7f");
		
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://community-open-weather-map.p.rapidapi.com/weather")
				.queryParam("q", "New York");
		
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		
		//Rest template
		RestTemplate restTemplate = new RestTemplate();
		
		//Send request with GET method, and headers
		ResponseEntity<String> response = restTemplate.exchange("https://community-open-weather-map.p.rapidapi.com/weather", HttpMethod.GET, entity, String.class, builder);
		
		String result = response.getBody();
		
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}
}
