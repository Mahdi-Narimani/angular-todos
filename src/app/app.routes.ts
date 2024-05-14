import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import { AddEditTodoPage } from "./pages/addEditTodo/addEditTodo.page";
import { MyTaskPage } from "./pages/myTask/myTask.page";
import { TaskDetailPage } from "./pages/task-detail/task-detail.page";

export const routes: Routes = [
  {
    path: "",
    component: HomePage,
    data: { title: "Home" },
  },
  {
    path: "new-todo",
    component: AddEditTodoPage,
    data: { title: "Add Todo" },
  },
  {
    path: "edit-todo/:id",
    component: AddEditTodoPage,
    data: { title: "Edit Todo" },
  },
  {
    path: "my-tasks",
    component: MyTaskPage,
    data: { title: "MyTask" },
  },
  {
    path: "task/:id",
    component: TaskDetailPage,
    data: { title: "Detail Todo" },
  },
];
