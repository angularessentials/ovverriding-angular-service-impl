import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TodoService } from './services/todo.service';
import { CustomTodoService } from './services/custom-todo.service';
import { TodoListComponent } from './components/todo-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodoListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: TodoService,
      useClass: CustomTodoService
    }
  ]
})
export class AppModule { }
