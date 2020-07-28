import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'way2learn';

  firstName="rahul"
  birthday = new Date(1988, 3, 15); 

  name: string = 'rahul';

  setValue() {
    this.name = 'Nancy';
  }

}
