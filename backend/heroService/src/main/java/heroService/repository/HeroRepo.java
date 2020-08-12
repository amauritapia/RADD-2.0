package heroService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import heroService.models.Attributes;
import heroService.models.Hero;

public interface HeroRepo extends JpaRepository<Hero, Integer> {
	List<Hero> findHeroByAtribute(Attributes atri);
	Hero findHeroByName(String name);
}
