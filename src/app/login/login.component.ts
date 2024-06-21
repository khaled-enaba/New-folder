import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatHint, MatPrefix} from '@angular/material/form-field';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink , RouterLinkActive} from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatHint,
    MatNativeDateModule,
    MatPrefix ,
    MatDatepickerModule,
     MatRadioModule,
     MatGridListModule,
     NgxMatIntlTelInputComponent,
     RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  userId:number = 0;
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [ ]);

  errorMessage = '';
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
 
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private dataService: DataService) {
    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
  hide = true;

  ngOnInit() {
    const username = 'your-username';
    const password = 'your-password';

    this.dataService.getUserId(username, password).subscribe(
      (id) => (this.userId = id),
      (error) => console.error('Error fetching data:', error)
    );
  }

}
