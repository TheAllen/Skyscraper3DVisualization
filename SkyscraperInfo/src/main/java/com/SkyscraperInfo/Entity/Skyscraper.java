package com.SkyscraperInfo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Skyscraper {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="Building name cannot be null")
	@Column(updatable=false, unique=true)
	private String buildingName;
	
	private Long buildingHeight;
	
	private Long buildingCreated;
	
	private String description;
	
	private String wikiLink;
	
	private Byte[] buildingImages;
	
	
	public String getWikiLink() {
		return wikiLink;
	}

	public void setWikiLink(String wikiLink) {
		this.wikiLink = wikiLink;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBuildingName() {
		return buildingName;
	}

	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}

	public Long getBuildingHeight() {
		return buildingHeight;
	}

	public void setBuildingHeight(Long buildingHeight) {
		this.buildingHeight = buildingHeight;
	}

	public Long getBuildingCreated() {
		return buildingCreated;
	}

	public void setBuildingCreated(Long buildingCreated) {
		this.buildingCreated = buildingCreated;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Byte[] getBuildingImages() {
		return buildingImages;
	}

	public void setBuildingImages(Byte[] buildingImages) {
		this.buildingImages = buildingImages;
	}
}
