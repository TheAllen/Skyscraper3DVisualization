package com.SkyscraperInfo.Service;

import java.util.List;

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
	
	public Iterable<Restaurant> findAllRestaurants(){
		
		return restaurantRepository.findAll();
	}
}
