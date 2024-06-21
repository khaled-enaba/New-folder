import {Component, OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatHint, MatPrefix} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {AsyncPipe} from '@angular/common';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

 @Component({ 
  selector: 'app-signup',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatHint,
    MatNativeDateModule,
    MatPrefix ,
    MatDatepickerModule,
    AsyncPipe,
     MatRadioModule,
     MatGridListModule,
     NgxMatIntlTelInputComponent,
     HttpClientModule,
  
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [ ]);
  firstFormGroup: FormGroup;

  errorMessage = '';
  data:any;
 

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;


  constructor(private _formBuilder: FormBuilder,private http: HttpClient,private router: Router) {
    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
  }
  ngOnInit(): void {
     
 this. firstFormGroup = this._formBuilder.group({
    username: ['', ],
    email: ['', [  ]],
    Password: ['', [  ]],

  });
    throw new Error('Method not implemented.');
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
  
  onNext(){
    debugger;
    this.data=this.firstFormGroup.value;

  }
 onSubmit() {
  debugger;
 
  this.router.navigate(['/Home']); // Navigate to '/home' route

  // Add other fields as needed

  this.http.post('localhost:8000/api/v1/auth', this.data).subscribe((response) => {

    console.log('API response:', response);

  });
 
  }
 
  hide = true;
}