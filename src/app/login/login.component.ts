import { Component, OnInit,} from '@angular/core';
import {Router} from "@angular/router";
// import{AdminprofileComponent} from './adminprofile/adminprofile.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MysreviceService } from '../service/mysrevice.service';
declare var $;
declare var swal;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MysreviceService]
})
export class LoginComponent implements OnInit {

    LoginForm: FormGroup;
    submitted = false;
    UserDetails:any=[];
    privilagesdetails:any=[];
    constructor(private ApiService: MysreviceService,private formBuilder: FormBuilder,private router: Router) {}
  
    ngOnInit() {
      $(".content-wrapper").css("margin-left","0px");
      $(".content-wrapper").css("padding-top","80px");
      $(".myheader").css("display","none");
      $(".side-menu-fixed").css("display","none");
      
      this.LoginForm = this.formBuilder.group({
        user_email: ['', Validators.required],
        user_password: ['', Validators.required], 
      });
    
    
      if(localStorage.getItem('username')==null){
        this.router.navigate(['/login'])
      }
      else{
      
        this.router.navigate(['/addusers'])
      }
    }
    get f() { return this.LoginForm.controls; }  
    onLogin(){
      this.submitted = true;
    
      // stop here if form is invalid
      if (this.LoginForm.invalid) {
          return;
      }
      
      
 
  let onLoginurl:any = "admin_signin.php";
  let data = {
    user_email: this.LoginForm.value.user_email,
    user_password:this.LoginForm.value.user_password
   }
   this.ApiService.GetDataWithParam(onLoginurl,data).subscribe(response => {
    console.log(response);
    if(response.success==true){
    
      this.UserDetails=response.userdata;
           
              localStorage.setItem('username',response.userdata[0].user_email);
              localStorage.setItem('user_id',response.userdata[0].id);
              localStorage.setItem('user_profile',response.userdata[0].user_profile);
            
              this.getPrivileges();
              swal(response.message, "", "success");                      
    }
    else{  
      this.UserDetails=[];
      swal(response.message, "", "error");
    }
  },
  error=>{
    console.log(error);
  })
  
  

}

getPrivileges(){
  
  let getAllprivilagessurl: any = "get_allprivilages.php";
              var data={
                User_Email:this.LoginForm.value.user_email
              }
                this.ApiService.GetDataWithParam(getAllprivilagessurl,data).subscribe(response => {
                 
                  console.log(response);
                  if (response.success == true) {
                    this.privilagesdetails = response.privilagesdetails;
                    var arra = [];
                                      for (var i = 0; i < response.privilagesdetails.length; i++) {
                                          arra[i] = this.privilagesdetails[i].privilage_form;
                                      }
                    console.log(arra);
                    localStorage.setItem('privilages', JSON.stringify(arra));
                    console.log(JSON.parse(localStorage.getItem('privilages')));
                    // setTimeout(function () {
                      // this.router.navigate(['/dashboard']);
                      location.reload(); 
                  //  }, 2000);
                   
                  }
                  else {
                    this.privilagesdetails = [];
                  }


                },
                  error => {
                    console.log(error);
                  })
}
onForgotPassword(){
  this.router.navigate(['/forget_password']);
}
error(error){
  console.log(error);
}
}
