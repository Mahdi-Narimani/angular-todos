import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../../components/layout/footer/footer.component";
@Component({
  standalone: true,
  selector: "app-task-detail",
  templateUrl: "./task-detail.page.html",
  imports: [FooterComponent],
})
export class TaskDetailPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
