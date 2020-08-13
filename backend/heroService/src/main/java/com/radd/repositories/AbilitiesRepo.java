package com.radd.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.radd.models.Abilities;
import com.radd.models.Hero;
@Repository
public interface AbilitiesRepo extends JpaRepository<Abilities, Integer> {
	
	List<Abilities> findAbilitiesByheroId(Hero heroId);
}
