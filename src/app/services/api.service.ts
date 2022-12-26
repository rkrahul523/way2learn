import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
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
   startOrderurl='startOrder';
   getImageURL='image'

  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) { }



  postOTP(data){
    return this.http.post(this.apiURL+this.postOtpurl, data)
  }

  postmob(data){
    return this.http.post(this.apiURL+this.postMoburl, data)
  }

  startOrder(){
    return this.http.get(this.apiURL+this.startOrderurl)
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
}
