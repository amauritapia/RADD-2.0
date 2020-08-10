package com.radd.heroes.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {
	
	@GetMapping()
	public String firstTest()
	{
		return new String("Where home boi duanny at?");
	}
}
