import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
// import {AuthenticationService} from "../service/auth.service";

const EMAIL = "admin@mail.com";
const PASSWORD = "123qwe";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private client: HttpClient,
     private fb: FormBuilder,
     private router: Router
    ) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.email
      ])],
      password: ['']
    })
  }

  onSubmit(): void {

    const controls = this.loginForm.controls;
    let emailAddress = controls['email'].value;
    let password = controls['password'].value;

    if (emailAddress == EMAIL && password == PASSWORD) {
        this.router.navigateByUrl("list-event");
    }else{
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Invalid credentials',
      })
    }

    //this.client.post()
  }

}
