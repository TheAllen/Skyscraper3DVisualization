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
@RequestMapping(path = "/api/map")
public class SkyscraperController {
	
	
}
