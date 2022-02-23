import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Todo } from 'src/app/_models/todo';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
  @Input('dataFromParent') public modalRef!: BsModalRef;
  @Input() todo!: Todo;
  @Output() todoChange = new EventEmitter<Todo>();

  updateDetails = {} as Todo;

  constructor() {
  }

  ngOnInit(): void {
    this.updateDetails.ownedUser = this.todo.ownedUser;
    this.updateDetails.description = this.todo.description;
    this.updateDetails.targetDate = this.todo.targetDate;
    this.updateDetails.id = this.todo.id;
    this.updateDetails.isDone = this.todo.isDone;
  }

  handleUpdateTodo() {
    this.todoChange.emit(this.updateDetails);
  }

}
