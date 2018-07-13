import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCommonModule, MatDatepickerModule, MatDividerModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { AuthGuard } from "./shared/auth.guard";
import { Page404Component } from './shared/page404/page404.component';
import { HomeComponent } from './shared/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileEditComponent } from './pages/profileEdit/profile-edit.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { CasePipe } from './shared/pipes/case.pipe';
import { AddressFormComponent } from './shared/forms/address-form/address-form.component';
import { SignoutComponent } from './pages/signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    Page404Component,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ProfileEditComponent,
    DirectoryComponent,
    CasePipe,
    AddressFormComponent,
    SignoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCommonModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    AuthGuard,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
