import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import { AddEditTodoPage } from "./pages/addEditTodo/addEditTodo.page";
import { MyTaskPage } from "./pages/myTask/myTask.page";
import { TaskDetailPage } from "./pages/task-detail/task-detail.page";

export const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "new-todo",
    component: AddEditTodoPage,
  },
  {
    path: "edit-todo",
    component: AddEditTodoPage,
  },
  {
    path: "my-tasks",
    component: MyTaskPage,
  },
  {
    path: 'task/:id',
    component: TaskDetailPage
  }
];
