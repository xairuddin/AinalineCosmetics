import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { httpInterceptorProviders } from './auth/auth-interceptor';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenDialogComponent } from './navbar/open-dialog/open-dialog.component';
import { SignupDialogComponent } from './navbar/signup-dialog/signup-dialog.component';
import { MainBlockComponent } from './main-block/main-block.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { BenefitsBlockComponent } from './benefits-block/benefits-block.component';
import { AboutBlockComponent } from './about-block/about-block.component';
import { ProductsBlockComponent } from './products-block/products-block.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    FooterComponent,
    NavbarComponent,
    OpenDialogComponent,
    SignupDialogComponent,
    MainBlockComponent,
    BenefitsBlockComponent,
    AboutBlockComponent,
    ProductsBlockComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatRadioModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
    ],
  providers: [httpInterceptorProviders,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
