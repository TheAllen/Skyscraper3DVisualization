package com.SkyscraperInfo.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;

@Entity
public class Skyscraper {

	@NotBlank(message="Skyscraper must have a name")
	private String skyscraperName;
	
	@OneToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
	private BuildingInfo buildingInfo;

	public String getSkyscraperName() {
		return skyscraperName;
	}

	public void setSkyscraperName(String skyscraperName) {
		this.skyscraperName = skyscraperName;
	}

	public BuildingInfo getBuildingInfo() {
		return buildingInfo;
	}

	public void setBuildingInfo(BuildingInfo buildingInfo) {
		this.buildingInfo = buildingInfo;
	}
	
	
}