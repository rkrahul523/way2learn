import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
   startOrderurl='startOrder'//'startOrder';
   getImageURL='image';
   getallorder= 'getallRecords'
   someError= 'someError'

   currentTask= new BehaviorSubject(null)

  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) { }


  postOTP(data){
    return this.http.post(this.apiURL+this.postOtpurl, data)
  }

  postmob(data){
    return this.http.post(this.apiURL+this.postMoburl, data)
  }

  startOrder(mob){
   this.currentTask.next(mob)
    return this.http.post(this.apiURL+this.startOrderurl, {mob})
  }
  getRecords(){
    return this.http.get(this.apiURL+this.getallorder)
  }
  public getImage(url: string=null): Observable<SafeResourceUrl> {
    return this.http
      .get(this.apiURL+this.getImageURL, { responseType: 'blob' })
      .pipe(
        map(x => {
          const urlToBlob = window.URL.createObjectURL(x) // get a URL for the blob
          return this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob); // tell Anuglar to trust this value
        }),
      );
  }

  saveError(mob){
    return this.http.get(this.apiURL+this.someError, {params: {mob}})
  }
}
