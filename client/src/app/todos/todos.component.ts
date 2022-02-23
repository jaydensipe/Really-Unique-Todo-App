import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../_models/todo';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(public todoService: TodoService, private toastr: ToastrService,
    private modalService: BsModalService, public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    })
  }

  deleteTodo(ownedUser: string, id: number) {
    this.todoService.deleteTodo(ownedUser, id).subscribe(res => {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
      this.toastr.success(`Todo ${id} was successfully deleted!`, "Success")
    });
  }

  updateTodo(todoEvent: Todo) {
    this.todoService.updateTodo(todoEvent.ownedUser, todoEvent.id, todoEvent).subscribe(res => {
      this.todos[this.todos.indexOf(this.todos.filter(todo => todo.id === todoEvent.id)[0])] = todoEvent;
      this.modalRef.hide();
      this.toastr.info(`Todo ${todoEvent.id} was successfully updated!`, "Update")
    });
  }

  createTodo(todoEvent: Todo) {
    this.todoService.createTodo("test", todoEvent).subscribe(res => {
      this.todos = [...this.todos, res];
      this.modalRef.hide();
      this.toastr.success(`Todo was successfully created!`, "Create")
    })
  }

  openUpdateModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialog-centered',
        backdrop: 'static',
        keyboard: true
      }
    );
  }

  openCreateModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialog-centered',
        backdrop: 'static',
        keyboard: true
      }
    );
  }

}
