import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ApiService} from 'src/app/services/api.service'
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-rudra-order',
  templateUrl: './rudra-order.component.html',
  styleUrls: ['./rudra-order.component.scss']
})
export class RudraOrderComponent implements OnInit {

  registerForm: FormGroup;
  submitted = true;
  messagefromBACKEND=null;
  url:SafeResourceUrl;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }
 

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      mob: ['', ],
      otp: ['', ],

  });
  }


  get f() { return this.registerForm.controls; }

  SubmitMob(){
    this.api.postmob(this.registerForm.value).subscribe((res:any)=>{
      if(res && res.status== 'success'){
        this.api.startOrder().subscribe(res=>{
          console.log(res)
          this.messagefromBACKEND= res;
        })
      }
      console.log(res)
    })
  }

  SubmitOtp(){
    this.api.postOTP(this.registerForm.value).subscribe((res:any)=>{
      if(res && res.status== 'success')
      console.log(res)
    })
  }

  onReset(){
 this.registerForm.reset()
  }

  getImage(){
    this.api.getImage('URL').subscribe(x => this.url = x)
  }

}
