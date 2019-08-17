package com.SkyscraperInfo.Entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema = "users")
public class City {

	
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
