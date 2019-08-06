package com.SkyscraperInfo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.SkyscraperInfo.Entity.Skyscraper;

//JPA
public interface SkyscraperRepository extends CrudRepository<Skyscraper, Long> {
	
	
}