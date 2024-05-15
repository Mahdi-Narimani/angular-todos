import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage.service";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { RemoveDialog } from "../../components/dialog/remove.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  standalone: true,
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  imports: [MatCardModule, RouterLink, MatButtonModule, RemoveDialog],
})
export class TaskDetailPage implements OnInit
{
  todoItem: any;

  private route = inject(ActivatedRoute);
  private localStorageTodo = inject(LocalStorageService);
  private openDialog = inject(MatDialog);

  ngOnInit(): void
  {
    this.route.params.subscribe((params) =>
    {
      this.todoItem = this.localStorageTodo.getItemById(params['id']);
    });
  }

  handleRemoveItem(id: string)
  {  
    this.openDialog.open(RemoveDialog, {
      data: { Id: id }
    })
  }
}
