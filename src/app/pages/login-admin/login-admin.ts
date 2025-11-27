import { Component, inject } from '@angular/core';
import { Cards } from '../../services/cards';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './login-admin.html',
  styleUrl: './login-admin.scss',
})
export class LoginAdmin {
    cardsService = inject(Cards)
    fb = inject(FormBuilder)
    signupForm!: FormGroup

    constructor() {
      this.signupForm = this.fb.group({
        username: ['', Validators.required],
        emaii: ['', Validators.required],
        password: [null, Validators.required]
      })
    }

    signup() {
      console.log(this.signupForm.value)
      this.cardsService.createUser(this.signupForm.value).subscribe((res: any) => {
        alert('successfully signuped')
      })
    }

}
