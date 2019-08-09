package com.SkyscraperInfo.Exception;

public class BuildingInfoExceptionResponse {
	
	private String buildingName;
	
	public BuildingInfoExceptionResponse(String buildingName) {
		this.buildingName = buildingName;
	}

	public String getBuildingName() {
		return buildingName;
	}

	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}
	
	
}
