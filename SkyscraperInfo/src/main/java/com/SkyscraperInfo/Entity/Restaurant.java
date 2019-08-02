package com.SkyscraperInfo.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;

@Entity
public class Restaurant {
	
	@NotBlank(message="Restaurant name cannot be null")
	private String restaurantName;
	
	@OneToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
	private BuildingInfo buildingInfo;

	public String getRestaurantName() {
		return restaurantName;
	}

	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}

	public BuildingInfo getBuildingInfo() {
		return buildingInfo;
	}

	public void setBuildingInfo(BuildingInfo buildingInfo) {
		this.buildingInfo = buildingInfo;
	}
	
	
}