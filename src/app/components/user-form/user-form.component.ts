import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder) { }
 

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      area:['Religarha', ],
      identifier: [''],
      
      billType: ['CREDIT', ],

      amount:[0, Validators.required]

  });
  }


  get f() { return this.registerForm.controls; }


  
  onReset() {
    // this.submitted = false;
    const defavalu= { "firstName": "", "lastName": "", "area": "Religarha", "identifier": "", "billType": "CREDIT", amount: 0 };

    this.registerForm.reset(defavalu);
    // this.registerForm.patchValue( c)
}

submitForm(){
  alert(JSON.stringify(this.registerForm.value))
}

}
