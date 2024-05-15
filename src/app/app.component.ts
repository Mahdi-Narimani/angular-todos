import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MatIconModule, HeaderComponent, FooterComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
 // version-1
  // private router = inject(Router);

  constructor() {
    // version-1
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event) => {
    //     const navigation = this.router.getCurrentNavigation();
    //     if (navigation && navigation.extras.state) {
    //       const newItem: any = navigation.extras.state;
    //       console.log(newItem);
    //       this.todos.push(newItem);
    //     }
    //   });
  }
}
