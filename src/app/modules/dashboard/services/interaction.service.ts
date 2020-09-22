import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ContactUsConfig} from '../model/contact-us'

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(private http: HttpClient) { }

private contactUsApiUrl= !window.location.origin.includes('localhost') ?   //window.location.origin ==m aizoom 
'https://aikefi-mw.herokuapp.com' 
:
"http://localhost:5000";



  postContactUsData(userData: ContactUsConfig) : Observable<any>{
return this.http.
post(this.contactUsApiUrl+'/contactus',userData);
  }

}
