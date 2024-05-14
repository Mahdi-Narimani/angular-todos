import { Component } from "@angular/core";
import { TaskItemComponent } from "../../components/task-item/task-item.component";
import { ITodoModel } from "../../model/todo.model";
import { LocalStorageService } from "../../services/local-storage.service";

@Component({
  selector: "app-my-task",
  standalone: true,
  imports: [ TaskItemComponent],
  templateUrl: "./myTask.page.html",
})
export class MyTaskPage {
  todoItems: ITodoModel[] = [];

  constructor(private localStorageTodo: LocalStorageService) {}
  ngOnInit(): void {
    const todoItems: any = this.localStorageTodo.getItems("todos");

    if (todoItems) {
      this.todoItems = todoItems;
    }
  }
}
