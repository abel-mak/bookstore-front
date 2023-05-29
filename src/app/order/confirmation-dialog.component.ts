import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'confirmation-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, FlexLayoutModule],
    template: `
    <h1 mat-dialog-title>
      Are you sure you want to cancel?
    </h1>
    <div mat-dialog-actions fxLayout="row" fxLayoutAlign="space-around center">
      <button mat-raised-button color="warn" [mat-dialog-close]="true">Yes</button>
      <button mat-raised-button color="basic" [mat-dialog-close]="false">No</button>
    </div>`
})
export class ConfirmationDialogComponent {
}