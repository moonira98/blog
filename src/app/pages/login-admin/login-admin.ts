import { Component, inject, signal } from '@angular/core';
import { Cards } from '../../services/cards';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './login-admin.html',
  styleUrl: './login-admin.scss',
})
export class LoginAdmin {
    cardsService = inject(Cards)
    fb = inject(FormBuilder)
    isModal = signal<boolean>(false)
    signupForm!: FormGroup
    loginForm!: FormGroup
    router = inject(Router)


    constructor() {
      this.signupForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: [null, Validators.required]
      })

      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: [null, Validators.required]
      })
    }

    changeModal() {
      this.isModal.set(!this.isModal())
    }

    signup() {
      console.log(this.signupForm.value)
      this.cardsService.createUser(this.signupForm.value).subscribe((res: any) => {
        alert('successfully signuped')
      })
      this.signupForm.reset()
    }

    login() {
      this.cardsService.getUsers().subscribe((res => {
        const user = res.find((a: any) => {
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        })
        if(user) {
          this.router.navigate(['/adminPanel'])
        } else  {
          alert('error')
        }
        this.loginForm.reset()

      }))
    }
}
