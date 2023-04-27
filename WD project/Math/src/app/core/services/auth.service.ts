import {Injectable} from '@angular/core';
import {BASE_URL} from "../constants/urls";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  login(data: any) {
    this.httpClient.post(BASE_URL + 'auth/login', data).subscribe((response: any) => {
      localStorage.setItem('token', response.token)
      this.router.navigate([''])
    }, (error: any) => {
      alert("Произошла ошибка при логине попробуйте заново")
    })
  }

  register(data: any) {
    this.httpClient.post(BASE_URL + 'auth/register', data).subscribe((responce: any) => {
      this.router.navigate(['auth/login'])
    }, error => {
      alert("Произошла ошибка при регистрации попробуйте заново")
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['auth/login'])
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null
  }

  getUser() {
    return this.httpClient.get(BASE_URL + 'auth/user').subscribe((res: any) => {
      localStorage.setItem('role', res.role)
    }, error => {

    })
  }
}
