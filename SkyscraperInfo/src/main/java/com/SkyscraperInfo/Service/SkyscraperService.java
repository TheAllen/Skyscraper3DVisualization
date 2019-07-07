package com.SkyscraperInfo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SkyscraperInfo.Entity.Skyscraper;
import com.SkyscraperInfo.Repository.SkyscraperRepository;

@Service
public class SkyscraperService {	
	
	@Autowired
	private SkyscraperRepository skyscraperRepository;
	
	
	public Skyscraper saveAndUpdateBuilding(Skyscraper building) {
		try {
			building.setId(building.getId());
			building = skyscraperRepository.save(building);
			return building;
		}catch(Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public Iterable<Skyscraper> findAll() {
		return skyscraperRepository.findAll();
	}
}
