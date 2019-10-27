package com.SkyscraperInfo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SkyscraperInfo.Entity.Skyscraper;
import com.SkyscraperInfo.Repository.SkyscraperRepository;

@Service
public class SkyscraperService {
	
	@Autowired
	private SkyscraperRepository skyscraperRepository;
	
	public Skyscraper addOrUpdateSkyscraper(Skyscraper skyscraper) {
		
		if(skyscraper.getCityIdentifier() != null) {
			
			Skyscraper existSkyscraper = skyscraperRepository.findByCityIdentifier(skyscraper.getCityIdentifier());
			
			if(existSkyscraper != null) {
				return existSkyscraper;
			}			
			return existSkyscraper;
			
		}
		return skyscraperRepository.save(skyscraper);

		
	}
	
	public Iterable<Skyscraper> getAll() {
		return skyscraperRepository.findAll();
	}
}