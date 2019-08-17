package com.SkyscraperInfo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SkyscraperInfo.Entity.City;
import com.SkyscraperInfo.Repository.CityRepository;

@Service
public class CityService {
	
	@Autowired
	private CityRepository cityRepository;
	
	public City saveAndUpdateCity(City city) {
		
		//New City
		if(cityRepository.findByCityIdentifier(city.getCityIdentifier())==null) {
			return cityRepository.save(city);
		}
		//Existing city in DB
		else {
			return cityRepository.save(city);
		}
	}
}
