package com.nocountry.quo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.nocountry.quo.security.SecurityProperties;

@SpringBootApplication
@EnableConfigurationProperties(SecurityProperties.class)
public class QuoApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuoApplication.class, args);
	}
}