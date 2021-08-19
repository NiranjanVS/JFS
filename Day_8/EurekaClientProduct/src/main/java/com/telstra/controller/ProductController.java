package com.telstra.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

	@GetMapping("/fetchproducts")
	public String fetchProducts() {
		return "Product details";
	}
}
