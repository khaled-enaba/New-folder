import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OverviewComponent } from './overview/overview.component';
import { RoomComponent } from './room/room.component';
import { UserComponent } from './user/user.component';
import { CreateCourseComponent } from './create-course/create-course.component';

export const routes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'Courses',component:CoursesComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'overview',component:OverviewComponent},
    {path:'room',component:RoomComponent},
    {path:'lobby',component:OverviewComponent},
    {path:'profile',component:UserComponent},
    {path:'Courses/Create',component:CreateCourseComponent},

    {path:' ',redirectTo:'Home',pathMatch:'full'},
    {path: '**',redirectTo: 'Home'  }
    
];
