package com.SkyscraperInfo.Controller;

import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/skyscraper")
public class SkyscraperController {
	
	//Welcome message
	@RequestMapping(path="/welcome")
	public String welcome() {
		return "Welcome to Skyscraper Visualization";
	}
}
