package com.springcore.lifecycle;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

//using Interfaces
public class Pizza implements InitializingBean,DisposableBean {
	private double price;

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Pizza() {
		super();
	}

	@Override
	public String toString() {
		return "Pizza [price=" + price + "]";
	}

	public void afterPropertiesSet() throws Exception {
		System.out.println("Eating Pizza..!! : Init");
	}

	public void destroy() throws Exception {
		System.out.println("Finished my pizza...!! : Destroy");
		
	}
	
}
