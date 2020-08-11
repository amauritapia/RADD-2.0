package heroService.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.discovery.converters.Auto;


import heroService.models.testClass;
import heroService.repository.testRepo;
@RestController
public class testController {

	@Autowired
	testRepo tr;
	
	@GetMapping
	public testClass testFunction() {
		Optional<testClass> t = tr.findById("Duany");
		return t.get();
	}
}
