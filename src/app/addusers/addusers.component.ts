

import { Component, OnInit, ViewChild,} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MysreviceService } from '../service/mysrevice.service';
import {Router} from "@angular/router";
declare var $: any;
declare var swal;
// declare var jQuery;
@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {
  // @ViewChild('dataTable') table;
  // dataTable: any;
  name='sudhir';
  Addusers: FormGroup;
  
  submitted = false;
  selecteduserdetails:any[]=[];
  userdetails:any=[];
  IsAdd = true;
 
  

constructor( private ApiService: MysreviceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.DataTable();
    if(localStorage.getItem('username')==null){
      this.router.navigate(['/login'])
    }
    this.Addusers = this.formBuilder.group({
      user_id: [''],
      name: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(5)]],
      username: ['',[Validators.required,Validators.email]],
      Password: ['', Validators.required]
  });


 


    // this.executeJquery(); 
    // this.getselecteduserdetails();
    this.getuserdetails();

  }

  // getselecteduserdetails(){
    
  //   let getCategoryDetailsurl:any = "getselecteduser.php";
   
  //   this.ApiService.GetData(getCategoryDetailsurl).subscribe(response => {
  //     console.log("res");
  //     console.log(response);
  //     if(response.success=='true'){
  //       this.selecteduserdetails=response.selecteduserdetails;
  //       console.log("res");
  //             console.log(this.selecteduserdetails);
  //     }
  //     else{
        
  //     }

 
  //   },
  //   error=>{
  //     console.log(error);
  //   })
  // }
  // getuserdetails(){
    
  //   let getCategoryDetailsurl:any = "getusers.php";
   
  //   this.ApiService.GetData(getCategoryDetailsurl).subscribe(response => {
  //     console.log("res");
  //     console.log(response);
  //     var table = $('#productlist-datatables').DataTable();
  //     table.destroy();
  //     if(response.success=='true'){
  //       this.userdetails=response.userdetails;
  //       console.log("res");
  //             console.log(this.userdetails);
  //     }
  //     else{
  //       this.IsAdd = true;
  //       this.userdetails=[];
  //     }

 
  //   },
  //   error=>{
  //     console.log(error);
  //   })
  // }
  getuserdetails() {
    let getCategoryDetailsurl: any = "getusers.php";
    this.ApiService.GetData(getCategoryDetailsurl).subscribe(response => {
      console.log("res");
      console.log(response);
      var table = $('#datatable').DataTable();
      table.destroy();
      if (response.success == 'true') {
        this.userdetails = response.userdetails;
        setTimeout(function () {
          $('#datatable').dataTable({
            "oLanguage": {
                // "sSearch": "",
                // "order": [[ 0, "desc" ]],
                // "sLengthMenu": "<span>_MENU_</span>"
            },
            "sDom": "<'row'<'col-md-6 col-xs-12 'l><'col-md-6 col-xs-12'f>r>t<'row'<'col-md-4 col-xs-12'i><'col-md-8 col-xs-12'p>>"
          });
        },1000);
      }
      else {
      }
    },
      (error: any) => {
        console.log(error);
      })
  }
  



  saveusers() {
    
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.Addusers.invalid) {
        return;
    }
    console.log(this.Addusers.value);
    
    let saveSubCategoryurl:any = "addusers.php";
    
    this.ApiService.PostData(saveSubCategoryurl ,this.Addusers.value).subscribe(response => {
      console.log("res");
      if(response.success=='true'){
        console.log(response);
        this.Addusers.reset();
        swal("Subcategory added successfully!", "", "success");
        this.getuserdetails();
        
        this.Addusers.setValue({user_id: '',name:'', username: '', Password: ''});
        this.Addusers.markAsUntouched();
      
        
      }
      else{
       
      }
     
    },
    error=>{
      console.log(error);
    })
  }
  edituser(user){
    console.log(user);
    this.IsAdd = false;
    this.Addusers.patchValue(user);
   
  }
  updateusers(){
   
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.Addusers.invalid) {
        return;
    }
    console.log(this.Addusers.value);
    
    let updateusersurl:any = "updateusers.php";
    
    
    this.ApiService.PostData(updateusersurl ,this.Addusers.value).subscribe(response => {
      console.log("res");
      if(response.success=='true'){
        swal("Subcategory updated successfully!", "", "success");
        this.Addusers.setValue({user_id: '',name:'', username: '', Password: ''});  this.Addusers.markAsUntouched();
        console.log(response);
        
      
        this. getuserdetails();
     
       
      
      }
      else{
       
      }
      this.IsAdd = true;
    },
    error=>{
      console.log(error);
    })
  }

  deleteuser(user){
    

    
    let deleteSubCategoryurl:any = "delete_user.php";
 
    this.ApiService.DeleteData(deleteSubCategoryurl,user).subscribe(response => {
      console.log("res");
      console.log(response);
      if(response.success=='true'){
       
        console.log("res");
        console.log(response);
        swal("deleted successfully!", "", "success");
        this.getuserdetails();
      }
      else{
        
      }

 
    },
    error=>{
      console.log(error);
    })
  }
  // hii(){
  //   swal({
     
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //     type: 'success'
  //   });
  // }
  // executeJquery() {
  //   setTimeout(function () {
  //     $('#userlist-datatables').dataTable({
  //       "oLanguage": {
  //           "sSearch": "",
  //           "sLengthMenu": "<span>_MENU_</span>"
  //       },
  //       "sDom": "<'row'<'col-md-6 col-xs-12 'l><'col-md-6 col-xs-12'f>r>t<'row'<'col-md-4 col-xs-12'i><'col-md-8 col-xs-12'p>>"
  //     });
  //   },2000);
  //   $('.selectpicker').selectpicker('refresh');
  // }
}
 