package com.radd.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.radd.models.Abilities;
import com.radd.repositories.AbilitiesRepo;

@Service
public class abilitiesService {
@Autowired
AbilitiesRepo ar;
 public Abilities byId(int id) {
	 return ar.findById(id).get();
 }
 
 public List<Abilities> byHero(int heroID){
	 return ar.findAbilitiesByheroId(heroID);
 }
}
