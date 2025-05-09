import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, Form } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  userForm: FormGroup;
  users: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      lastname: ['', [Validators.required, Validators.maxLength(100)]],
      telephone: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
      console.log(this.users);
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}
