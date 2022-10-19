import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../../auth/signup-info';
import {AuthService} from '../../auth/auth.service';
import {MatDialogRef} from '@angular/material/dialog';
import {OpenDialogComponent} from '../open-dialog/open-dialog.component';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignupDialogComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(public dialogRef: MatDialogRef<OpenDialogComponent>, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
