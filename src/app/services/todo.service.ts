import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";

import { TodoInterface } from "../models/todo.interface";
import { TodoItem } from "../models/todo-item.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService implements TodoInterface {
  todoList(): Observable<TodoItem[]> {
    return of([
      { task: 'Task one' },
      { task: 'Task two' }
    ]);
  }
}