import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateHelper } from '../_helpers';
import { AlertService } from '@app/_services';
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService
) { }

ngOnInit() {
  this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  //console.log("object:: "+DateHelper.stringify(this.form));
}

// convenience getter for easy access to form fields
get f() { return this.form.controls; }

onSubmit() {
  this.submitted = true;
  // reset alerts on submit
  //this.alertService.clear();
  this.alertService.error("error");

  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }

  this.loading = true;
  
}
}
