import { Component } from "@angular/core";
import { FooterComponent } from "../../layout/footer/footer.component";
import { TaskItemComponent } from "../../tasks/task-item/task-item.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [FooterComponent, TaskItemComponent],
  templateUrl: "./home.page.html",
})
export class HomePage {}
