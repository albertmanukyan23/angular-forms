import { Component } from '@angular/core';
import {FormControl, NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';

  onSubmit(f: NgForm) {
    console.log(f);
  }


  getValue(fullName: NgModel) {
    console.log(fullName);
  }
}
