import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser, UserAuthService} from '../../shared/services/user-auth-service/user-auth.service';
import {environment} from '../../../../environments';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

const GET_CURRENT_USER_URL = environment.apiUrl + '/current_user';

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

  constructor(private httpClient: HttpClient,
              private formBuilder: FormBuilder,
              private userAuthService: UserAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.userAuthService.isAuthorized()) {
      this.sendLogout();
    }
  }

  sendLogout(): void {
    this.userAuthService.clearUser();
    this.router.navigate(['']);
  }

  submitLogin(): void {
    this.getUserFromServer(); // todo fix to work with BE
    this.loginForm.patchValue({password: ''});
  }

  private getUserFromServer(): void {
    this.httpClient.get<IUser>(GET_CURRENT_USER_URL).subscribe((res) => {
      this.userAuthService.setUser(res);
      this.router.navigate(['']);
    });
  }
}
