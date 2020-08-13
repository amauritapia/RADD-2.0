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
		switch (atri) {
		case "str":
			ta.setAttribute(atri);
			ta.setId(1);
			break;
		case "agi:":
			ta.setAttribute(atri);
			ta.setId(2);
			break;
		case "int":
			ta.setAttribute(atri);
			ta.setId(3);
			break;
		default:
			break;
		}
		return hr.findHeroByattribute(ta);
	}

	public Hero byName(String name) {
		return hr.findHeroByName(name);
	}
}
