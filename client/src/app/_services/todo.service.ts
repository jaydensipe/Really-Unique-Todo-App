import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../_models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    let headers = new HttpHeaders({
      Authorization: 'Basic ' + window.btoa("user:password")
    });

    return this.http.get<Todo[]>(environment.baseUrl + 'users/test/todos', {headers});
  }

  createTodo(ownedUser: string, todo: Todo) {
    return this.http.post<Todo>(environment.baseUrl + `users/${ownedUser}/todos`, todo);
  }

  getTodo(id: number) {
    return this.http.get<Todo>(environment.baseUrl + `users/test/todos/${id}`);
  }

  deleteTodo(ownedUser: string, id: number) {
    return this.http.delete(environment.baseUrl + `users/${ownedUser}/todos/${id}`);
  }

  updateTodo(ownedUser: string, id: number, todo: Todo) {
    return this.http.put(environment.baseUrl + `users/${ownedUser}/todos/${id}`, todo);
  }
}
