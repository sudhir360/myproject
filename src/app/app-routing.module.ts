import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './abouts/abouts.component';
import { ContactComponent } from './contact/contact.component';
import { AddusersComponent } from './addusers/addusers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'addusers', pathMatch: 'full' },
  { path: 'addusers', component: AddusersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'abouts', component: AboutsComponent },

  { path: 'login', component: LoginComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
