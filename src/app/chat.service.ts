import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = !window.location.origin.includes('localhost') ?
  'https://bbtraker.herokuapp.com'
  :
  'http://localhost:5000';
  // private url = ;
  private socket;    

   httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  constructor(private http: HttpClient) {
    
      this.socket = io(this.url);
      setTimeout(() => {
        this.socket.on('waychat', (message) => {
          console.log(message);
          // io.emit(message);
        });
      }, 5000);
  }
  public sendMessage(message) {
    this.socket.emit('waychat', message);
}

public getMessages = () => {
  return Observable.create((observer) => {
    this.socket.on('waychat', (message) => {
      observer.next(message);
    });
  });
}

getIP(){
  return this.http.get('http://api.ipify.org/?format=json')
}

}
