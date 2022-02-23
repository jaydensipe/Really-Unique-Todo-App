package com.todoapp.restservices.reallyuniquetodoapp.controller;

import com.todoapp.restservices.reallyuniquetodoapp.data.TodoRepository;
import com.todoapp.restservices.reallyuniquetodoapp.models.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class TodoController {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/users/{username}/todos")
    public ResponseEntity<List<Todo>> getTodosForUser(@PathVariable String username) {
        return ResponseEntity.ok(todoRepository.findByOwnedUser(username));
    }

    @GetMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> getTodo(@PathVariable String username, @PathVariable long id) {
        return ResponseEntity.ok(todoRepository.findById(id).orElse(null));
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodoForUser(@PathVariable String username, @PathVariable long id) {
        todoRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
        Todo updatedTodo = todoRepository.save(todo);

        return ResponseEntity.ok(updatedTodo);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Todo> createTodo(@PathVariable String username, @RequestBody Todo todo) {
        todo.setOwnedUser(username);
        Todo updatedTodo = todoRepository.save(todo);

        return ResponseEntity.ok(updatedTodo);
    }
}
