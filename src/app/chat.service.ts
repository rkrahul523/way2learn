import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // private url = 'http://localhost:5000';
  private url = 'https://bbtraker.herokuapp.com';
  private socket;    

   httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  constructor() {
    
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

}
