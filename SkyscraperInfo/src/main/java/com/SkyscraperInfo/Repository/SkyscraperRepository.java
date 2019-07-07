package com.SkyscraperInfo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.SkyscraperInfo.Entity.Skyscraper;

@Repository
public interface SkyscraperRepository extends CrudRepository<Skyscraper, Long>{
	
	@Override
	public Iterable<Skyscraper> findAll();
	
	public Skyscraper findByBuildingName(String name);
	
	public Skyscraper findByBuildingCreated(Long year);
	
	public Skyscraper findByBuildingHeight(Long height);
}
