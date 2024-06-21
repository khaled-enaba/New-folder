import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseServiceService } from '../course-service.service';
import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatHint, MatPrefix } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { Router } from 'express';


@Component({
  selector: 'app-create-course',
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
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {
  data:any;

  constructor( private http: HttpClient ,private CourseServiceService:CourseServiceService) {}


  
  courseForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    // Add more controls as needed
  });

  // constructor(private courseService: CourseService) {}

  // onSubmit() {
  //   this.courseService.createCourse(this.courseForm.value).subscribe(
  //     response => {
  //       // Handle response
  //     },
  //     error => {
  //       // Handle error
  //     }
  //   );
  // }\
  onSubmit(){
    debugger;
    this.data=this.courseForm.value;
    this.CourseServiceService.createCourse(this.data).subscribe(res=>{
      console.log(res)
    })
   
    console.log('this .form ',this.courseForm)
  }
}
