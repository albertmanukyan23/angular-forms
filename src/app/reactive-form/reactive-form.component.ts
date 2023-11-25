import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form:any;

  constructor( fb : FormBuilder) {
    this.form = new FormGroup({
      fullName : new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ]),
      address : new FormControl('', Validators.required),
      skills : new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  addSkills(skill: HTMLInputElement) {
    (this.form.get('skills') as FormArray).push(new FormControl(skill.value));
  }
  get Skills(){
    return this.form.get('skills') as FormArray;
  }

  removeSkills(i: number) {
    this.Skills.removeAt(i);
  }
}
