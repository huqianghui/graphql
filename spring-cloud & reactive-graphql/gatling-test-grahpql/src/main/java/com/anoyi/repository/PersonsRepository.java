package com.anoyi.repository;

import com.anoyi.model.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonsRepository extends CrudRepository<Person, Long> {
}
