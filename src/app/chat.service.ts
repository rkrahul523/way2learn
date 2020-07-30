import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // private url = 'http://localhost:5000';
  private url = 'https://bbtraker.herokuapp.com';
  private socket;    

  constructor() {
      this.socket = io(this.url);
  }
  public sendMessage(message) {
    this.socket.emit('new-message', message);
}

public getMessages = () => {
  return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
          observer.next(message);
      });
  });
}

}
