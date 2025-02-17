import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  userName: string = "";
  
  formdata: FormGroup = new FormGroup({
    username: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("")
  });

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  onClickSubmit(data: { username: string, email: string, password: string, confirmPassword: string }) {
    this.userName = data.username;
    console.log('Form submitted with:', data);
  }

  onSubmit() {
    if (this.formdata.valid) {
      this.onClickSubmit(this.formdata.value);
      console.log('Registration Form Submitted', this.formdata.value);
    } else {
      console.log('Registration Form Not Valid');
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Form Submitted', this.loginForm.value);
    } else {
      console.log('Login Form Not Valid');
    }
  }
}
