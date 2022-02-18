import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
