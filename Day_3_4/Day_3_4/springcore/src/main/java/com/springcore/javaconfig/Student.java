package com.springcore.javaconfig;

import org.springframework.stereotype.Component;

//@Component("firstStudent")
public class Student {
	public Samosa samosa;
	public void study() {
		System.out.println("Student is studying..!!!");
	}
	public Samosa getSamosa() {
		return samosa;
	}
	public void setSamosa(Samosa samosa) {
		this.samosa = samosa;
	}
	public Student(Samosa samosa) {
		super();
		this.samosa = samosa;
	}
	

}
