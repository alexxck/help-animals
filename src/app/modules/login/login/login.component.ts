import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAuthService} from '../../shared/services/user-auth-service/user-auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [false]
  });

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService
  ) {
  }

  ngOnInit(): void {
    if (this.userAuthService.isAuthorized()) {
      this.sendLogout();
    }
  }

  sendLogout(): void {
    this.userAuthService.logout();
  }

  submitLogin(): void {
    this.userAuthService.login(this.loginForm.value.login, this.loginForm.value.password);
    this.loginForm.patchValue({password: ''});
  }
}
