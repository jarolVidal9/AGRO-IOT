import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl + '/auth';
  constructor(
    private http: HttpClient
  ) { }
  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        return response;
      })
    )
  }
  register(name: string, email: string, password: string) {
    return this.http.post(this.apiUrl + '/register', { name, email, password });
  }
  logout() {
    localStorage.removeItem('token');
  }
}
