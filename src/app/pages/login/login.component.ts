import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { alert } from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from './../../services/auth.service';
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private store = appSettings;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: RouterExtensions,
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
        this.store.setString('token', res.token);
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
