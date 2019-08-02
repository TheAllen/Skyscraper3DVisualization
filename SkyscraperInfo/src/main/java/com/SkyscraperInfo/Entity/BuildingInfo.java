package com.SkyscraperInfo.Entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class BuildingInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="Building name cannot be null")
	private String buildingName;
	
	@Size(min=4, max=6, message="Please use 4-6 characters as building identifier")
	@Column(unique=true)
	private String buildingId;
	
	@JsonFormat(pattern="yyyy-MMM-dd")
	private Date contructionDate;
	
	@OneToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "buildingInfo")
	@JsonIgnore
	private Skyscraper skyscraper;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "buildingInfo")
	@JsonIgnore
	private Restaurant restaurant;

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

	public String getBuildingId() {
		return buildingId;
	}

	public void setBuildingId(String buildingId) {
		this.buildingId = buildingId;
	}

	public Date getContructionDate() {
		return contructionDate;
	}

	public void setContructionDate(Date contructionDate) {
		this.contructionDate = contructionDate;
	}

	public Skyscraper getSkyscraper() {
		return skyscraper;
	}

	public void setSkyscraper(Skyscraper skyscraper) {
		this.skyscraper = skyscraper;
	}

	public Restaurant getRestaurant() {
		return restaurant;
	}

	public void setRestaurant(Restaurant restaurant) {
		this.restaurant = restaurant;
	}
	
	
}