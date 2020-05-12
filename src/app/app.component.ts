import { Component, OnInit } from '@angular/core';
import {Calculator} from './model/calculator.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AritchService} from './services/aritch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'fe-calculator';
  constructor( private fb: FormBuilder, private service: AritchService) {
  }

  calcModel: Calculator = new Calculator();
  hasil: number;
  formCalc: FormGroup;

  ngOnInit(): void {
    this.formCalc =this.fb.group(
      {
        vara: [0, Validators.required],
        varb: [0, Validators.required],
        action: ['', Validators.required],
      }
    );
  }

  async hitung() {
    this.calcModel.vara = this.formCalc.controls.vara.value;
    this.calcModel.varb = this.formCalc.controls.varb.value;
    this.calcModel.action = this.formCalc.controls.action.value;
    const response = await this.service.calc(this.calcModel).toPromise();
    if (response.responseCode === 20){
      this.hasil = response.data.result;
    }
  }



}


