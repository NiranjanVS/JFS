package com.annotations;

import org.springframework.stereotype.Component;

@Component
public class Employee {
	public void whatsyourname() {
		System.out.println("I am Spring");
	}
}
