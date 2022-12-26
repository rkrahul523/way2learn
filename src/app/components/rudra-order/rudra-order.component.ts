import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rudra-order',
  templateUrl: './rudra-order.component.html',
  styleUrls: ['./rudra-order.component.scss']
})
export class RudraOrderComponent implements OnInit {

  registerForm: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder) { }
 

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      mob: ['', ],
      otp: ['', ],

  });
  }


  get f() { return this.registerForm.controls; }

  SubmitMob(){

  }

  SubmitOtp(){
    
  }

  onReset(){
 this.registerForm.reset()
  }

}
