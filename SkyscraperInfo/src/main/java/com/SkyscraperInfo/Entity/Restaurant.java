package com.SkyscraperInfo.Entity;

import javax.persistence.Entity;
import javax.validation.constraints.Size;

@Entity
public class Restaurant extends Building {
	
	
	private int rating;
	
	private String restaurantDescription;
	
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

	
}