import {Injectable} from '@angular/core';

const STORAGE_TOKEN_NAME = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthService {
  private token: string;

  constructor() {
    this.token = localStorage.getItem(STORAGE_TOKEN_NAME) || '';
  }

  setToken(token: string): void {
    if (token) {
      this.token = token;
      localStorage.setItem(STORAGE_TOKEN_NAME, token);
    }
  }

  getToken(): string {
    return this.token;
  }

  removeToken(): void {
    this.token = '';
    localStorage.removeItem(STORAGE_TOKEN_NAME);
  }
}
