package com.SkyscraperInfo.Entity;

import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotBlank;

@MappedSuperclass
public class City {

	@NotBlank(message="City identifier can't be blank")
	private String cityIdentifier;

	private String cityMessage;
	

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
