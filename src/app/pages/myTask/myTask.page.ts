import { Component } from "@angular/core";
import { FooterComponent } from "../../components/layout/footer/footer.component";
import { TaskItemComponent } from "../../components/task-item/task-item.component";

@Component({
  selector: "app-my-task",
  standalone: true,
  imports: [FooterComponent, TaskItemComponent],
  templateUrl: "./myTask.page.html",
})
export class MyTaskPage {}
