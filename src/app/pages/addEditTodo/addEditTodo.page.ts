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
import { Router } from "@angular/router";

const moment = _rollupMoment || _moment;

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
  private router = inject(Router);

  selectArrayTime = SelectBoxTime;
  registerForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    dateTime: new FormControl("", [Validators.required]),
    startTime: new FormControl("", [Validators.required]),
    endTime: new FormControl("", [Validators.required]),
    description: new FormControl(""),
  });

  handleSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const todoData = {
      title: this.registerForm.value.title,
      dateTime: moment(this.registerForm.value.dateTime).format(
        "DD MMMM, dddd"
      ),
      startTime: this.registerForm.value.startTime,
      endTime: this.registerForm.value.endTime,
      description: this.registerForm.value.description,
    };

    this.router.navigate(["/"], { state: { data: todoData } });
  }
}
