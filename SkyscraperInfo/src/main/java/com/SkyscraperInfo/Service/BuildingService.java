package com.SkyscraperInfo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SkyscraperInfo.Entity.Building;
import com.SkyscraperInfo.Repository.BuildingRepository;

@Service
public class BuildingService {

	@Autowired
	private BuildingRepository buildingRepository;
	
	public Building saveBuildingInfo(Building building) {
		Building b = buildingRepository.save(building);
		return b;
	}
}
