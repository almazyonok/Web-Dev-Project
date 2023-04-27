import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string = ""
  password: string = ""
  name: string = ""
  selectedRole: string = "";

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    let data = {
      username: this.username,
      password: this.password,
      name: this.name,
      role: this.selectedRole
    }
    this.authService.register(data)
  }

  goToLogin() {
    this.router.navigate(['auth/login'])
  }
}
