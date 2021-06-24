import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HomepageComponent } from './homepage/homepage.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: 'userlogin', component: LoginComponent },
  { path: 'home', component: AppComponent },
  { path: 'Homepage',canActivate:[AuthGuard], component: HomepageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'List', canActivate:[AuthGuard],component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
