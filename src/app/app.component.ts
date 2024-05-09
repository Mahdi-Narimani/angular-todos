import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./layout/header/header.component";
import { HomePage } from "./pages/home/home.page";
import { AddEditTodoPage } from "./pages/addEditTodo/addEditTodo.page";
import { MyTaskPage } from "./pages/myTask/myTask.page";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MatIconModule, HeaderComponent, HomePage, MyTaskPage],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
