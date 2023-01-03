import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GoogleformComponent } from './googleform/googleform.component';
import { LaunchComponent } from './launch/launch.component';
import {AgGridModule} from 'ag-grid-angular';
import { MainLaunchComponent} from './modules/dashboard/components/launch/main-launch.component'
import { HeaderComponent} from './modules/dashboard/components/header/header.component'
import { FooterComponent} from './modules/dashboard/components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StaticsComponent } from './components/statics/statics.component';
import { BillHomeComponent } from './components/bill-home/bill-home.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RudraOrderComponent } from './components/rudra-order/rudra-order.component'

import { AgGridExampleComponent } from 'src/app/modules/feature/components/ag-grid-example/ag-grid-example.component';
//import { AgGridCheckboxComponent } from 'src/app/modules/feature/components/ag-grid-checkbox/ag-grid-checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatboxComponent,
    GoogleformComponent,
    LaunchComponent,
    MainLaunchComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StaticsComponent,
    BillHomeComponent,
    UserFormComponent,
    RudraOrderComponent,
    AgGridExampleComponent,
   // AgGridCheckboxComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    AgGridModule.withComponents([/*optional Angular Components to be used in the grid*/])

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
