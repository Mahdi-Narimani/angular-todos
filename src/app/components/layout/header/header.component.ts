import { Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { ActivationStart, Router } from "@angular/router";
import { CommonModule } from "@angular/common";


@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatIconModule, MatBadgeModule, CommonModule],
  templateUrl: "./header.component.html",
})
export class HeaderComponent
{
  title: any;
  router = inject(Router);
  showToggleMenu = false;

  constructor() { }

  ngOnInit(): void
  {
    this.router.events.subscribe((data) =>
    {
      if (data instanceof ActivationStart)
      {
        this.title = data.snapshot.data["title"];
      }
    });
  }

  toggleNavbar()
  {
    this.showToggleMenu = !this.showToggleMenu;
  }
}
