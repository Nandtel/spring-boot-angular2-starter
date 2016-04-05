package com.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@SpringBootApplication
@RestController
public class SpringBootAngular2StarterApplication {

    // Match everything without a suffix (so not a static resource)
    @RequestMapping(value = "/{[path:[^\\.]*}")
    public ModelAndView redirect() {
        // Forward to home page so that route is preserved.
        return new ModelAndView("forward:/");
    }

    @RequestMapping(value = "/get-random-number")
    public Integer getRandomNumber() {
        return (int) (Math.random() * 10);
    }

	public static void main(String[] args) {
		SpringApplication.run(SpringBootAngular2StarterApplication.class, args);
	}
}
