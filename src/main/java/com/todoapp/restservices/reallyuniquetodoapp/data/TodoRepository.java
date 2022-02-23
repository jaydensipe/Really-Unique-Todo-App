package com.todoapp.restservices.reallyuniquetodoapp.data;

import com.todoapp.restservices.reallyuniquetodoapp.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByOwnedUser(String ownedUser);
}
