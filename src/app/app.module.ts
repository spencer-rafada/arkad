import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';

const appRoutes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
