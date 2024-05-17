import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: "./footer.component.html",
})
export class FooterComponent {}
