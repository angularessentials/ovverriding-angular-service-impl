import { Component, VERSION, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoService } from './services/todo.service';
import { TodoItem } from './models/todo-item.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public readonly todoList$: Observable<TodoItem[]> = this.service.todoList();;

  constructor(private service: TodoService) {
  }
}
