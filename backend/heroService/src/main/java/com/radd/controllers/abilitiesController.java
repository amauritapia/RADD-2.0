package com.radd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.radd.models.Abilities;
import com.radd.repositories.AbilitiesRepo;
import com.radd.services.abilitiesService;

@RequestMapping("abilities/")
@RestController
public class abilitiesController {

	@Autowired
	abilitiesService as;
	
	@GetMapping("id/{id}")
	Abilities findAbilityById(@PathVariable int id) {
		return as.byId(id);
	}
	
	@GetMapping("hero/{name}")
	List<Abilities> findByHeroId(@PathVariable int heroID){
		return as.byHero(heroID);
	}
}
