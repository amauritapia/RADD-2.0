package com.radd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.radd.models.Attributes;
import com.radd.models.Hero;
import com.radd.repositories.HeroRepo;
import com.radd.services.heroService;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("hero/")
@RestController
public class heroController {

	@Autowired
	heroService hs;

	@GetMapping()
	List<Hero> getAllHeroes() {
		return hs.getAll();
	}

	@GetMapping("{id}")
	Hero findByHeroId(@PathVariable int id) {
		return hs.byId(id);
	}

	@GetMapping("atribute/{atri}")
	List<Hero> findHeroByAttribute(@PathVariable String atri) {
		return hs.byAttribute(atri);
	}

	@GetMapping("name/{name}")
	Hero findByHeroName(@PathVariable String heroName) {
		return hs.byName(heroName);
	}
}
