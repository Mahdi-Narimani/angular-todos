import { Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { ActivationStart, Router } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  title: any;
  router = inject(Router);
  constructor() {}

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        this.title = data.snapshot.data["title"];
      }
    });
  }
}
