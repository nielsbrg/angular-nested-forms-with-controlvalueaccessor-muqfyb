import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-billing-component',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css'],
})
export class BillingInfoComponent implements OnInit {
  public nestedForm: FormGroup = new FormGroup({
    basicInfo: new FormControl(''),
    address: new FormControl(''),
  });

  public formStatus$ = this.nestedForm.statusChanges.pipe(
    startWith(this.nestedForm.status)
  );

  public formErrors$ = this.nestedForm.valueChanges.pipe(
    startWith(this.nestedForm.value),
    map(() => this.nestedForm.errors)
  );

  constructor() {}

  ngOnInit() {}

  public onSubmit() {
    console.log('Val', this.nestedForm.value);
  }

  public onReset() {
    console.log('Val', this.nestedForm.value);
  }

  public setvalue() {
    this.nestedForm.get('basicInfo').patchValue({ fname: 'Nancy' });
  }
}
