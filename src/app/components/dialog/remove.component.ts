import { Component, inject, Inject } from "@angular/core";
import
{
    MatDialog,
    MatDialogRef,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalStorageService } from "../../services/local-storage.service";
import { Router } from "@angular/router";

@Component({
    selector: 'remove-dialog',
    templateUrl: 'remove.component.html',
    standalone: true,
    imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
})
export class RemoveDialog
{
    public data = inject(MAT_DIALOG_DATA);
    public dialogRef = inject(MatDialogRef<RemoveDialog>)
    private localStorageTodo = inject(LocalStorageService);
    private router = inject(Router)

    handleRemoveItem()
    {
        const newTodos = this.localStorageTodo
            .getItems('todos')
            .filter((item: any) => item.id !== this.data.Id);

        this.localStorageTodo.addItem('todos', newTodos);

        this.router.navigate(['/']);

    }
}