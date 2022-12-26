import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


   apiURL=!window.location.origin.includes('localhost') ?
   'https://bbtracker.onrender.com/'
   :
   'http://localhost:5000/';;
   postOtpurl='postotp';
   postMoburl='postmob';
   startOrderurl='startOrder';

  constructor(private http: HttpClient) { }



  postOTP(data){
    return this.http.post(this.apiURL+this.postOtpurl, data)
  }

  postmob(data){
    return this.http.post(this.apiURL+this.postMoburl, data)
  }

  startOrder(){
    return this.http.get(this.apiURL+this.startOrderurl)
  }
}
