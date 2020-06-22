import { Observable } from "rxjs";
import { TodoItem } from "./todo-item.model";

export interface TodoInterface {
  todoList(): Observable<TodoItem[]>;
}