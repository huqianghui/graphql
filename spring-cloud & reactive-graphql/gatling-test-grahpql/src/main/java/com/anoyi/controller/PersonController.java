package com.anoyi.controller;

import com.anoyi.model.Person;
import com.anoyi.repository.PersonsRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class PersonController {

    private final PersonsRepository repository;

    @GetMapping("/persons")
    public List<Person> findAll() {
        return (List<Person>) repository.findAll();
    }

    @PostMapping("/persons")
    public Person add(@RequestBody Person person) {
        return repository.save(person);
    }

    @GetMapping("/persons/{id}")
    public Person findById(@PathVariable("id") Long id) {
       // return repository.findOne(id);
        return null;
    }

}