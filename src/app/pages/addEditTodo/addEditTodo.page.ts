import { Component, inject } from "@angular/core";
import { FooterComponent } from "../../components/layout/footer/footer.component";
import { TaskItemComponent } from "../../components/task-item/task-item.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { provideMomentDateAdapter } from "@angular/material-moment-adapter";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import { SelectBoxTime } from "../../constant";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage.service";

const moment = _rollupMoment || _moment;
moment.defaultFormat = "DD MMMM, dddd";

export const MY_FORMATS = {
  parse: {
    dateInput: "LL",
  },
  display: {
    dateInput: "DD MMMM, dddd",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};
@Component({
  selector: "app-add-edit-todo",
  standalone: true,
  imports: [
    FooterComponent,
    TaskItemComponent,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
  ],
  providers: [provideMomentDateAdapter(MY_FORMATS)],
  templateUrl: "./addEditTodo.page.html",
})
export class AddEditTodoPage {
  todos: any = [];
  ItemId = "";
  ItemForEdit: any = {};
  editMode = false;
  registerForm: any;
  private router = inject(Router);

  selectArrayTime = SelectBoxTime;

  constructor(
    private localStorageTodo: LocalStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.editMode = true;
        this.ItemId = params["id"];
        this.ItemForEdit = this.localStorageTodo.getItemById(this.ItemId);
      }

      this.registerForm = new FormGroup({
        title: new FormControl(this.editMode ? this.ItemForEdit.title : "", [
          Validators.required,
        ]),
        dateTime: new FormControl(
          this.editMode
            ? moment(this.ItemForEdit.dateTime, moment.defaultFormat).toDate()
            : "",
          [Validators.required]
        ),
        startTime: new FormControl(
          this.editMode ? this.ItemForEdit.startTime : "",
          [Validators.required]
        ),
        endTime: new FormControl(
          this.editMode ? this.ItemForEdit.endTime : "",
          [Validators.required]
        ),
        description: new FormControl(
          this.editMode ? this.ItemForEdit.description : ""
        ),
      });
    });
  }

  handleSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    if (!this.editMode) {
      const todoData = {
        id: crypto.randomUUID(),
        title: this.registerForm.value.title,
        dateTime: moment(this.registerForm.value.dateTime).format(
          "DD MMMM, dddd"
        ),
        startTime: this.registerForm.value.startTime,
        endTime: this.registerForm.value.endTime,
        description: this.registerForm.value.description,
      };

      // version-1
      // this.router.navigate(["/"], { state: { data: todoData } });

      if (localStorage.getItem("todos")) {
        const currentTodos: any = this.localStorageTodo.getItems("todos");

        this.todos.push(...currentTodos);
        this.localStorageTodo.addItem("todos", this.todos);
      }
      this.todos.push(todoData);
      this.localStorageTodo.addItem("todos", this.todos);
      this.router.navigate(["/"]);
    } else {
      const editItem = this.localStorageTodo
        .getItems("todos")
        .map((item: any) => {
          return item.id === this.ItemId
            ? {
                id: this.ItemId,
                title: this.registerForm.value.title,
                dateTime: moment(this.registerForm.value.dateTime).format(
                  "DD MMMM, dddd"
                ),
                startTime: this.registerForm.value.startTime,
                endTime: this.registerForm.value.endTime,
                description: this.registerForm.value.description,
              }
            : item;
        });
      this.localStorageTodo.addItem("todos", editItem);
      this.router.navigate([`/task/${this.ItemId}`]);
    }
  }
}
