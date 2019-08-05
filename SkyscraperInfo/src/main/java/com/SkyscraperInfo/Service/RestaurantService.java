package com.SkyscraperInfo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SkyscraperInfo.Entity.Restaurant;
import com.SkyscraperInfo.Repository.RestaurantRepository;

@Service
public class RestaurantService {

	@Autowired
	private RestaurantRepository restaurantRepository;
	
	public Restaurant addRestaurant(Restaurant restaurant) {
		Restaurant r = restaurantRepository.save(restaurant);
		return r;
	}
}
