import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Todo } from 'src/app/_models/todo';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {
  @Input('dataFromParent') public modalRef!: BsModalRef;
  @Output() todoChange = new EventEmitter<Todo>();

  createDetails = {} as Todo;

  constructor() {
  }

  ngOnInit(): void {
    this.createDetails.ownedUser = "test";
    this.createDetails.description = "";
    this.createDetails.targetDate = new Date();
    this.createDetails.id = -1;
    this.createDetails.isDone = false;
  }

  handleCreateTodo() {
    console.log(this.createDetails);
    this.todoChange.emit(this.createDetails);
  }

}
