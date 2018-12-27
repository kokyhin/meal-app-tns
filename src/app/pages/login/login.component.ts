import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { alert } from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: RouterExtensions
  ) { }
  public ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    this.authService.signin(this.loginForm.value).subscribe(
      (res: any) => {
        this.authService.token = res.token;
        this.router.navigate(['/order'], { clearHistory: true });
      },
      err => {
        alert({
          title: 'Auth Error',
          message: err.error.message,
          okButtonText: "OK"
        });
      }
    )
  }
}
