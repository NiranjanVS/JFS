package com.springcore.lifecycle;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	@SuppressWarnings("resource")
	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/lifecycle/config.xml");
		
		context.registerShutdownHook();
		
		/*Samosa s1 = (Samosa) context.getBean("s1");
		System.out.println(s1);
		System.out.println("******************************************");
		
		Pizza p1 = (Pizza) context.getBean("p1");
		System.out.println(p1);*/
		
		Example e1 = (Example) context.getBean("e1");
		System.out.println(e1);
		
		
		
	}

}
