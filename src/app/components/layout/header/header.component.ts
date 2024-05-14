import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  title = "Home Page";

  constructor() {}
}
