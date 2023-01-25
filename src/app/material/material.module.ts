import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponentModule = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
];
@NgModule({
  imports: [MaterialComponentModule],
  exports: [MaterialComponentModule],
})
export class MaterialModule {}
