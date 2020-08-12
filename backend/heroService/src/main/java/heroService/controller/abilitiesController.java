package heroService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import heroService.models.Abilities;
import heroService.repository.AbilitiesRepo;

@RequestMapping("abilities/")
@RestController
public class abilitiesController {

	@Autowired
	AbilitiesRepo ar;
	
	@GetMapping("id/{id}")
	Abilities findAbilityById(@PathVariable int id) {
		return ar.findById(id).get();
	}
	
	@GetMapping("hero/{name}")
	List<Abilities> findByHeroId(@PathVariable int heroID){
		return ar.findAbilitiesById(heroID);
	}
}
