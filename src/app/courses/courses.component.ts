import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,
    RouterLink,RouterModule,MatOptionModule,FormsModule ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit  {
 
  rating = ``;
  Courses:any;



    constructor(private CourseServiceService:CourseServiceService) {
        }

  ngOnInit(): void {
    this.CourseServiceService.getCourses().subscribe(res=>{
      this.Courses=res;
      console.log(res)
    })
  }
}
