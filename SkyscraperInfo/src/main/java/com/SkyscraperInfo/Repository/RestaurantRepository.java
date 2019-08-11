package com.SkyscraperInfo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.SkyscraperInfo.Entity.Restaurant;

@Repository
public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {
	
	Restaurant findByRestaurantID(String restaurantID);
	
	Iterable<Restaurant> findAllByRating(int rating);
}
