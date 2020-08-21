import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string;
  messages: string[] = [];

  constructor(private chatService: ChatService,
    private route: Router
    ) {
  }

  
  ngOnInit() {
   
  }

  routetogoogleForm(){
    this.route.navigate(['form'])

  }

}
