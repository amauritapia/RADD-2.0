package com.radd.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.radd.models.Attributes;
import com.radd.models.Hero;

@Repository
public interface HeroRepo extends JpaRepository<Hero, Integer> {
	List<Hero> findHeroByAtribute(Attributes atri);

	Hero findHeroByName(String name);
}
