import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  message: string;
  messages = [];
  ip

  constructor(
    private chatService: ChatService,
    private date : DatePipe,

    ) {
  }

  ask() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  ngOnInit() {
    this.chatService.getIP().subscribe((res: any)=>{
      this.ip= res.ip;
      console.log(res)
    })



    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        // console.log(message)
let data={
  time : this.date.transform(new Date(), 'shortTime'),
  user : 'student',
  ip: this.ip,
  message: message

}

        this.messages.push(data);
      });
  }
  

}
