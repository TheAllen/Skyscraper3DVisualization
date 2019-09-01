package com.SkyscraperInfo.Entity;

import javax.persistence.Entity;
import javax.validation.constraints.Size;

@Entity
public class Restaurant extends Building {
	
	private int rating;
	
	private String restaurantDescription;
	
	private String restaurantID;
	
	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getRestaurantDescription() {
		return restaurantDescription;
	}

	public void setRestaurantDescription(String restaurantDescription) {
		this.restaurantDescription = restaurantDescription;
	}

	public String getRestaurantID() {
		return restaurantID;
	}

	public void setRestaurantID(String restaurantID) {
		this.restaurantID = restaurantID;
	}

	
}