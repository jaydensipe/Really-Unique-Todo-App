package com.todoapp.restservices.reallyuniquetodoapp.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    private String description;
    private Date targetDate;
    private boolean isDone;

    private String ownedUser;

    public Todo() {
    }

    public Todo(long id, String description, Date targetDate, boolean isDone, String ownedUser) {
        this.id = id;
        this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
        this.ownedUser = ownedUser;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    @JsonProperty(value = "isDone")
    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public String getOwnedUser() {
        return ownedUser;
    }

    public void setOwnedUser(String ownedUser) {
        this.ownedUser = ownedUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
