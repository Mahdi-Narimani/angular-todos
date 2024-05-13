import { Component } from "@angular/core";
import { FooterComponent } from "../../components/layout/footer/footer.component";
import { TaskItemComponent } from "../../components/task-item/task-item.component";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    FooterComponent,
    TaskItemComponent,
    MatIconModule,
    MatProgressBarModule,
    RouterLink,
  ],
  templateUrl: "./home.page.html",
})
export class HomePage {}
