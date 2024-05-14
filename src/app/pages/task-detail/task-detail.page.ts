import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage.service";
import { MatCardModule } from "@angular/material/card";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-task-detail",
  templateUrl: "./task-detail.page.html",
  imports: [MatCardModule, RouterLink],
})
export class TaskDetailPage implements OnInit {
  todoItem: any;

  private router = inject(Router);

  constructor(
    private route: ActivatedRoute,
    private localStorageTodo: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.todoItem = this.localStorageTodo.getItemById(params["id"]);
    });
  }

  handleRemoveItem(id: string) {
    const newTodos = this.localStorageTodo
      .getItems("todos")
      .filter((item: any) => item.id !== id);

    this.localStorageTodo.addItem("todos", newTodos);

    this.router.navigate(["/"]);
  }
}
