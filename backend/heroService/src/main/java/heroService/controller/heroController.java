package heroService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import heroService.models.Attributes;
import heroService.models.Hero;
import heroService.repository.HeroRepo;

@RequestMapping("hero/")
@RestController
public class heroController {

	@Autowired
	HeroRepo hr;
	
	@GetMapping()
	List<Hero> getAllHeroes(){
		return hr.findAll();
	}
	
	@GetMapping("{id}")
	Hero findByHeroId(@PathVariable int id) {
		return hr.findById(id).get();
	}
	
	@GetMapping("atribute/{atri}")
	List<Hero> findHeroByAttribute(@PathVariable String atri) {
		Attributes ta = new Attributes();
		ta.setId(0000);
		ta.setAttribute(atri);
		return hr.findHeroByAtribute(ta);
	}
	
	@GetMapping("name/{name}")
	Hero findByHeroName(@PathVariable String heroName) {
		return hr.findHeroByName(heroName);
	}
}
