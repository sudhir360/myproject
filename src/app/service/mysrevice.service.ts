
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject  } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import { Http, Response,RequestOptions,Headers, ResponseType} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MysreviceService {



  
    // BaseUrl:string ="https://m3sportsadmin.obstin.in/m3php/";
    BaseUrl:string ="http://localhost/m3php/";
    // GetMakeUrl: string = 'add_category.php';
    // FileIploadUrl: string = 'uploadfile.php';
    cars: any;
  
    public ProductDetails: any = {}; 
  
    



  constructor(private httpClient: HttpClient,private http:Http) { }

  
  PostData(dataurl: any, InsuranceData: any): Observable<any> {
    // , {responseType: "text"}
    console.log(InsuranceData);
    return this.httpClient.post(this.BaseUrl+dataurl, InsuranceData);
  }
  GetDataWithParam(dataurl: any, Data: any): Observable<any> {
    // , {responseType: "text"}
    console.log(dataurl);
    console.log(Data);
    return this.httpClient.post(this.BaseUrl+dataurl, Data);
  }
  GetData(dataurl: any): Observable<any> {
    return this.httpClient.get(this.BaseUrl+dataurl);
  }
  DeleteData(dataurl: any,Data: any): Observable<any> {
    return this.httpClient.post(this.BaseUrl+dataurl, Data);
  }
}