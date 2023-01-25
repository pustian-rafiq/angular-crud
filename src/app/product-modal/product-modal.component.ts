import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent {
  freshness: string[] = ['Brand New', 'Second Hand', 'Fabrished Product'];
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      freshness: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  addProduct(): void {
    console.log(this.productForm.value);
  }
}
