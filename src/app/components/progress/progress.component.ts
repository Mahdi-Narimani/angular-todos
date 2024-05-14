import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
@Component({
  standalone: true,
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  imports: [MatIconModule, MatProgressBarModule],
})
export class ProgressComponent {
  @Input() todoLength = 0;

  constructor() {}
}
