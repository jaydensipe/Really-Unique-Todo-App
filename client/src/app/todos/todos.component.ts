import { Component, OnInit } from '@angular/core';
import { Todo } from '../_models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    { id: 5, description: 'Test Todo One', isDone: true, targetDate: new Date() },
    { id: 7, description: 'Test Todo Two', isDone: false, targetDate: new Date() }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
