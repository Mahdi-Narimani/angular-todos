import { Component } from "@angular/core";
import { FooterComponent } from "../../layout/footer/footer.component";
import { TaskItemComponent } from "../../tasks/task-item/task-item.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideMomentDateAdapter } from "@angular/material-moment-adapter";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";

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
  ],
  providers: [provideMomentDateAdapter(MY_FORMATS)],
  templateUrl: "./addEditTodo.page.html",
})
export class AddEditTodoPage {
  date = new FormControl(moment());
}
