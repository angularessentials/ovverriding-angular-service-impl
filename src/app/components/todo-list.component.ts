import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { TodoItem } from "../models/todo-item.model";
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'todo-list',
  template: `
  <ng-container *ngIf="(todoList$ | async) as todoList;">
    <ul>
      <li *ngFor="let todoItem of todoList">
        {{todoItem.task}}
      </li>
    </ul>

    <p *ngIf="todoList.length === 0">Todo list is empty</p>
  </ng-container>
  `
})
export class TodoListComponent {
  public readonly todoList$: Observable<TodoItem[]> = this.service.todoList();

  constructor(private service: TodoService) {
  }
}