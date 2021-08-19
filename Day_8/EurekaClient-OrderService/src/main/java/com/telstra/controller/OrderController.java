package com.telstra.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

	@GetMapping("/getorders")
	public String displayOrder() {
		return "Order details";
	}
}
