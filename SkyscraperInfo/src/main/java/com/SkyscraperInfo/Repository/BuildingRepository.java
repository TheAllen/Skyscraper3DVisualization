package com.SkyscraperInfo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.SkyscraperInfo.Entity.Building;

@Repository
public interface BuildingRepository extends CrudRepository<Building, Long> {


}
