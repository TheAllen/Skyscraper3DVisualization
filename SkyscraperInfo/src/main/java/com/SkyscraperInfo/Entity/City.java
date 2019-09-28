package com.SkyscraperInfo.Entity;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

@MappedSuperclass
public class City {

	@NotBlank(message="City identifier can't be blank")
	private String cityIdentifier;

	private String cityMessage;
	
//	@OneToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "city")
//	@JsonIgnore
//	private Weather weather;
	

	public String getCityIdentifier() {
		return cityIdentifier;
	}

	public void setCityIdentifier(String cityIdentifier) {
		this.cityIdentifier = cityIdentifier;
	}

	public String getCityMessage() {
		return cityMessage;
	}

	public void setCityMessage(String cityMessage) {
		this.cityMessage = cityMessage;
	}

}
