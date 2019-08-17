package com.SkyscraperInfo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.SkyscraperInfo.Entity.City;

@Repository
public interface CityRepository extends CrudRepository<City, Long>{
	
	public City findByCityIdentifier(String cityIdentifier);
}
