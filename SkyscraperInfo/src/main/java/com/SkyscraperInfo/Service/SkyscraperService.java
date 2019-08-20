package com.SkyscraperInfo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SkyscraperInfo.Entity.Skyscraper;
import com.SkyscraperInfo.Repository.SkyscraperRepository;

@Service
public class SkyscraperService {
	
	@Autowired
	private SkyscraperRepository skyscraperRepository;
	
	public Skyscraper addSkyscraper(Skyscraper skyscraper) {
		Skyscraper s = skyscraperRepository.save(skyscraper);
		return s;
	}
	
	public Iterable<Skyscraper> getAll() {
		return skyscraperRepository.findAll();
	}
}