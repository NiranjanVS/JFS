package com.telstra.springboot.proj.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//@Controller
@RestController
public class HelloController {

    //@RequestMapping(value = "/home", method = RequestMethod.GET)
    @GetMapping("/home")
    public String helloWorld(){
        return "Welcome to Spring-Boot..";
    }
}
