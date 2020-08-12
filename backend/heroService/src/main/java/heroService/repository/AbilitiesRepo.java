package heroService.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import heroService.models.Abilities;

public interface AbilitiesRepo extends JpaRepository<Abilities, Integer> {
	
	List<Abilities> findAbilitiesById(int heroId);
}
