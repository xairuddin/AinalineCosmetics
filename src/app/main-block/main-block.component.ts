import { Component, OnInit } from '@angular/core';
import {OpenDialogComponent} from '../navbar/open-dialog/open-dialog.component';
import {SignupDialogComponent} from '../navbar/signup-dialog/signup-dialog.component';
import {TokenStorageService} from '../auth/token-storage.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})
export class MainBlockComponent implements OnInit {

  roles: string[];
  authority: string;
  info: any;
  constructor(private tokenStorage: TokenStorageService, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
    this.roles = this.tokenStorage.getAuthorities();
    this.roles.every(role => {
      if (role === 'ROLE_ADMIN') {
        this.authority = 'admin';
        return false;
      }
      this.authority = 'user';
      return true;
    });
  }
    this.info = {
      username: this.tokenStorage.getUsername()
    };
  }
  openDialog(): void {
    this.dialog.open(OpenDialogComponent, {
      width: '300px'
    });
  }
  openSignupDialog(): void {
    this.dialog.open(SignupDialogComponent, {
      width: '300px'
    });
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
