import { Routes } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";

export const routes: Routes = [
  { path: '', component: HeaderComponent }, // header page route
  { path: 'login', component: LoginComponent }, // login page route
  // Add more routes as needed
];
