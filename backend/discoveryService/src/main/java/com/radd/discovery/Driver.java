package com.radd.discovery;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication	
public class Driver 
{
	public static void main(String[] args)
	{
		SpringApplication.run(Driver.class, args);
	}

}
