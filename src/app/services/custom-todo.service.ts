import { Observable, of } from "rxjs";

import { TodoInterface } from "../models/todo.interface";
import { TodoItem } from "../models/todo-item.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CustomTodoService implements TodoInterface {
  todoList(): Observable<TodoItem[]> {
    return of([
      { task: 'Custom Task one' },
      { task: 'Custsom Task two' }
    ]);
  }
}