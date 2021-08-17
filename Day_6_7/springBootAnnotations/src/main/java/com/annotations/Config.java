package com.annotations;

import java.util.Date;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

@Configuration
@ComponentScan
public class Config {
	
	@Bean("Student1")
	@Lazy
	public Student getStudent() {
		System.out.println("Create Student 1");
		return new Student("Student 1");
	}
	
	@Bean("Student2")
	@Lazy
	public Student createStudent() {
		System.out.println("create Student 2");
		return new Student("Student 2");
	}
	
	@Bean
	public Date getDate() {
		System.out.println("create a new date");
		return new Date();
	}
}
