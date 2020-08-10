package gateService;

import org.springframework.boot.SpringApplication;

@SpringBootApplication
@EnableZuulProxy
public class gatewayDriver {
	public static void main(String[] args) {
		SpringApplication.run(gatewayDriver.class, args)

	}
}
