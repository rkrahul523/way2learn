import { Component, OnInit } from '@angular/core';
import { NgbDateStruct , NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'way2learn';

  firstName="rahul"
  birthday = new Date(1988, 3, 15); 

  model: NgbDateStruct;
  date: {year: number, month: number};

  name: string = 'rahul';

constructor(
  public calendar: NgbCalendar
){

}

ngOnInit(){
  this.model = this.calendar.getToday();
 

  console.log(this.calendar.getNext(this.calendar.getToday(), 'y'))
}


  setValue() {
    this.name = 'Nancy';
  }

}
