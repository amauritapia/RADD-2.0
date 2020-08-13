package com.radd.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.radd.models.Attributes;
import com.radd.models.Hero;
import com.radd.repositories.HeroRepo;

@Service
public class heroService {
	@Autowired
	HeroRepo hr;

	public List<Hero> getAll() {
		return hr.findAll();
	}

	public Hero byId(int id) {
		return hr.findById(id).get();
	}

	public List<Hero> byAttribute(String atri) {
		Attributes ta = new Attributes();
		ta.setId(0000);
		ta.setAttribute(atri);
		return hr.findHeroByAtribute(ta);
	}

	public Hero byName(String name) {
		return hr.findHeroByName(name);
	}
}
