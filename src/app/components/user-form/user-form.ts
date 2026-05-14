import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.sass',
})
export class UserForm {

  @Output() close = new EventEmitter<void>();

  @Output() userAdded = new EventEmitter<any>();

  userForm: FormGroup;

  roles = [
    'Admin',
    'Editor',
    'Viewer'
  ];

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      role: ['', Validators.required]
    });

  }

  submit() {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.userAdded.emit(this.userForm.value);

  }

  closeModal() {
    this.close.emit();
  }

}