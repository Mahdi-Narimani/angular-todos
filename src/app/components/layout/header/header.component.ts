import { Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  title = "Home Page";

  private router = inject(Router);

  constructor() {
    // console.log(this.router.url);
  }
}
