import { Component } from "@angular/core";
import { FooterComponent } from "../../layout/footer/footer.component";
import { TaskItemComponent } from "../../tasks/task-item/task-item.component";

@Component({
  selector: "app-my-task",
  standalone: true,
  imports: [FooterComponent, TaskItemComponent],
  templateUrl: "./myTask.page.html",
})
export class MyTaskPage {}
