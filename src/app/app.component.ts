
import { Component, OnInit, ViewChild,} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MysreviceService } from '../app/service/mysrevice.service';
import {Router} from "@angular/router";
import { from } from 'rxjs';
declare var $: any;
declare var swal;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'app';
  profile:any;
  User_Privilages:any=[];
  constructor(private ApiService: MysreviceService,private formBuilder: FormBuilder,private router: Router) {
      
  }
  ngOnInit() {
    if(localStorage.getItem('username')==null && JSON.parse(localStorage.getItem('privilages'))==null){
      this.router.navigate(['/login'])
  }
  else{
    // if(JSON.parse(localStorage.getItem('privilages'))==null){
    //   this.User_Privilages=[];
    // }
    this.User_Privilages = JSON.parse(localStorage.getItem('privilages'));
    
    console.log(this.User_Privilages);
    this.profile=localStorage.getItem('user_profile');
      this.router.navigate(['/addusers']);
    
  }
    // this.ApiService.currentMessage.subscribe(profile => this.profile = profile);
    
    
}


onLogout(){
  localStorage.clear();
  this.router.navigate(['/login'])
}

goToAdminProfile(){
  this.router.navigate(['/admin_profile'])
}
}


