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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatboxComponent,
    GoogleformComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
