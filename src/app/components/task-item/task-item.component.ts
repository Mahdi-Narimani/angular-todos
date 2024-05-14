import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ITodoModel } from "../../model/todo.model";
@Component({
  selector: "app-task-item",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./task-item.component.html",
})
export class TaskItemComponent {
  @Input() todoItem: any;
}
