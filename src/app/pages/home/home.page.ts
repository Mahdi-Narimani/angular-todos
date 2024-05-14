import { Component } from "@angular/core";
import { TaskItemComponent } from "../../components/task-item/task-item.component";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { RouterLink } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage.service";
import { ITodoModel } from "../../model/todo.model";
import { ProgressComponent } from "../../components/progress/progress.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    TaskItemComponent,
    MatIconModule,
    MatProgressBarModule,
    RouterLink,
    ProgressComponent,
  ],
  templateUrl: "./home.page.html",
})
export class HomePage {
  todos: ITodoModel[] = [];

  constructor(private localStorageTodo: LocalStorageService) {}

  ngOnInit(): void {
    const todoItems: any = this.localStorageTodo.getItems("todos");

    if (todoItems) {
      this.todos = todoItems;
    }
  }
}
