import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string;
  messages: string[] = [];

  constructor(private chatService: ChatService) {
  }

  
  ngOnInit() {
   
  }

}
