import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-task-item",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./task-item.component.html",
})
export class TaskItemComponent {}
