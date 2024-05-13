import { Component, inject } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./components/layout/header/header.component";
import { ITodoModel } from "./model/todo.model";
import { filter } from "rxjs/internal/operators/filter";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MatIconModule, HeaderComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  todos: ITodoModel[] = [];

  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navigation = this.router.getCurrentNavigation();
        if (navigation && navigation.extras.state) {
          const newItem: any = navigation.extras.state;
          console.log(newItem);
          
          this.todos.push(newItem);
        }
      });
  }
}
