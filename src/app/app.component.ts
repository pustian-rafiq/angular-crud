import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from './product-modal/product-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-crud';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ProductModalComponent);
  }
}
