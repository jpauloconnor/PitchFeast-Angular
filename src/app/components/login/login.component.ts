import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public _headers = new HttpHeaders();
  private _loginForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this._loginForm = this._form.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit(form) {
    this._authService.login(form.value);
  }
}
