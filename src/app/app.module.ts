import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';  
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './abouts/abouts.component';
import { ContactComponent } from './contact/contact.component';
import { AddusersComponent } from './addusers/addusers.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutsComponent,
    ContactComponent,
    AddusersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
